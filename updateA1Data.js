import fs from 'fs';

const newLessons = [
  {
    "id": 101,
    "title": "Family & People",
    "titleVi": "Nhóm 1: Gia đình & Con người",
    "words": [
      { "word": "Mother", "pronunciation": "/ˈmʌð.ɚ/", "vi": "Mẹ", "en": "My mother is very kind.", "pos": "n." },
      { "word": "Father", "pronunciation": "/ˈfɑː.ðɚ/", "vi": "Bố", "en": "My father is a good man.", "pos": "n." },
      { "word": "Brother", "pronunciation": "/ˈbrʌð.ɚ/", "vi": "Anh/Em trai", "en": "I play with my brother.", "pos": "n." },
      { "word": "Sister", "pronunciation": "/ˈsɪs.tɚ/", "vi": "Chị/Em gái", "en": "My sister is 10 years old.", "pos": "n." },
      { "word": "Friend", "pronunciation": "/frend/", "vi": "Người bạn", "en": "Tom is my best friend.", "pos": "n." },
      { "word": "Teacher", "pronunciation": "/ˈtiː.tʃɚ/", "vi": "Giáo viên", "en": "The teacher is in the classroom.", "pos": "n." },
      { "word": "Student", "pronunciation": "/ˈstuː.dənt/", "vi": "Học sinh", "en": "There are 30 students here.", "pos": "n." },
      { "word": "Doctor", "pronunciation": "/ˈdɑːk.tɚ/", "vi": "Bác sĩ", "en": "The doctor helps sick people.", "pos": "n." },
      { "word": "Boy", "pronunciation": "/bɔɪ/", "vi": "Cậu bé", "en": "The boy likes football.", "pos": "n." },
      { "word": "Girl", "pronunciation": "/ɡɝːl/", "vi": "Cô bé", "en": "The girl has a red hat.", "pos": "n." }
    ]
  },
  {
    "id": 102,
    "title": "Food & Drinks",
    "titleVi": "Nhóm 2: Đồ ăn & Thức uống",
    "words": [
      { "word": "Water", "pronunciation": "/ˈwɑː.t̬ɚ/", "vi": "Nước lọc", "en": "Please give me some water.", "pos": "n." },
      { "word": "Milk", "pronunciation": "/mɪlk/", "vi": "Sữa", "en": "Babies drink milk every day.", "pos": "n." },
      { "word": "Coffee", "pronunciation": "/ˈkɑː.fi/", "vi": "Cà phê", "en": "I drink a cup of coffee.", "pos": "n." },
      { "word": "Bread", "pronunciation": "/bred/", "vi": "Bánh mì", "en": "I eat bread for breakfast.", "pos": "n." },
      { "word": "Rice", "pronunciation": "/raɪs/", "vi": "Gạo, cơm", "en": "Asian people eat a lot of rice.", "pos": "n." },
      { "word": "Meat", "pronunciation": "/miːt/", "vi": "Thịt", "en": "He wants to buy some meat.", "pos": "n." },
      { "word": "Fish", "pronunciation": "/fɪʃ/", "vi": "Cá", "en": "Cats love to eat fish.", "pos": "n." },
      { "word": "Fruit", "pronunciation": "/fruːt/", "vi": "Trái cây", "en": "Apples and bananas are fruit.", "pos": "n." },
      { "word": "Vegetable", "pronunciation": "/ˈvedʒ.tə.bəl/", "vi": "Rau củ", "en": "Carrots are healthy vegetables.", "pos": "n." },
      { "word": "Egg", "pronunciation": "/eɡ/", "vi": "Quả trứng", "en": "She eats an egg every morning.", "pos": "n." }
    ]
  },
  {
    "id": 103,
    "title": "Daily Actions",
    "titleVi": "Nhóm 3: Động từ sinh hoạt",
    "words": [
      { "word": "Wake up", "pronunciation": "/weɪk ʌp/", "vi": "Thức dậy", "en": "I wake up at 6:00 AM.", "pos": "v." },
      { "word": "Sleep", "pronunciation": "/sliːp/", "vi": "Ngủ", "en": "I sleep for 8 hours.", "pos": "v." },
      { "word": "Eat", "pronunciation": "/iːt/", "vi": "Ăn", "en": "We eat lunch at 12:00 PM.", "pos": "v." },
      { "word": "Drink", "pronunciation": "/drɪŋk/", "vi": "Uống", "en": "I drink water when I am thirsty.", "pos": "v." },
      { "word": "Go", "pronunciation": "/ɡoʊ/", "vi": "Đi", "en": "They go to school by bus.", "pos": "v." },
      { "word": "Walk", "pronunciation": "/wɑːk/", "vi": "Đi bộ", "en": "My grandfather walks slowly.", "pos": "v." },
      { "word": "Run", "pronunciation": "/rʌn/", "vi": "Chạy", "en": "The dog can run very fast.", "pos": "v." },
      { "word": "Play", "pronunciation": "/pleɪ/", "vi": "Chơi", "en": "Children play in the park.", "pos": "v." },
      { "word": "Study", "pronunciation": "/ˈstʌd.i/", "vi": "Học tập", "en": "I study English every night.", "pos": "v." },
      { "word": "Read", "pronunciation": "/riːd/", "vi": "Đọc", "en": "She likes to read books.", "pos": "v." }
    ]
  },
  {
    "id": 104,
    "title": "Places & Things",
    "titleVi": "Nhóm 4: Địa điểm & Sự vật",
    "words": [
      { "word": "House", "pronunciation": "/haʊs/", "vi": "Ngôi nhà", "en": "I live in a beautiful house.", "pos": "n." },
      { "word": "School", "pronunciation": "/skuːl/", "vi": "Trường học", "en": "My school is very big.", "pos": "n." },
      { "word": "Hospital", "pronunciation": "/ˈhɑː.spɪ.t̬əl/", "vi": "Bệnh viện", "en": "The doctor is at the hospital.", "pos": "n." },
      { "word": "Park", "pronunciation": "/pɑːrk/", "vi": "Công viên", "en": "Let's walk in the park.", "pos": "n." },
      { "word": "Supermarket", "pronunciation": "/ˈsuː.pɚˌmɑːr.kɪt/", "vi": "Siêu thị", "en": "Buy food at the supermarket.", "pos": "n." },
      { "word": "Car", "pronunciation": "/kɑːr/", "vi": "Ô tô", "en": "He drives a red car.", "pos": "n." },
      { "word": "Bus", "pronunciation": "/bʌs/", "vi": "Xe buýt", "en": "I take the bus to work.", "pos": "n." },
      { "word": "Tree", "pronunciation": "/triː/", "vi": "Cái cây", "en": "The bird is on the tree.", "pos": "n." },
      { "word": "Book", "pronunciation": "/bʊk/", "vi": "Quyển sách", "en": "I have a good English book.", "pos": "n." },
      { "word": "Phone", "pronunciation": "/foʊn/", "vi": "Điện thoại", "en": "I call my mom on the phone.", "pos": "n." }
    ]
  },
  {
    "id": 105,
    "title": "Adjectives",
    "titleVi": "Nhóm 5: Tính từ miêu tả & Cảm xúc",
    "words": [
      { "word": "Big", "pronunciation": "/bɪɡ/", "vi": "To lớn", "en": "An elephant is a big animal.", "pos": "adj." },
      { "word": "Small", "pronunciation": "/smɑːl/", "vi": "Nhỏ bé", "en": "A mouse is very small.", "pos": "adj." },
      { "word": "Happy", "pronunciation": "/ˈhæp.i/", "vi": "Vui vẻ", "en": "She smiles because she is happy.", "pos": "adj." },
      { "word": "Sad", "pronunciation": "/sæd/", "vi": "Buồn bã", "en": "He is crying. He is sad.", "pos": "adj." },
      { "word": "Hot", "pronunciation": "/hɑːt/", "vi": "Nóng", "en": "The coffee is very hot.", "pos": "adj." },
      { "word": "Cold", "pronunciation": "/koʊld/", "vi": "Lạnh", "en": "Ice cream is cold.", "pos": "adj." },
      { "word": "Hungry", "pronunciation": "/ˈhʌŋ.ɡri/", "vi": "Đói bụng", "en": "I want to eat. I am hungry.", "pos": "adj." },
      { "word": "Thirsty", "pronunciation": "/ˈθɝː.sti/", "vi": "Khát nước", "en": "I need water. I am thirsty.", "pos": "adj." },
      { "word": "Good", "pronunciation": "/ɡʊd/", "vi": "Tốt, ngon", "en": "This pizza is very good.", "pos": "adj." },
      { "word": "Beautiful", "pronunciation": "/ˈbjuː.t̬ə.fəl/", "vi": "Xinh đẹp", "en": "The flowers are beautiful.", "pos": "adj." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');

// The easiest way to prepend to LEVEL_A1 is to find `export const LEVEL_A1 = [` and insert
const a1StartIndex = dataStr.indexOf('export const LEVEL_A1 = [');
if (a1StartIndex !== -1) {
  const insertIndex = dataStr.indexOf('[', a1StartIndex) + 1;
  
  // Format newLessons into a string
  const newContent = newLessons.map(lesson => JSON.stringify(lesson, null, 4)).join(',\n') + ',\n';
  
  const updatedDataStr = dataStr.slice(0, insertIndex) + '\n' + newContent + dataStr.slice(insertIndex);
  
  fs.writeFileSync('src/data.js', updatedDataStr, 'utf8');
  console.log('Successfully added new lessons to LEVEL_A1 in src/data.js');
} else {
  console.log('Could not find LEVEL_A1 array in src/data.js');
}
