const quizQuestions = [
  { q: "You cannot fly to another country without your __________.", options: ["passport", "souvenir", "hotel", "passenger"], a: 0 },
  { q: "We waited for 3 hours at the __________ to catch our plane.", options: ["luggage", "airport", "holiday", "passenger"], a: 1 },
  { q: "The room was dirty, the food was bad, and it rained all day. The trip was __________.", options: ["awesome", "fantastic", "terrible", "safe"], a: 2 },
  { q: "People who travel on a train, bus, or airplane are called __________.", options: ["luggage", "flights", "souvenirs", "passengers"], a: 3 },
  { q: "Before going back to Vietnam, I went to a small shop to buy a __________ for my mother.", options: ["ticket", "flight", "souvenir", "trip"], a: 2 },
  { q: "We walked around the city for 10 hours without resting. Now, I am completely __________.", options: ["excited", "exhausted", "interesting", "safe"], a: 1 },
  { q: '"When did you buy this phone?" - "I bought it two weeks __________."', options: ["last", "yesterday", "ago", "finally"], a: 2 },
  { q: "All my clothes are in my three suitcases. My __________ is very heavy.", options: ["luggage", "passport", "passenger", "ticket"], a: 0 },
  { q: "I like reading this book. It is not boring, it is very __________.", options: ["terrible", "interesting", "dangerous", "exhausted"], a: 1 },
  { q: "If you want to sleep in a nice room during your trip, you must __________ a hotel online.", options: ["book", "fly", "go", "leave"], a: 0 },
  { q: '"Where did you go for your __________?" - "I went to Japan."', options: ["ticket", "flight", "holiday", "passenger"], a: 2 },
  { q: "We had a __________ time at the beach! Everything was perfect.", options: ["terrible", "boring", "fantastic", "dangerous"], a: 2 },
  { q: "We were walking in the forest, and __________, we saw a big bear!", options: ["yesterday", "suddenly", "finally", "ago"], a: 1 },
  { q: "The __________ from Hanoi to London takes about 12 hours.", options: ["flight", "souvenir", "luggage", "passenger"], a: 0 },
  { q: "I didn't know he was coming to my house. I was very __________.", options: ["boring", "surprised", "terrible", "safe"], a: 1 },
  { q: "Please don't swim in this river. There are crocodiles, it is very __________.", options: ["safe", "dangerous", "awesome", "interesting"], a: 1 },
  { q: "I have a plane __________ to go to Da Nang tomorrow morning.", options: ["ticket", "luggage", "souvenir", "passenger"], a: 0 },
  { q: "After 5 hours of driving, __________, we arrived at our hotel.", options: ["suddenly", "finally", "yesterday", "ago"], a: 1 },
  { q: "Tomorrow is my birthday and we will have a big party. I am very __________!", options: ["terrible", "excited", "exhausted", "boring"], a: 1 },
  { q: '"Where did you __________ last night?" - "I stayed at home."', options: ["go", "went", "goes", "going"], a: 0 }
];

const grammarQuestions = [
  { q: "Last summer, my family (travel) _______________ to Thailand for 5 days.", a: "traveled" },
  { q: "Yesterday, I (see) _______________ my old teacher at the supermarket.", a: "saw" },
  { q: "They (eat) _______________ delicious seafood for dinner last night.", a: "ate" },
  { q: "We didn't (buy) _______________ that car because it was very expensive.", a: "buy" },
  { q: "Three days ago, my brother (take) _______________ a lot of beautiful photos.", a: "took" },
  { q: "Did you (find) _______________ your keys?", a: "find" },
  { q: "The train (leave) _______________ the station at 9:00 AM yesterday morning.", a: "left" },
  { q: "I (think) _______________ the exam was difficult, but it was easy.", a: "thought" },
  { q: "She didn't (have) _______________ breakfast this morning.", a: "have" },
  { q: "We (arrive) _______________ at the airport late, so we missed the flight.", a: "arrived" },
  { q: "I didn't (meet) _______________ him at the party last night.", a: "meet" },
  { q: "What did you (do) _______________ yesterday?", a: "do" },
  { q: "My mother (make) _______________ a big cake for my birthday last week.", a: "made" },
  { q: "The tourists (visit) _______________ three museums yesterday.", a: "visited" },
  { q: "The baby (cry) _______________ loudly because he was hungry.", a: "cried" },
  { q: "I (get) _______________ a new computer from my parents two days ago.", a: "got" },
  { q: "Did she (enjoy) _______________ the trip? Yes, she loved it!", a: "enjoy" },
  { q: "He (give) _______________ me a beautiful souvenir from Paris.", a: "gave" },
  { q: "They (come) _______________ to my house to watch a movie last night.", a: "came" },
  { q: "I (try) _______________ to learn Japanese last year, but it was too hard.", a: "tried" }
];

export function renderA2Practice(container, navigateCb) {
  container.innerHTML = `
    <div style="max-width: 800px; margin: 0 auto; animation: fadeIn 0.5s ease-out;">
      <h1 style="color: var(--primary); text-align: center; margin-bottom: 0.5rem; font-size: 2.5rem;">📚 Siêu Tài Liệu Tiếng Anh A2</h1>
      <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem;">Luyện tập và củng cố kiến thức nền tảng A2 (Động từ Quá khứ & Du lịch)</p>

      <!-- QUIZ SECTION -->
      <div class="practice-card" style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 2rem;">
        <h2 style="color: var(--primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          A. Trắc nghiệm (20 câu ngẫu nhiên)
        </h2>
        <div id="quiz-container">
          <button id="start-quiz-btn" style="padding: 0.8rem 1.5rem; border-radius: 8px; background: var(--primary); color: white; border: none; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Bắt đầu làm bài</button>
        </div>
      </div>

      <!-- GRAMMAR SECTION -->
      <div class="practice-card" style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 2rem;">
        <h2 style="color: var(--primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          B. Điền từ vào chỗ trống (Ngữ pháp A2 - 20 câu)
        </h2>
        <div id="grammar-container"></div>
        <button id="check-grammar-btn" style="margin-top: 1rem; padding: 0.8rem 1.5rem; border-radius: 8px; background: #2ecc71; color: white; border: none; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Kiểm tra đáp án</button>
        <div id="grammar-result" style="margin-top: 1rem; font-weight: bold; font-size: 1.1rem;"></div>
      </div>

      <!-- READING SECTION -->
      <div class="practice-card" style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); margin-bottom: 2rem;">
        <h2 style="color: var(--primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          C. Luyện đọc to (Phản xạ Quá khứ)
        </h2>
        
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 1rem;">Đoạn 1: The Departure (Khởi hành)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"Last month, I went on a trip to Japan for my holiday. First, I booked my ticket and packed my luggage. I didn't forget my passport! When I arrived at the airport, there were many passengers. The flight started late, so I felt a little bored. Finally, the plane left, and I was very excited!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 2: The Experience (Trải nghiệm)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"When I came to Tokyo, I stayed in a five-star hotel. The city was incredibly safe, not dangerous at all. On the first day, I visited famous temples and took many photos. I tried local sushi and thought it was fantastic! The food was truly awesome. I didn't meet any bad people; everyone was very friendly."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 3: Coming Home (Trở về)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"Before I left, I went to a big market and bought a cute souvenir for my mom. I gave it to her when I came back, and she was very surprised. The journey didn't have any terrible moments. What happened during the trip was interesting and perfect. I enjoyed every second, but when I arrived home yesterday, I was completely exhausted!"</p>
      </div>
    </div>
  `;

  // Render Grammar Questions
  const grammarContainer = document.getElementById('grammar-container');
  grammarQuestions.forEach((item, index) => {
    const qParts = item.q.split('_______________');
    const html = `
      <div style="margin-bottom: 1rem; font-size: 1.1rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <strong>${index + 1}.</strong> 
        <span>${qParts[0]}</span>
        <input type="text" id="g-q${index}" style="padding: 0.4rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; width: 120px;" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
        <span>${qParts[1] || ''}</span>
        <span id="g-res${index}" style="margin-left: 0.5rem; font-weight: bold;"></span>
      </div>
    `;
    grammarContainer.innerHTML += html;
  });

  document.getElementById('check-grammar-btn').addEventListener('click', () => {
    let score = 0;
    grammarQuestions.forEach((item, index) => {
      const input = document.getElementById(`g-q${index}`);
      const res = document.getElementById(`g-res${index}`);
      const userAns = input.value.trim().toLowerCase();
      
      if (userAns === item.a.toLowerCase()) {
        score++;
        input.style.borderColor = '#2ecc71';
        input.style.backgroundColor = '#e8f8f5';
        res.innerHTML = '<span style="color: #2ecc71;">✓</span>';
      } else {
        input.style.borderColor = '#e74c3c';
        input.style.backgroundColor = '#fdedec';
        res.innerHTML = `<span style="color: #e74c3c;">✗ (Đáp án: ${item.a})</span>`;
      }
    });
    
    const resultDiv = document.getElementById('grammar-result');
    resultDiv.innerHTML = `Bạn làm đúng <span style="color: ${score === grammarQuestions.length ? '#2ecc71' : '#e74c3c'}">${score}/${grammarQuestions.length}</span> câu.`;
  });

  // Render Quiz
  const quizContainer = document.getElementById('quiz-container');
  document.getElementById('start-quiz-btn').addEventListener('click', () => {
    renderQuiz();
  });

  function renderQuiz() {
    // Shuffle and pick 20
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);

    let html = '';
    
    // Split into chunks of 5
    const chunks = [];
    for (let i = 0; i < selected.length; i += 5) {
      chunks.push(selected.slice(i, i + 5));
    }

    chunks.forEach((chunk, chunkIndex) => {
      html += `<div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">`;
      html += `<h3 style="color: var(--secondary); margin-bottom: 1rem; border-bottom: 2px solid var(--secondary); padding-bottom: 0.5rem;">Bảng ${chunkIndex + 1}</h3>`;
      
      chunk.forEach((item, itemIndex) => {
        const globalIndex = chunkIndex * 5 + itemIndex;
        html += `
          <div style="margin-bottom: 1.5rem;" class="quiz-item" data-global-index="${globalIndex}">
            <p style="font-weight: bold; margin-bottom: 0.8rem; font-size: 1.1rem;">${globalIndex + 1}. ${item.q}</p>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        `;
        
        item.options.forEach((opt, optIndex) => {
          html += `
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.5rem; border-radius: 4px; transition: background 0.2s;" class="quiz-option">
              <input type="radio" name="q${globalIndex}" value="${optIndex}">
              <span>${opt}</span>
            </label>
          `;
        });
        
        html += `
            </div>
            <div id="q-res${globalIndex}" style="margin-top: 0.5rem; font-weight: bold; font-size: 0.95rem;"></div>
          </div>
        `;
      });
      html += `</div>`;
    });

    html += `
      <div style="text-align: center; margin-top: 2rem;">
        <button id="submit-quiz-btn" style="padding: 1rem 2rem; border-radius: 50px; background: var(--primary); color: white; border: none; font-size: 1.1rem; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(52,152,219,0.3); transition: all 0.3s ease;">Nộp Bài</button>
        <button id="retry-quiz-btn" style="display: none; padding: 1rem 2rem; border-radius: 50px; background: #95a5a6; color: white; border: none; font-size: 1.1rem; font-weight: bold; cursor: pointer; margin-left: 1rem; transition: all 0.3s ease;">Làm lại đề khác</button>
      </div>
      <div id="quiz-final-score" style="text-align: center; margin-top: 1.5rem; font-size: 1.3rem; font-weight: bold; display: none;"></div>
    `;

    quizContainer.innerHTML = html;

    // Add submit handler
    document.getElementById('submit-quiz-btn').addEventListener('click', () => {
      let correctCount = 0;
      selected.forEach((item, globalIndex) => {
        const radios = document.getElementsByName(`q${globalIndex}`);
        let userAns = -1;
        radios.forEach(r => { if (r.checked) userAns = parseInt(r.value); });
        
        const resDiv = document.getElementById(`q-res${globalIndex}`);
        if (userAns === item.a) {
          correctCount++;
          resDiv.innerHTML = '<span style="color: #2ecc71;">✓ Chính xác!</span>';
        } else {
          resDiv.innerHTML = `<span style="color: #e74c3c;">✗ Sai. Đáp án đúng: ${item.options[item.a]}</span>`;
        }
        
        // Disable radios
        radios.forEach(r => r.disabled = true);
      });

      const submitBtn = document.getElementById('submit-quiz-btn');
      submitBtn.style.display = 'none';
      
      const retryBtn = document.getElementById('retry-quiz-btn');
      retryBtn.style.display = 'inline-block';

      const finalScore = document.getElementById('quiz-final-score');
      finalScore.style.display = 'block';
      finalScore.innerHTML = `
        <div style="padding: 1.5rem; background: ${correctCount >= 10 ? '#e8f8f5' : '#fdedec'}; border-radius: 12px; border: 2px solid ${correctCount >= 10 ? '#2ecc71' : '#e74c3c'};">
          Điểm số của bạn: <span style="color: ${correctCount >= 10 ? '#2ecc71' : '#e74c3c'}; font-size: 1.8rem;">${correctCount}/20</span>
          <div style="font-size: 1rem; font-weight: normal; margin-top: 0.5rem; color: var(--text-light);">
            ${correctCount >= 15 ? 'Tuyệt vời! Bạn nắm rất vững từ vựng.' : (correctCount >= 10 ? 'Làm tốt lắm! Hãy tiếp tục ôn tập.' : 'Cố gắng lên! Bạn cần ôn lại từ vựng thêm chút nữa.')}
          </div>
        </div>
      `;

      // scroll to score
      finalScore.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    document.getElementById('retry-quiz-btn').addEventListener('click', () => {
      renderQuiz();
      quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
