# TÓM TẮT TIẾN ĐỘ DỰ ÁN "WEB ÔN TIẾNG ANH" (Tính đến hết A2)

**Trạng thái hiện tại:** Đã Hoàn Thành Toàn Bộ Cấp Độ A1 và A2 (500 Từ Vựng Nền Tảng).

## 1. Nội Dung Đã Tích Hợp Gần Nhất (Phiên làm việc này)
- **Tài liệu A2 (Phần 2):** Công việc, Tiền bạc, Động từ cắt ngang. Luyện tập phân biệt Quá khứ đơn & Quá khứ tiếp diễn.
- **Tài liệu A2 (Phần 3):** Sức khỏe, Y tế, Bệnh tật. Luyện tập phân biệt Tương lai đơn (Will) và Tương lai gần (Be going to).
- **Tài liệu A2 (Phần 4 & 5):** Giáo dục, Công nghệ, Tính cách, Truyền thông, Tính từ đo lường. Luyện tập Câu Điều Kiện Loại 1 (If/Unless) và So sánh Hơn/Nhất.
- **Audio (MP3):** Đã chạy script (`generateAllAudio.js`) thành công và tự động sinh 100% âm thanh cho tất cả 500 từ vựng.
- Toàn bộ dữ liệu của A2 được lưu trong `src/data.js` (Mảng `LEVEL_A2`) và `src/a2Practice.js` (Gồm `quizQuestions`, `grammarQuestions`, `readingPassages`).

## 2. Các Bài Học & Kinh Nghiệm Kỹ Thuật Quan Trọng (Cho AI trong phiên sau)
- **Bug xử lý String/Regex đã gặp:** Khi sử dụng `string.replace(regex, replacementString)` trong Node.js, nếu `replacementString` chứa ký tự `$1`, `$2` hoặc `$200` (như trong các câu hỏi Tiền bạc của bài tập A2), JS sẽ hiểu nhầm đó là *capture groups* của regex. **Cách khắc phục vĩnh viễn:** Phải luôn dùng hàm callback trong replace: `string.replace(regex, (match, p1, p2) => \`\${p1}\${p2}\`)`.
- **Luôn đảm bảo dấu phẩy mảng hợp lệ:** Script tự động nối nội dung mảng trong `a2Practice.js` đã hoạt động tốt. Cần duy trì cẩn thận dấu ngoặc `[]` khi parse.
- Các script cập nhật dữ liệu tự động (như `insertA2Part...js` và `insertA2Practice...js`) vẫn đang nằm trong root folder, có thể dùng lại hoặc xóa đi nếu không cần.

## 3. Lộ Trình & Ý Tưởng Kế Tiếp (Next Steps)
- **Nội dung mới:** Người dùng có thể sẽ cung cấp nội dung Trình độ B1 (Trung cấp) hoặc yêu cầu bổ sung các tính năng nâng cao.
- **Tính năng đề xuất (Backlog):**
  1. Spaced Repetition (Lặp lại ngắt quãng) cho phần Flashcard.
  2. Bổ sung Nhạc nền (Lofi/Background Music) khi làm bài.
  3. Xây dựng hệ thống Tracking tiến độ của người dùng (Local Storage).
  4. Nâng cấp UI/UX, thêm hiệu ứng pháo hoa khi hoàn thành bài test.

---
*(AI trong phiên chat sau vui lòng đọc kỹ tóm tắt này để hiểu ngữ cảnh, hiểu kiến trúc lưu trữ dữ liệu của App (React/Vite tĩnh, không có backend) và tránh mắc lại lỗi Regex Capture Group).*
