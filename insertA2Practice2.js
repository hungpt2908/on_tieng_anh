import fs from 'fs';

const newQuizQuestions = [
  { q: "At the end of the month, the company pays me my __________.", options: ["receipt", "salary", "colleague", "change"], a: 1 },
  { q: "When you finish eating at a restaurant, you ask the waiter to bring the __________ so you can pay.", options: ["receipt", "customer", "office", "bill"], a: 3 },
  { q: "I don't have any money in my bank, so I had to pay for the shoes in __________.", options: ["cash", "credit card", "receipt", "company"], a: 0 },
  { q: '"Excuse me, how much does this phone __________?" - "It is $500."', options: ["cost", "pay", "spend", "earn"], a: 0 },
  { q: "If you work from 8 AM to 10 PM every day without a break, your job is very __________.", options: ["lazy", "successful", "stressful", "helpful"], a: 2 },
  { q: "I gave the cashier a 100-dollar bill for a 90-dollar shirt. He gave me 10 dollars in __________.", options: ["change", "career", "wallet", "credit card"], a: 0 },
  { q: "I forgot my __________ at home! I don't have any money or cards to pay for the coffee.", options: ["skill", "meeting", "boss", "wallet"], a: 3 },
  { q: "The person who leads the team and tells you what to do is your __________.", options: ["boss", "company", "office", "discount"], a: 0 },
  { q: "We had a long __________ in the room to talk about the new project.", options: ["salary", "meeting", "receipt", "coin"], a: 1 },
  { q: "The people who come to a shop or a restaurant to buy things are called __________.", options: ["bosses", "colleagues", "customers", "careers"], a: 2 },
  { q: "To buy a house in the future, you need to __________ your money for many years.", options: ["spend", "save", "hire", "quit"], a: 1 },
  { q: "I hated my old job because the manager was very mean, so I __________.", options: ["earned", "cost", "quit", "spent"], a: 2 },
  { q: '"I forgot my money. Can you __________ me $10? I will pay you back tomorrow."', options: ["earn", "spend", "borrow", "lend"], a: 3 },
  { q: '"My computer is broken. Can I __________ your laptop for a few hours?"', options: ["lend", "earn", "borrow", "sell"], a: 2 },
  { q: "When you buy a TV, the shop assistant will give you a __________ to prove that you paid for it.", options: ["coin", "bill", "customer", "receipt"], a: 3 },
  { q: "I felt very sick, __________ I didn't go to work yesterday.", options: ["because", "so", "but", "while"], a: 1 },
  { q: "Black Friday is a great day for shopping because there is a big __________ on all items.", options: ["discount", "salary", "career", "colleague"], a: 0 },
  { q: "He doesn't like to work or study. He just wants to sleep all day. He is very __________.", options: ["hard-working", "professional", "lazy", "helpful"], a: 2 },
  { q: "Tomorrow, I have an __________ for a new job at the bank. I am so nervous!", options: ["office", "interview", "change", "cash"], a: 1 },
  { q: "A person who works in the same office with you is your __________.", options: ["boss", "customer", "colleague", "price"], a: 2 }
];

const newGrammarQuestions = [
  { q: "At 8:00 AM yesterday, I (work) _______________ in my office.", a: "was working" },
  { q: "While the manager (talk) _______________, my phone suddenly rang.", a: "was talking" },
  { q: "I (sleep) _______________ when my colleague knocked on the door.", a: "was sleeping" },
  { q: "Yesterday, I (spend) _______________ $200 on a new watch.", a: "spent" },
  { q: "When the boss entered the room, the workers (play) _______________ games on their computers.", a: "were playing" },
  { q: "While we (have) _______________ a meeting, the lights went out.", a: "were having" },
  { q: "She (drop) _______________ her glass while she was drinking water.", a: "dropped" },
  { q: "My mom (cook) _______________ dinner at 6 PM last night.", a: "was cooking" },
  { q: "I (pay) _______________ the bill by credit card yesterday.", a: "paid" },
  { q: "They (sell) _______________ their old car last month.", a: "sold" },
  { q: "What (you/do) _______________ at 9 PM last night?", a: "were you doing" },
  { q: "While I (walk) _______________ to the company, I met an old friend.", a: "was walking" },
  { q: "He (lose) _______________ his wallet at the market yesterday.", a: "lost" },
  { q: "A thief (steal) _______________ my purse while I was looking at the clothes.", a: "stole" },
  { q: "It rained heavily all day yesterday, so we (stay) _______________ in the hotel.", a: "stayed" },
  { q: "She (fall) _______________ down while she was running to the office.", a: "fell" },
  { q: "The beautiful dress (cost) _______________ me $50, but it was worth it.", a: "cost" },
  { q: "I (read) _______________ an important document when the customer came in.", a: "was reading" },
  { q: "They worked together and finally (finish) _______________ the difficult project.", a: "finished" },
  { q: "While I was cleaning the office, I (find) _______________ an old coin on the floor.", a: "found" }
];

const newReadingPassages = [
  {
    title: "Đoạn 1: A Busy Day at the Office",
    titleVi: "Một ngày bận rộn ở văn phòng",
    content: "My career is very important to me, but my job is sometimes stressful. Yesterday at 10 AM, while I was working in the office, my boss called me. We were having a meeting when an angry customer suddenly entered the room. My colleagues were very helpful and professional. We fixed the problem together. I felt tired but very successful.",
    vocab: [
      { w: "Career", vi: "Sự nghiệp" },
      { w: "Stressful", vi: "Áp lực / Căng thẳng" },
      { w: "Colleague", vi: "Đồng nghiệp" },
      { w: "Professional", vi: "Chuyên nghiệp" },
      { w: "Successful", vi: "Thành công" }
    ]
  },
  {
    title: "Đoạn 2: Shopping Disaster",
    titleVi: "Thảm họa mua sắm",
    content: "After work, I went to the mall to spend some money. I wanted to buy a shirt. When I looked at the price, it was very expensive. But the shop assistant said there was a 50% discount! So, I bought it. When I wanted to pay, I couldn't find my cash. While I was looking for my wallet, I realized a thief stole it! Luckily, I had my credit card in my pocket. I got my receipt and went home safely.",
    vocab: [
      { w: "Spend", vi: "Tiêu xài" },
      { w: "Discount", vi: "Sự giảm giá" },
      { w: "Cash", vi: "Tiền mặt" },
      { w: "Wallet", vi: "Ví tiền" },
      { w: "Receipt", vi: "Biên lai" }
    ]
  },
  {
    title: "Đoạn 3: The Interrupted Story",
    titleVi: "Câu chuyện bị gián đoạn",
    content: "While I was saving money to buy a house, something bad happened. One day, while I was walking on the street, I dropped my purse. I was looking for it everywhere when a hard-working man found it. He gave it back to me! I wanted to lend him some money or give him some change to say thank you. But he smiled and said his help was free!",
    vocab: [
      { w: "Saving", vi: "Đang tiết kiệm" },
      { w: "Dropped", vi: "Đã làm rơi" },
      { w: "Purse", vi: "Ví cầm tay" },
      { w: "Hard-working", vi: "Chăm chỉ" },
      { w: "Change", vi: "Tiền lẻ" }
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
console.log('Appended A2 Part 2 Practice data successfully!');
