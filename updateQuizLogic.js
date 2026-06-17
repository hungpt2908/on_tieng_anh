import fs from 'fs';

let content = fs.readFileSync('src/a1Practice.js', 'utf8');

const newRenderQuiz = `  function renderQuiz() {
    // Randomize and pick 20 questions
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 20);

    let qHtml = \\\`<div class="quiz-question fade-in" style="text-align: left;">
      <h2 style="color: var(--text-main); margin-bottom: 1rem;">A. Trắc nghiệm (20 câu ngẫu nhiên)</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem; font-style: italic;">Hệ thống đã chọn ngẫu nhiên 20 câu từ kho đề. Hãy hoàn thành tất cả các bảng dưới đây.</p>
    \\\`;
    
    // Group into chunks of 5
    const chunks = [];
    for(let i=0; i<selectedQuestions.length; i+=5) {
      chunks.push(selectedQuestions.slice(i, i+5));
    }

    let globalIndex = 0;
    chunks.forEach((chunk, chunkIndex) => {
      qHtml += \\\`<div class="quiz-table" style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <h3 style="color: var(--primary); margin-bottom: 1.5rem; border-bottom: 2px solid var(--bg); padding-bottom: 0.5rem;">Bảng \\\${chunkIndex + 1}</h3>\\\`;
      
      chunk.forEach((item) => {
        qHtml += \\\`
          <div style="margin-bottom: 2rem; padding: 1rem; background: var(--bg); border-radius: 8px;">
            <p style="font-weight: 600; font-size: 1.1rem; margin-bottom: 1rem;">Câu \\\${globalIndex + 1}: \\\${item.q}</p>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="qopts\\\${globalIndex}">
              \\\${item.options.map((opt, i) => \\\`
                <label style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius-sm); transition: background 0.2s;">
                  <input type="radio" name="qq\\\${globalIndex}" value="\\\${i}">
                  \\\${opt}
                </label>
              \\\`).join('')}
            </div>
            <div id="qres\\\${globalIndex}" style="margin-top: 0.5rem; font-weight: bold; display: none;"></div>
          </div>
        \\\`;
        globalIndex++;
      });
      qHtml += \\\`</div>\\\`;
    });
    
    qHtml += \\\`
      <div id="finalScoreDiv" style="display:none; padding: 2rem; background: var(--bg-alt); border-radius: 12px; text-align: center; margin-bottom: 2rem; border: 2px solid var(--primary); box-shadow: 0 4px 20px rgba(52, 152, 219, 0.15);">
         <h2 style="color: var(--primary); margin-bottom: 15px;">📊 KẾT QUẢ BÀI LÀM</h2>
         <div style="display: flex; justify-content: center; gap: 3rem;">
           <div>
             <p style="font-size: 1.2rem; color: var(--text-muted);">Số câu ĐÚNG</p>
             <p id="scoreCorrect" style="font-size: 3rem; color: var(--success); font-weight: 800; margin: 0;">0</p>
           </div>
           <div>
             <p style="font-size: 1.2rem; color: var(--text-muted);">Số câu SAI</p>
             <p id="scoreWrong" style="font-size: 3rem; color: var(--danger); font-weight: 800; margin: 0;">0</p>
           </div>
         </div>
      </div>
    \\\`;

    qHtml += \\\`<button id="checkQuizBtn" style="padding: 15px 24px; background: var(--primary); color: white; border: none; border-radius: var(--radius); cursor: pointer; font-weight: bold; font-family: inherit; font-size: 1.2rem; width: 100%; box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3); transition: transform 0.2s;">Nộp bài & Chấm điểm</button></div>\\\`;
    
    practiceContent.innerHTML = qHtml;

    document.getElementById('checkQuizBtn').addEventListener('click', () => {
      let correctCount = 0;
      let wrongCount = 0;

      selectedQuestions.forEach((item, index) => {
        const selected = document.querySelector(\\\`input[name="qq\\\${index}"]:checked\\\`);
        const resDiv = document.getElementById(\\\`qres\\\${index}\\\`);
        resDiv.style.display = 'block';
        
        if (!selected) {
          resDiv.style.color = 'var(--danger)';
          resDiv.innerHTML = \\\`❌ Chưa chọn. Đáp án đúng là: <strong>\\\${item.options[item.a]}</strong>\\\`;
          wrongCount++;
          return;
        }

        const selectedVal = parseInt(selected.value);
        if (selectedVal === item.a) {
          resDiv.style.color = 'var(--success)';
          resDiv.innerHTML = '✅ Chính xác!';
          correctCount++;
        } else {
          resDiv.style.color = 'var(--danger)';
          resDiv.innerHTML = \\\`❌ Sai. Đáp án đúng là: <strong>\\\${item.options[item.a]}</strong>\\\`;
          wrongCount++;
        }
      });
      
      const finalScoreDiv = document.getElementById('finalScoreDiv');
      finalScoreDiv.style.display = 'block';
      document.getElementById('scoreCorrect').innerText = correctCount;
      document.getElementById('scoreWrong').innerText = wrongCount;

      finalScoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      document.getElementById('checkQuizBtn').style.display = 'none'; 
    });
  }`;

// Replace the old renderQuiz
const startIdx = content.indexOf('function renderQuiz() {');
const endIdx = content.indexOf('// Load reading by default', startIdx);
if (startIdx !== -1 && endIdx !== -1) {
  content = content.slice(0, startIdx) + newRenderQuiz + '\n\n  ' + content.slice(endIdx);
  fs.writeFileSync('src/a1Practice.js', content, 'utf8');
  console.log('Successfully updated renderQuiz');
} else {
  console.log('Could not find renderQuiz');
}
