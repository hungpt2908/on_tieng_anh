import fs from 'fs';

let content = fs.readFileSync('src/a1Practice.js', 'utf8');
content = content.replace(/\\`/g, '`');
content = content.replace(/\\\$/g, '$');
fs.writeFileSync('src/a1Practice.js', content);
console.log('Fixed escape chars');
