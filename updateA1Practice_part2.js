import fs from 'fs';

let content = fs.readFileSync('src/a1Practice.js', 'utf8');

// Reading text addition
const extraReading = `
        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 4: At the Farm (Nông trại động vật)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"I am at a farm. I see many animals. I see a black dog and a white cat. There is a bird singing in the tree. I also see a fat pig, a brown horse, and a big cow. The cow gives milk. A monkey and a bear do not live on the farm, but there is a small mouse running around! My favorite animal here is the little chicken."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 5: My Body & Clothes (Cơ thể và Quần áo)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">"Look at me! I have a head with black hair. I have two eyes to see and two ears to listen. I use my nose to smell and my mouth to speak. I have two arms, two hands, two legs, and two feet. Today, I wear a red shirt, blue pants, and black shoes. I also wear a green hat and hold a beautiful yellow dress for my sister."</p>

        <h2 style="color: var(--primary); margin-bottom: 1rem; margin-top: 2rem;">Đoạn 6: My Room & Actions (Căn phòng và Hành động)</h2>
        <p style="font-size: 1.1rem; line-height: 1.8;">"This is my room. It is near the bathroom and the kitchen. Inside, I have a bed to sleep, a table, and a chair. I sit on the chair and stand up when I need to go out. I have a computer and a pen on the table. I use the pen to write. When it is cold, I close the door and the window. When it is hot, I open them. Sometimes, I sing a song and cook food. I love to buy new things for my room!"</p>
`;
content = content.replace('</div>\n    `;\n  }', extraReading + '      </div>\n    `;\n  }');

// Grammar Questions addition
const extraGrammar = `,
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
`;
// find the end of grammarQuestions array
content = content.replace('a: "good" }\n  ];', 'a: "good" }' + extraGrammar + '\n  ];');

// Quiz Questions addition
const extraQuiz = `,
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
`;
// find the end of quizQuestions array
content = content.replace('a: 2 }\n  ];', 'a: 2 }' + extraQuiz + '\n  ];');

// Need to fix grammar titles to show 40 questions instead of 20
content = content.replace('B. Điền từ vào chỗ trống (Ngữ pháp A1)', 'B. Điền từ vào chỗ trống (Ngữ pháp A1 - 40 câu)');
content = content.replace('A. Trắc nghiệm (20 câu)', 'A. Trắc nghiệm (40 câu)');

fs.writeFileSync('src/a1Practice.js', content, 'utf8');
console.log('Successfully updated a1Practice.js');
