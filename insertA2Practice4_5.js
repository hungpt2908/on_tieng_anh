import fs from 'fs';

const newQuizQuestions = [
  // PART 4
  { q: "A place with thousands of books where you can sit quietly and study is a __________.", options: ["university", "project", "library", "website"], a: 2 },
  { q: "To enter your Facebook account, you must type your email and your secret __________.", options: ["keyboard", "password", "battery", "result"], a: 1 },
  { q: "If you want to put a video from your computer onto YouTube for others to see, you have to __________ it.", options: ["delete", "download", "search", "upload"], a: 3 },
  { q: "Mathematics, History, and Science are my favorite __________ at school.", options: ["lessons", "knowledge", "subjects", "files"], a: 2 },
  { q: "I don't know the meaning of the word 'Environment'. I need to look it up in a __________.", options: ["dictionary", "software", "screen", "keyboard"], a: 0 },
  { q: "The final test was very difficult, but I studied hard, so I got a very good __________.", options: ["mouse", "message", "result", "battery"], a: 2 },
  { q: "\"Oh no! My phone is at 2%. It is going to die!\" - \"You need to __________ it right now.\"", options: ["delete", "charge", "turn off", "click"], a: 1 },
  { q: "I don't understand this math problem. Can you __________ it to me, please?", options: ["practice", "fail", "explain", "forget"], a: 2 },
  { q: "To keep your eyes healthy, you shouldn't look at the computer __________ in the dark.", options: ["keyboard", "file", "screen", "internet"], a: 2 },
  { q: "Mr. David is a great teacher. He __________ math at my school.", options: ["remembers", "improves", "passes", "teaches"], a: 3 },
  { q: "If you don't save your Word document in a __________, you might lose all your work.", options: ["file", "battery", "message", "keyboard"], a: 0 },
  { q: "To send an email or watch videos online, your computer must be connected to the __________.", options: ["project", "internet", "result", "dictionary"], a: 1 },
  { q: "Don't be lazy! You must __________ your English speaking every day to get better.", options: ["fail", "practice", "forget", "turn off"], a: 1 },
  { q: "I took a very ugly photo yesterday. I don't want anyone to see it, so I will __________ it.", options: ["upload", "save", "delete", "click"], a: 2 },
  { q: "Before you go to sleep, please __________ the television to save electricity.", options: ["turn on", "log in", "turn off", "upload"], a: 2 },
  { q: "I was so nervous before the driving __________, but finally, I passed it!", options: ["exam", "message", "library", "university"], a: 0 },
  { q: "Reading lots of books will give you a lot of __________ about the world.", options: ["battery", "homework", "knowledge", "websites"], a: 2 },
  { q: "He didn't study at all. He played games all night. Of course, he __________ the test.", options: ["passed", "improved", "prepared", "failed"], a: 3 },
  { q: "If you want to know about the weather today, you can __________ for it on Google.", options: ["type", "click", "search", "download"], a: 2 },
  { q: "A person uses the __________ to type letters and words into the computer.", options: ["screen", "mouse", "keyboard", "battery"], a: 2 },
  // PART 5
  { q: "A person who doesn't like to share things with other people is very __________.", options: ["polite", "selfish", "honest", "clever"], a: 1 },
  { q: "If you do something wrong to someone, you must __________ to them.", options: ["argue", "promise", "apologize", "perform"], a: 2 },
  { q: "You can read stories, see photos, and learn about fashion from a __________.", options: ["magazine", "neighbor", "stage", "couple"], a: 0 },
  { q: "A box full of rocks and water is very __________. I cannot lift it.", options: ["light", "shy", "heavy", "soft"], a: 2 },
  { q: "A river where the water only reaches your knees is very __________.", options: ["deep", "shallow", "wide", "confident"], a: 1 },
  { q: "A dog is a very __________ animal. It loves to play and wag its tail when seeing people.", options: ["polite", "rude", "friendly", "thick"], a: 2 },
  { q: "Do not open the door for a __________! You don't know who they are.", options: ["stranger", "neighbor", "guest", "couple"], a: 0 },
  { q: "When two people are angry and shout at each other, they __________.", options: ["gather", "perform", "argue", "invite"], a: 2 },
  { q: "The people who sit and watch a concert or a movie are called the __________.", options: ["audience", "programs", "articles", "channels"], a: 0 },
  { q: "If the road is too __________, two cars cannot pass each other at the same time.", options: ["narrow", "wide", "smooth", "soft"], a: 0 },
  { q: "She never tells lies. She always tells the truth. She is very __________.", options: ["shy", "honest", "rude", "rough"], a: 1 },
  { q: "At a wedding, the bride and the groom make a beautiful __________.", options: ["stranger", "guest", "couple", "neighbor"], a: 2 },
  { q: "Are you free tonight? I want to __________ you to my birthday party.", options: ["share", "invite", "apologize", "argue"], a: 1 },
  { q: "To keep warm in the freezing winter, you should wear a __________ coat.", options: ["thick", "thin", "light", "shallow"], a: 0 },
  { q: "I hate watching TV __________ because they interrupt the movie to sell products.", options: ["channels", "advertisements", "news", "stages"], a: 1 },
  { q: "\"Did you break this glass?\" - \"No, I __________ did not! It wasn't me!\"", options: ["definitely", "quietly", "together", "exactly"], a: 0 },
  { q: "The famous singer will sing and dance on the __________ tonight.", options: ["audience", "stage", "article", "magazine"], a: 1 },
  { q: "The boy feels __________ when he has to talk to girls. His face turns red.", options: ["confident", "generous", "shy", "clever"], a: 2 },
  { q: "If someone gives you a gift, it is __________ to say 'Thank you'.", options: ["rude", "selfish", "polite", "heavy"], a: 2 },
  { q: "The mother told her children to play __________ so the baby could sleep.", options: ["loudly", "quietly", "immediately", "completely"], a: 1 }
];

const newGrammarQuestions = [
  // PART 4
  { q: "If you (practice) ________________ English every day, you (improve) ________________ your skills.", a: "practice / will improve" },
  { q: "She (pass) ________________ the final exam if she (prepare) ________________ carefully.", a: "will pass / prepares" },
  { q: "If the computer battery (be) ________________ low, I (charge) ________________ it.", a: "is / will charge" },
  { q: "You (fail) ________________ the test unless you (study) ________________ now.", a: "will fail / study" },
  { q: "If I (forget) ________________ my password, I (not/can) won't be able to log in.", a: "forget / won't be able to" },
  { q: "He (explain) ________________ the lesson to you if you (ask) ________________ him.", a: "will explain / ask" },
  { q: "If it (rain) ________________ tomorrow, we (stay) ________________ at home and watch movies.", a: "rains / will stay" },
  { q: "I (delete) ________________ the file if you (not/need) ________________ it anymore.", a: "will delete / don't need" },
  { q: "If she (not/turn off) ________________ the screen, the battery (die) ________________ quickly.", a: "doesn't turn off / will die" },
  { q: "We (download) ________________ the new software if the internet connection (be) ________________ good.", a: "will download / is" },
  { q: "If you (click) ________________ on that strange link, your computer (get) ________________ a virus.", a: "click / will get" },
  { q: "The teacher (be) ________________ angry if we (not/do) ________________ our homework.", a: "will be / don't do" },
  { q: "Unless he (remember) ________________ the knowledge, he (get) ________________ a bad result.", a: "remembers / will get" },
  { q: "If I (search) ________________ on the website, I (find) ________________ the information easily.", a: "search / will find" },
  { q: "You (break) ________________ the keyboard if you (type) ________________ too hard.", a: "will break / type" },
  { q: "If my mother (buy) ________________ me a new computer, I (use) ________________ it for my university project.", a: "buys / will use" },
  { q: "I (send) ________________ you a message if I (arrive) ________________ at the library.", a: "will send / arrive" },
  { q: "If the students (understand) ________________ the subject, they (answer) ________________ the questions easily.", a: "understand / will answer" },
  { q: "She (not/go) ________________ to the university unless she (pass) ________________ the difficult exam.", a: "won't go / passes" },
  { q: "If we (practice) ________________ speaking, we (speak) ________________ English fluently soon!", a: "practice / will speak" },
  // PART 5
  { q: "(heavy) My suitcase is 20kg, but yours is 10kg. My suitcase is _______________________ than yours.", a: "heavier" },
  { q: "(polite) He is _______________________ student in the class. He always says \"Thank you\".", a: "the most polite" },
  { q: "(deep) The Mariana Trench is _______________________ place in the ocean.", a: "the deepest" },
  { q: "(bad) This is _______________________ movie I have ever seen! I hated it completely.", a: "the worst" },
  { q: "(wide) The new street is _______________________ than the old street.", a: "wider" },
  { q: "(friendly) My new neighbor is _______________________ than my old neighbor.", a: "friendlier" },
  { q: "(good) I think reading a magazine is _______________________ than watching advertisements.", a: "better" },
  { q: "(generous) She gave all her money to the hospital. She is _______________________ person I know.", a: "the most generous" },
  { q: "(narrow) The bridge is _______________________ than the main road.", a: "narrower" },
  { q: "(selfish) He is _______________________ man in the group because he never shares anything.", a: "the most selfish" },
  { q: "(soft) This blanket is _______________________ than that one.", a: "softer" },
  { q: "(bad) My test score today is _______________________ than yesterday.", a: "worse" },
  { q: "(confident) After practicing in front of the mirror, she is _______________________ than before.", a: "more confident" },
  { q: "(thick) Winter is coming. I need _______________________ coat in the store.", a: "the thickest" },
  { q: "(shy) The little girl is _______________________ than her older brother.", a: "shyer" },
  { q: "(honest) Who is _______________________ person in your family?", a: "the most honest" },
  { q: "(rough) The bark of an old tree is _______________________ than a young tree.", a: "rougher" },
  { q: "(smooth) A baby's skin is _______________________ skin in the world.", a: "the smoothest" },
  { q: "(rude) Arguing loudly in public is _______________________ than talking quietly.", a: "ruder" },
  { q: "(good) Wow! The band performed perfectly. This is _______________________ concert of my life!", a: "the best" }
];

const newReadingPassages = [
  // PART 4
  {
    title: "Đoạn 1: The University Dream",
    titleVi: "Giấc mơ Đại học",
    content: "I am a high school student. My favorite subject is Math. Next month, I will have a very important exam. My teacher said: 'If you practice every day and do your homework carefully, you will pass the exam with a great result.' I really want to go to a good university. If I get into university, I will study computer science. I know that unless I try my best, I will fail. So, I spend every afternoon reading books in the library to gain more knowledge.",
    vocab: [
      { w: "Subject", vi: "Môn học" },
      { w: "Result", vi: "Kết quả" },
      { w: "University", vi: "Đại học" },
      { w: "Library", vi: "Thư viện" },
      { w: "Knowledge", vi: "Kiến thức" }
    ]
  },
  {
    title: "Đoạn 2: Technology Problems",
    titleVi: "Rắc rối Công nghệ",
    content: "Yesterday, I was working on a science project. My laptop screen suddenly turned black. The battery was dead because I forgot to charge it! When I tried to turn on the computer and log in, I forgot my password. I thought: 'If I cannot open my computer, I will lose all my files and my homework!' Luckily, I found my password written in a dictionary. If this happens again, I will be more careful!",
    vocab: [
      { w: "Screen", vi: "Màn hình" },
      { w: "Battery", vi: "Pin" },
      { w: "Password", vi: "Mật khẩu" },
      { w: "File", vi: "Tệp tin" },
      { w: "Dictionary", vi: "Từ điển" }
    ]
  },
  {
    title: "Đoạn 3: Online Learning",
    titleVi: "Học trực tuyến",
    content: "Nowadays, we use the internet a lot for learning. My teacher often uses new software to teach and explain the lessons. When we don't understand something, we can type a message on the keyboard or click the mouse to ask questions. Sometimes, we have to search for information on different websites. If you have a good internet connection, you will download and upload materials very quickly. Technology really improves our education!",
    vocab: [
      { w: "Internet", vi: "Mạng internet" },
      { w: "Keyboard", vi: "Bàn phím" },
      { w: "Websites", vi: "Trang web" },
      { w: "Download", vi: "Tải xuống" },
      { w: "Upload", vi: "Tải lên" }
    ]
  },
  // PART 5
  {
    title: "Đoạn 4: The New Neighbors",
    titleVi: "Những người hàng xóm mới",
    content: "My new neighbor is a very polite and honest man. He is much friendlier than the old one, who was extremely rude and selfish. Yesterday, I was a guest at his house. His wife is a bit shy, but she is more clever and generous. We talked quietly and ate dinner together. We watched the news on a local channel. I am happy we are not strangers anymore.",
    vocab: [
      { w: "Neighbor", vi: "Người hàng xóm" },
      { w: "Polite", vi: "Lịch sự" },
      { w: "Honest", vi: "Trung thực" },
      { w: "Rude", vi: "Thô lỗ" },
      { w: "Generous", vi: "Hào phóng" }
    ]
  },
  {
    title: "Đoạn 5: Media & Entertainment",
    titleVi: "Truyền thông và Giải trí",
    content: "I completely love music programs. Last night, I read an article in a magazine about a great pop concert. The band will perform on a huge stage. There will be a very big audience. I immediately decided to invite my best friend. We will definitely have a great time, especially because there are no boring advertisements! It will be the best night ever.",
    vocab: [
      { w: "Program", vi: "Chương trình" },
      { w: "Magazine", vi: "Tạp chí" },
      { w: "Concert", vi: "Buổi hòa nhạc" },
      { w: "Audience", vi: "Khán giả" },
      { w: "Advertisement", vi: "Quảng cáo" }
    ]
  },
  {
    title: "Đoạn 6: A Journey and an Apology",
    titleVi: "Chuyến đi và Lời xin lỗi",
    content: "My partner and I went to the river. The river was very wide and deep, not shallow. The sand was smoother and softer than the dirt, but the rocks were rough. I carried a thick blanket, which was much heavier than his light bag. We started to argue loudly, but we quickly realized it was a serious mistake. We decided to apologize and forgive each other. I promise we will always travel together.",
    vocab: [
      { w: "Shallow", vi: "Cạn / Nông" },
      { w: "Smooth", vi: "Mịn màng" },
      { w: "Rough", vi: "Thô ráp" },
      { w: "Argue", vi: "Cãi vã" },
      { w: "Apologize", vi: "Xin lỗi" }
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
console.log('Appended A2 Part 4 & 5 Practice data successfully!');
