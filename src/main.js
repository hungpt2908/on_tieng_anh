import './style.css';
import { LEVELS } from './data.js';

// App State
let currentLevelId = LEVELS[0].id;
let currentView = 'home'; // 'home', 'lesson', 'flashcard', 'quiz'
let currentLesson = null;
let currentFlashcardIndex = 0;
let isFlashcardFlipped = false;

// Quiz State
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

// DOM Elements
const app = document.getElementById('app');

// Initialization
function renderApp() {
  app.innerHTML = '';
  
  // Header
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header-inner">
      <div class="logo" onclick="navigate('home')">
        <div class="logo-icon">E</div>
        <div>
          <div class="logo-text">EngMaster</div>
          <div class="logo-sub">Learn English Faster</div>
        </div>
      </div>
    </div>
  `;
  app.appendChild(header);

  // Main Content Area
  const main = document.createElement('main');
  main.className = 'main';
  
  if (currentView === 'home') {
    renderHome(main);
  } else if (currentView === 'lesson') {
    renderLesson(main);
  } else if (currentView === 'flashcard') {
    renderFlashcardMode(main);
  } else if (currentView === 'quiz') {
    renderQuizMode(main);
  }

  app.appendChild(main);
}

// Speak Function (Text to Speech)
window.speakWord = function(text, e) {
  if (e) e.stopPropagation();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// Navigation
window.navigate = function(view, lessonId = null) {
  currentView = view;
  if (lessonId) {
    const levelData = LEVELS.find(l => l.id === currentLevelId);
    currentLesson = levelData.data.find(l => l.id === lessonId);
  }
  renderApp();
  window.scrollTo(0, 0);
}

window.setLevel = function(levelId) {
  currentLevelId = levelId;
  renderApp();
}

// Render Home
function renderHome(container) {
  // Navigation Bar for Levels
  const nav = document.createElement('nav');
  nav.className = 'nav';
  
  let tabsHtml = '';
  LEVELS.forEach(level => {
    tabsHtml += `<button class="nav-btn ${currentLevelId === level.id ? 'active' : ''}" onclick="setLevel('${level.id}')">${level.name} - ${level.description}</button>`;
  });
  
  nav.innerHTML = `<div class="nav-inner">${tabsHtml}</div>`;
  app.insertBefore(nav, container);

  const level = LEVELS.find(l => l.id === currentLevelId);
  const totalLessons = level.data.length;
  const totalWords = level.data.reduce((acc, lesson) => acc + lesson.words.length, 0);

  // Hero Section
  const hero = document.createElement('div');
  hero.className = 'home-hero';
  hero.innerHTML = `
    <h1>Master <span>English</span> Today</h1>
    <p>Premium learning experience designed to help you build vocabulary fast and effectively.</p>
    
    <div class="stats-row">
      <div class="stat">
        <div class="stat-num">${totalLessons}</div>
        <div class="stat-label">Lessons</div>
      </div>
      <div class="stat">
        <div class="stat-num">${totalWords}</div>
        <div class="stat-label">Words</div>
      </div>
      <div class="stat">
        <div class="stat-num">${level.name}</div>
        <div class="stat-label">Level</div>
      </div>
    </div>
  `;
  container.appendChild(hero);

  // Lessons Grid
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title fade-in';
  sectionTitle.innerHTML = `Course Lessons <span class="badge" style="background:${level.color}">${level.id}</span>`;
  container.appendChild(sectionTitle);

  const grid = document.createElement('div');
  grid.className = 'lesson-grid fade-in';
  
  level.data.forEach((lesson, index) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.onclick = () => navigate('lesson', lesson.id);
    
    card.innerHTML = `
      <div class="lesson-num">Lesson 0${lesson.id}</div>
      <div class="lesson-title-en">${lesson.title.split(': ')[1]}</div>
      <div class="lesson-title-vi">${lesson.titleVi.split(': ')[1]}</div>
      <div class="lesson-meta">
        <span class="lesson-tag">${lesson.words.length} words</span>
        <div class="lesson-action">→</div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  container.appendChild(grid);
}

// Render Lesson Detail
function renderLesson(container) {
  const words = currentLesson.words;
  
  container.innerHTML = `
    <button class="back-btn fade-in" onclick="navigate('home')">← Back to Lessons</button>
    
    <div class="fade-in">
      <h1 class="lesson-view-title">${currentLesson.title.split(': ')[1]}</h1>
      <p class="lesson-view-sub">${currentLesson.titleVi.split(': ')[1]} • ${words.length} words</p>
      
      <div class="mode-tabs">
        <button class="mode-tab active">Word List</button>
        <button class="mode-tab" onclick="navigate('flashcard', ${currentLesson.id})">Flashcards</button>
        <button class="mode-tab" onclick="navigate('quiz', ${currentLesson.id})">Quiz</button>
      </div>

      <div class="word-list">
        ${words.map((w, i) => `
          <div class="word-item" style="animation-delay: ${i * 0.05}s" onclick="speakWord('${w.word.replace(/'/g, "\\'")}')">
            <div class="word-main">
              <span class="word-en">${w.word}</span>
              <span class="word-pron">${w.pronunciation}</span>
              <button class="audio-btn" onclick="speakWord('${w.word.replace(/'/g, "\\'")}', event)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
            <div class="word-info">
              <span class="word-vi">${w.vi}</span>
              <span class="word-meaning">${w.en}</span>
            </div>
            <span class="word-pos">${w.pos}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Flashcards
function renderFlashcardMode(container) {
  currentFlashcardIndex = 0;
  isFlashcardFlipped = false;
  
  container.innerHTML = `
    <button class="back-btn fade-in" onclick="navigate('lesson', ${currentLesson.id})">← Back to ${currentLesson.title.split(': ')[1]}</button>
    <div id="fc-root" class="fade-in"></div>
  `;
  
  updateFlashcardView();
}

window.flipCard = function() {
  isFlashcardFlipped = !isFlashcardFlipped;
  const inner = document.querySelector('.flashcard-inner');
  if (inner) {
    if (isFlashcardFlipped) {
      inner.classList.add('flipped');
    } else {
      inner.classList.remove('flipped');
    }
  }
}

window.nextCard = function() {
  if (currentFlashcardIndex < currentLesson.words.length - 1) {
    currentFlashcardIndex++;
    isFlashcardFlipped = false;
    updateFlashcardView();
  }
}

window.prevCard = function() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    isFlashcardFlipped = false;
    updateFlashcardView();
  }
}

function updateFlashcardView() {
  const root = document.getElementById('fc-root');
  if (!root) return;
  
  const word = currentLesson.words[currentFlashcardIndex];
  const total = currentLesson.words.length;
  
  root.innerHTML = `
    <div class="flashcard-container">
      <div class="flashcard-progress">Card ${currentFlashcardIndex + 1} of ${total}</div>
      
      <div class="flashcard" onclick="flipCard()">
        <div class="flashcard-inner ${isFlashcardFlipped ? 'flipped' : ''}">
          <!-- Front -->
          <div class="flashcard-front">
            <div class="fc-word">${word.word}</div>
            <div class="fc-pron">${word.pronunciation}</div>
            <div class="fc-hint">Tap to flip</div>
            <button class="audio-btn" style="position: absolute; top: 1rem; right: 1rem;" onclick="speakWord('${word.word.replace(/'/g, "\\'")}', event)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
          </div>
          
          <!-- Back -->
          <div class="flashcard-back">
            <div class="fc-vi">${word.vi}</div>
            <div class="fc-en">${word.en}</div>
            <div class="fc-hint" style="color: rgba(255,255,255,0.7)">Tap to flip back</div>
          </div>
        </div>
      </div>
      
      <div class="fc-controls">
        <button class="fc-btn prev" onclick="prevCard()" ${currentFlashcardIndex === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="fc-btn next" onclick="nextCard()" ${currentFlashcardIndex === total - 1 ? 'disabled' : ''}>Next →</button>
      </div>
    </div>
  `;
}

// Render Quiz
function renderQuizMode(container) {
  // Generate Quiz Questions (Mix of EN->VI and VI->EN)
  const words = [...currentLesson.words];
  quizQuestions = [];
  
  words.sort(() => Math.random() - 0.5).forEach(word => {
    // 4 random options
    let options = [word];
    while(options.length < 4 && options.length < words.length) {
      let randomWord = words[Math.floor(Math.random() * words.length)];
      if (!options.includes(randomWord)) {
        options.push(randomWord);
      }
    }
    options.sort(() => Math.random() - 0.5);
    
    // 50% chance EN->VI or VI->EN
    const isEnToVi = Math.random() > 0.5;
    
    quizQuestions.push({
      question: isEnToVi ? word.word : word.vi,
      questionSub: isEnToVi ? word.pronunciation : '',
      answerId: word.word,
      isEnToVi,
      options: options.map(o => ({
        id: o.word,
        text: isEnToVi ? o.vi : o.word
      }))
    });
  });
  
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  
  container.innerHTML = `
    <button class="back-btn fade-in" onclick="navigate('lesson', ${currentLesson.id})">← Exit Quiz</button>
    <div id="quiz-root" class="fade-in"></div>
  `;
  
  updateQuizView();
}

window.selectQuizOption = function(optionId) {
  if (quizAnswered) return;
  quizAnswered = true;
  
  const q = quizQuestions[currentQuizIndex];
  const isCorrect = optionId === q.answerId;
  
  if (isCorrect) quizScore++;
  
  // Update UI to show correct/wrong
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.id === q.answerId) {
      btn.classList.add('correct');
      btn.innerHTML += ' <span style="margin-left:auto">✓</span>';
    } else if (btn.dataset.id === optionId && !isCorrect) {
      btn.classList.add('wrong');
      btn.innerHTML += ' <span style="margin-left:auto">✗</span>';
    }
  });
  
  setTimeout(() => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      currentQuizIndex++;
      quizAnswered = false;
      updateQuizView();
    } else {
      showQuizResult();
    }
  }, 1500);
}

function updateQuizView() {
  const root = document.getElementById('quiz-root');
  if (!root) return;
  
  const q = quizQuestions[currentQuizIndex];
  const progress = ((currentQuizIndex) / quizQuestions.length) * 100;
  
  root.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progress}%"></div>
      </div>
      
      <div class="quiz-question fade-in">
        <div class="quiz-q-label">What is the meaning of:</div>
        <div class="quiz-q-word">${q.question}</div>
        ${q.questionSub ? `<div style="color:var(--primary);font-family:monospace;margin-top:0.5rem">${q.questionSub}</div>` : ''}
        ${q.isEnToVi ? `<button class="audio-btn" style="margin: 1rem auto 0;" onclick="speakWord('${q.question.replace(/'/g, "\\\\'")}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
        </button>` : ''}
      </div>
      
      <div class="quiz-options fade-in">
        ${q.options.map(opt => `
          <button class="quiz-option" data-id="${opt.id}" onclick="selectQuizOption('${opt.id}')">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function showQuizResult() {
  const root = document.getElementById('quiz-root');
  if (!root) return;
  
  const total = quizQuestions.length;
  const percentage = Math.round((quizScore / total) * 100);
  
  let msg = 'Great job!';
  if (percentage === 100) msg = 'Perfect Score!';
  else if (percentage < 50) msg = 'Keep practicing!';
  
  root.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-result">
        <div class="quiz-score">${percentage}%</div>
        <div class="quiz-score-label">${quizScore} out of ${total} correct</div>
        <h2 style="margin-bottom: 2rem; color: var(--text-main);">${msg}</h2>
        
        <div style="display:flex;gap:1rem;justify-content:center">
          <button class="quiz-restart" style="background:var(--surface);color:var(--text-main);border:2px solid var(--border)" onclick="navigate('lesson', ${currentLesson.id})">Back to Lesson</button>
          <button class="quiz-restart" onclick="renderQuizMode(document.querySelector('.main'))">Try Again</button>
        </div>
      </div>
    </div>
  `;
}

// Initial render
renderApp();
