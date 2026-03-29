const GAME_DURATION = 60;
let mode = 'en-to-it'; // 'en-to-it' or 'it-to-en'
let selectedLang = 'it';
let selectedLevel = 'a1'; // 'a1' | 'a2' | 'b1' — only applies to Italian
let selectedCategory = 'all'; // 'all' | 'vocab' | 'verbs'
const LANGUAGES = {
  it: { name: 'Italian', levels: italianLevels, recogLang: 'it-IT', flag: '🇮🇹' },
  fr: { name: 'French',  levels: frenchLevels, recogLang: 'fr-FR', flag: '🇫🇷' },
};

// ── Audio ──
// ── Text-to-speech ──
let ttsVoices = [];
if (window.speechSynthesis) {
  const loadVoices = () => { ttsVoices = speechSynthesis.getVoices(); };
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const voices = speechSynthesis.getVoices();
  const targetLang = LANGUAGES[selectedLang].recogLang;
  const langPrefix = targetLang.split('-')[0];
  // Prefer Google voices — they use Chrome's audio pipeline, avoiding macOS audio session conflicts
  const voice = voices.find(v => v.lang === targetLang && v.name.toLowerCase().includes('google')) ||
                voices.find(v => v.lang === targetLang) ||
                voices.find(v => v.lang.startsWith(langPrefix));

  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = targetLang;
  utt.rate = 0.85;
  if (voice) utt.voice = voice;

  // On iOS, TTS interrupts the SpeechRecognition audio session — restart recognition when TTS finishes
  utt.onend = () => { if (gameActive) try { recognition.start(); } catch (_) {} };

  speechSynthesis.cancel();
  // 200ms delay: gives the Web Audio beep time to finish before TTS starts
  setTimeout(() => speechSynthesis.speak(utt), 200);
}

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playDull() {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.value = 220;
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.12);
  // Suspend after sound finishes to release the audio session for TTS
  setTimeout(() => { if (audioCtx && audioCtx.state === 'running') audioCtx.suspend(); }, 150);
}

function playBing() {
  const ctx = getAudioCtx();
  // Two quick ascending notes — like a "correct!" check sound
  [{ freq: 784, start: 0 }, { freq: 1047, start: 0.12 }].forEach(({ freq, start }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, ctx.currentTime + start);
    gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + 0.25);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + 0.25);
  });
}

// ── State ──
let score = 0;
let attempted = 0;
let timeLeft = GAME_DURATION;
let gameActive = false;
let currentWord = null;
let usedIndices = [];
let timerInterval = null;
let feedbackTimeout = null;
let silenceTimeout = null;
let isProcessing = false; // true while showing feedback — blocks new results
let minResultIndex = 0;  // only process recognition results at or above this index
let wordReadyAt = 0;     // ignore results until this timestamp

const SILENCE_LIMIT = 5000; // ms before auto-skip on no answer

// ── Speech Recognition setup ──
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

function initRecognition() {
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.lang = mode === 'en-to-it' ? LANGUAGES[selectedLang].recogLang : 'en-US';
  recognition.continuous = true;    // keep mic open for the whole game
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;

  recognition.onresult = (e) => {
    if (!gameActive || isProcessing) return;
    if (e.resultIndex < minResultIndex) return;
    if (Date.now() < wordReadyAt) return;

    const results = e.results[e.resultIndex];
    if (!results.isFinal) return;

    minResultIndex = e.resultIndex + 1; // don't re-process this result

    // Check if user said "skip"
    const topTranscript = results[0].transcript.trim().toLowerCase();
    if (topTranscript === 'skip') {
      skipWord();
      return;
    }

    // Try each alternative — accept the first that matches
    for (let i = 0; i < results.length; i++) {
      const spoken = results[i].transcript;
      if (isCorrect(spoken)) {
        handleResult(true, spoken);
        return;
      }
    }
    handleResult(false, results[0].transcript);
  };

  recognition.onend = () => {
    if (gameActive) {
      minResultIndex = 0;
      try { recognition.start(); } catch (_) {}
    }
  };

  recognition.onerror = (e) => {
    if (e.error === 'no-speech' || e.error === 'audio-capture') {
      if (gameActive && !isProcessing) restartListening();
    } else if (e.error === 'not-allowed') {
      setMicLabel('Mic blocked — use Skip');
      setMicOff(true);
    }
  };
}

function startListening() {
  if (!recognition) return;
  try { recognition.start(); } catch (_) {}
}

function stopListening() {
  if (!recognition) return;
  try { recognition.stop(); } catch (_) {}
}

function restartListening() {
  setTimeout(() => {
    if (gameActive && !isProcessing) {
      minResultIndex = 0;
      try { recognition.start(); } catch (_) {}
    }
  }, 120);
}

// ── Category filtering ──
function isVerbEntry(word) {
  // Strip parentheticals e.g. "(singular)" before testing, so
  // "you (singular) spoke" → "you spoke" → correctly detected as verb
  const e = word.english.toLowerCase().replace(/\s*\([^)]*\)/g, '').trim();
  return e.startsWith('to ') ||
    /^(i|you|he\/she|he|she|we|they) [a-z]/i.test(e);
}

// ── Answer checking ──
function normalize(text) {
  return text
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[^a-z\s]/g, '')
    .trim();
}

function getAcceptedAnswers(word) {
  if (mode === 'en-to-it') {
    return word.translations;
  } else {
    // Split "hello / bye (informal)" → ["hello", "bye"]
    return word.english
      .split('/')
      .map(s => s.replace(/\(.*?\)/g, '').trim())
      .filter(s => s.length > 0);
  }
}

function isCorrect(spoken) {
  if (!currentWord) return false;
  const spokenNorm = normalize(spoken);
  return getAcceptedAnswers(currentWord).some(answer => {
    const answerNorm = normalize(answer);
    return spokenNorm === answerNorm || spokenNorm.includes(answerNorm);
  });
}

// ── Game flow ──
function startGame() {
  score = 0;
  attempted = 0;
  timeLeft = GAME_DURATION;
  usedIndices = [];
  gameActive = true;
  isProcessing = false;

  // Restart recognition with the correct language for this game
  if (recognition) {
    recognition.lang = mode === 'en-to-it' ? LANGUAGES[selectedLang].recogLang : 'en-US';
    minResultIndex = 0;
    wordReadyAt = Date.now() + 500; // ignore anything buffered on the start screen
    stopListening();   // force a restart so the new language takes effect
    startListening();  // in case it was already stopped (onend won't fire)
  }

  updateScore();
  updateTimer();
  showScreen('game-screen');

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) endGame();
  }, 1000);

  loadNextWord();
}

function loadNextWord() {
  isProcessing = false;
  wordReadyAt = Date.now() + 500; // block any buffered audio from the previous word
  clearTimeout(feedbackTimeout);

  // Cycle through all words before repeating
  const lang = LANGUAGES[selectedLang];
  let wordList = lang.levels ? lang.levels[selectedLevel] : lang.words;
  if (selectedCategory === 'verbs') wordList = wordList.filter(isVerbEntry);
  else if (selectedCategory === 'vocab') wordList = wordList.filter(w => !isVerbEntry(w));
  if (usedIndices.length >= wordList.length) usedIndices = [];
  let idx;
  do { idx = Math.floor(Math.random() * wordList.length); }
  while (usedIndices.includes(idx));
  usedIndices.push(idx);

  currentWord = wordList[idx];

  setCard('neutral');
  const prompt = mode === 'en-to-it' ? currentWord.english : currentWord.translations[0];
  document.getElementById('english-word').innerHTML = prompt
    .replace(/\(singular\)/g, '<sub class="lbl">sing.</sub>')
    .replace(/\(plural\)/g,   '<sub class="lbl">pl.</sub>');
  setText('italian-reveal', '');
  setMicOff(false);
  setMicLabel('Listening…');
  clearTimeout(silenceTimeout);
  silenceTimeout = setTimeout(() => skipWord(), SILENCE_LIMIT);
}

function handleResult(correct, spoken) {
  clearTimeout(silenceTimeout);
  isProcessing = true;
  attempted++;

  const reveal = mode === 'en-to-it' ? currentWord.translations[0] : getAcceptedAnswers(currentWord)[0];
  if (correct) {
    playBing();
    score++;
    updateScore();
    setCard('correct');
    setText('italian-reveal', reveal);
    wordReadyAt = Date.now() + 500;
    schedulNext(450);
  } else {
    playDull();
    setCard('wrong');
    setText('italian-reveal', reveal);
    if (mode === 'en-to-it') speak(currentWord.translations[0]);
    wordReadyAt = Date.now() + 900;
    schedulNext(800);
  }
  setMicOff(true);
  setMicLabel('…');
}

function skipWord() {
  if (!gameActive || isProcessing) return;
  clearTimeout(silenceTimeout);
  isProcessing = true;
  attempted++;
  playDull();
  wordReadyAt = Date.now() + 900;
  setCard('skipped');
  const reveal = mode === 'en-to-it' ? currentWord.translations[0] : getAcceptedAnswers(currentWord)[0];
  setText('italian-reveal', reveal);
  if (mode === 'en-to-it') speak(currentWord.translations[0]);
  setMicOff(true);
  setMicLabel('…');
  schedulNext(800);
}

function schedulNext(delay) {
  feedbackTimeout = setTimeout(() => {
    if (!gameActive) return;
    loadNextWord();
  }, delay);
}

function endGame() {
  gameActive = false;
  clearInterval(timerInterval);
  clearTimeout(feedbackTimeout);
  clearTimeout(silenceTimeout);
  stopListening();

  setText('final-score', score);
  setText('final-total', attempted);

  const pct = attempted > 0 ? score / attempted : 0;
  const isFr = selectedLang === 'fr';
  let msg;
  if (attempted === 0)   msg = "Speak your answers out loud next time!";
  else if (pct >= .9)    msg = isFr ? "Extraordinaire! Tu es un naturel! 🌟" : "Straordinario! You're a natural! 🌟";
  else if (pct >= .7)    msg = isFr ? "Très bien! Continue comme ça! 💪"     : "Molto bene! Keep it up! 💪";
  else if (pct >= .5)    msg = isFr ? "Bien! C'est en forgeant qu'on devient forgeron." : "Buono! Practice makes perfect.";
  else                   msg = isFr ? "Continue — tu vas t'améliorer! 🇫🇷"   : "Keep going — you'll improve! 🇮🇹";
  setText('result-msg', msg);

  setTimeout(() => showScreen('end-screen'), 600);
}

// ── Timer display ──
function updateTimer() {
  setText('timer-num', timeLeft);
  const pct = (timeLeft / GAME_DURATION) * 100;
  const bar = document.getElementById('timer-bar');
  bar.style.width = pct + '%';
  const warn = timeLeft <= 10;
  bar.classList.toggle('warning', warn);
  document.getElementById('timer-num').classList.toggle('warning', warn);
}

function updateScore() {
  setText('score', score);
}

// ── Card state ──
function setCard(state) {
  const card = document.getElementById('card');
  card.className = 'card' + (state !== 'neutral' ? ' ' + state : '');
}

// ── Mic indicator ──
function setMicOff(off) {
  document.getElementById('mic-indicator').classList.toggle('off', off);
}
function setMicLabel(text) {
  setText('mic-label', text);
}

// ── Utilities ──
function setText(id, val) {
  document.getElementById(id).textContent = val;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Mode description ──
function updateModeDesc() {
  const lang = LANGUAGES[selectedLang];
  document.getElementById('mode-target-flag').textContent = lang.flag;
  document.getElementById('mode-source-flag').textContent = lang.flag;
  if (mode === 'en-to-it') {
    setText('start-desc', `An English word will be shown.\nSpeak the ${lang.name} translation before the timer runs out.`);
  } else {
    setText('start-desc', `A ${lang.name} word will be shown.\nSpeak the English translation before the timer runs out.`);
  }
  // Show level selector only for Italian (the only language with levels so far)
  document.getElementById('level-toggle').style.display = lang.levels ? 'flex' : 'none';
}

// ── Event listeners ──

// Initialise recognition on page load and request mic permission immediately
if (SpeechRecognition) {
  initRecognition();
} else {
  document.getElementById('start-btn').insertAdjacentHTML('afterend',
    '<p style="color:#f87171;font-size:.85rem;margin-top:8px">Speech recognition not supported. Please use Chrome.</p>');
  document.getElementById('start-btn').disabled = true;
}

document.getElementById('start-btn').addEventListener('click', () => {
  startGame();
});

document.getElementById('skip-btn').addEventListener('click', skipWord);

document.getElementById('home-btn').addEventListener('click', () => {
  gameActive = false;
  clearInterval(timerInterval);
  clearTimeout(feedbackTimeout);
  clearTimeout(silenceTimeout);
  stopListening();
  showScreen('start-screen');
});

document.getElementById('again-btn').addEventListener('click', () => {
  showScreen('start-screen');
});

document.getElementById('lang-it').addEventListener('click', () => {
  selectedLang = 'it';
  document.getElementById('lang-it').classList.add('active');
  document.getElementById('lang-fr').classList.remove('active');
  updateModeDesc();
});

document.getElementById('lang-fr').addEventListener('click', () => {
  selectedLang = 'fr';
  document.getElementById('lang-fr').classList.add('active');
  document.getElementById('lang-it').classList.remove('active');
  updateModeDesc();
});

document.getElementById('mode-en-it').addEventListener('click', () => {
  mode = 'en-to-it';
  document.getElementById('mode-en-it').classList.add('active');
  document.getElementById('mode-it-en').classList.remove('active');
  updateModeDesc();
});

document.getElementById('mode-it-en').addEventListener('click', () => {
  mode = 'it-to-en';
  document.getElementById('mode-it-en').classList.add('active');
  document.getElementById('mode-en-it').classList.remove('active');
  updateModeDesc();
});

['all', 'vocab', 'verbs'].forEach(cat => {
  document.getElementById(`cat-${cat}`).addEventListener('click', () => {
    selectedCategory = cat;
    ['all', 'vocab', 'verbs'].forEach(c => {
      document.getElementById(`cat-${c}`).classList.toggle('active', c === cat);
    });
  });
});

['a1', 'a2', 'b1'].forEach(level => {
  document.getElementById(`level-${level}`).addEventListener('click', () => {
    selectedLevel = level;
    ['a1', 'a2', 'b1'].forEach(l => {
      document.getElementById(`level-${l}`).classList.toggle('active', l === level);
    });
  });
});
