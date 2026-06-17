import fs from 'fs';
import https from 'https';
import { LEVELS } from './src/data.js';

const API_KEY = 'd19d43382005875a1295b91af27ef4a6158684834f81c6ee28d7ac6fbbb50619';
const VOICE_ID = 'lUTamkMw7gOzZbFIwmq4';

const wordsToGenerate = [];

for (const level of LEVELS) {
  for (const lesson of level.data) {
    for (const wordObj of lesson.words) {
      wordsToGenerate.push(wordObj.word);
    }
  }
}

const uniqueWords = [...new Set(wordsToGenerate)];

console.log(`Found ${uniqueWords.length} unique words.`);

const audioDir = './public/audio';
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function generateAudio(word) {
  return new Promise((resolve, reject) => {
    const sanitizedFilename = word.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.mp3';
    const filePath = `${audioDir}/${sanitizedFilename}`;
    
    if (fs.existsSync(filePath)) {
      console.log(`Skipping ${word}, already exists.`);
      return resolve();
    }

    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${VOICE_ID}`,
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    };

    const data = JSON.stringify({
      text: word,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5
      }
    });

    const req = https.request(options, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Generated: ${word}`);
          resolve();
        });
      } else {
        let errData = '';
        res.on('data', chunk => errData += chunk);
        res.on('end', () => {
          console.error(`Failed for ${word}: ${res.statusCode} - ${errData}`);
          // If free tier limit or out of credits, don't crash everything
          resolve(); 
        });
      }
    });

    req.on('error', (e) => reject(e));
    req.write(data);
    req.end();
  });
}

async function run() {
  for (let i = 0; i < uniqueWords.length; i++) {
    const word = uniqueWords[i];
    try {
      await generateAudio(word);
      await new Promise(r => setTimeout(r, 400));
    } catch (e) {
      console.error(`Error processing ${word}:`, e);
    }
  }
  console.log('All audio generation attempts finished!');
}

run();
