import fs from 'fs';

const a2Data = [
  {
    "id": 201,
    "title": "Irregular Verbs (Past Tense)",
    "titleVi": "Nhóm 1: TOP 15 Động từ BẤT QUY TẮC",
    "words": [
      { "word": "Went", "pronunciation": "/went/", "vi": "Đã đi", "en": "I went to Paris last summer.", "pos": "v." },
      { "word": "Saw", "pronunciation": "/sɑː/", "vi": "Đã thấy", "en": "We saw a beautiful mountain.", "pos": "v." },
      { "word": "Had", "pronunciation": "/hæd/", "vi": "Đã có / Đã ăn", "en": "We had a great time in London.", "pos": "v." },
      { "word": "Ate", "pronunciation": "/eɪt/", "vi": "Đã ăn", "en": "He ate pizza for dinner last night.", "pos": "v." },
      { "word": "Bought", "pronunciation": "/bɑːt/", "vi": "Đã mua", "en": "She bought a new bag yesterday.", "pos": "v." },
      { "word": "Took", "pronunciation": "/tʊk/", "vi": "Đã chụp(ảnh)/Lấy", "en": "I took many photos on the beach.", "pos": "v." },
      { "word": "Did", "pronunciation": "/dɪd/", "vi": "Đã làm", "en": "I did my homework 2 hours ago.", "pos": "v." },
      { "word": "Made", "pronunciation": "/meɪd/", "vi": "Đã làm / Tạo ra", "en": "My mom made a cake yesterday.", "pos": "v." },
      { "word": "Got", "pronunciation": "/ɡɑːt/", "vi": "Đã nhận/Lấy", "en": "I got a lot of gifts last week.", "pos": "v." },
      { "word": "Gave", "pronunciation": "/ɡeɪv/", "vi": "Đã cho/Tặng", "en": "He gave me a red flower.", "pos": "v." },
      { "word": "Came", "pronunciation": "/keɪm/", "vi": "Đã đến", "en": "They came to my house last night.", "pos": "v." },
      { "word": "Found", "pronunciation": "/faʊnd/", "vi": "Đã tìm thấy", "en": "I found my lost keys!", "pos": "v." },
      { "word": "Left", "pronunciation": "/left/", "vi": "Đã rời đi", "en": "The train left the station at 8 AM.", "pos": "v." },
      { "word": "Met", "pronunciation": "/met/", "vi": "Đã gặp", "en": "I met my old friend yesterday.", "pos": "v." },
      { "word": "Thought", "pronunciation": "/θɑːt/", "vi": "Đã nghĩ (rằng)", "en": "I thought the test was easy.", "pos": "v." }
    ]
  },
  {
    "id": 202,
    "title": "Regular Verbs (Past Tense)",
    "titleVi": "Nhóm 2: 10 Động từ CÓ QUY TẮC",
    "words": [
      { "word": "Visited", "pronunciation": "/ˈvɪz.ɪ.t̬ɪd/", "vi": "Đã tham quan", "en": "We visited the museum on Monday.", "pos": "v." },
      { "word": "Stayed", "pronunciation": "/steɪd/", "vi": "Đã ở lại", "en": "We stayed at a big hotel.", "pos": "v." },
      { "word": "Traveled", "pronunciation": "/ˈtræv.əld/", "vi": "Đã đi du lịch", "en": "She traveled around the world.", "pos": "v." },
      { "word": "Booked", "pronunciation": "/bʊkt/", "vi": "Đã đặt (vé/phòng)", "en": "I booked the flight ticket online.", "pos": "v." },
      { "word": "Arrived", "pronunciation": "/əˈraɪvd/", "vi": "Đã đến nơi", "en": "We arrived at the airport late.", "pos": "v." },
      { "word": "Enjoyed", "pronunciation": "/ɪnˈdʒɔɪd/", "vi": "Đã tận hưởng", "en": "I really enjoyed the trip.", "pos": "v." },
      { "word": "Happened", "pronunciation": "/ˈhæp.ənd/", "vi": "Đã xảy ra", "en": "What happened yesterday?", "pos": "v." },
      { "word": "Started", "pronunciation": "/ˈstɑːr.t̬ɪd/", "vi": "Đã bắt đầu", "en": "The movie started at 8 PM.", "pos": "v." },
      { "word": "Finished", "pronunciation": "/ˈfɪn.ɪʃt/", "vi": "Đã hoàn thành", "en": "I finished my work early.", "pos": "v." },
      { "word": "Tried", "pronunciation": "/traɪd/", "vi": "Đã thử/Cố gắng", "en": "I tried local food in Japan.", "pos": "v." }
    ]
  },
  {
    "id": 203,
    "title": "Travel & Holidays",
    "titleVi": "Nhóm 3: Từ vựng Du lịch & Kỳ nghỉ",
    "words": [
      { "word": "Trip", "pronunciation": "/trɪp/", "vi": "Chuyến đi", "en": "My business trip was successful.", "pos": "n." },
      { "word": "Holiday", "pronunciation": "/ˈhɑː.lə.deɪ/", "vi": "Kỳ nghỉ", "en": "Where did you go for your holiday?", "pos": "n." },
      { "word": "Flight", "pronunciation": "/flaɪt/", "vi": "Chuyến bay", "en": "The flight from Hanoi is long.", "pos": "n." },
      { "word": "Luggage", "pronunciation": "/ˈlʌɡ.ɪdʒ/", "vi": "Hành lý", "en": "His luggage was very heavy.", "pos": "n." },
      { "word": "Passenger", "pronunciation": "/ˈpæs.ən.dʒɚ/", "vi": "Hành khách", "en": "The plane has 200 passengers.", "pos": "n." },
      { "word": "Ticket", "pronunciation": "/ˈtɪk.ɪt/", "vi": "Tấm vé", "en": "Don't lose your train ticket!", "pos": "n." },
      { "word": "Airport", "pronunciation": "/ˈer.pɔːrt/", "vi": "Sân bay", "en": "We waited at the airport.", "pos": "n." },
      { "word": "Hotel", "pronunciation": "/hoʊˈtel/", "vi": "Khách sạn", "en": "It is a five-star hotel.", "pos": "n." },
      { "word": "Passport", "pronunciation": "/ˈpæs.pɔːrt/", "vi": "Hộ chiếu", "en": "You need a passport to travel.", "pos": "n." },
      { "word": "Souvenir", "pronunciation": "/ˌsuː.vəˈnɪr/", "vi": "Quà lưu niệm", "en": "I bought a shirt as a souvenir.", "pos": "n." }
    ]
  },
  {
    "id": 204,
    "title": "Time Markers",
    "titleVi": "Nhóm 4: Dấu hiệu Thời gian Quá khứ",
    "words": [
      { "word": "Yesterday", "pronunciation": "/ˈjes.tɚ.deɪ/", "vi": "Hôm qua", "en": "It rained yesterday.", "pos": "adv." },
      { "word": "Last", "pronunciation": "/læst/", "vi": "(Tối/Tuần) trước", "en": "We watched a movie last night.", "pos": "adv." },
      { "word": "Ago", "pronunciation": "/əˈɡoʊ/", "vi": "Cách đây", "en": "I met him two days ago.", "pos": "adv." },
      { "word": "Suddenly", "pronunciation": "/ˈsʌd.ən.li/", "vi": "Đột nhiên", "en": "Suddenly, the lights went out.", "pos": "adv." },
      { "word": "Finally", "pronunciation": "/ˈfaɪ.nəl.i/", "vi": "Cuối cùng thì", "en": "Finally, we arrived home.", "pos": "adv." }
    ]
  },
  {
    "id": 205,
    "title": "Experiences",
    "titleVi": "Nhóm 5: Tính từ miêu tả Trải nghiệm",
    "words": [
      { "word": "Awesome", "pronunciation": "/ˈɑː.səm/", "vi": "Tuyệt vời/Đỉnh", "en": "The food here is awesome!", "pos": "adj." },
      { "word": "Terrible", "pronunciation": "/ˈter.ə.bəl/", "vi": "Tồi tệ/Kinh khủng", "en": "The weather was terrible.", "pos": "adj." },
      { "word": "Exhausted", "pronunciation": "/ɪɡˈzɑː.stɪd/", "vi": "Kiệt sức", "en": "After the flight, I was exhausted.", "pos": "adj." },
      { "word": "Excited", "pronunciation": "/ɪkˈsaɪ.t̬ɪd/", "vi": "Phấn khích", "en": "I am excited about the trip.", "pos": "adj." },
      { "word": "Boring", "pronunciation": "/ˈbɔːr.ɪŋ/", "vi": "Nhàm chán", "en": "The movie was very boring.", "pos": "adj." },
      { "word": "Interesting", "pronunciation": "/ˈɪn.trəs.tɪŋ/", "vi": "Thú vị", "en": "It is an interesting book.", "pos": "adj." },
      { "word": "Surprised", "pronunciation": "/sɚˈpraɪzd/", "vi": "Bất ngờ/Ngạc nhiên", "en": "I was surprised by the gift.", "pos": "adj." },
      { "word": "Dangerous", "pronunciation": "/ˈdeɪn.dʒɚ.əs/", "vi": "Nguy hiểm", "en": "Swimming there is dangerous.", "pos": "adj." },
      { "word": "Safe", "pronunciation": "/seɪf/", "vi": "An toàn", "en": "The village is very safe.", "pos": "adj." },
      { "word": "Fantastic", "pronunciation": "/fænˈtæs.tɪk/", "vi": "Tuyệt diệu", "en": "We had a fantastic holiday.", "pos": "adj." }
    ]
  }
];

const dataStr = fs.readFileSync('src/data.js', 'utf8');

const regex = /export const LEVEL_A2 = \[[\s\S]*?\];\n*(?=export const LEVEL_B1)/;
const replacement = 'export const LEVEL_A2 = ' + JSON.stringify(a2Data, null, 2) + ';\n\n';

const newDataStr = dataStr.replace(regex, replacement);
fs.writeFileSync('src/data.js', newDataStr, 'utf8');
console.log('Successfully replaced LEVEL_A2');
