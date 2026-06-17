import fs from 'fs';

const newData = [
  // PART 4
  {
    "id": 216,
    "title": "Education & School",
    "titleVi": "Nhóm 16: Giáo dục & Trường lớp",
    "words": [
      { "word": "University", "pronunciation": "/ˌjuː.nəˈvɝː.sə.t̬i/", "vi": "Trường Đại học", "en": "I study medicine at university.", "pos": "n." },
      { "word": "Subject", "pronunciation": "/ˈsʌb.dʒekt/", "vi": "Môn học", "en": "Math is my favorite subject.", "pos": "n." },
      { "word": "Lesson", "pronunciation": "/ˈles.ən/", "vi": "Bài học / Tiết học", "en": "The English lesson is very fun.", "pos": "n." },
      { "word": "Homework", "pronunciation": "/ˈhoʊm.wɝːk/", "vi": "Bài tập về nhà", "en": "I must do my homework tonight.", "pos": "n." },
      { "word": "Exam", "pronunciation": "/ɪɡˈzæm/", "vi": "Bài kiểm tra lớn", "en": "The final exam is very hard.", "pos": "n." },
      { "word": "Library", "pronunciation": "/ˈlaɪ.brer.i/", "vi": "Thư viện", "en": "We read books in the quiet library.", "pos": "n." },
      { "word": "Knowledge", "pronunciation": "/ˈnɑː.lɪdʒ/", "vi": "Kiến thức", "en": "Reading books gives you knowledge.", "pos": "n." },
      { "word": "Dictionary", "pronunciation": "/ˈdɪk.ʃən.er.i/", "vi": "Từ điển", "en": "Look up the new word in a dictionary.", "pos": "n." },
      { "word": "Project", "pronunciation": "/ˈprɑː.dʒekt/", "vi": "Dự án (học tập/việc)", "en": "We are working on a science project.", "pos": "n." },
      { "word": "Result", "pronunciation": "/rɪˈzʌlt/", "vi": "Kết quả", "en": "I am waiting for my test result.", "pos": "n." }
    ]
  },
  {
    "id": 217,
    "title": "Study Verbs",
    "titleVi": "Nhóm 17: Động từ trong Học tập",
    "words": [
      { "word": "Teach", "pronunciation": "/tiːtʃ/", "vi": "Dạy học", "en": "Mr. Smith teaches me English.", "pos": "v." },
      { "word": "Explain", "pronunciation": "/ɪkˈspleɪn/", "vi": "Giải thích", "en": "Can you explain this lesson again?", "pos": "v." },
      { "word": "Understand", "pronunciation": "/ˌʌn.dɚˈstænd/", "vi": "Hiểu bài", "en": "Now I understand the math problem.", "pos": "v." },
      { "word": "Remember", "pronunciation": "/rɪˈmem.bɚ/", "vi": "Ghi nhớ", "en": "Try to remember all the new words.", "pos": "v." },
      { "word": "Forget", "pronunciation": "/fɚˈɡet/", "vi": "Quên mất", "en": "Don't forget your books!", "pos": "v." },
      { "word": "Pass", "pronunciation": "/pæs/", "vi": "Thi đậu", "en": "If you study, you will pass the exam.", "pos": "v." },
      { "word": "Fail", "pronunciation": "/feɪl/", "vi": "Thi rớt", "en": "I didn't study, so I failed the test.", "pos": "v." },
      { "word": "Practice", "pronunciation": "/ˈpræk.tɪs/", "vi": "Thực hành", "en": "You must practice speaking every day.", "pos": "v." },
      { "word": "Improve", "pronunciation": "/ɪmˈpruːv/", "vi": "Cải thiện", "en": "Reading will improve your English.", "pos": "v." },
      { "word": "Prepare", "pronunciation": "/prɪˈper/", "vi": "Chuẩn bị", "en": "I must prepare for the presentation.", "pos": "v." }
    ]
  },
  {
    "id": 218,
    "title": "Technology & Computers",
    "titleVi": "Nhóm 18: Công nghệ & Máy tính",
    "words": [
      { "word": "Screen", "pronunciation": "/skriːn/", "vi": "Màn hình", "en": "Don't look at the screen for too long.", "pos": "n." },
      { "word": "Keyboard", "pronunciation": "/ˈkiː.bɔːrd/", "vi": "Bàn phím", "en": "I type very fast on my keyboard.", "pos": "n." },
      { "word": "Mouse", "pronunciation": "/maʊs/", "vi": "Chuột máy tính", "en": "Use the mouse to click the button.", "pos": "n." },
      { "word": "Password", "pronunciation": "/ˈpæs.wɝːd/", "vi": "Mật khẩu", "en": "Do not tell anyone your password.", "pos": "n." },
      { "word": "Message", "pronunciation": "/ˈmes.ɪdʒ/", "vi": "Tin nhắn", "en": "She sent me a text message.", "pos": "n." },
      { "word": "File", "pronunciation": "/faɪl/", "vi": "Tệp tin", "en": "Save the document in a new file.", "pos": "n." },
      { "word": "Website", "pronunciation": "/ˈweb.saɪt/", "vi": "Trang web", "en": "Google is a famous website.", "pos": "n." },
      { "word": "Software", "pronunciation": "/ˈsɑːft.wer/", "vi": "Phần mềm", "en": "We installed new editing software.", "pos": "n." },
      { "word": "Internet", "pronunciation": "/ˈɪn.t̬ɚ.net/", "vi": "Mạng Internet", "en": "You need the internet to send emails.", "pos": "n." },
      { "word": "Battery", "pronunciation": "/ˈbæt̬.ɚ.i/", "vi": "Cục Pin", "en": "My phone battery is low.", "pos": "n." }
    ]
  },
  {
    "id": 219,
    "title": "Tech Verbs",
    "titleVi": "Nhóm 19: Động từ Công nghệ mạng",
    "words": [
      { "word": "Click", "pronunciation": "/klɪk/", "vi": "Nhấp chuột", "en": "Click on the link to open the video.", "pos": "v." },
      { "word": "Type", "pronunciation": "/taɪp/", "vi": "Gõ phím", "en": "He can type 60 words per minute.", "pos": "v." },
      { "word": "Search", "pronunciation": "/sɝːtʃ/", "vi": "Tìm kiếm", "en": "Let me search for information online.", "pos": "v." },
      { "word": "Download", "pronunciation": "/ˈdaʊn.loʊd/", "vi": "Tải xuống", "en": "I will download the song to my phone.", "pos": "v." },
      { "word": "Upload", "pronunciation": "/ʌpˈloʊd/", "vi": "Tải lên", "en": "She uploaded her photo to Facebook.", "pos": "v." },
      { "word": "Delete", "pronunciation": "/dɪˈliːt/", "vi": "Xóa bỏ", "en": "Please delete that bad picture!", "pos": "v." },
      { "word": "Charge", "pronunciation": "/tʃɑːrdʒ/", "vi": "Sạc pin", "en": "I need to charge my computer.", "pos": "v." },
      { "word": "Turn on", "pronunciation": "/tɝːn ɑːn/", "vi": "Bật lên", "en": "Turn on the TV, the movie is starting.", "pos": "v." },
      { "word": "Turn off", "pronunciation": "/tɝːn ɑːf/", "vi": "Tắt đi", "en": "Turn off the lights before you leave.", "pos": "v." },
      { "word": "Log in", "pronunciation": "/lɑːɡ ɪn/", "vi": "Đăng nhập", "en": "Enter your password to log in.", "pos": "v." }
    ]
  },
  {
    "id": 220,
    "title": "Logic Words",
    "titleVi": "Nhóm 20: Các từ nối trong Logic",
    "words": [
      { "word": "If", "pronunciation": "/ɪf/", "vi": "Nếu", "en": "If you go, I will go too.", "pos": "conj." },
      { "word": "Unless", "pronunciation": "/ənˈles/", "vi": "Trừ khi", "en": "Unless you hurry, you will be late.", "pos": "conj." },
      { "word": "Because", "pronunciation": "/bɪˈkɑːz/", "vi": "Bởi vì", "en": "I eat because I am hungry.", "pos": "conj." },
      { "word": "So", "pronunciation": "/soʊ/", "vi": "Vì vậy", "en": "It was raining, so I stayed home.", "pos": "conj." },
      { "word": "But", "pronunciation": "/bʌt/", "vi": "Nhưng mà", "en": "He is rich, but he is sad.", "pos": "conj." },
      { "word": "Or", "pronunciation": "/ɔːr/", "vi": "Hoặc là", "en": "Do you want tea or coffee?", "pos": "conj." },
      { "word": "Also", "pronunciation": "/ˈɑːl.soʊ/", "vi": "Cũng", "en": "He speaks English and also French.", "pos": "adv." },
      { "word": "Carefully", "pronunciation": "/ˈker.fəl.i/", "vi": "Một cách cẩn thận", "en": "Drive your car carefully.", "pos": "adv." },
      { "word": "Quickly", "pronunciation": "/ˈkwɪk.li/", "vi": "Một cách nhanh chóng", "en": "Finish your homework quickly.", "pos": "adv." },
      { "word": "Easily", "pronunciation": "/ˈiː.zəl.i/", "vi": "Một cách dễ dàng", "en": "You can find the answer easily.", "pos": "adv." }
    ]
  },
  // PART 5
  {
    "id": 221,
    "title": "Personality Traits",
    "titleVi": "Nhóm 21: Tính cách con người",
    "words": [
      { "word": "Confident", "pronunciation": "/ˈkɑːn.fə.dənt/", "vi": "Tự tin", "en": "She is very confident when she speaks.", "pos": "adj." },
      { "word": "Shy", "pronunciation": "/ʃaɪ/", "vi": "Nhút nhát", "en": "The shy boy hides behind his mom.", "pos": "adj." },
      { "word": "Polite", "pronunciation": "/pəˈlaɪt/", "vi": "Lịch sự", "en": "It is polite to say 'Thank you'.", "pos": "adj." },
      { "word": "Rude", "pronunciation": "/ruːd/", "vi": "Thô lỗ", "en": "Don't be rude to older people!", "pos": "adj." },
      { "word": "Generous", "pronunciation": "/ˈdʒen.ɚ.əs/", "vi": "Hào phóng", "en": "The generous man gave me a gift.", "pos": "adj." },
      { "word": "Selfish", "pronunciation": "/ˈsel.fɪʃ/", "vi": "Ích kỷ", "en": "A selfish person only thinks of himself.", "pos": "adj." },
      { "word": "Honest", "pronunciation": "/ˈɑː.nɪst/", "vi": "Trung thực", "en": "I promise to tell the truth. I am honest.", "pos": "adj." },
      { "word": "Friendly", "pronunciation": "/ˈfrend.li/", "vi": "Thân thiện", "en": "The dog is very friendly to everyone.", "pos": "adj." },
      { "word": "Clever", "pronunciation": "/ˈklev.ɚ/", "vi": "Thông minh", "en": "The clever girl solved the puzzle fast.", "pos": "adj." },
      { "word": "Serious", "pronunciation": "/ˈsɪr.i.əs/", "vi": "Nghiêm túc", "en": "This is a serious problem, don't laugh.", "pos": "adj." }
    ]
  },
  {
    "id": 222,
    "title": "Relationships",
    "titleVi": "Nhóm 22: Mối quan hệ & Tương tác",
    "words": [
      { "word": "Couple", "pronunciation": "/ˈkʌp.əl/", "vi": "Cặp đôi", "en": "They are a happy married couple.", "pos": "n." },
      { "word": "Neighbor", "pronunciation": "/ˈneɪ.bɚ/", "vi": "Người hàng xóm", "en": "My neighbor plays loud music at night.", "pos": "n." },
      { "word": "Guest", "pronunciation": "/ɡest/", "vi": "Vị khách (mời)", "en": "We have two guests for dinner tonight.", "pos": "n." },
      { "word": "Stranger", "pronunciation": "/ˈstreɪn.dʒɚ/", "vi": "Người lạ mặt", "en": "Do not open the door for a stranger!", "pos": "n." },
      { "word": "Argue", "pronunciation": "/ˈɑːrɡ.juː/", "vi": "Cãi vã", "en": "My parents sometimes argue about money.", "pos": "v." },
      { "word": "Apologize", "pronunciation": "/əˈpɑː.lə.dʒaɪz/", "vi": "Xin lỗi", "en": "You should apologize for your mistake.", "pos": "v." },
      { "word": "Promise", "pronunciation": "/ˈprɑː.mɪs/", "vi": "Hứa hẹn", "en": "I promise I will never leave you.", "pos": "v." },
      { "word": "Forgive", "pronunciation": "/fɚˈɡɪv/", "vi": "Tha thứ", "en": "Please forgive me, I was wrong.", "pos": "v." },
      { "word": "Invite", "pronunciation": "/ɪnˈvaɪt/", "vi": "Mời rủ", "en": "I want to invite you to my party.", "pos": "v." },
      { "word": "Share", "pronunciation": "/ʃer/", "vi": "Chia sẻ", "en": "Children must learn to share toys.", "pos": "v." }
    ]
  },
  {
    "id": 223,
    "title": "Dimensions & Textures",
    "titleVi": "Nhóm 23: Tính từ Kích thước & Bề mặt",
    "words": [
      { "word": "Heavy", "pronunciation": "/ˈhev.i/", "vi": "Nặng nề", "en": "This box is too heavy for me to lift.", "pos": "adj." },
      { "word": "Light", "pronunciation": "/laɪt/", "vi": "Nhẹ", "en": "A feather is very light.", "pos": "adj." },
      { "word": "Deep", "pronunciation": "/diːp/", "vi": "Sâu thẳm", "en": "Be careful! The river is very deep.", "pos": "adj." },
      { "word": "Shallow", "pronunciation": "/ˈʃæl.oʊ/", "vi": "Nông / Cạn", "en": "Children can swim in the shallow pool.", "pos": "adj." },
      { "word": "Wide", "pronunciation": "/waɪd/", "vi": "Rộng (bề ngang)", "en": "We drive our car on a wide street.", "pos": "adj." },
      { "word": "Narrow", "pronunciation": "/ˈner.oʊ/", "vi": "Chật hẹp", "en": "The road is too narrow for two cars.", "pos": "adj." },
      { "word": "Thick", "pronunciation": "/θɪk/", "vi": "Dày dặn", "en": "I need a thick blanket in winter.", "pos": "adj." },
      { "word": "Soft", "pronunciation": "/sɑːft/", "vi": "Mềm mại", "en": "The cat has very soft hair.", "pos": "adj." },
      { "word": "Rough", "pronunciation": "/rʌf/", "vi": "Thô ráp", "en": "The tree has a rough surface.", "pos": "adj." },
      { "word": "Smooth", "pronunciation": "/smuːð/", "vi": "Nhẵn / Mịn màng", "en": "The baby has smooth skin.", "pos": "adj." }
    ]
  },
  {
    "id": 224,
    "title": "Media & Entertainment",
    "titleVi": "Nhóm 24: Truyền thông & Giải trí",
    "words": [
      { "word": "News", "pronunciation": "/nuːz/", "vi": "Tin tức", "en": "I watch the evening news every day.", "pos": "n." },
      { "word": "Magazine", "pronunciation": "/ˌmæɡ.əˈziːn/", "vi": "Tạp chí", "en": "She is reading a fashion magazine.", "pos": "n." },
      { "word": "Advertisement", "pronunciation": "/æd.vɚˈtaɪz.mənt/", "vi": "Quảng cáo", "en": "I hate watching advertisements on TV.", "pos": "n." },
      { "word": "Channel", "pronunciation": "/ˈtʃæn.əl/", "vi": "Kênh", "en": "What is your favorite TV channel?", "pos": "n." },
      { "word": "Program", "pronunciation": "/ˈproʊ.ɡræm/", "vi": "Chương trình", "en": "This is a good educational program.", "pos": "n." },
      { "word": "Article", "pronunciation": "/ˈɑːr.t̬ɪ.kəl/", "vi": "Bài báo", "en": "He wrote an article about the environment.", "pos": "n." },
      { "word": "Concert", "pronunciation": "/ˈkɑːn.sɚt/", "vi": "Buổi hòa nhạc", "en": "We bought tickets for the pop concert.", "pos": "n." },
      { "word": "Audience", "pronunciation": "/ˈɑː.di.əns/", "vi": "Khán giả", "en": "The audience clapped their hands.", "pos": "n." },
      { "word": "Stage", "pronunciation": "/steɪdʒ/", "vi": "Sân khấu", "en": "The singer is standing on the stage.", "pos": "n." },
      { "word": "Perform", "pronunciation": "/pɚˈfɔːrm/", "vi": "Trình diễn", "en": "The band will perform live tonight.", "pos": "v." }
    ]
  },
  {
    "id": 225,
    "title": "Adverbs of Degree & Manner",
    "titleVi": "Nhóm 25: Trạng từ Mức độ & Trạng thái",
    "words": [
      { "word": "Extremely", "pronunciation": "/ɪkˈstriːm.li/", "vi": "Cực kỳ", "en": "The movie was extremely boring.", "pos": "adv." },
      { "word": "Completely", "pronunciation": "/kəmˈpliːt.li/", "vi": "Hoàn toàn", "en": "I completely forgot about the meeting!", "pos": "adv." },
      { "word": "Exactly", "pronunciation": "/ɪɡˈzækt.li/", "vi": "Chính xác là", "en": "That is exactly what I mean.", "pos": "adv." },
      { "word": "Probably", "pronunciation": "/ˈprɑː.bə.bli/", "vi": "Có lẽ", "en": "I will probably go to bed early tonight.", "pos": "adv." },
      { "word": "Definitely", "pronunciation": "/ˈdef.ən.ət.li/", "vi": "Chắc chắn", "en": "I will definitely pass the exam!", "pos": "adv." },
      { "word": "Especially", "pronunciation": "/ɪˈspeʃ.əl.i/", "vi": "Đặc biệt là", "en": "I love fruit, especially apples.", "pos": "adv." },
      { "word": "Immediately", "pronunciation": "/ɪˈmiː.di.ət.li/", "vi": "Ngay lập tức", "en": "Please call the doctor immediately!", "pos": "adv." },
      { "word": "Quietly", "pronunciation": "/ˈkwaɪ.ət.li/", "vi": "Một cách yên lặng", "en": "She closed the door quietly.", "pos": "adv." },
      { "word": "Loudly", "pronunciation": "/ˈlaʊd.li/", "vi": "Một cách ồn ào", "en": "The baby is crying loudly.", "pos": "adv." },
      { "word": "Together", "pronunciation": "/təˈɡeð.ɚ/", "vi": "Cùng với nhau", "en": "Let's sing a song together.", "pos": "adv." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');

const regex = /export const LEVEL_A2 = (\[[\s\S]*?\]);\s*(?=export const LEVEL_B1)/;
const match = dataStr.match(regex);
if (match) {
  const currentA2 = JSON.parse(match[1]);
  const mergedA2 = [...currentA2, ...newData];
  const replacement = 'export const LEVEL_A2 = ' + JSON.stringify(mergedA2, null, 2) + ';\n\n';
  dataStr = dataStr.replace(regex, () => replacement);
  fs.writeFileSync('src/data.js', dataStr, 'utf8');
  console.log('Appended A2 Part 4 & 5 data successfully!');
} else {
  console.log('Failed to find LEVEL_A2');
}
