import fs from 'fs';

const newData = [
  {
    "id": 206,
    "title": "Work & Careers",
    "titleVi": "Nhóm 6: Công việc & Sự nghiệp",
    "words": [
      { "word": "Career", "pronunciation": "/kəˈrɪr/", "vi": "Sự nghiệp", "en": "Teaching is a great career.", "pos": "n." },
      { "word": "Office", "pronunciation": "/ˈɑː.fɪs/", "vi": "Văn phòng", "en": "I work in a big office in Hanoi.", "pos": "n." },
      { "word": "Boss", "pronunciation": "/bɑːs/", "vi": "Sếp / Ông chủ", "en": "My boss is very kind and smart.", "pos": "n." },
      { "word": "Colleague", "pronunciation": "/ˈkɑː.liːɡ/", "vi": "Đồng nghiệp", "en": "I like talking to my colleagues.", "pos": "n." },
      { "word": "Manager", "pronunciation": "/ˈmæn.ə.dʒɚ/", "vi": "Quản lý", "en": "The manager organized a meeting.", "pos": "n." },
      { "word": "Salary", "pronunciation": "/ˈsæl.ɚ.i/", "vi": "Tiền lương", "en": "He gets a high salary every month.", "pos": "n." },
      { "word": "Interview", "pronunciation": "/ˈɪn.t̬ɚ.vjuː/", "vi": "Cuộc phỏng vấn", "en": "I have a job interview tomorrow.", "pos": "n." },
      { "word": "Company", "pronunciation": "/ˈkʌm.pə.ni/", "vi": "Công ty", "en": "She works for a tech company.", "pos": "n." },
      { "word": "Meeting", "pronunciation": "/ˈmiː.t̬ɪŋ/", "vi": "Cuộc họp", "en": "We have a meeting at 9 AM.", "pos": "n." },
      { "word": "Customer", "pronunciation": "/ˈkʌs.tə.mɚ/", "vi": "Khách hàng", "en": "Always smile at the customer.", "pos": "n." }
    ]
  },
  {
    "id": 207,
    "title": "Money & Shopping",
    "titleVi": "Nhóm 7: Tiền bạc & Mua sắm",
    "words": [
      { "word": "Cash", "pronunciation": "/kæʃ/", "vi": "Tiền mặt", "en": "Do you want to pay in cash?", "pos": "n." },
      { "word": "Credit card", "pronunciation": "/ˈkred.ɪt ˌkɑːrd/", "vi": "Thẻ tín dụng", "en": "I don't have cash, I'll use a credit card.", "pos": "n." },
      { "word": "Wallet", "pronunciation": "/ˈwɑː.lɪt/", "vi": "Cái ví (thường là nam)", "en": "I left my wallet at home!", "pos": "n." },
      { "word": "Purse", "pronunciation": "/pɝːs/", "vi": "Ví cầm tay (nữ)", "en": "She put the phone in her purse.", "pos": "n." },
      { "word": "Bill", "pronunciation": "/bɪl/", "vi": "Hóa đơn (yêu cầu trả)", "en": "Please pay the electricity bill.", "pos": "n." },
      { "word": "Receipt", "pronunciation": "/rɪˈsiːt/", "vi": "Biên lai (đã trả xong)", "en": "Keep your receipt after you buy it.", "pos": "n." },
      { "word": "Discount", "pronunciation": "/ˈdɪs.kaʊnt/", "vi": "Sự giảm giá", "en": "Is there any discount for this shirt?", "pos": "n." },
      { "word": "Price", "pronunciation": "/praɪs/", "vi": "Mức giá", "en": "The price of this car is high.", "pos": "n." },
      { "word": "Coin", "pronunciation": "/kɔɪn/", "vi": "Đồng xu", "en": "I have a gold coin in my pocket.", "pos": "n." },
      { "word": "Change", "pronunciation": "/tʃeɪndʒ/", "vi": "Tiền thối / Tiền lẻ", "en": "Here is your coffee and your change.", "pos": "n." }
    ]
  },
  {
    "id": 208,
    "title": "Financial Verbs",
    "titleVi": "Nhóm 8: Động từ về Tài chính & Công việc",
    "words": [
      { "word": "Earn", "pronunciation": "/ɝːn/", "vi": "Kiếm tiền", "en": "Doctors earn a lot of money.", "pos": "v." },
      { "word": "Spend", "pronunciation": "/spend/", "vi": "Tiêu xài/Dành (t/g)", "en": "I spend 50 dollars on food.", "pos": "v." },
      { "word": "Save", "pronunciation": "/seɪv/", "vi": "Tiết kiệm", "en": "I want to save money to buy a house.", "pos": "v." },
      { "word": "Pay", "pronunciation": "/peɪ/", "vi": "Trả tiền / Thanh toán", "en": "Let me pay for the dinner today.", "pos": "v." },
      { "word": "Borrow", "pronunciation": "/ˈbɑːr.oʊ/", "vi": "Đi mượn (của ai đó)", "en": "Can I borrow your pen?", "pos": "v." },
      { "word": "Lend", "pronunciation": "/lend/", "vi": "Cho mượn", "en": "I will lend you my car.", "pos": "v." },
      { "word": "Cost", "pronunciation": "/kɑːst/", "vi": "Trị giá / Có giá là", "en": "This laptop costs $1000.", "pos": "v." },
      { "word": "Sell", "pronunciation": "/sel/", "vi": "Bán hàng", "en": "The shop will sell cheap clothes.", "pos": "v." },
      { "word": "Hire", "pronunciation": "/haɪr/", "vi": "Thuê mướn (người)", "en": "The company needs to hire a driver.", "pos": "v." },
      { "word": "Quit", "pronunciation": "/kwɪt/", "vi": "Nghỉ việc / Bỏ cuộc", "en": "He hated his job, so he quit.", "pos": "v." }
    ]
  },
  {
    "id": 209,
    "title": "Interrupting Verbs",
    "titleVi": "Nhóm 9: Động từ \"Cắt ngang\" & Từ Nối",
    "words": [
      { "word": "Ring", "pronunciation": "/rɪŋ/", "vi": "Rung/Đổ chuông", "en": "The phone suddenly rang.", "pos": "v." },
      { "word": "Knock", "pronunciation": "/nɑːk/", "vi": "Gõ cửa", "en": "Someone knocked on the door.", "pos": "v." },
      { "word": "Break", "pronunciation": "/breɪk/", "vi": "Làm vỡ / Hỏng hóc", "en": "My computer broke yesterday.", "pos": "v." },
      { "word": "Drop", "pronunciation": "/drɑːp/", "vi": "Làm rơi", "en": "She dropped her glass.", "pos": "v." },
      { "word": "Fall", "pronunciation": "/fɑːl/", "vi": "Rơi / Vấp ngã", "en": "He fell down the stairs.", "pos": "v." },
      { "word": "Steal", "pronunciation": "/stiːl/", "vi": "Lấy cắp / Trộm", "en": "A thief stole my wallet.", "pos": "v." },
      { "word": "Enter", "pronunciation": "/ˈen.t̬ɚ/", "vi": "Bước vào", "en": "The teacher entered the room.", "pos": "v." },
      { "word": "While", "pronunciation": "/waɪl/", "vi": "Trong khi (đang)", "en": "While I was reading, he called me.", "pos": "conj." },
      { "word": "When", "pronunciation": "/wen/", "vi": "Khi mà (đột nhiên)", "en": "I was sleeping when he came.", "pos": "conj." },
      { "word": "Suddenly", "pronunciation": "/ˈsʌd.ən.li/", "vi": "Đột nhiên", "en": "Suddenly, the lights went out.", "pos": "adv." }
    ]
  },
  {
    "id": 210,
    "title": "Status Adjectives",
    "titleVi": "Nhóm 10: Tính từ miêu tả Trạng thái",
    "words": [
      { "word": "Busy", "pronunciation": "/ˈbɪz.i/", "vi": "Bận rộn", "en": "The office is very busy today.", "pos": "adj." },
      { "word": "Tired", "pronunciation": "/taɪɚd/", "vi": "Mệt mỏi", "en": "I worked hard, so I am tired.", "pos": "adj." },
      { "word": "Successful", "pronunciation": "/səkˈses.fəl/", "vi": "Thành công", "en": "Bill Gates is a successful man.", "pos": "adj." },
      { "word": "Helpful", "pronunciation": "/ˈhelp.fəl/", "vi": "Có ích / Hay giúp", "en": "My colleagues are very helpful.", "pos": "adj." },
      { "word": "Lazy", "pronunciation": "/ˈleɪ.zi/", "vi": "Lười biếng", "en": "The lazy boy didn't do homework.", "pos": "adj." },
      { "word": "Hard-working", "pronunciation": "/ˌhɑːrdˈwɝː.kɪŋ/", "vi": "Chăm chỉ", "en": "She is a hard-working student.", "pos": "adj." },
      { "word": "Stressful", "pronunciation": "/ˈstres.fəl/", "vi": "Áp lực / Căng thẳng", "en": "A manager's job is very stressful.", "pos": "adj." },
      { "word": "Important", "pronunciation": "/ɪmˈpɔːr.tənt/", "vi": "Quan trọng", "en": "Water is important for life.", "pos": "adj." },
      { "word": "Professional", "pronunciation": "/prəˈfeʃ.ən.əl/", "vi": "Chuyên nghiệp", "en": "He plays football like a professional.", "pos": "adj." },
      { "word": "Expensive", "pronunciation": "/ɪkˈspen.sɪv/", "vi": "Đắt tiền", "en": "This diamond ring is very expensive.", "pos": "adj." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');

// Match the existing LEVEL_A2 array content
const regex = /export const LEVEL_A2 = (\[[\s\S]*?\]);\s*(?=export const LEVEL_B1)/;
const match = dataStr.match(regex);
if (match) {
  const currentA2 = JSON.parse(match[1]);
  const mergedA2 = [...currentA2, ...newData];
  const replacement = 'export const LEVEL_A2 = ' + JSON.stringify(mergedA2, null, 2) + ';\n\n';
  dataStr = dataStr.replace(regex, () => replacement);
  fs.writeFileSync('src/data.js', dataStr, 'utf8');
  console.log('Appended A2 Part 2 data successfully!');
} else {
  console.log('Failed to find LEVEL_A2');
}
