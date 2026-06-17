const https = require('https');
const fs = require('fs');

const API_KEY = 'd19d43382005875a1295b91af27ef4a6158684834f81c6ee28d7ac6fbbb50619';
const VOICE_ID = 'lUTamkMw7gOzZbFIwmq4';

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
  text: "Hello, this is a test.",
  model_id: "eleven_monolingual_v1",
  voice_settings: {
    stability: 0.5,
    similarity_boost: 0.5
  }
});

const req = https.request(options, (res) => {
  console.log('Status:', res.statusCode);
  
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('test_audio.mp3');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Audio saved as test_audio.mp3');
    });
  } else {
    let errData = '';
    res.on('data', chunk => errData += chunk);
    res.on('end', () => console.log('Error data:', errData));
  }
});

req.on('error', (e) => {
  console.error('Request Error:', e);
});

req.write(data);
req.end();
