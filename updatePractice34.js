import fs from 'fs';

let content = fs.readFileSync('src/a1Practice.js', 'utf8');

// Append new reading
const newReading = `
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 7: Thời tiết, Thời gian và Thiên nhiên</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"Today, the weather is beautiful. In the morning, the sun is bright in the sky. There is no rain or wind. I love summer because I can see white clouds and swim in the river. In winter, there is cold snow on the mountain. At night and in the evening, I look at the moon and a bright star. A day has 24 hours. A week has 7 days. A month has 30 days, and a year has 365 days!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 8: Giao thông và Thành phố</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I like to travel! In the afternoon, I ride my bike on the street near my house. My dad can drive his car on the long road. We go to a nice restaurant to eat. Sometimes, we go to the station to take a fast train. If we want to travel far, we go to the airport and take a plane; it can fly very high. On the water, we use a small boat or a big ship. I always look at a map to know where to go!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 9: Trường học và Hành động</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I study at a wooden desk. I have a big bag. Inside, I have a notebook, a pencil, an eraser, and a ruler. I use them to write and draw on paper. I also keep my toys in a small box. The teacher writes on the big board. I always help my friends. When I hear music, I like to dance and jump. I love my life and always smile!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 10: People and Places (Con người và Địa điểm)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I live in a big city, but my grandmother lives in a quiet village. In the city, there are many tall buildings, fast cars, and busy workers. You can see a big bank, a clothes shop, and a zoo. The police keep everyone safe. In the village, life is slow. I can see an old farmer working on a green farm. The air is clean, and the streets are never dirty. I think the village is beautiful."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 11: Food and Kitchen (Đồ ăn và Nhà bếp)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I want to make a new cake! I need flour and sugar. I do not use salt. I also want to eat fruit, so I wash an apple and a banana. For dinner, my mother uses a knife to cut a tomato and a potato. She puts the food on a plate. I use a cup to drink water. Cooking is very easy, not hard!"</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 12: Actions and Nature (Hành động và Thiên nhiên)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"Look at that family! The man is a driver, and the woman is a singer. They have a young child and a cute baby. The baby starts to cry, but the father makes a funny face, and the baby starts to laugh. A nurse walks by and smiles. Sometimes, they go to the beach to look at the blue sea. I hear the birds and touch a beautiful flower in the garden. I give it some water. Nature is amazing!"</p>
`;
content = content.replace('</div>\\n    `;\\n  }', newReading + '      </div>\\n    `;\\n  }');

// Append Grammar Questions
const newGrammarQuestions = `,
  // Part 3
  { q: "The little boy (jump) _______________ very high.", a: "jumps" },
  { q: "There are seven (day) _______________ in a week.", a: "days" },
  { q: "He has two big (box) _______________ in his room.", a: "boxes" },
  { q: "The bird (fly) _______________ in the sky.", a: "flies" },
  { q: "My mother (drive) _______________ her car to work.", a: "drives" },
  { q: "I need some (paper) _______________ to draw.", a: "paper" },
  { q: "There are 12 (month) _______________ in a year.", a: "months" },
  { q: "She wants to buy three new (pencil) _______________.", a: "pencils" },
  { q: "Look at those bright (star) _______________ at night!", a: "stars" },
  { q: "The teacher writes on the (board) _______________.", a: "board" },
  { q: "Children love playing in the cold (snow) _______________.", a: "snow" },
  { q: "My father (help) _______________ me with my homework.", a: "helps" },
  { q: "There are many (boat) _______________ on the river.", a: "boats" },
  { q: "Anna (smile) _______________ when she is happy.", a: "smiles" },
  { q: "The frogs (swim) _______________ in the water.", a: "swim" },
  { q: "We learn English 3 days a (week) _______________.", a: "week" },
  { q: "He (ride) _______________ his bike to school every day.", a: "rides" },
  { q: "I have two heavy (bag) _______________ today.", a: "bags" },
  { q: "The little girl (dance) _______________ beautifully.", a: "dances" },
  { q: "I don't like heavy (rain) _______________.", a: "rain" },
  // Part 4
  { q: "I see two tall (man) _______________ near the bank.", a: "men" },
  { q: "There are five (woman) _______________ in the shop.", a: "women" },
  { q: "The mother has three (child) _______________.", a: "children" },
  { q: "Look! The two (baby) _______________ are crying.", a: "babies" },
  { q: "Be careful! Those (knife) _______________ are very sharp.", a: "knives" },
  { q: "He buys two kilos of (tomato) _______________.", a: "tomatoes" },
  { q: "She cooks meat with some (potato) _______________.", a: "potatoes" },
  { q: "Please do not put too much (salt) _______________ in the soup.", a: "salt" },
  { q: "Too much (sugar) _______________ is bad for you.", a: "sugar" },
  { q: "My father (wash) _______________ his car every Sunday.", a: "washes" },
  { q: "The little boy (cry) _______________ loudly.", a: "cries" },
  { q: "The hot water is dangerous. He (touch) _______________ it and burns his hand.", a: "touches" },
  { q: "The police officer (see) _______________ the bad man.", a: "sees" },
  { q: "The farmer (give) _______________ an apple to the child.", a: "gives" },
  { q: "The teacher (think) _______________ about the lesson.", a: "thinks" },
  { q: "I eat two (apple) _______________ every day.", a: "apples" },
  { q: "Monkeys love eating (banana) _______________.", a: "bananas" },
  { q: "There are many big (city) _______________ in the world.", a: "cities" },
  { q: "The (nurse) _______________ helps the doctor.", a: "nurse" },
  { q: "My hands are very (dirty) _______________.", a: "dirty" }
];`;
content = content.replace('a: "closes" }\\n\\n  ];', 'a: "closes" }' + newGrammarQuestions);

const newQuizQuestions = `,
  // Part 3
  { q: "You use this to draw a straight line. What is it?", options: ["eraser", "ruler", "board", "map"], a: 1 },
  { q: "The weather is very hot and you don't go to school. What season is it?", options: ["morning", "summer", "winter", "afternoon"], a: 1 },
  { q: "There are 24 hours in one ________.", options: ["month", "week", "day", "year"], a: 2 },
  { q: "Look up! You can see the moon and the stars in the ________ at night.", options: ["street", "sky", "desk", "cloud"], a: 1 },
  { q: "To travel from Vietnam to America very fast, people go to the airport and take a ________.", options: ["bike", "plane", "boat", "train"], a: 1 },
  { q: "The person standing in front of the classroom writes the lesson on the ________.", options: ["box", "bag", "board", "paper"], a: 2 },
  { q: "When it is very cold in ________, white snow falls from the sky.", options: ["summer", "morning", "winter", "evening"], a: 2 },
  { q: "I don't know the way to the new supermarket. I need to look at a ________.", options: ["map", "notebook", "wind", "box"], a: 0 },
  { q: "People wait here to catch a bus or a train.", options: ["station", "bag", "desk", "restaurant"], a: 0 },
  { q: "If you write a wrong word with a pencil, you use an ________ to clean it.", options: ["paper", "eraser", "ruler", "box"], a: 1 },
  { q: "A vehicle with two wheels that you have to pedal (đạp bằng chân) is a ________.", options: ["ship", "boat", "train", "bike"], a: 3 },
  { q: "It shines brightly during the day, is yellow, and gives us light. What is it?", options: ["cloud", "moon", "sun", "rain"], a: 2 },
  { q: "You put your books, pens, and notebook in this when you go to school.", options: ["box", "bag", "desk", "paper"], a: 1 },
  { q: "Water that falls from dark clouds is called ________.", options: ["snow", "wind", "rain", "star"], a: 2 },
  { q: "I want to eat delicious food cooked by a chef. I will go to a ________.", options: ["paper", "restaurant", "notebook", "map"], a: 1 },
  { q: "At 8:00 PM, I usually have dinner with my family. It is the ________.", options: ["morning", "afternoon", "evening", "night"], a: 2 },
  { q: "If you want to move on the water to catch fish, you need a ________.", options: ["boat", "bike", "train", "plane"], a: 0 },
  { q: "A big vehicle that travels on the ocean and carries many things is a ________.", options: ["road", "bike", "ship", "train"], a: 2 },
  { q: "Students sit at their ________ to study and write.", options: ["boards", "bags", "desks", "clouds"], a: 2 },
  { q: "Frogs and fish are very good at this action. They can ________.", options: ["drive", "swim", "fly", "draw"], a: 1 },
  // Part 4
  { q: "The person who works in a hospital and helps the doctor is a ________.", options: ["worker", "farmer", "nurse", "singer"], a: 2 },
  { q: "My shirt is not clean. It has mud on it. It is very ________.", options: ["fast", "easy", "dirty", "tall"], a: 2 },
  { q: "You go to this place to keep your money safe.", options: ["bank", "zoo", "garden", "sea"], a: 0 },
  { q: "This math homework is not ________. I cannot do it!", options: ["short", "easy", "slow", "old"], a: 1 },
  { q: "You go to this place to see many wild animals like bears, monkeys, and tigers.", options: ["forest", "shop", "zoo", "bank"], a: 2 },
  { q: "When the baby is sad or hungry, he will ________.", options: ["laugh", "look", "wash", "cry"], a: 3 },
  { q: "A turtle takes 1 hour to walk 1 meter. It is very ________.", options: ["fast", "tall", "slow", "clean"], a: 2 },
  { q: "To make your tea sweet, you should put some ________ in it.", options: ["salt", "sugar", "potato", "tomato"], a: 1 },
  { q: "The man who grows rice, fruit, and vegetables is a ________.", options: ["police", "nurse", "singer", "farmer"], a: 3 },
  { q: "Please ________ at the picture on the wall!", options: ["find", "use", "hear", "look"], a: 3 },
  { q: "You use this sharp tool to cut meat or fruit. What is it?", options: ["knife", "police", "driver", "nurse"], a: 0 },
  { q: "I go to the clothes ________ to buy a new shirt.", options: ["sea", "shop", "cinema", "pool"], a: 1 },
  { q: "It is very dark outside. I cannot ________ anything.", options: ["touch", "see", "give", "think"], a: 1 },
  { q: "Do not ________ that hot water, it will burn your hands!", options: ["hear", "touch", "give", "think"], a: 1 },
  { q: "You use this round object to hold your food (like rice or meat) when eating.", options: ["cup", "plate", "shop", "farm"], a: 1 },
  { q: "An adult male human (người nam trưởng thành) is called a ________.", options: ["baby", "woman", "child", "man"], a: 3 },
  { q: "Children love going to the ________ to play with sand and swim in the water.", options: ["bank", "beach", "forest", "pool"], a: 1 },
  { q: "He tells a very funny story, and everyone starts to ________.", options: ["laugh", "cry", "wash", "look"], a: 0 },
  { q: "When I listen carefully, I can ________ a dog barking outside.", options: ["see", "hear", "want", "give"], a: 1 },
  { q: "A beautiful plant that grows in a garden and smells good is a ________.", options: ["flower", "village", "shop", "city"], a: 0 }
];`;
content = content.replace('a: 1 }\\n  ];', 'a: 1 }' + newQuizQuestions);

// update header texts
content = content.replace('B. Điền từ vào chỗ trống (Ngữ pháp A1 - 40 câu)', 'B. Điền từ vào chỗ trống (Ngữ pháp A1 - 80 câu)');

fs.writeFileSync('src/a1Practice.js', content, 'utf8');
console.log('Successfully updated src/a1Practice.js with Parts 3 and 4.');
