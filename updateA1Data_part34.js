import fs from 'fs';

const newLessons34 = [
  // PART 3
  {
    "id": 111,
    "title": "Time & Calendar",
    "titleVi": "Nhóm 11: Thời gian & Ngày tháng",
    "words": [
      { "word": "Morning", "pronunciation": "/ˈmɔːr.nɪŋ/", "vi": "Buổi sáng", "en": "I wake up early in the morning.", "pos": "n." },
      { "word": "Afternoon", "pronunciation": "/ˌæf.tɚˈnuːn/", "vi": "Buổi chiều", "en": "We play football in the afternoon.", "pos": "n." },
      { "word": "Evening", "pronunciation": "/ˈiːv.nɪŋ/", "vi": "Buổi tối", "en": "I watch TV in the evening.", "pos": "n." },
      { "word": "Night", "pronunciation": "/naɪt/", "vi": "Đêm khuya", "en": "The stars shine at night.", "pos": "n." },
      { "word": "Day", "pronunciation": "/deɪ/", "vi": "Ngày", "en": "There are 7 days in a week.", "pos": "n." },
      { "word": "Week", "pronunciation": "/wiːk/", "vi": "Tuần lễ", "en": "I go to school every week.", "pos": "n." },
      { "word": "Month", "pronunciation": "/mʌnθ/", "vi": "Tháng", "en": "January is the first month.", "pos": "n." },
      { "word": "Year", "pronunciation": "/jɪr/", "vi": "Năm", "en": "Happy New Year!", "pos": "n." },
      { "word": "Summer", "pronunciation": "/ˈsʌm.ɚ/", "vi": "Mùa hè", "en": "It is very hot in summer.", "pos": "n." },
      { "word": "Winter", "pronunciation": "/ˈwɪn.t̬ɚ/", "vi": "Mùa đông", "en": "We wear warm clothes in winter.", "pos": "n." }
    ]
  },
  {
    "id": 112,
    "title": "Nature & Weather",
    "titleVi": "Nhóm 12: Thiên nhiên & Thời tiết",
    "words": [
      { "word": "Sun", "pronunciation": "/sʌn/", "vi": "Mặt trời", "en": "The sun gives us light.", "pos": "n." },
      { "word": "Moon", "pronunciation": "/muːn/", "vi": "Mặt trăng", "en": "Look at the beautiful moon.", "pos": "n." },
      { "word": "Star", "pronunciation": "/stɑːr/", "vi": "Ngôi sao", "en": "I see a bright star.", "pos": "n." },
      { "word": "Sky", "pronunciation": "/skaɪ/", "vi": "Bầu trời", "en": "Look at the blue sky!", "pos": "n." },
      { "word": "Cloud", "pronunciation": "/klaʊd/", "vi": "Đám mây", "en": "I see a dark cloud.", "pos": "n." },
      { "word": "Rain", "pronunciation": "/reɪn/", "vi": "Cơn mưa", "en": "I don't like heavy rain.", "pos": "n." },
      { "word": "Wind", "pronunciation": "/wɪnd/", "vi": "Cơn gió", "en": "The strong wind blows.", "pos": "n." },
      { "word": "Snow", "pronunciation": "/snoʊ/", "vi": "Tuyết", "en": "Children love to play in the snow.", "pos": "n." },
      { "word": "River", "pronunciation": "/ˈrɪv.ɚ/", "vi": "Dòng sông", "en": "The water in the river is clean.", "pos": "n." },
      { "word": "Mountain", "pronunciation": "/ˈmaʊn.tən/", "vi": "Ngọn núi", "en": "We climb the high mountain.", "pos": "n." }
    ]
  },
  {
    "id": 113,
    "title": "Transport & Travel",
    "titleVi": "Nhóm 13: Giao thông & Đi lại",
    "words": [
      { "word": "Bike", "pronunciation": "/baɪk/", "vi": "Xe đạp", "en": "I ride my bike to the park.", "pos": "n." },
      { "word": "Train", "pronunciation": "/treɪn/", "vi": "Tàu hỏa / Xe lửa", "en": "The train is very fast.", "pos": "n." },
      { "word": "Plane", "pronunciation": "/pleɪn/", "vi": "Máy bay", "en": "The plane flies in the sky.", "pos": "n." },
      { "word": "Boat", "pronunciation": "/boʊt/", "vi": "Con thuyền (nhỏ)", "en": "The boat is on the river.", "pos": "n." },
      { "word": "Ship", "pronunciation": "/ʃɪp/", "vi": "Tàu thủy (lớn)", "en": "The big ship is on the sea.", "pos": "n." },
      { "word": "Street", "pronunciation": "/striːt/", "vi": "Con phố", "en": "There are many cars on the street.", "pos": "n." },
      { "word": "Road", "pronunciation": "/roʊd/", "vi": "Con đường", "en": "Drive safely on this road.", "pos": "n." },
      { "word": "Station", "pronunciation": "/ˈsteɪ.ʃən/", "vi": "Nhà ga / Trạm xe", "en": "Wait for the train at the station.", "pos": "n." },
      { "word": "Airport", "pronunciation": "/ˈer.pɔːrt/", "vi": "Sân bay", "en": "We go to the airport to fly.", "pos": "n." },
      { "word": "Restaurant", "pronunciation": "/ˈres.tə.rɑːnt/", "vi": "Nhà hàng", "en": "We eat dinner at a restaurant.", "pos": "n." }
    ]
  },
  {
    "id": 114,
    "title": "School Supplies",
    "titleVi": "Nhóm 14: Đồ dùng học tập",
    "words": [
      { "word": "Bag", "pronunciation": "/bæɡ/", "vi": "Cái cặp / Balo", "en": "My books are in my bag.", "pos": "n." },
      { "word": "Desk", "pronunciation": "/desk/", "vi": "Bàn học/làm việc", "en": "I sit at my desk.", "pos": "n." },
      { "word": "Box", "pronunciation": "/bɑːks/", "vi": "Cái hộp", "en": "Put the toys in the box.", "pos": "n." },
      { "word": "Notebook", "pronunciation": "/ˈnoʊt.bʊk/", "vi": "Cuốn vở", "en": "I write my lesson in a notebook.", "pos": "n." },
      { "word": "Paper", "pronunciation": "/ˈpeɪ.pɚ/", "vi": "Tờ giấy / Giấy", "en": "I need some paper to draw.", "pos": "n." },
      { "word": "Pencil", "pronunciation": "/ˈpen.səl/", "vi": "Bút chì", "en": "I write with a pencil.", "pos": "n." },
      { "word": "Eraser", "pronunciation": "/ɪˈreɪ.sɚ/", "vi": "Cục tẩy", "en": "I use an eraser to fix mistakes.", "pos": "n." },
      { "word": "Ruler", "pronunciation": "/ˈruː.lɚ/", "vi": "Thước kẻ", "en": "Draw a straight line with a ruler.", "pos": "n." },
      { "word": "Board", "pronunciation": "/bɔːrd/", "vi": "Cái bảng", "en": "The teacher writes on the board.", "pos": "n." },
      { "word": "Map", "pronunciation": "/mæp/", "vi": "Bản đồ", "en": "Look at the map to find the way.", "pos": "n." }
    ]
  },
  {
    "id": 115,
    "title": "Actions & Emotions",
    "titleVi": "Nhóm 15: Hoạt động & Cảm xúc",
    "words": [
      { "word": "Swim", "pronunciation": "/swɪm/", "vi": "Bơi lội", "en": "Frogs can swim in the river.", "pos": "v." },
      { "word": "Dance", "pronunciation": "/dæns/", "vi": "Nhảy múa", "en": "They dance at the party.", "pos": "v." },
      { "word": "Draw", "pronunciation": "/drɑː/", "vi": "Vẽ tranh", "en": "I like to draw cats.", "pos": "v." },
      { "word": "Jump", "pronunciation": "/dʒʌmp/", "vi": "Nhảy lên", "en": "The boy can jump very high.", "pos": "v." },
      { "word": "Drive", "pronunciation": "/draɪv/", "vi": "Lái xe (ô tô)", "en": "My dad can drive a car.", "pos": "v." },
      { "word": "Ride", "pronunciation": "/raɪd/", "vi": "Đạp (xe), Cưỡi", "en": "I ride my bike every day.", "pos": "v." },
      { "word": "Fly", "pronunciation": "/flaɪ/", "vi": "Bay", "en": "Birds fly in the sky.", "pos": "v." },
      { "word": "Help", "pronunciation": "/help/", "vi": "Giúp đỡ", "en": "Please help me, my friend!", "pos": "v." },
      { "word": "Love", "pronunciation": "/lʌv/", "vi": "Yêu thương", "en": "I love my family.", "pos": "v." },
      { "word": "Smile", "pronunciation": "/smaɪl/", "vi": "Mỉm cười", "en": "She always has a beautiful smile.", "pos": "v." }
    ]
  },
  // PART 4
  {
    "id": 116,
    "title": "People & Jobs",
    "titleVi": "Nhóm 16: Con người & Nghề nghiệp",
    "words": [
      { "word": "Man", "pronunciation": "/mæn/", "vi": "Người đàn ông", "en": "He is a tall man.", "pos": "n." },
      { "word": "Woman", "pronunciation": "/ˈwʊm.ən/", "vi": "Người phụ nữ", "en": "She is a beautiful woman.", "pos": "n." },
      { "word": "Child", "pronunciation": "/tʃaɪld/", "vi": "Đứa trẻ", "en": "The child plays with a toy.", "pos": "n." },
      { "word": "Baby", "pronunciation": "/ˈbeɪ.bi/", "vi": "Em bé", "en": "The baby cries at night.", "pos": "n." },
      { "word": "Police", "pronunciation": "/pəˈliːs/", "vi": "Cảnh sát", "en": "The police keep the city safe.", "pos": "n." },
      { "word": "Farmer", "pronunciation": "/ˈfɑːr.mɚ/", "vi": "Nông dân", "en": "The farmer works on the farm.", "pos": "n." },
      { "word": "Singer", "pronunciation": "/ˈsɪŋ.ɚ/", "vi": "Ca sĩ", "en": "The singer has a beautiful voice.", "pos": "n." },
      { "word": "Driver", "pronunciation": "/ˈdraɪ.vɚ/", "vi": "Tài xế", "en": "The bus driver is very kind.", "pos": "n." },
      { "word": "Nurse", "pronunciation": "/nɝːs/", "vi": "Y tá", "en": "The nurse helps the sick people.", "pos": "n." },
      { "word": "Worker", "pronunciation": "/ˈwɝː.kɚ/", "vi": "Công nhân", "en": "He is a factory worker.", "pos": "n." }
    ]
  },
  {
    "id": 117,
    "title": "Food & Kitchen",
    "titleVi": "Nhóm 17: Đồ ăn & Vật dụng nhà bếp",
    "words": [
      { "word": "Apple", "pronunciation": "/ˈæp.əl/", "vi": "Quả táo", "en": "I eat a red apple.", "pos": "n." },
      { "word": "Banana", "pronunciation": "/bəˈnæn.ə/", "vi": "Quả chuối", "en": "Monkeys love eating bananas.", "pos": "n." },
      { "word": "Tomato", "pronunciation": "/təˈmeɪ.t̬oʊ/", "vi": "Cà chua", "en": "Put a tomato in the salad.", "pos": "n." },
      { "word": "Potato", "pronunciation": "/pəˈteɪ.t̬oʊ/", "vi": "Khoai tây", "en": "I like fried potatoes.", "pos": "n." },
      { "word": "Sugar", "pronunciation": "/ˈʃʊɡ.ɚ/", "vi": "Đường (ăn)", "en": "Do you want sugar in your tea?", "pos": "n." },
      { "word": "Salt", "pronunciation": "/sɑːlt/", "vi": "Muối", "en": "This soup needs more salt.", "pos": "n." },
      { "word": "Cake", "pronunciation": "/keɪk/", "vi": "Bánh ngọt", "en": "Happy birthday! Here is your cake.", "pos": "n." },
      { "word": "Cup", "pronunciation": "/kʌp/", "vi": "Cái cốc / Tách", "en": "She drinks a cup of coffee.", "pos": "n." },
      { "word": "Plate", "pronunciation": "/pleɪt/", "vi": "Cái đĩa", "en": "Put the food on the plate.", "pos": "n." },
      { "word": "Knife", "pronunciation": "/naɪf/", "vi": "Con dao", "en": "I use a knife to cut meat.", "pos": "n." }
    ]
  },
  {
    "id": 118,
    "title": "Places & Scenery",
    "titleVi": "Nhóm 18: Địa điểm & Cảnh quan",
    "words": [
      { "word": "City", "pronunciation": "/ˈsɪt̬.i/", "vi": "Thành phố", "en": "Hanoi is a big city.", "pos": "n." },
      { "word": "Village", "pronunciation": "/ˈvɪl.ɪdʒ/", "vi": "Ngôi làng", "en": "They live in a quiet village.", "pos": "n." },
      { "word": "Sea", "pronunciation": "/siː/", "vi": "Biển / Đại dương", "en": "The ship sails on the sea.", "pos": "n." },
      { "word": "Beach", "pronunciation": "/biːtʃ/", "vi": "Bãi biển", "en": "We walk on the white beach.", "pos": "n." },
      { "word": "Zoo", "pronunciation": "/zuː/", "vi": "Sở thú", "en": "Let's go to the zoo to see bears.", "pos": "n." },
      { "word": "Shop", "pronunciation": "/ʃɑːp/", "vi": "Cửa hàng", "en": "I buy shoes at the clothes shop.", "pos": "n." },
      { "word": "Bank", "pronunciation": "/bæŋk/", "vi": "Ngân hàng", "en": "He goes to the bank to get money.", "pos": "n." },
      { "word": "Farm", "pronunciation": "/fɑːrm/", "vi": "Nông trại", "en": "There are many cows on the farm.", "pos": "n." },
      { "word": "Garden", "pronunciation": "/ˈɡɑːr.dən/", "vi": "Khu vườn", "en": "My mother grows food in the garden.", "pos": "n." },
      { "word": "Flower", "pronunciation": "/ˈflaʊ.ɚ/", "vi": "Bông hoa", "en": "The red flower smells very good.", "pos": "n." }
    ]
  },
  {
    "id": 119,
    "title": "Opposite Adjectives",
    "titleVi": "Nhóm 19: Tính từ trái nghĩa",
    "words": [
      { "word": "Tall", "pronunciation": "/tɑːl/", "vi": "Cao lớn", "en": "He is a tall man.", "pos": "adj." },
      { "word": "Short", "pronunciation": "/ʃɔːrt/", "vi": "Lùn / Ngắn", "en": "She has short hair.", "pos": "adj." },
      { "word": "Long", "pronunciation": "/lɑːŋ/", "vi": "Dài", "en": "The river is very long.", "pos": "adj." },
      { "word": "New", "pronunciation": "/nuː/", "vi": "Mới mẻ", "en": "I want a new phone.", "pos": "adj." },
      { "word": "Old", "pronunciation": "/oʊld/", "vi": "Già / Cũ", "en": "This car is very old.", "pos": "adj." },
      { "word": "Fast", "pronunciation": "/fæst/", "vi": "Nhanh", "en": "A plane is very fast.", "pos": "adj." },
      { "word": "Slow", "pronunciation": "/sloʊ/", "vi": "Chậm chạp", "en": "A turtle is very slow.", "pos": "adj." },
      { "word": "Clean", "pronunciation": "/kliːn/", "vi": "Sạch sẽ", "en": "My hands are clean.", "pos": "adj." },
      { "word": "Dirty", "pronunciation": "/ˈdɝː.t̬i/", "vi": "Dơ, bẩn", "en": "Wash your dirty clothes!", "pos": "adj." },
      { "word": "Easy", "pronunciation": "/ˈiː.zi/", "vi": "Dễ dàng", "en": "The English test is easy.", "pos": "adj." }
    ]
  },
  {
    "id": 120,
    "title": "Interactive Verbs",
    "titleVi": "Nhóm 20: Động từ tương tác",
    "words": [
      { "word": "Look", "pronunciation": "/lʊk/", "vi": "Nhìn (có chủ ý)", "en": "Look at the board!", "pos": "v." },
      { "word": "See", "pronunciation": "/siː/", "vi": "Nhìn thấy (tự nhiên)", "en": "I can see a mountain.", "pos": "v." },
      { "word": "Hear", "pronunciation": "/hɪr/", "vi": "Nghe thấy", "en": "Can you hear the bird?", "pos": "v." },
      { "word": "Touch", "pronunciation": "/tʌtʃ/", "vi": "Chạm tay vào", "en": "Do not touch the hot fire!", "pos": "v." },
      { "word": "Wash", "pronunciation": "/wɑːʃ/", "vi": "Rửa / Giặt giũ", "en": "Please wash your face.", "pos": "v." },
      { "word": "Cry", "pronunciation": "/kraɪ/", "vi": "Khóc", "en": "The baby begins to cry.", "pos": "v." },
      { "word": "Laugh", "pronunciation": "/læf/", "vi": "Cười to (ra tiếng)", "en": "His joke makes me laugh.", "pos": "v." },
      { "word": "Think", "pronunciation": "/θɪŋk/", "vi": "Suy nghĩ", "en": "I think you are right.", "pos": "v." },
      { "word": "Want", "pronunciation": "/wɑːnt/", "vi": "Muốn", "en": "I want to drink water.", "pos": "v." },
      { "word": "Give", "pronunciation": "/ɡɪv/", "vi": "Cho / Tặng / Đưa", "en": "Please give me an apple.", "pos": "v." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');
const a1StartIndex = dataStr.indexOf('export const LEVEL_A1 = [');
if (a1StartIndex !== -1) {
  const insertIndex = dataStr.indexOf('[', a1StartIndex) + 1;
  const newContent = newLessons34.map(lesson => JSON.stringify(lesson, null, 4)).join(',\\n') + ',\\n';
  const updatedDataStr = dataStr.slice(0, insertIndex) + '\\n' + newContent + dataStr.slice(insertIndex);
  fs.writeFileSync('src/data.js', updatedDataStr, 'utf8');
  console.log('Successfully added Part 3 & 4 new lessons to LEVEL_A1 in src/data.js');
} else {
  console.log('Could not find LEVEL_A1 array in src/data.js');
}
