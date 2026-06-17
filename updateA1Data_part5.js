import fs from 'fs';

const newLessons5 = [
  {
    "id": 121,
    "title": "Entertainment & Sports",
    "titleVi": "Nhóm 21: Giải trí, Nghệ thuật & Thể thao",
    "words": [
      { "word": "Music", "pronunciation": "/ˈmjuː.zɪk/", "vi": "Âm nhạc", "en": "I listen to pop music every day.", "pos": "n." },
      { "word": "Movie", "pronunciation": "/ˈmuː.vi/", "vi": "Bộ phim", "en": "We watch a good movie tonight.", "pos": "n." },
      { "word": "Camera", "pronunciation": "/ˈkæm.rə/", "vi": "Máy ảnh", "en": "Smile for the camera!", "pos": "n." },
      { "word": "Game", "pronunciation": "/ɡeɪm/", "vi": "Trò chơi", "en": "The children play a fun game.", "pos": "n." },
      { "word": "Party", "pronunciation": "/ˈpɑːr.t̬i/", "vi": "Bữa tiệc", "en": "I invite friends to my birthday party.", "pos": "n." },
      { "word": "Story", "pronunciation": "/ˈstɔːr.i/", "vi": "Câu chuyện", "en": "Tell me a bedtime story.", "pos": "n." },
      { "word": "Football", "pronunciation": "/ˈfʊt.bɑːl/", "vi": "Bóng đá", "en": "The boys play football outside.", "pos": "n." },
      { "word": "Guitar", "pronunciation": "/ɡɪˈtɑːr/", "vi": "Đàn ghi-ta", "en": "He plays the guitar very well.", "pos": "n." },
      { "word": "Song", "pronunciation": "/sɑːŋ/", "vi": "Bài hát", "en": "She sings a beautiful song.", "pos": "n." },
      { "word": "Team", "pronunciation": "/tiːm/", "vi": "Đội, nhóm", "en": "Our football team wins the match!", "pos": "n." }
    ]
  },
  {
    "id": 122,
    "title": "Personal Items & Dining",
    "titleVi": "Nhóm 22: Đồ vật cá nhân & Bàn ăn",
    "words": [
      { "word": "Clock", "pronunciation": "/klɑːk/", "vi": "Đồng hồ (treo tường)", "en": "Look at the clock, it is late!", "pos": "n." },
      { "word": "Watch", "pronunciation": "/wɑːtʃ/", "vi": "Đồng hồ (đeo tay)", "en": "I wear a silver watch.", "pos": "n." },
      { "word": "Lamp", "pronunciation": "/læmp/", "vi": "Cây đèn (để bàn)", "en": "Turn on the lamp, it is dark.", "pos": "n." },
      { "word": "Mirror", "pronunciation": "/ˈmɪr.ɚ/", "vi": "Cái gương", "en": "I look at my face in the mirror.", "pos": "n." },
      { "word": "Wall", "pronunciation": "/wɑːl/", "vi": "Bức tường", "en": "The wall in my room is white.", "pos": "n." },
      { "word": "Bottle", "pronunciation": "/ˈbɑː.t̬əl/", "vi": "Cái chai", "en": "Please give me a bottle of water.", "pos": "n." },
      { "word": "Glass", "pronunciation": "/ɡlæs/", "vi": "Cái ly (thủy tinh)", "en": "I drink a glass of orange juice.", "pos": "n." },
      { "word": "Bowl", "pronunciation": "/boʊl/", "vi": "Cái bát/chén", "en": "I eat a bowl of hot soup.", "pos": "n." },
      { "word": "Spoon", "pronunciation": "/spuːn/", "vi": "Cái thìa/muỗng", "en": "Use a spoon to eat the soup.", "pos": "n." },
      { "word": "Fork", "pronunciation": "/fɔːrk/", "vi": "Cái nĩa / dĩa", "en": "I eat meat with a knife and a fork.", "pos": "n." }
    ]
  },
  {
    "id": 123,
    "title": "Emotions & Value",
    "titleVi": "Nhóm 23: Tính từ Cảm xúc & Đánh giá",
    "words": [
      { "word": "Angry", "pronunciation": "/ˈæŋ.ɡri/", "vi": "Tức giận", "en": "The teacher is angry today.", "pos": "adj." },
      { "word": "Scared", "pronunciation": "/skerd/", "vi": "Sợ hãi", "en": "I am scared of snakes.", "pos": "adj." },
      { "word": "Bored", "pronunciation": "/bɔːrd/", "vi": "Nhàm chán", "en": "The lesson is long, I feel bored.", "pos": "adj." },
      { "word": "Funny", "pronunciation": "/ˈfʌn.i/", "vi": "Hài hước / Vui nhộn", "en": "He tells a funny joke.", "pos": "adj." },
      { "word": "Bad", "pronunciation": "/bæd/", "vi": "Xấu, tồi tệ", "en": "Smoking is bad for you.", "pos": "adj." },
      { "word": "Cheap", "pronunciation": "/tʃiːp/", "vi": "Rẻ tiền", "en": "This shirt is only $5. It is cheap.", "pos": "adj." },
      { "word": "Expensive", "pronunciation": "/ɪkˈspen.sɪv/", "vi": "Mắc, đắt tiền", "en": "A diamond ring is expensive.", "pos": "adj." },
      { "word": "Rich", "pronunciation": "/rɪtʃ/", "vi": "Giàu có", "en": "The rich man has three cars.", "pos": "adj." },
      { "word": "Poor", "pronunciation": "/pʊr/", "vi": "Nghèo khổ", "en": "The poor family needs food.", "pos": "adj." },
      { "word": "Hard", "pronunciation": "/hɑːrd/", "vi": "Khó / Cứng", "en": "The English test is very hard.", "pos": "adj." }
    ]
  },
  {
    "id": 124,
    "title": "Nature & Spaces",
    "titleVi": "Nhóm 24: Tự nhiên & Không gian",
    "words": [
      { "word": "Fire", "pronunciation": "/faɪr/", "vi": "Ngọn lửa", "en": "The fire is very hot.", "pos": "n." },
      { "word": "Ice", "pronunciation": "/aɪs/", "vi": "Đá lạnh / Băng", "en": "Put some ice in my tea.", "pos": "n." },
      { "word": "Sand", "pronunciation": "/sænd/", "vi": "Cát", "en": "Children play with sand on the beach.", "pos": "n." },
      { "word": "Stone", "pronunciation": "/stoʊn/", "vi": "Hòn đá", "en": "The boy throws a small stone.", "pos": "n." },
      { "word": "Grass", "pronunciation": "/ɡræs/", "vi": "Bãi cỏ / Cỏ", "en": "The cow eats green grass.", "pos": "n." },
      { "word": "Air", "pronunciation": "/er/", "vi": "Không khí", "en": "We need clean air to breathe.", "pos": "n." },
      { "word": "World", "pronunciation": "/wɝːld/", "vi": "Thế giới", "en": "We live in a beautiful world.", "pos": "n." },
      { "word": "Island", "pronunciation": "/ˈaɪ.lənd/", "vi": "Hòn đảo", "en": "They travel to a small island.", "pos": "n." },
      { "word": "Bridge", "pronunciation": "/brɪdʒ/", "vi": "Cây cầu", "en": "The car drives over the bridge.", "pos": "n." },
      { "word": "Pool", "pronunciation": "/puːl/", "vi": "Hồ bơi", "en": "Let's swim in the water pool.", "pos": "n." }
    ]
  },
  {
    "id": 125,
    "title": "Interactive Verbs",
    "titleVi": "Nhóm 25: Động từ Giao tiếp & Hành động",
    "words": [
      { "word": "Find", "pronunciation": "/faɪnd/", "vi": "Tìm thấy", "en": "I cannot find my keys.", "pos": "v." },
      { "word": "Lose", "pronunciation": "/luːz/", "vi": "Đánh mất, thua", "en": "Do not lose your phone!", "pos": "v." },
      { "word": "Meet", "pronunciation": "/miːt/", "vi": "Gặp gỡ", "en": "Nice to meet you!", "pos": "v." },
      { "word": "Talk", "pronunciation": "/tɑːk/", "vi": "Nói chuyện", "en": "We talk about the weather.", "pos": "v." },
      { "word": "Send", "pronunciation": "/send/", "vi": "Gửi đi", "en": "I send an email to my boss.", "pos": "v." },
      { "word": "Use", "pronunciation": "/juːz/", "vi": "Sử dụng", "en": "I use a pen to write.", "pos": "v." },
      { "word": "Wait", "pronunciation": "/weɪt/", "vi": "Chờ đợi", "en": "Please wait for me here.", "pos": "v." },
      { "word": "Stop", "pronunciation": "/stɑːp/", "vi": "Dừng lại", "en": "Stop the car!", "pos": "v." },
      { "word": "Start", "pronunciation": "/stɑːrt/", "vi": "Bắt đầu", "en": "The movie will start at 8 PM.", "pos": "v." },
      { "word": "Learn", "pronunciation": "/lɝːn/", "vi": "Học hỏi / Học tập", "en": "I learn English every day.", "pos": "v." }
    ]
  }
];

let dataStr = fs.readFileSync('src/data.js', 'utf8');
const a1StartIndex = dataStr.indexOf('export const LEVEL_A1 = [');
if (a1StartIndex !== -1) {
  const insertIndex = dataStr.indexOf('[', a1StartIndex) + 1;
  const newContent = newLessons5.map(lesson => JSON.stringify(lesson, null, 4)).join(',\n') + ',\n';
  const updatedDataStr = dataStr.slice(0, insertIndex) + '\n' + newContent + dataStr.slice(insertIndex);
  fs.writeFileSync('src/data.js', updatedDataStr, 'utf8');
  console.log('Successfully added Part 5 new lessons to LEVEL_A1 in src/data.js');
} else {
  console.log('Could not find LEVEL_A1 array in src/data.js');
}
