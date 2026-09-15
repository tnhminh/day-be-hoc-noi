# Bé Học Nói Tiếng Việt 3D (Live Production Ready)

Ứng dụng web tương tác 3D và phát âm chuẩn tiếng Việt giúp trẻ mầm non tập nói, mở rộng vốn từ vựng và luyện phản xạ ngôn ngữ tự nhiên.

Hỗ trợ chuẩn đủ **Giọng Miền Nam**, **Giọng Miền Trung** và **Giọng Miền Bắc**, tích hợp 29 mô hình 3D thực tế, chức năng thu âm giọng bé, 2 trò chơi đố vui thông minh, khóa phụ huynh và khả năng hoạt động offline 100% (PWA).

---

## Tính Năng Nổi Bật

1. **29 Mô Hình 3D GLB Tương Tác Xoay 360°**
   - 5 chủ đề thân thuộc: Con vật (7), Đồ ăn & Uống (7), Đồ chơi (5), Xe cộ & Đi lại (3), Đồ dùng & Quần áo (7).
   - **Đầy đủ hoạt họa cử động (3D Animations)** cho 100% các con vật:
     - 🦆 **Con vịt**: Bơi lội lạch bạch (*Waddle*) & Quác quác nhảy múa (*Dance*).
     - 🐟 **Con cá**: Bơi lội quẫy đuôi (*Swim*) & Phóng mình quẫy nước (*Jump*).
     - 🦊 **Con cáo**: Ngó nghiêng tò mò (*Survey*), Đi dạo thong thả (*Walk*) & Chạy nhảy tung tăng (*Run*).
     - 🐎 **Con ngựa**: Phi nước đại tung vó (*horse_A_*).
     - 🦜 **Con vẹt**: Vỗ cánh bay lượn (*parrot_A_*).
     - 🦩 **Hồng hạc**: Sải cánh bồng bềnh (*flamingo_flyA_*).
     - 🕊️ **Con cò**: Tung cánh bay lượn (*storkFly_B_*).
     - 🤖 **Người máy**: Nhảy múa, Vẫy tay, Nhảy cao, Khen giỏi...
   - **Thanh điều khiển động tác**: Bé có thể chạm chọn các động tác khác nhau, tạm dừng/tiếp tục hoặc bấm nút "💃 Cử động" để chuyển động tác ăn mừng kèm pháo hoa confetti.
   - Bé có thể dùng tay vuốt xoay 360°, phóng to thu nhỏ để kích thích thị giác và trí tò mò.

2. **Hỗ Trợ Chuẩn 3 Giọng Vùng Miền Việt Nam**
   - Chuyển đổi linh hoạt tức thì ngay trên giao diện.
   - Khi chọn **Giọng Miền Nam**: Từ vựng và phát âm chuyển sang sắc thái miền Nam (*Trái táo, Trái dưa hấu, Trái bơ, Trái banh, Cái ly, Xe hơi, Kính mát, Bông hoa, Người máy...*).
   - Khi chọn **Giọng Miền Trung**: Bổ sung giọng đọc miền Trung gần gũi, kèm một số cách gọi thân quen như *trái banh, cái ly, bông hoa*.
   - Khi chọn **Giọng Miền Bắc**: Dùng bộ từ chuẩn phổ thông miền Bắc để bé nghe rõ âm chuẩn.
   - Tích hợp sẵn 288 file âm thanh chất lượng cao cho cả từ đơn ngắn, từ đầy đủ, câu mẫu, lời nhắc và hiệu ứng.

3. **Chức Năng Ghi Âm "Bé Tập Nói & Nghe Lại Giọng Mình"**
   - Bé bấm nút ghi âm nói thử -> Hệ thống tự động phát lại giọng nói non nớt của bé và phát lời khen ngợi kích lệ tinh thần.

4. **2 Chế Độ Mini Game Đa Dạng**
   - **🎯 Đố Vui Nghe Tiếng**: Nghe phát âm câu hỏi và chọn đúng mô hình 3D.
   - **🕵️ Đoán Bóng 3D Bí Ẩn**: Mô hình 3D hiển thị dưới dạng bóng đen bí ẩn, khi bé đoán đúng thì ánh sáng bừng sáng kèm hiệu ứng chúc mừng rực rỡ.

5. **Góc Ba Mẹ & Khóa Phụ Huynh An Toàn (Parental Controls)**
   - Khóa phụ huynh bằng phép tính toán học ngẫu nhiên ngăn trẻ bấm nhầm.
   - Điều chỉnh tốc độ giọng đọc: Chậm (0.8x cho bé mới bắt đầu) hoặc Tự nhiên (1.0x).
   - Giới hạn giờ chơi bảo vệ mắt: Nhắc nhở nghỉ ngơi sau 15 hoặc 30 phút.
   - Bật/tắt nhạc nền du dương (Web Audio synthesizer ru nhẹ nhàng).
   - Xem và đặt lại tiến độ học tập.

6. **PWA Offline 100% (Progressive Web App)**
   - Tự động cài đặt thành ứng dụng trên điện thoại, máy tính bảng (iPad, Android, Windows, Mac).
   - Service Worker lưu đệm toàn bộ mô hình và âm thanh, chơi mượt mà ngay cả khi không có mạng Internet.

---

## Kiến Trúc Hệ Thống (Architecture)

```
day-be-hoc-noi/
├── models/                     # 29 tệp 3D binary (.glb) chuẩn glTF 2.0
├── audio/                      # Âm thanh phát âm Giọng Miền Bắc (.mp3)
├── audio_central/              # Âm thanh phát âm Giọng Miền Trung (.mp3)
├── audio_south/                # Âm thanh phát âm Giọng Miền Nam (.mp3)
├── test/                       # Bộ kiểm thử tự động (Catalog, PWA, Server)
├── index.html                  # Giao diện chính responsive, semantic HTML5
├── styles.css                  # Thiết kế hiện đại, animation mượt mà
├── app.js                      # Logic ứng dụng, audio player, recorder, state
├── server.js                   # Production Node.js server (HTTP Range, Gzip, Healthcheck)
├── sw.js                       # Service Worker offline caching
├── manifest.webmanifest        # Cấu hình PWA App Manifest
├── icon.svg & favicon.svg      # Vector icons
├── Dockerfile                  # Multi-stage production container
└── docker-compose.yml          # Docker Compose orchestration
```

---

## Hướng Dẫn Triển Khai Production (Deployment Guide)

### Cách 1: Chạy trực tiếp với Node.js (Production Server)

```bash
# Cài đặt dependencies
npm ci --omit=dev

# Chạy kiểm thử tự động
npm test

# Khởi chạy server production (mặc định cổng 5173 hoặc cấu hình biến môi trường PORT)
PORT=80 node server.js
```

### Cách 2: Triển khai bằng Docker / Docker Compose (Khuyên dùng)

```bash
# Build và chạy container ngầm trong nền
docker compose up -d --build

# Kiểm tra trạng thái container và healthcheck
docker ps

# Xem log
docker compose logs -f
```

### Cách 3: Cấu hình Nginx Reverse Proxy (Kèm HTTPS SSL)

```nginx
server {
    listen 80;
    server_name behocnoi.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name behocnoi.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/behocnoi.yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/behocnoi.yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Kiểm Tra Sức Khỏe Hệ Thống (Healthchecks)

- Endpoint kiểm tra hoạt động: `GET http://localhost:5173/healthz`
- Phản hồi mẫu:
  ```json
  {
    "status": "ok",
    "uptimeSec": 3600,
    "timestamp": "2026-09-15T12:00:00.000Z",
    "modelsCount": 29
  }
  ```

---

## Kiểm Thử Tự Động (Automated Testing)

Chạy bộ test suite với Node.js native test runner:

```bash
npm test
```

Bao gồm:
- Kiểm tra toàn vẹn danh mục từ vựng (29 mục across 5 danh mục).
- Kiểm tra sự tồn tại và dung lượng của toàn bộ 29 mô hình GLB.
- Kiểm tra đầy đủ file phát âm Giọng Bắc, Giọng Trung và Giọng Nam.
- Kiểm tra tính hợp lệ của Manifest PWA và Service Worker.
- Kiểm tra server HTTP Range streaming và headers bảo mật.



---

## Cách Cập Nhật Giọng Miền Nam & Miền Trung Chuẩn Bản Xứ 100%

Do các engine TTS miễn phí công cộng (như Google Translate TTS hoặc Microsoft Edge TTS) hiện chỉ cung cấp giọng mẫu chuẩn Bắc/Phổ thông, để có **chất giọng Nam và Trung bản xứ 100%**, dự án đã tích hợp sẵn 2 phương án:

### Phương Án 1: Sinh Tự Động Bằng FPT.AI TTS (Khuyên Dùng)
FPT.AI cung cấp các voice mẫu vùng miền cực kỳ tự nhiên:
- **Giọng Miền Nam:** lannhi (nữ dịu dàng), minhquang (nam trầm ấm).
- **Giọng Miền Trung:** myan (nữ giọng Huế/Trung), 	hungan (nữ Trung).

Chỉ cần đăng ký tài khoản miễn phí tại [fpt.ai](https://fpt.ai) lấy API Key, sau đó chạy lệnh:

`powershell
# Đặt API Key của bạn
$env:FPT_AI_API_KEY="<api_key_cua_fpt_ai>"

# Chạy script tự động tổng hợp toàn bộ từ vựng, câu mẫu, gợi ý và lời khen
node scripts/generate-regional-voices-fpt.mjs
`

Script sẽ tự động render toàn bộ 58 file audio vào udio_south/ và udio_central/.

### Phương Án 2: Tự Thu Âm Trực Tiếp Voice Talent Hoặc Giọng Ba Mẹ
Bạn có thể thu âm giọng người thật (dùng điện thoại hoặc mic) và xuất file định dạng .mp3 với tên tương ứng vào thư mục:
- udio_south/<id>.mp3: File từ vựng (ví dụ: duck.mp3, pple.mp3...)
- udio_south/<id>_short.mp3: File từ đơn ngắn
- udio_south/<id>_sentence.mp3: File câu ví dụ hoàn chỉnh
- udio_central/: Tương tự cho giọng Miền Trung.
