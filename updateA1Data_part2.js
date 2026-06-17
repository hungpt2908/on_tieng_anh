import fs from 'fs';

const newLessons2 = [
  {
    "id": 106,
    "title": "Animals",
    "titleVi": "Nhóm 6: Thế giới động vật",
    "words": [
      { "word": "Dog", "pronunciation": "/dɑːɡ/", "vi": "Con chó", "en": "The dog barks loudly.", "pos": "n." },
      { "word": "Cat", "pronunciation": "/kæt/", "vi": "Con mèo", "en": "My cat likes to sleep.", "pos": "n." },
      { "word": "Bird", "pronunciation": "/bɝːd/", "vi": "Con chim", "en": "The bird sings in the tree.", "pos": "n." },
      { "word": "Pig", "pronunciation": "/pɪɡ/", "vi": "Con lợn/heo", "en": "The pig is pink and fat.", "pos": "n." },
      { "word": "Cow", "pronunciation": "/kaʊ/", "vi": "Con bò", "en": "The cow gives us milk.", "pos": "n." },
      { "word": "Chicken", "pronunciation": "/ˈtʃɪk.ɪn/", "vi": "Con gà", "en": "We have a chicken in the garden.", "pos": "n." },
      { "word": "Mouse", "pronunciation": "/maʊs/", "vi": "Con chuột", "en": "The mouse is very small.", "pos": "n." },
      { "word": "Horse", "pronunciation": "/hɔːrs/", "vi": "Con ngựa", "en": "He rides a brown horse.", "pos": "n." },
      { "word": "Bear", "pronunciation": "/ber/", "vi": "Con gấu", "en": "The bear is a large animal.", "pos": "n." },
      { "word": "Monkey", "pronunciation": "/ˈmʌŋ.ki/", "vi": "Con khỉ", "en": "The monkey eats bananas.", "pos": "n." }
    ]
  },
  {
    "id": 107,
    "title": "Body Parts",
    "titleVi": "Nhóm 7: Các bộ phận cơ thể",
    "words": [
      { "word": "Head", "pronunciation": "/hed/", "vi": "Cái đầu", "en": "She wears a hat on her head.", "pos": "n." },
      { "word": "Eye", "pronunciation": "/aɪ/", "vi": "Con mắt", "en": "He has blue eyes.", "pos": "n." },
      { "word": "Ear", "pronunciation": "/ɪr/", "vi": "Cái tai", "en": "I use my ears to listen.", "pos": "n." },
      { "word": "Nose", "pronunciation": "/noʊz/", "vi": "Cái mũi", "en": "A dog has a good nose.", "pos": "n." },
      { "word": "Mouth", "pronunciation": "/maʊθ/", "vi": "Cái miệng", "en": "Open your mouth, please.", "pos": "n." },
      { "word": "Hand", "pronunciation": "/hænd/", "vi": "Bàn tay", "en": "Wash your hands before eating.", "pos": "n." },
      { "word": "Foot", "pronunciation": "/fʊt/", "vi": "Bàn chân", "en": "My left foot hurts.", "pos": "n." },
      { "word": "Arm", "pronunciation": "/ɑːrm/", "vi": "Cánh tay", "en": "He has strong arms.", "pos": "n." },
      { "word": "Leg", "pronunciation": "/leɡ/", "vi": "Đôi chân", "en": "A spider has eight legs.", "pos": "n." },
      { "word": "Hair", "pronunciation": "/her/", "vi": "Mái tóc / Lông", "en": "She has long black hair.", "pos": "n." }
    ]
  },
  {
    "id": 108,
    "title": "Clothes & Colors",
    "titleVi": "Nhóm 8: Quần áo & Màu sắc",
    "words": [
      { "word": "Shirt", "pronunciation": "/ʃɝːt/", "vi": "Áo sơ mi", "en": "I wear a white shirt.", "pos": "n." },
      { "word": "Pants", "pronunciation": "/pænts/", "vi": "Quần dài", "en": "He buys new pants.", "pos": "n." },
      { "word": "Dress", "pronunciation": "/dres/", "vi": "Cái váy liền", "en": "She loves her pink dress.", "pos": "n." },
      { "word": "Shoe", "pronunciation": "/ʃuː/", "vi": "Chiếc giày", "en": "Where are my shoes?", "pos": "n." },
      { "word": "Hat", "pronunciation": "/hæt/", "vi": "Cái mũ/nón", "en": "Put on your hat.", "pos": "n." },
      { "word": "Red", "pronunciation": "/red/", "vi": "Màu đỏ", "en": "A strawberry is red.", "pos": "adj." },
      { "word": "Blue", "pronunciation": "/bluː/", "vi": "Màu xanh dương", "en": "The sky is blue.", "pos": "adj." },
      { "word": "Green", "pronunciation": "/ɡriːn/", "vi": "Màu xanh lá", "en": "The grass is green.", "pos": "adj." },
      { "word": "Yellow", "pronunciation": "/ˈjel.oʊ/", "vi": "Màu vàng", "en": "A lemon is yellow.", "pos": "adj." },
      { "word": "Black", "pronunciation": "/blæk/", "vi": "Màu đen", "en": "I have a black car.", "pos": "adj." }
    ]
  },
  {
    "id": 109,
    "title": "Objects & Rooms",
    "titleVi": "Nhóm 9: Đồ vật & Không gian",
    "words": [
      { "word": "Table", "pronunciation": "/ˈteɪ.bəl/", "vi": "Cái bàn", "en": "The cup is on the table.", "pos": "n." },
      { "word": "Chair", "pronunciation": "/tʃer/", "vi": "Cái ghế", "en": "Please sit on the chair.", "pos": "n." },
      { "word": "Bed", "pronunciation": "/bed/", "vi": "Cái giường", "en": "I sleep in a soft bed.", "pos": "n." },
      { "word": "Door", "pronunciation": "/dɔːr/", "vi": "Cái cửa ra vào", "en": "Open the door, please.", "pos": "n." },
      { "word": "Window", "pronunciation": "/ˈwɪn.doʊ/", "vi": "Cửa sổ", "en": "Look out the window.", "pos": "n." },
      { "word": "Room", "pronunciation": "/ruːm/", "vi": "Căn phòng", "en": "This is my room.", "pos": "n." },
      { "word": "Kitchen", "pronunciation": "/ˈkɪtʃ.ən/", "vi": "Nhà bếp", "en": "My mom cooks in the kitchen.", "pos": "n." },
      { "word": "Bathroom", "pronunciation": "/ˈbæθ.ruːm/", "vi": "Phòng tắm/WC", "en": "I wash my face in the bathroom.", "pos": "n." },
      { "word": "Computer", "pronunciation": "/kəmˈpjuː.t̬ɚ/", "vi": "Máy vi tính", "en": "I work on my computer.", "pos": "n." },
      { "word": "Pen", "pronunciation": "/pen/", "vi": "Cái bút", "en": "Give me a blue pen.", "pos": "n." }
    ]
  },
  {
    "id": 110,
    "title": "New Actions",
    "titleVi": "Nhóm 10: Động từ hành động mới",
    "words": [
      { "word": "Listen", "pronunciation": "/ˈlɪs.ən/", "vi": "Lắng nghe", "en": "I listen to music.", "pos": "v." },
      { "word": "Speak", "pronunciation": "/spiːk/", "vi": "Nói chuyện", "en": "She can speak English.", "pos": "v." },
      { "word": "Write", "pronunciation": "/raɪt/", "vi": "Viết", "en": "Please write your name.", "pos": "v." },
      { "word": "Open", "pronunciation": "/ˈoʊ.pən/", "vi": "Mở ra", "en": "Open your eyes!", "pos": "v." },
      { "word": "Close", "pronunciation": "/kloʊz/", "vi": "Đóng lại", "en": "Close the window, it's cold.", "pos": "v." },
      { "word": "Buy", "pronunciation": "/baɪ/", "vi": "Mua", "en": "I want to buy a new hat.", "pos": "v." },
      { "word": "Cook", "pronunciation": "/kʊk/", "vi": "Nấu ăn", "en": "My dad loves to cook.", "pos": "v." },
      { "word": "Sing", "pronunciation": "/sɪŋ/", "vi": "Hát", "en": "The little girl can sing.", "pos": "v." },
      { "word": "Stand", "pronunciation": "/stænd/", "vi": "Đứng", "en": "Please stand up.", "pos": "v." },
      { "word": "Sit", "pronunciation": "/sɪt/", "vi": "Ngồi", "en": "Sit down here.", "pos": "v." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');

// prepend to LEVEL_A1
const a1StartIndex = dataStr.indexOf('export const LEVEL_A1 = [');
if (a1StartIndex !== -1) {
  const insertIndex = dataStr.indexOf('[', a1StartIndex) + 1;
  const newContent = newLessons2.map(lesson => JSON.stringify(lesson, null, 4)).join(',\n') + ',\n';
  const updatedDataStr = dataStr.slice(0, insertIndex) + '\n' + newContent + dataStr.slice(insertIndex);
  fs.writeFileSync('src/data.js', updatedDataStr, 'utf8');
  console.log('Successfully added Part 2 new lessons to LEVEL_A1 in src/data.js');
} else {
  console.log('Could not find LEVEL_A1 array in src/data.js');
}
