import fs from 'fs';

const newData = [
  {
    "id": 211,
    "title": "Internal Organs & Body",
    "titleVi": "Nhóm 11: Cơ quan bên trong & Bộ phận cơ thể",
    "words": [
      { "word": "Brain", "pronunciation": "/breɪn/", "vi": "Bộ não", "en": "Use your brain to think!", "pos": "n." },
      { "word": "Heart", "pronunciation": "/hɑːrt/", "vi": "Trái tim", "en": "Running makes your heart beat fast.", "pos": "n." },
      { "word": "Stomach", "pronunciation": "/ˈstʌm.ək/", "vi": "Dạ dày / Bụng", "en": "My stomach is full after dinner.", "pos": "n." },
      { "word": "Blood", "pronunciation": "/blʌd/", "vi": "Máu", "en": "The nurse took some of my blood.", "pos": "n." },
      { "word": "Bone", "pronunciation": "/boʊn/", "vi": "Xương", "en": "He broke a bone in his leg.", "pos": "n." },
      { "word": "Muscle", "pronunciation": "/ˈmʌs.əl/", "vi": "Cơ bắp", "en": "Exercise makes your muscles strong.", "pos": "n." },
      { "word": "Skin", "pronunciation": "/skɪn/", "vi": "Làn da", "en": "Babies have very soft skin.", "pos": "n." },
      { "word": "Throat", "pronunciation": "/θroʊt/", "vi": "Cổ họng", "en": "I have a frog in my throat.", "pos": "n." },
      { "word": "Back", "pronunciation": "/bæk/", "vi": "Cái lưng", "en": "My back hurts from sitting too much.", "pos": "n." },
      { "word": "Tooth", "pronunciation": "/tuːθ/", "vi": "Chiếc răng", "en": "Brush your teeth every morning.", "pos": "n." }
    ]
  },
  {
    "id": 212,
    "title": "Symptoms & Illnesses",
    "titleVi": "Nhóm 12: Triệu chứng & Tên bệnh tật",
    "words": [
      { "word": "Headache", "pronunciation": "/ˈhed.eɪk/", "vi": "Đau đầu", "en": "I have a terrible headache.", "pos": "n." },
      { "word": "Stomachache", "pronunciation": "/ˈstʌm.ək.eɪk/", "vi": "Đau dạ dày/bụng", "en": "He ate too much and got a stomachache.", "pos": "n." },
      { "word": "Toothache", "pronunciation": "/ˈtuːθ.eɪk/", "vi": "Đau răng", "en": "She went to the dentist for a toothache.", "pos": "n." },
      { "word": "Fever", "pronunciation": "/ˈfiː.vɚ/", "vi": "Cơn sốt", "en": "The baby is hot. He has a fever.", "pos": "n." },
      { "word": "Cough", "pronunciation": "/kɑːf/", "vi": "Ho / Cơn ho", "en": "Cover your mouth when you cough.", "pos": "n." },
      { "word": "Cold", "pronunciation": "/koʊld/", "vi": "Bệnh cảm lạnh", "en": "Wear a jacket or you will catch a cold.", "pos": "n." },
      { "word": "Flu", "pronunciation": "/fluː/", "vi": "Bệnh cúm", "en": "I stay in bed because I have the flu.", "pos": "n." },
      { "word": "Pain", "pronunciation": "/peɪn/", "vi": "Sự đau đớn", "en": "I feel a sharp pain in my foot.", "pos": "n." },
      { "word": "Disease", "pronunciation": "/dɪˈziːz/", "vi": "Căn bệnh (nghiêm trọng)", "en": "Cancer is a dangerous disease.", "pos": "n." },
      { "word": "Allergy", "pronunciation": "/ˈæl.ɚ.dʒi/", "vi": "Bệnh dị ứng", "en": "I have an allergy to cats.", "pos": "n." }
    ]
  },
  {
    "id": 213,
    "title": "Medical & Treatment",
    "titleVi": "Nhóm 13: Y tế, Điều trị & Dinh dưỡng",
    "words": [
      { "word": "Medicine", "pronunciation": "/ˈmed.ɪ.sən/", "vi": "Thuốc (nói chung)", "en": "You need to take your medicine.", "pos": "n." },
      { "word": "Pill", "pronunciation": "/pɪl/", "vi": "Viên thuốc", "en": "The doctor gave me a white pill.", "pos": "n." },
      { "word": "Pharmacy", "pronunciation": "/ˈfɑːr.mə.si/", "vi": "Tiệm thuốc tây", "en": "I buy medicine at the pharmacy.", "pos": "n." },
      { "word": "Dentist", "pronunciation": "/ˈden.t̬ɪst/", "vi": "Nha sĩ", "en": "The dentist will check your teeth.", "pos": "n." },
      { "word": "Patient", "pronunciation": "/ˈpeɪ.ʃənt/", "vi": "Bệnh nhân", "en": "The hospital has many patients.", "pos": "n." },
      { "word": "Ambulance", "pronunciation": "/ˈæm.bjə.ləns/", "vi": "Xe cứu thương", "en": "Call an ambulance immediately!", "pos": "n." },
      { "word": "Surgery", "pronunciation": "/ˈsɝː.dʒɚ.i/", "vi": "Cuộc phẫu thuật", "en": "He needs heart surgery.", "pos": "n." },
      { "word": "Health", "pronunciation": "/helθ/", "vi": "Sức khỏe", "en": "Smoking is bad for your health.", "pos": "n." },
      { "word": "Vitamin", "pronunciation": "/ˈvaɪ.t̬ə.mɪn/", "vi": "Vi-ta-min", "en": "Fruits have a lot of vitamins.", "pos": "n." },
      { "word": "Diet", "pronunciation": "/ˈdaɪ.ət/", "vi": "Chế độ ăn kiêng/ăn uống", "en": "She is on a healthy diet.", "pos": "n." }
    ]
  },
  {
    "id": 214,
    "title": "Health Adjectives",
    "titleVi": "Nhóm 14: Tính từ miêu tả Thể trạng",
    "words": [
      { "word": "Sick", "pronunciation": "/sɪk/", "vi": "Ốm / Buồn nôn", "en": "I feel sick. I want to go home.", "pos": "adj." },
      { "word": "Ill", "pronunciation": "/ɪl/", "vi": "Bệnh (nặng hơn sick)", "en": "He is critically ill in the hospital.", "pos": "adj." },
      { "word": "Healthy", "pronunciation": "/ˈhel.θi/", "vi": "Khỏe mạnh", "en": "Eat apples to stay healthy.", "pos": "adj." },
      { "word": "Weak", "pronunciation": "/wiːk/", "vi": "Yếu ớt", "en": "After the flu, I felt very weak.", "pos": "adj." },
      { "word": "Strong", "pronunciation": "/strɑːŋ/", "vi": "Mạnh mẽ / Cường tráng", "en": "He is strong enough to lift the box.", "pos": "adj." },
      { "word": "Fit", "pronunciation": "/fɪt/", "vi": "Vóc dáng cân đối", "en": "He runs every day to keep fit.", "pos": "adj." },
      { "word": "Fat", "pronunciation": "/fæt/", "vi": "Béo / Mập mạp", "en": "Eating too much sugar makes you fat.", "pos": "adj." },
      { "word": "Thin", "pronunciation": "/θɪn/", "vi": "Gầy gò / Mỏng", "en": "She is very thin because she doesn't eat.", "pos": "adj." },
      { "word": "Dizzy", "pronunciation": "/ˈdɪz.i/", "vi": "Chóng mặt", "en": "I feel dizzy when I stand up fast.", "pos": "adj." },
      { "word": "Sore", "pronunciation": "/sɔːr/", "vi": "Đau rát / Tấy đỏ", "en": "I have a sore throat.", "pos": "adj." }
    ]
  },
  {
    "id": 215,
    "title": "Verbs & Future",
    "titleVi": "Nhóm 15: Động từ Sức khỏe & Từ vựng Tương lai",
    "words": [
      { "word": "Hurt", "pronunciation": "/hɝːt/", "vi": "Bị đau / Làm đau", "en": "My eyes hurt from the computer.", "pos": "v." },
      { "word": "Feel", "pronunciation": "/fiːl/", "vi": "Cảm thấy", "en": "How do you feel today?", "pos": "v." },
      { "word": "Check", "pronunciation": "/tʃek/", "vi": "Kiểm tra", "en": "The doctor will check your blood.", "pos": "v." },
      { "word": "Cure", "pronunciation": "/kjʊr/", "vi": "Chữa khỏi (bệnh)", "en": "This medicine will cure your cold.", "pos": "v." },
      { "word": "Recover", "pronunciation": "/rɪˈkʌv.ɚ/", "vi": "Hồi phục (sau ốm)", "en": "She will recover soon.", "pos": "v." },
      { "word": "Breathe", "pronunciation": "/briːð/", "vi": "Hít thở", "en": "It is hard to breathe with a cold.", "pos": "v." },
      { "word": "Will", "pronunciation": "/wɪl/", "vi": "Sẽ (quyết định nhanh)", "en": "I will buy some medicine for you.", "pos": "aux." },
      { "word": "Be going to", "pronunciation": "/bi ˈɡoʊ.ɪŋ tu/", "vi": "Sắp sửa / Sẽ (có KH)", "en": "Look at the clouds, it is going to rain.", "pos": "v." },
      { "word": "Tomorrow", "pronunciation": "/təˈmɔːr.oʊ/", "vi": "Ngày mai", "en": "I will go to the hospital tomorrow.", "pos": "adv." },
      { "word": "Soon", "pronunciation": "/suːn/", "vi": "Sớm / Chẳng bao lâu", "en": "Get well soon!", "pos": "adv." }
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
  console.log('Appended A2 Part 3 data successfully!');
} else {
  console.log('Failed to find LEVEL_A2');
}
