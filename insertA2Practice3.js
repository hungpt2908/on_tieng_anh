import fs from 'fs';

const newQuizQuestions = [
  { q: "You use this part of your body to think, learn, and remember things.", options: ["heart", "muscle", "brain", "stomach"], a: 2 },
  { q: "I ate three big pizzas yesterday. Now I have a terrible __________.", options: ["headache", "stomachache", "back", "cough"], a: 1 },
  { q: "A vehicle that drives very fast to take sick or injured people to the hospital is an __________.", options: ["ambulance", "pharmacy", "surgery", "disease"], a: 0 },
  { q: "My __________ hurts because I was lifting heavy boxes all day yesterday.", options: ["blood", "teeth", "medicine", "back"], a: 3 },
  { q: "If you have a terrible __________, you should go to see the dentist immediately.", options: ["toothache", "fever", "allergy", "cold"], a: 0 },
  { q: "When the doctor listens to your chest, he is checking your __________.", options: ["skin", "heart", "bone", "tooth"], a: 1 },
  { q: "I cannot eat peanuts because I have an __________ to them.", options: ["headache", "flu", "allergy", "fever"], a: 2 },
  { q: "The person who stays in the hospital to get treatment from doctors is a __________.", options: ["dentist", "patient", "pharmacy", "vitamin"], a: 1 },
  { q: "You need to swallow this small, round white __________ with some water.", options: ["diet", "muscle", "pill", "blood"], a: 2 },
  { q: "Drinking milk and eating yogurt is very good for your __________, making them hard and strong.", options: ["diseases", "bones", "pain", "fevers"], a: 1 },
  { q: '"Atishoo!". I think I am catching a __________.', options: ["back", "cold", "muscle", "surgery"], a: 1 },
  { q: "Her body temperature is 39 degrees Celsius. She has a high __________.", options: ["fever", "cough", "skin", "diet"], a: 0 },
  { q: "After spinning around in circles for two minutes, the boy felt very __________.", options: ["fit", "healthy", "dizzy", "strong"], a: 2 },
  { q: "The red liquid that flows inside your body is called __________.", options: ["pill", "skin", "blood", "bone"], a: 2 },
  { q: "I cannot speak loudly today. I have a __________ throat.", options: ["sick", "sore", "fit", "thin"], a: 1 },
  { q: "Eating a lot of fast food and not exercising will make you __________.", options: ["fit", "strong", "healthy", "fat"], a: 3 },
  { q: "We must go to the __________ to buy some medicine for your headache.", options: ["ambulance", "surgery", "pharmacy", "dentist"], a: 2 },
  { q: "He exercises every day, eats a good diet, and never gets sick. He is very __________.", options: ["weak", "dizzy", "healthy", "sore"], a: 2 },
  { q: "After the car accident, the man needed a major __________ to fix his leg.", options: ["surgery", "disease", "throat", "diet"], a: 0 },
  { q: "Cancer and Covid-19 are dangerous __________.", options: ["vitamins", "diseases", "patients", "pills"], a: 1 }
];

const newGrammarQuestions = [
  { q: "Look at those dark clouds in the sky! It (rain) ____________________ soon.", a: "is going to rain" },
  { q: "\"I have a terrible headache.\" - \"Wait here. I (bring) ____________________ you a pill.\"", a: "will bring" },
  { q: "I have already booked an appointment. I (see) ____________________ the dentist tomorrow.", a: "am going to see" },
  { q: "I think people (live) ____________________ on Mars in the future.", a: "will live" },
  { q: "\"Oh no, I forgot my wallet!\" - \"Don't worry, I (pay) ____________________ for your lunch.\"", a: "will pay" },
  { q: "Watch out! You (fall) ____________________ into that hole!", a: "are going to fall" },
  { q: "She bought a lot of vegetables yesterday because she (make) ____________________ a healthy salad for dinner tonight.", a: "is going to make" },
  { q: "I promise I (not/tell) ____________________ anyone about your secret disease.", a: "won't tell" },
  { q: "Look at the doctor's sad face. I think he (give) ____________________ us bad news.", a: "is going to give" },
  { q: "\"The phone is ringing!\" - \"I (answer) ____________________ it!\"", a: "will answer" },
  { q: "Next month, my grandfather (have) ____________________ heart surgery. The hospital has confirmed the date.", a: "is going to have" },
  { q: "I hope my father (recover) ____________________ soon from his illness.", a: "will recover" },
  { q: "I (start) ____________________ a new diet tomorrow. I have already bought all the healthy food.", a: "am going to start" },
  { q: "\"It's freezing in here!\" - \"I (close) ____________________ the window.\"", a: "will close" },
  { q: "We (visit) ____________________ the patient in the hospital this weekend. We agreed on this yesterday.", a: "are going to visit" },
  { q: "I don't think this medicine (cure) ____________________ your allergy.", a: "will cure" },
  { q: "Look at his driving! He (hit) ____________________ that car!", a: "is going to hit" },
  { q: "\"Are you ready to order?\" - \"Yes, I (have) ____________________ a salad, please.\"", a: "will have" },
  { q: "She is feeling very dizzy and pale. She (faint) ____________________!", a: "is going to faint" },
  { q: "I (go) ____________________ to the pharmacy to buy some vitamins later today. It's on my to-do list.", a: "am going to go" }
];

const newReadingPassages = [
  {
    title: "Đoạn 1: A Visit to the Doctor",
    titleVi: "Đi khám bệnh",
    content: "Yesterday, I didn't feel well. I had a terrible headache, a fever, and a cough. My whole body felt weak and sore. I went to the hospital to see a doctor. He checked my heart, listened to me breathe, and looked at my throat. The doctor said: 'Don't worry, it's not a dangerous disease. You just have the flu. I am going to give you a prescription. If you take these pills, you will recover soon.'",
    vocab: [
      { w: "Fever", vi: "Cơn sốt" },
      { w: "Cough", vi: "Ho" },
      { w: "Breathe", vi: "Hít thở" },
      { w: "Disease", vi: "Căn bệnh" },
      { w: "Recover", vi: "Hồi phục" }
    ]
  },
  {
    title: "Đoạn 2: Making a Healthy Change",
    titleVi: "Thay đổi để khỏe mạnh",
    content: "Last year, I was very fat and always felt dizzy. My stomach, my back, and my bones always hurt. I went to the hospital, and they tested my blood. The doctor said my health was bad. So, I made a plan! Tomorrow, I am going to start a strict diet. I will eat more food with vitamins and less sugar. I am going to join a gym to build my muscles and get fit. I promise I will become a strong and healthy person!",
    vocab: [
      { w: "Dizzy", vi: "Chóng mặt" },
      { w: "Blood", vi: "Máu" },
      { w: "Diet", vi: "Chế độ ăn kiêng" },
      { w: "Vitamins", vi: "Vitamin" },
      { w: "Muscles", vi: "Cơ bắp" }
    ]
  },
  {
    title: "Đoạn 3: An Emergency",
    titleVi: "Một trường hợp khẩn cấp",
    content: "While I was walking on the street, I saw a thin old man fall to the ground. His face was pale, and his skin was cold. He cried in pain: 'My chest hurts!'. I thought: 'Oh no, he is going to have a heart attack!'. I immediately shouted: 'I will call an ambulance!'. Five minutes later, the paramedics arrived and took the patient away. Next week, he is going to have heart surgery. I hope the doctor will cure him.",
    vocab: [
      { w: "Thin", vi: "Gầy gò" },
      { w: "Skin", vi: "Làn da" },
      { w: "Ambulance", vi: "Xe cứu thương" },
      { w: "Patient", vi: "Bệnh nhân" },
      { w: "Surgery", vi: "Cuộc phẫu thuật" }
    ]
  }
];

let a2PracticeStr = fs.readFileSync('src/a2Practice.js', 'utf8');

// Append to quizQuestions array
const quizQuestionsRegex = /(const quizQuestions = \[)([\s\S]*?)(\];)/;
const qMatch = a2PracticeStr.match(quizQuestionsRegex);
if (qMatch) {
  let existingContent = qMatch[2];
  if (existingContent.trim() !== '') existingContent += ',\n';
  const newContent = newQuizQuestions.map(q => '  ' + JSON.stringify(q)).join(',\n');
  a2PracticeStr = a2PracticeStr.replace(quizQuestionsRegex, (match, p1, p2, p3) => `${p1}${p2},\n${newContent}\n${p3}`);
}

// Append to grammarQuestions array
const grammarQuestionsRegex = /(const grammarQuestions = \[)([\s\S]*?)(\];)/;
const gMatch = a2PracticeStr.match(grammarQuestionsRegex);
if (gMatch) {
  let existingContent = gMatch[2];
  if (existingContent.trim() !== '') existingContent += ',\n';
  const newContent = newGrammarQuestions.map(q => '  ' + JSON.stringify(q)).join(',\n');
  a2PracticeStr = a2PracticeStr.replace(grammarQuestionsRegex, (match, p1, p2, p3) => `${p1}${p2},\n${newContent}\n${p3}`);
}

// Append to readingPassages array
const readingPassagesRegex = /(const readingPassages = \[)([\s\S]*?)(\];)/;
const rMatch = a2PracticeStr.match(readingPassagesRegex);
if (rMatch) {
  let existingContent = rMatch[2];
  if (existingContent.trim() !== '') existingContent += ',\n';
  const newContent = newReadingPassages.map(q => '  ' + JSON.stringify(q)).join(',\n');
  a2PracticeStr = a2PracticeStr.replace(readingPassagesRegex, (match, p1, p2, p3) => `${p1}${p2},\n${newContent}\n${p3}`);
}

fs.writeFileSync('src/a2Practice.js', a2PracticeStr, 'utf8');
console.log('Appended A2 Part 3 Practice data successfully!');
