import './style.css';
import { LEVELS } from './data.js';
import { renderA1Practice } from './a1Practice.js';

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
      <div class="logo" onclick="appNavigate('home')">
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
  
  app.appendChild(main);
  
  if (currentView === 'home') {
    renderHome(main);
  } else if (currentView === 'lesson') {
    renderLesson(main);
  } else if (currentView === 'flashcard') {
    renderFlashcardMode(main);
  } else if (currentView === 'quiz') {
    renderQuizMode(main);
  } else if (currentView === 'resources') {
    renderResources(main);
  } else if (currentView === 'a1practice') {
    renderA1Practice(main, appNavigate);
  }
}

// Speak Function (Text to Speech with AI Audio Fallback)
window.speakWord = function(text, e) {
  if (e) e.stopPropagation();
  const sanitizedFilename = text.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.mp3';
  const baseUrl = import.meta.env.BASE_URL || '/';
  const audioUrl = baseUrl + 'audio/' + sanitizedFilename;
  
  const audio = new Audio(audioUrl);
  audio.play().catch(err => {
    console.log("Custom audio not found, falling back to Web Speech API");
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  });
}

// Navigation
window.appNavigate = function(view, lessonId = null) {
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
    tabsHtml += `<button class="nav-btn ${currentLevelId === level.id ? 'active' : ''}" onclick="setLevel('${level.id}')">${level.name}</button>`;
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
    
    <div style="margin-top: 1.5rem; margin-bottom: 2rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
      <button onclick="appNavigate('resources')" style="padding: 0.8rem 1.5rem; border-radius: 50px; background: var(--primary); color: white; border: none; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3); transition: all 0.3s ease;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        Khám phá Phương pháp & Tài nguyên học
      </button>

      <button onclick="appNavigate('a1practice')" style="padding: 0.8rem 1.5rem; border-radius: 50px; background: #e74c3c; color: white; border: none; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3); transition: all 0.3s ease; animation: pulse 2s infinite;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        Siêu Tài Liệu Tiếng Anh A1 (Bài Tập & Đọc)
      </button>
    </div>
    
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
    card.onclick = () => appNavigate('lesson', lesson.id);
    
    card.innerHTML = `
      <div class="lesson-num">Lesson 0${lesson.id}</div>
      <div class="lesson-title-en">${lesson.title.split(':').pop().trim()}</div>
      <div class="lesson-title-vi">${lesson.titleVi.split(':').pop().trim()}</div>
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
    <button class="back-btn fade-in" onclick="appNavigate('home')">← Back to Lessons</button>
    
    <div class="fade-in">
      <h1 class="lesson-view-title">${currentLesson.title.split(':').pop().trim()}</h1>
      <p class="lesson-view-sub">${currentLesson.titleVi.split(':').pop().trim()} • ${words.length} words</p>
      
      <div class="mode-tabs">
        <button class="mode-tab active">Word List</button>
        <button class="mode-tab" onclick="appNavigate('flashcard', ${currentLesson.id})">Flashcards</button>
        <button class="mode-tab" onclick="appNavigate('quiz', ${currentLesson.id})">Quiz</button>
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
    <button class="back-btn fade-in" onclick="appNavigate('lesson', ${currentLesson.id})">← Back to ${currentLesson.title.split(':').pop().trim()}</button>
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
    <button class="back-btn fade-in" onclick="appNavigate('lesson', ${currentLesson.id})">← Exit Quiz</button>
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
          <button class="quiz-restart" style="background:var(--surface);color:var(--text-main);border:2px solid var(--border)" onclick="appNavigate('lesson', ${currentLesson.id})">Back to Lesson</button>
          <button class="quiz-restart" onclick="renderQuizMode(document.querySelector('.main'))">Try Again</button>
        </div>
      </div>
    </div>
  `;
}

// Render Resources
function renderResources(container) {
  const resourcesData = [
    {
      category: "1. Nguồn bài học có sẵn lộ trình (Miễn phí & Bài bản)",
      icon: "🗺️",
      color: "#3498db",
      items: [
        { 
          name: "LearnEnglish (British Council)", 
          desc: "<strong>Có gì:</strong> Hệ thống bài học chia rõ ràng từ A1 đến C1. Gồm text, audio/video và bài tập trắc nghiệm kiểm tra tại chỗ.", 
          bonus: "<strong>Điểm cộng:</strong> Tiếng Anh chuẩn Anh - Anh, cực kỳ học thuật và chính thống.",
          url: "https://learnenglish.britishcouncil.org/" 
        },
        { 
          name: "BBC Learning English", 
          desc: "<strong>Có gì:</strong> Chuyên mục Course chia theo Basic, Intermediate, Advanced. Gồm chuỗi 6 Minute English, English in a Minute.", 
          bonus: "<strong>Điểm cộng:</strong> Cho phép tải miễn phí MP3 và PDF về máy để tích trữ làm tài liệu cá nhân.",
          url: "https://www.bbc.co.uk/learningenglish" 
        }
      ]
    },
    {
      category: "2. Nguồn từ vựng thực tế (Kèm ngữ cảnh thực)",
      icon: "📰",
      color: "#e67e22",
      items: [
        { 
          name: "Engoo & Breaking News English", 
          desc: "<strong>Có gì:</strong> Trang báo tin tức chuẩn hóa cho người học. Luôn tổng hợp sẵn bảng từ vựng cốt lõi gồm: Từ, loại từ, phát âm, nghĩa và ví dụ.", 
          bonus: "<strong>Điểm cộng:</strong> Từ vựng cập nhật theo xu hướng thời sự, không bị khô khan hay lỗi thời.",
          url: "https://engoo.com/app/daily-news" 
        },
        { 
          name: "Vocabulary.com", 
          desc: "<strong>Có gì:</strong> Sở hữu hàng nghìn 'Vocabulary Lists' do cộng đồng soạn sẵn: từ vựng thi SAT/IELTS, đến từ vựng theo phim ảnh.", 
          bonus: "<strong>Điểm cộng:</strong> Định nghĩa từ vựng được viết cực kỳ hài hước, dễ hiểu và dễ nhớ.",
          url: "https://www.vocabulary.com/" 
        }
      ]
    },
    {
      category: "3. Kho từ vựng chính thống (Từ điển lớn)",
      icon: "🏛️",
      color: "#2ecc71",
      items: [
        { 
          name: "Cambridge Dictionary Plus", 
          desc: "<strong>Có gì:</strong> Chuyên mục 'Word Lists' chia theo chuẩn khung châu Âu (A1-C2) hoặc các chủ đề. Có thể bấm 'Save' để tạo kho từ riêng.", 
          bonus: "<strong>Điểm cộng:</strong> Uy tín tuyệt đối, dễ dàng tạo danh sách từ vựng cá nhân miễn phí.",
          url: "https://dictionary.cambridge.org/plus/" 
        },
        { 
          name: "Oxford Learner's Dictionaries", 
          desc: "<strong>Có gì:</strong> Mục Oxford 3000 và 5000 tổng hợp danh sách từ vựng quan trọng và cốt lõi nhất trong tiếng Anh.", 
          bonus: "<strong>Điểm cộng:</strong> Chỉ cần học hết bộ 3000-5000 từ này là đủ dùng cho mọi ngữ cảnh đời sống và công việc.",
          url: "https://www.oxfordlearnersdictionaries.com/wordlists/" 
        }
      ]
    }
  ];

  let html = `
    <button class="back-btn fade-in" onclick="appNavigate('home')">← Về trang chủ</button>
    
    <div class="fade-in">
      <h1 class="lesson-view-title" style="margin-top: 1rem;">Khám phá Thư viện Học liệu</h1>
      <p class="lesson-view-sub" style="margin-bottom: 1rem;">Nguồn học tiếng Anh chuẩn quốc tế do EngMaster tuyển chọn khắt khe.</p>
      
      <div style="background: rgba(241, 196, 15, 0.1); border-left: 4px solid #f1c40f; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <strong>💡 Mẹo nhỏ cho bạn:</strong> Khi lấy từ vựng từ các trang này, bạn nên copy <em>cả câu ví dụ</em> của họ thay vì chỉ copy mỗi từ và nghĩa tiếng Việt để học ngữ cảnh tốt nhất nhé!
      </div>
  `;

  resourcesData.forEach((section, i) => {
    html += `
      <h2 class="section-title fade-in" style="animation-delay: ${i*0.1}s; margin-top: 2rem;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem">${section.icon}</span> 
        ${section.category}
      </h2>
      <div class="lesson-grid fade-in" style="animation-delay: ${i*0.1 + 0.1}s;">
    `;
    
    section.items.forEach(item => {
      html += `
        <a href="${item.url}" target="_blank" class="lesson-card" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; cursor: pointer;">
          <div style="font-weight: bold; font-size: 1.2rem; color: ${section.color}; margin-bottom: 1rem;">${item.name}</div>
          <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; margin-bottom: 0.8rem;">${item.desc}</p>
          <p style="font-size: 0.95rem; color: ${section.color}; line-height: 1.6; flex: 1; margin: 0; background: ${section.color}11; padding: 0.8rem; border-radius: 8px;">${item.bonus}</p>
          <div class="lesson-meta" style="margin-top: 1.5rem;">
            <span class="lesson-tag" style="background: ${section.color}22; color: ${section.color}; font-weight: bold;">Truy cập trang</span>
            <div class="lesson-action" style="background: ${section.color}; color: white; border-color: ${section.color};">↗</div>
          </div>
        </a>
      `;
    });
    
    html += `</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Initial render
renderApp();
