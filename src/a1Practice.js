export function renderA1Practice(container, appNavigate) {
  let html = `
    <button class="back-btn fade-in" id="backToHomeBtn">← Về trang chủ</button>
    <div class="fade-in">
      <h1 class="lesson-view-title" style="margin-top: 1rem;">Siêu Tài Liệu Tiếng Anh A1</h1>
      <p class="lesson-view-sub" style="margin-bottom: 2rem;">Kho bài tập khổng lồ và luyện đọc (Độc quyền)</p>
      
      <div class="mode-tabs">
        <button class="mode-tab active" id="tab-reading">Luyện Đọc (Reading)</button>
        <button class="mode-tab" id="tab-grammar">Ngữ Pháp (Grammar)</button>
        <button class="mode-tab" id="tab-quiz">Trắc Nghiệm (Quiz)</button>
      </div>
      
      <div id="practice-content"></div>
    </div>
  `;

  container.innerHTML = html;
  
  document.getElementById('backToHomeBtn').addEventListener('click', () => {
    appNavigate('home');
  });

  const tabReading = document.getElementById('tab-reading');
  const tabGrammar = document.getElementById('tab-grammar');
  const tabQuiz = document.getElementById('tab-quiz');
  const practiceContent = document.getElementById('practice-content');

  function setActiveTab(tab) {
    tabReading.classList.remove('active');
    tabGrammar.classList.remove('active');
    tabQuiz.classList.remove('active');
    tab.classList.add('active');
  }

  tabReading.addEventListener('click', () => {
    setActiveTab(tabReading);
    renderReading();
  });

  tabGrammar.addEventListener('click', () => {
    setActiveTab(tabGrammar);
    renderGrammar();
  });

  tabQuiz.addEventListener('click', () => {
    setActiveTab(tabQuiz);
    renderQuiz();
  });

  function renderReading() {
    practiceContent.innerHTML = `
      <div class="quiz-question fade-in" style="text-align: left;">
        <h2 style="color: var(--primary); margin-bottom: 1rem;">Đoạn 1: My Morning & Family (Buổi sáng và Gia đình tôi)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"Every day, I wake up at 6:00 AM. I am usually hungry and thirsty. I go to the kitchen to eat breakfast. My mother makes bread with an egg. I drink a glass of milk and my father drinks hot coffee. I have a little brother and an older sister. We are a very happy family. After breakfast, I feel good."</p>
        
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 2: Going to School (Đi học)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"At 7:00 AM, I go to school. My school is very big and beautiful. I take the bus because I don't have a car. In the classroom, I study English with my teacher. I read a book and talk to my friend. There is a boy and a girl sitting next to me. We are all students. For lunch, we eat rice, meat, fish, and vegetable. We also eat some fruit."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 3: The Weekend (Cuối tuần)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"On the weekend, I don't go to school. I sleep late. In the afternoon, I walk to the park near my house. The park has many trees. I run and play with my dog. Sometimes, I go to the supermarket to buy food. If the weather is cold or sad, I stay at home and use my phone. If I feel sick, I go to the hospital to see a doctor. Life is a combination of small and big things!"</p>
      
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 4: At the Farm (Nông trại động vật)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I am at a farm. I see many animals. I see a black dog and a white cat. There is a bird singing in the tree. I also see a fat pig, a brown horse, and a big cow. The cow gives milk. A monkey and a bear do not live on the farm, but there is a small mouse running around! My favorite animal here is the little chicken."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 5: My Body & Clothes (Cơ thể và Quần áo)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"Look at me! I have a head with black hair. I have two eyes to see and two ears to listen. I use my nose to smell and my mouth to speak. I have two arms, two hands, two legs, and two feet. Today, I wear a red shirt, blue pants, and black shoes. I also wear a green hat and hold a beautiful yellow dress for my sister."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 6: My Room & Actions (Căn phòng và Hành động)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"This is my room. It is near the bathroom and the kitchen. Inside, I have a bed to sleep, a table, and a chair. I sit on the chair and stand up when I need to go out. I have a computer and a pen on the table. I use the pen to write. When it is cold, I close the door and the window. When it is hot, I open them. Sometimes, I sing a song and cook food. I love to buy new things for my room!"</p>
      </div>
    `;
  }

  const grammarQuestions = [
    { q: "My father (work) _______________ in a big hospital.", a: "works" },
    { q: "I have three small (cat) _______________ in my house.", a: "cats" },
    { q: "Mary usually (watch) _______________ TV in the evening.", a: "watches" },
    { q: "We need to buy some fresh (egg) _______________ at the supermarket.", a: "eggs" },
    { q: "The baby (drink) _______________ milk every night.", a: "drinks" },
    { q: "There are many tall (tree) _______________ in the park.", a: "trees" },
    { q: "John (study) _______________ English every day.", a: "studies" },
    { q: "My sister (wake up) _______________ at 6:00 AM.", a: "wakes up" },
    { q: "We have two red (car) _______________.", a: "cars" },
    { q: "He (walk) _______________ to school because it is near his house.", a: "walks" },
    { q: "The teacher (read) _______________ a book to the students.", a: "reads" },
    { q: "Anna and David (play) _______________ tennis on the weekend.", a: "play" },
    { q: "Please drink a lot of (water) _______________ every day.", a: "water" },
    { q: "The cheetah (run) _______________ very fast.", a: "runs" },
    { q: "I like eating sweet (fruit) _______________.", a: "fruit" },
    { q: "My grandmother (go) _______________ to the market every morning.", a: "goes" },
    { q: "They (eat) _______________ rice and fish for dinner.", a: "eat" },
    { q: "I have many good (friend) _______________ at school.", a: "friends" },
    { q: "The boy (sleep) _______________ on the sofa.", a: "sleeps" },
    { q: "My mother cooks very well. Her food is always (good) _______________.", a: "good" },
    { q: "The cat has two small (ear) _______________.", a: "ears" },
    { q: "Every morning, the boy (stand) _______________ at the bus stop to wait for the bus.", a: "stands" },
    { q: "I want to buy two new (shirt) _______________.", a: "shirts" },
    { q: "Mary (cook) _______________ dinner for her family every day.", a: "cooks" },
    { q: "Humans have two hands and two (foot) _______________.", a: "feet" },
    { q: "Look! I see a big brown (bear) _______________ in the zoo.", a: "bear" },
    { q: "The teacher (write) _______________ English words on the board.", a: "writes" },
    { q: "My sister has very long black (hair) _______________.", a: "hair" },
    { q: "There are three (window) _______________ in my bedroom.", a: "windows" },
    { q: "The farmer has ten (pig) _______________ and five (cow) _______________.", a: "pigs and cows" },
    { q: "The beautiful bird (sing) _______________ a song every morning.", a: "sings" },
    { q: "Please wash your (hand) _______________ before you eat.", a: "hands" },
    { q: "Anna (buy) _______________ a red hat today.", a: "buys" },
    { q: "My house has two (door) _______________ and four rooms.", a: "doors" },
    { q: "The cat likes to catch (mouse) _______________.", a: "mice" },
    { q: "We (sit) _______________ on the chairs in the living room.", a: "sit" },
    { q: "He uses his (mouth) _______________ to eat and speak.", a: "mouth" },
    { q: "She wears two black (shoe) _______________ on her feet.", a: "shoes" },
    { q: "Tom (open) _______________ his book to read.", a: "opens" },
    { q: "The mother (close) _______________ the door quietly so the baby can sleep.", a: "closes" }

  ];

  function renderGrammar() {
    let qHtml = `<div class="quiz-question fade-in" style="text-align: left;">
      <h2 style="color: var(--text-main); margin-bottom: 1.5rem;">B. Điền từ vào chỗ trống (Ngữ pháp A1 - 40 câu)</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem;"><strong>Mẹo:</strong> He/She/It -> Động từ thêm s/es. Danh từ số nhiều -> Thêm s/es.</p>
    `;
    
    grammarQuestions.forEach((item, index) => {
      qHtml += `
        <div style="margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <label style="font-weight: 500;">${index + 1}. ${item.q.replace('_______________', `<input type="text" id="gq${index}" style="padding: 5px 10px; border: 1px solid var(--border); border-radius: 4px; font-family: inherit; font-size: 1rem; width: 120px;" autocomplete="off">`)}</label>
          <div id="gres${index}" style="font-size: 0.9rem; font-weight: 600; display: none;"></div>
        </div>
      `;
    });
    
    qHtml += `<button id="checkGrammarBtn" style="margin-top: 1rem; padding: 10px 20px; background: var(--primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: bold; font-family: inherit;">Kiểm tra đáp án</button></div>`;
    
    practiceContent.innerHTML = qHtml;

    document.getElementById('checkGrammarBtn').addEventListener('click', () => {
      let score = 0;
      grammarQuestions.forEach((item, index) => {
        const inputVal = document.getElementById(`gq${index}`).value.trim().toLowerCase();
        const resDiv = document.getElementById(`gres${index}`);
        resDiv.style.display = 'block';
        if (inputVal === item.a.toLowerCase()) {
          resDiv.style.color = 'var(--success)';
          resDiv.innerHTML = '✅ Đúng!';
          score++;
        } else {
          resDiv.style.color = 'var(--danger)';
          resDiv.innerHTML = `❌ Sai. Đáp án đúng là: <strong>${item.a}</strong>`;
        }
      });
      alert(`Bạn làm đúng ${score}/${grammarQuestions.length} câu!`);
    });
  }

  const quizQuestions = [
    { q: "The man who works in a ________ and helps sick people is a doctor.", options: ["hospital", "car", "park", "tree"], a: 0 },
    { q: "I am very ________. Can you give me a bowl of rice and some meat?", options: ["happy", "thirsty", "hungry", "cold"], a: 2 },
    { q: "Apples, bananas, and oranges are kinds of ________.", options: ["vegetable", "water", "meat", "fruit"], a: 3 },
    { q: "I want to buy bread, milk, and eggs. I need to go to the ________.", options: ["school", "supermarket", "phone", "hospital"], a: 1 },
    { q: "My mother's son is my ________.", options: ["brother", "sister", "boy", "friend"], a: 0 },
    { q: "It is 10:00 PM. I am tired. I want to go to my bedroom and ________.", options: ["wake up", "read", "study", "sleep"], a: 3 },
    { q: "In the morning, I always drink a cup of hot ________ to stay awake.", options: ["coffee", "bread", "rice", "fish"], a: 0 },
    { q: "Today the sun is bright and it is 38 degrees. It is very ________.", options: ["cold", "hot", "good", "small"], a: 1 },
    { q: "The person who teaches students in a school is a ________.", options: ["doctor", "girl", "teacher", "friend"], a: 2 },
    { q: "We go to the ________ to walk under the trees and play.", options: ["park", "bus", "house", "phone"], a: 0 },
    { q: "She likes to ________ a book before she goes to bed.", options: ["eat", "drink", "read", "go"], a: 2 },
    { q: "When I feel ________, I want to drink a glass of cold water.", options: ["thirsty", "happy", "small", "big"], a: 0 },
    { q: "This cake is very ________. I like it a lot!", options: ["sad", "good", "cold", "thirsty"], a: 1 },
    { q: "I live in a ________ house. It only has one room.", options: ["small", "big", "hot", "happy"], a: 0 },
    { q: "I don't have a car or a motorbike. I take the ________ to go to work.", options: ["tree", "bus", "book", "phone"], a: 1 },
    { q: "A dog can run, but a fish can only swim. Fish live in the ________.", options: ["water", "bread", "egg", "meat"], a: 0 },
    { q: "Mary got a 10 in her English test. She is very ________.", options: ["sad", "angry", "happy", "hot"], a: 2 },
    { q: "Children usually ________ football in the school yard.", options: ["sleep", "play", "drink", "read"], a: 1 },
    { q: "Every morning, I ________ at 6:30 AM.", options: ["sleep", "wake up", "eat", "walk"], a: 1 },
    { q: "I use my ________ to call my friends and my family.", options: ["book", "car", "phone", "bus"], a: 2 },
    { q: "A small animal that likes cheese and is chased by a cat is a ________.", options: ["cow", "mouse", "bear", "bird"], a: 1 },
    { q: "The color of a ripe banana or the sun is ________.", options: ["black", "yellow", "red", "blue"], a: 1 },
    { q: "You put this on your head when you go outside.", options: ["hat", "shoe", "pants", "shirt"], a: 0 },
    { q: "We use our ________ to hear sounds and music.", options: ["eyes", "nose", "ears", "mouth"], a: 2 },
    { q: "In the ________, people make food like meat and fish.", options: ["bathroom", "table", "window", "kitchen"], a: 3 },
    { q: "You look tired. Please ________ down on the chair.", options: ["stand", "sit", "open", "sing"], a: 1 },
    { q: "This animal is very big, gives milk, and says 'Moo'.", options: ["dog", "cow", "chicken", "monkey"], a: 1 },
    { q: "You have five fingers on each ________.", options: ["foot", "leg", "hand", "head"], a: 2 },
    { q: "When a room is dark, you can ________ the window to get some sunlight.", options: ["close", "open", "write", "buy"], a: 1 },
    { q: "At school, students must ________ to the teacher carefully.", options: ["listen", "cook", "sing", "buy"], a: 0 },
    { q: "Girls and women often wear a beautiful ________ to a party.", options: ["pen", "door", "dress", "horse"], a: 2 },
    { q: "I use a ________ to type messages and watch videos on the internet.", options: ["computer", "bed", "chair", "room"], a: 0 },
    { q: "The leaves on a tree and the grass are usually ________.", options: ["red", "black", "blue", "green"], a: 3 },
    { q: "A tall animal that you can ride fast is a ________.", options: ["pig", "mouse", "horse", "bird"], a: 2 },
    { q: "If you want to get new clothes from a shop, you have to ________ them.", options: ["sell", "buy", "speak", "write"], a: 1 },
    { q: "Don't ________ in the library! Be quiet!", options: ["speak", "close", "sit", "stand"], a: 0 },
    { q: "I use a blue ________ to do my homework on paper.", options: ["table", "door", "pen", "room"], a: 2 },
    { q: "A strawberry or an apple is often this color: ________.", options: ["black", "blue", "red", "green"], a: 2 },
    { q: "This animal likes to eat bananas and climb trees.", options: ["bear", "monkey", "dog", "cat"], a: 1 },
    { q: "I am sleepy. I go to my room and jump on my ________.", options: ["bathroom", "bed", "kitchen", "window"], a: 1 }

  ];

  function renderQuiz() {
    let qHtml = `<div class="quiz-question fade-in" style="text-align: left;">
      <h2 style="color: var(--text-main); margin-bottom: 2rem;">A. Trắc nghiệm (40 câu)</h2>
    `;
    
    quizQuestions.forEach((item, index) => {
      qHtml += `
        <div style="margin-bottom: 2rem;">
          <p style="font-weight: 600; font-size: 1.1rem; margin-bottom: 1rem;">${index + 1}. ${item.q}</p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="qopts${index}">
            ${item.options.map((opt, i) => `
              <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-sm); transition: background 0.2s;">
                <input type="radio" name="qq${index}" value="${i}">
                ${opt}
              </label>
            `).join('')}
          </div>
          <div id="qres${index}" style="margin-top: 0.5rem; font-weight: bold; display: none;"></div>
        </div>
      `;
    });
    
    qHtml += `<button id="checkQuizBtn" style="padding: 12px 24px; background: var(--primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: bold; font-family: inherit; font-size: 1.1rem;">Nộp bài</button></div>`;
    
    practiceContent.innerHTML = qHtml;

    document.getElementById('checkQuizBtn').addEventListener('click', () => {
      let score = 0;
      quizQuestions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="qq${index}"]:checked`);
        const resDiv = document.getElementById(`qres${index}`);
        resDiv.style.display = 'block';
        
        if (!selected) {
          resDiv.style.color = 'var(--danger)';
          resDiv.innerHTML = `❌ Chưa chọn. Đáp án đúng là: <strong>${item.options[item.a]}</strong>`;
          return;
        }

        const selectedVal = parseInt(selected.value);
        if (selectedVal === item.a) {
          resDiv.style.color = 'var(--success)';
          resDiv.innerHTML = '✅ Chính xác!';
          score++;
        } else {
          resDiv.style.color = 'var(--danger)';
          resDiv.innerHTML = `❌ Sai. Đáp án đúng là: <strong>${item.options[item.a]}</strong>`;
        }
      });
      alert(`Bạn đạt điểm ${score}/${quizQuestions.length}!`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Load reading by default
  renderReading();
}
