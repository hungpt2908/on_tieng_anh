import fs from 'fs';

let content = fs.readFileSync('src/a1Practice.js', 'utf8');

// Append new reading
const newReading = `
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 13: Giải trí và Thể thao (Entertainment & Sports)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"On the weekend, I go to a party. I meet my friends and we talk a lot. We start a fun game and play football. Our team is very good! When we are bored, we watch a funny movie or listen to pop music. My friend plays the guitar, we sing a happy song and tell a bedtime story. We use a camera to take photos and send them to our parents. I learn that friends are never bad!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 14: Trong nhà và Bàn ăn (Home & Dining)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I look at the clock on the wall. It is time to eat! I turn on the lamp. On the table, there is a bottle of water and a glass. I use a bowl, a spoon, and a fork to eat my food. It is not hard! After eating, I wash my face and look in the mirror. I wear my watch and go outside. I wait for the bus to go to school."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 15: Thế giới và Cảm xúc (World & Emotions)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"We live in a beautiful world. We breathe clean air. I walk on green grass and cross a long bridge to an island. On the beach, I play with sand and throw a stone. I swim in a water pool. In winter, water turns to ice, but a fire is hot. Sometimes I lose my money and feel angry or scared. A poor man wants to be rich. A cheap shirt is not expensive. If I find my money, I stop crying and smile!"</p>
`;
content = content.replace('</div>\n    `;\n  }', newReading + '      </div>\n    `;\n  }');

// Append Grammar Questions
const newGrammarQuestions = `,
  // Part 5
  { q: "He has two expensive (watch) _______________.", a: "watches" },
  { q: "We need to buy four (glass) _______________ for the party.", a: "glasses" },
  { q: "The grandfather tells many old (story) _______________ to the children.", a: "stories" },
  { q: "I love listening to pop (music) _______________ every day.", a: "music" },
  { q: "There are three fun (party) _______________ this weekend.", a: "parties" },
  { q: "Children love playing with the (sand) _______________ on the beach.", a: "sand" },
  { q: "She puts a lot of (ice) _______________ in her drink.", a: "ice" },
  { q: "We need fresh (air) _______________ in this room.", a: "air" },
  { q: "The baby (find) _______________ a small toy under the bed.", a: "finds" },
  { q: "The angry man (talk) _______________ very loudly.", a: "talks" },
  { q: "He (stop) _______________ his car at the red light.", a: "stops" },
  { q: "The rich woman (use) _______________ her expensive camera.", a: "uses" },
  { q: "I wait for him, but he never (answer) _______________ my message.", a: "answers" },
  { q: "David (send) _______________ a letter to his friend.", a: "sends" },
  { q: "The teacher (start) _______________ the lesson at 8 AM.", a: "starts" },
  { q: "I am very thirsty. I want two (bottle) _______________ of water.", a: "bottles" },
  { q: "Look! The police officer (wait) _______________ for you.", a: "waits" },
  { q: "My dog (lose) _______________ his favorite ball.", a: "loses" },
  { q: "They (meet) _______________ their friends at the park.", a: "meet" },
  { q: "My favorite (song) _______________ is 'Happy New Year'.", a: "song" }
];`;
content = content.replace('a: "dirty" }\n];', 'a: "dirty" }' + newGrammarQuestions);

const newQuizQuestions = `,
  // Part 5
  { q: "You put this on your wrist (cổ tay) to know the time. What is it?", options: ["clock", "watch", "mirror", "lamp"], a: 1 },
  { q: "When a person has a lot of money, big houses, and expensive cars, they are ________.", options: ["poor", "bad", "rich", "bored"], a: 2 },
  { q: "I want to drink some orange juice. Please give me a ________.", options: ["fork", "glass", "wall", "story"], a: 1 },
  { q: "Eleven players run and kick a round ball to score a goal. This sport is ________.", options: ["party", "guitar", "football", "game"], a: 2 },
  { q: "You look at this object to see your own face and fix your hair.", options: ["mirror", "sand", "song", "pool"], a: 0 },
  { q: "A Ferrari car costs 1 million dollars. It is very ________!", options: ["cheap", "funny", "angry", "expensive"], a: 3 },
  { q: "When you want to take a beautiful picture, you need to use a ________.", options: ["fire", "camera", "fork", "air"], a: 1 },
  { q: "In winter, water gets very cold and turns into ________.", options: ["stone", "ice", "grass", "fire"], a: 1 },
  { q: "It is very dark in this room. Can you turn on the ________?", options: ["lamp", "watch", "island", "team"], a: 0 },
  { q: "People use a keyboard and a mouse to play a ________ on the computer.", options: ["movie", "game", "wall", "song"], a: 1 },
  { q: "If you watch a ghost movie alone at night, you might feel ________.", options: ["funny", "rich", "scared", "angry"], a: 2 },
  { q: "To cross a wide river, cars and people move on a ________.", options: ["bridge", "bottle", "team", "sand"], a: 0 },
  { q: "We need a ________ to eat rice or soup, and a fork to eat meat.", options: ["spoon", "glass", "clock", "camera"], a: 0 },
  { q: "Before going to bed, parents often read a bedtime ________ to their children.", options: ["movie", "story", "world", "pool"], a: 1 },
  { q: "I cannot ________ my keys! Where are they?", options: ["find", "lose", "meet", "wait"], a: 0 },
  { q: "My friend tells me a joke, and I laugh a lot because it is very ________.", options: ["bored", "angry", "bad", "funny"], a: 3 },
  { q: "If you drop your phone in the water, that is very ________.", options: ["hard", "song", "bad", "cheap"], a: 2 },
  { q: "He plays a beautiful instrument with 6 strings (dây). It is a ________.", options: ["spoon", "camera", "guitar", "wall"], a: 2 },
  { q: "Tomorrow I will ________ my friend at the coffee shop at 8 AM.", options: ["meet", "stop", "send", "start"], a: 0 },
  { q: "A group of people playing sports together is called a ________.", options: ["team", "party", "pool", "game"], a: 0 }
];`;
content = content.replace('a: 0 }\n];', 'a: 0 }' + newQuizQuestions);

// update header texts
content = content.replace('B. Điền từ vào chỗ trống (Ngữ pháp A1 - 80 câu)', 'B. Điền từ vào chỗ trống (Ngữ pháp A1 - 100 câu)');
content = content.replace('A. Trắc nghiệm (80 câu)', 'A. Trắc nghiệm (100 câu)');

fs.writeFileSync('src/a1Practice.js', content, 'utf8');
console.log('Successfully updated src/a1Practice.js with Part 5.');
