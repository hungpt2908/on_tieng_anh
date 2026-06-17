import fs from 'fs';
import https from 'https';
import { LEVELS } from './src/data.js';

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

    const encodedWord = encodeURIComponent(word);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedWord}&tl=en-US&client=tw-ob`;

    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Generated: ${word}`);
          resolve();
        });
      } else {
        console.error(`Failed for ${word}: ${res.statusCode}`);
        resolve(); // Continue anyway
      }
    }).on('error', (err) => {
      console.error(`Error requesting ${word}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (let i = 0; i < uniqueWords.length; i++) {
    const word = uniqueWords[i];
    try {
      await generateAudio(word);
      // Small delay to prevent being blocked by Google
      await new Promise(r => setTimeout(r, 200));
    } catch (e) {
      console.error(`Error processing ${word}:`, e);
    }
  }
  console.log('All audio generation attempts finished!');
}

run();
