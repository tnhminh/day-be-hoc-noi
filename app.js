const rawWords = [
  {
    "id": "duck",
    "word": "Con vịt",
    "shortWord": "Vịt",
    "sentence": "Con vịt đang bơi dưới nước",
    "southSentence": "Con vịt bơi dưới nước nè",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/duck.glb",
    "audio": "audio/duck.mp3",
    "audioShort": "audio/duck_short.mp3",
    "sentenceAudio": "audio/duck_sentence.mp3",
    "southAudio": "audio_south/duck.mp3",
    "southShortAudio": "audio_south/duck_short.mp3",
    "centralAudio": "audio_central/duck.mp3",
    "centralShortAudio": "audio_central/duck_short.mp3",
    "centralSentenceAudio": "audio_central/duck_sentence.mp3",
    "southSentenceAudio": "audio_south/duck_sentence.mp3",
    "hint": "Quác quác! Chú vịt vàng bơi dưới nước",
    "usage": {
      "actionBtn": "🦆 Cho Vịt Bơi Lội",
      "actionType": "animal",
      "title": "Bé ngắm bạn Vịt bơi lội và học tiếng quác quác",
      "steps": [
        "🌾 Rắc nắm cám thơm xuống mép hồ nước trong",
        "🌊 Xem bạn vịt quạt chân bơi lạch bạch",
        "🗣️ Bé bắt chước tiếng kêu: Quác quác!"
      ]
    }
  },
  {
    "id": "fish",
    "word": "Con cá",
    "shortWord": "Cá",
    "sentence": "Con cá bơi lội tung tăng",
    "southSentence": "Con cá bơi tung tăng dưới nước",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/fish.glb",
    "audio": "audio/fish.mp3",
    "audioShort": "audio/fish_short.mp3",
    "sentenceAudio": "audio/fish_sentence.mp3",
    "southAudio": "audio_south/fish.mp3",
    "southShortAudio": "audio_south/fish_short.mp3",
    "centralAudio": "audio_central/fish.mp3",
    "centralShortAudio": "audio_central/fish_short.mp3",
    "centralSentenceAudio": "audio_central/fish_sentence.mp3",
    "southSentenceAudio": "audio_south/fish_sentence.mp3",
    "hint": "Bơi lội tung tăng trong làn nước trong veo",
    "usage": {
      "actionBtn": "🐟 Cho Cá Bơi Lội",
      "actionType": "animal",
      "title": "Bé chăm sóc đàn cá bơi lượn trong bể nước",
      "steps": [
        "🐠 Nuôi cá trong bể nước mát sạch sẽ",
        "🍱 Rắc chút thức ăn hạt nhỏ li ti trên mặt nước",
        "👀 Ngắm bạn cá quẫy đuôi bơi lượn tung tăng"
      ]
    }
  },
  {
    "id": "fox",
    "word": "Con cáo",
    "shortWord": "Cáo",
    "sentence": "Chú cáo có chiếc đuôi dài",
    "southSentence": "Chú cáo có cái đuôi dài ghê",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/fox.glb",
    "audio": "audio/fox.mp3",
    "audioShort": "audio/fox_short.mp3",
    "sentenceAudio": "audio/fox_sentence.mp3",
    "southAudio": "audio_south/fox.mp3",
    "southShortAudio": "audio_south/fox_short.mp3",
    "centralAudio": "audio_central/fox.mp3",
    "centralShortAudio": "audio_central/fox_short.mp3",
    "centralSentenceAudio": "audio_central/fox_sentence.mp3",
    "southSentenceAudio": "audio_south/fox_sentence.mp3",
    "hint": "Chú cáo thông minh có chiếc đuôi dài",
    "usage": {
      "actionBtn": "🦊 Cùng Cáo Đi Dạo",
      "actionType": "animal",
      "title": "Bạn Cáo thông minh tinh nghịch trong rừng xanh",
      "steps": [
        "🌲 Bạn Cáo có bộ lông đỏ cam sống trong rừng",
        "👂 Vểnh đôi tai nhọn lắng nghe tiếng chim hót",
        "🐾 Bước những bước chân nhẹ nhàng khéo léo"
      ]
    }
  },
  {
    "id": "horse",
    "word": "Con ngựa",
    "shortWord": "Ngựa",
    "sentence": "Con ngựa phi nhanh trên đồng cỏ",
    "southSentence": "Con ngựa chạy nhanh dữ ta",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/horse.glb",
    "audio": "audio/horse.mp3",
    "audioShort": "audio/horse_short.mp3",
    "sentenceAudio": "audio/horse_sentence.mp3",
    "southAudio": "audio_south/horse.mp3",
    "southShortAudio": "audio_south/horse_short.mp3",
    "centralAudio": "audio_central/horse.mp3",
    "centralShortAudio": "audio_central/horse_short.mp3",
    "centralSentenceAudio": "audio_central/horse_sentence.mp3",
    "southSentenceAudio": "audio_south/horse_sentence.mp3",
    "hint": "Phi nhanh lạch cạch trên đồng cỏ",
    "usage": {
      "actionBtn": "🐎 Phi Nước Đại",
      "actionType": "animal",
      "title": "Bé cưỡi ngựa dũng cảm phi nước đại trên đồng cỏ",
      "steps": [
        "🥕 Cho chú ngựa ăn cỏ non và cà rốt ngọt",
        "🏇 Cầm dây cương ngồi thật vững trên lưng ngựa",
        "💨 Lắc nhẹ cương phi nước đại lộc cộc"
      ]
    }
  },
  {
    "id": "parrot",
    "word": "Con vẹt",
    "shortWord": "Vẹt",
    "sentence": "Chú vẹt biết nói tiếng người",
    "southSentence": "Chú vẹt biết nói chuyện nữa nè",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/parrot.glb",
    "audio": "audio/parrot.mp3",
    "audioShort": "audio/parrot_short.mp3",
    "sentenceAudio": "audio/parrot_sentence.mp3",
    "southAudio": "audio_south/parrot.mp3",
    "southShortAudio": "audio_south/parrot_short.mp3",
    "centralAudio": "audio_central/parrot.mp3",
    "centralShortAudio": "audio_central/parrot_short.mp3",
    "centralSentenceAudio": "audio_central/parrot_sentence.mp3",
    "southSentenceAudio": "audio_south/parrot_sentence.mp3",
    "hint": "Chú vẹt rực rỡ biết nhại tiếng người",
    "usage": {
      "actionBtn": "🦜 Dạy Vẹt Tập Nói",
      "actionType": "animal",
      "title": "Bé trò chuyện và dạy chú Vẹt lặp lại tiếng nói",
      "steps": [
        "🍌 Cho vẹt ăn chuối chín và hạt ngô thơm",
        "🗣️ Bé nói thật to: Vẹt ơi xin chào!",
        "🎶 Lắng nghe chú vẹt nhại lại câu nói của bé"
      ]
    }
  },
  {
    "id": "flamingo",
    "word": "Chim hồng hạc",
    "shortWord": "Hồng hạc",
    "sentence": "Chim hồng hạc có bộ lông màu hồng",
    "southSentence": "Chim hồng hạc lông màu hồng đẹp quá",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/flamingo.glb",
    "audio": "audio/flamingo.mp3",
    "audioShort": "audio/flamingo_short.mp3",
    "sentenceAudio": "audio/flamingo_sentence.mp3",
    "southAudio": "audio_south/flamingo.mp3",
    "southShortAudio": "audio_south/flamingo_short.mp3",
    "centralAudio": "audio_central/flamingo.mp3",
    "centralShortAudio": "audio_central/flamingo_short.mp3",
    "centralSentenceAudio": "audio_central/flamingo_sentence.mp3",
    "southSentenceAudio": "audio_south/flamingo_sentence.mp3",
    "hint": "Loài chim lông hồng duyên dáng",
    "usage": {
      "actionBtn": "🦩 Ngắm Hồng Hạc",
      "actionType": "animal",
      "title": "Bé ngắm nhìn chú Hồng Hạc sải cánh tuyệt đẹp",
      "steps": [
        "🦩 Quan sát chú hồng hạc đứng co một chân",
        "🌊 Xem chim sải cánh lượn bên đầm nước mát",
        "🎨 Học cách nhận biết màu lông hồng rực rỡ"
      ]
    }
  },
  {
    "id": "stork",
    "word": "Con cò",
    "shortWord": "Cò",
    "sentence": "Con cò bay lả bay la",
    "southSentence": "Con cò trắng bay lả bay la",
    "cat": "animals",
    "catName": "Con vật",
    "glb": "models/stork.glb",
    "audio": "audio/stork.mp3",
    "audioShort": "audio/stork_short.mp3",
    "sentenceAudio": "audio/stork_sentence.mp3",
    "southAudio": "audio_south/stork.mp3",
    "southShortAudio": "audio_south/stork_short.mp3",
    "centralAudio": "audio_central/stork.mp3",
    "centralShortAudio": "audio_central/stork_short.mp3",
    "centralSentenceAudio": "audio_central/stork_sentence.mp3",
    "southSentenceAudio": "audio_south/stork_sentence.mp3",
    "hint": "Chú cò trắng bay lả bay la",
    "usage": {
      "actionBtn": "🕊️ Xem Cò Bay Lượn",
      "actionType": "animal",
      "title": "Chú cò trắng chăm chỉ gắn liền với đồng quê",
      "steps": [
        "🌾 Ngắm đàn cò trắng sải cánh trên cánh đồng lúa",
        "☁️ Tung đôi cánh rộng bay vút lên bầu trời xanh",
        "🎵 Cùng cất tiếng hát bài ca: Con cò bé bé"
      ]
    }
  },
  {
    "id": "apple",
    "word": "Quả táo",
    "shortWord": "Táo",
    "sentence": "Bé thích ăn quả táo đỏ",
    "southWord": "Trái táo",
    "southShort": "Táo",
    "southSentence": "Bé thích ăn trái táo đỏ ngọt lịm",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/apple.glb",
    "audio": "audio/apple.mp3",
    "audioShort": "audio/apple_short.mp3",
    "sentenceAudio": "audio/apple_sentence.mp3",
    "southAudio": "audio_south/apple.mp3",
    "southShortAudio": "audio_south/apple_short.mp3",
    "centralWord": "Trái táo",
    "centralShort": "Táo",
    "centralSentence": "Bé ăn trái táo đỏ ngọt lịm",
    "centralAudio": "audio_central/apple.mp3",
    "centralShortAudio": "audio_central/apple_short.mp3",
    "centralSentenceAudio": "audio_central/apple_sentence.mp3",
    "southSentenceAudio": "audio_south/apple_sentence.mp3",
    "hint": "Quả táo đỏ giòn ngọt, thơm ngon",
    "southHint": "Trái táo đỏ tươi giòn ngọt ngon lành",
    "usage": {
      "actionBtn": "🍎 Cắn Táo Giòn Rụm",
      "actionType": "eat",
      "title": "Bé ăn táo ngọt giòn để bổ sung vitamin bổ dưỡng",
      "steps": [
        "🧼 Rửa sạch quả táo dưới vòi nước mát",
        "🔪 Nhờ ba mẹ gọt vỏ và cắt thành từng miếng nhỏ",
        "😋 Cắn giòn rụm rộp rộp tăng cường sức khỏe"
      ]
    }
  },
  {
    "id": "watermelon",
    "word": "Quả dưa hấu",
    "shortWord": "Dưa hấu",
    "sentence": "Quả dưa hấu ngọt mát mùa hè",
    "southWord": "Trái dưa hấu",
    "southShort": "Dưa hấu",
    "southSentence": "Trái dưa hấu ngọt mát ăn đã quá",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/watermelon.glb",
    "audio": "audio/watermelon.mp3",
    "audioShort": "audio/watermelon_short.mp3",
    "sentenceAudio": "audio/watermelon_sentence.mp3",
    "southAudio": "audio_south/watermelon.mp3",
    "southShortAudio": "audio_south/watermelon_short.mp3",
    "centralWord": "Trái dưa hấu",
    "centralShort": "Dưa hấu",
    "centralSentence": "Trái dưa hấu ngọt mát mùa hè",
    "centralAudio": "audio_central/watermelon.mp3",
    "centralShortAudio": "audio_central/watermelon_short.mp3",
    "centralSentenceAudio": "audio_central/watermelon_sentence.mp3",
    "southSentenceAudio": "audio_south/watermelon_sentence.mp3",
    "hint": "Dưa hấu vỏ xanh ruột đỏ mát lành",
    "southHint": "Trái dưa hấu vỏ xanh ruột đỏ ngọt mát",
    "usage": {
      "actionBtn": "🍉 Ăn Dưa Hấu Mát Lạnh",
      "actionType": "eat",
      "title": "Bé thưởng thức miếng dưa hấu đỏ mọng giải nhiệt",
      "steps": [
        "🍉 Bổ quả dưa hấu thấy ruột đỏ tươi ngọt lịm",
        "🤲 Dùng thìa hoặc cầm hai tay miếng dưa mát",
        "😋 Nhai từng miếng ngọt mát ngày hè oi ả"
      ]
    }
  },
  {
    "id": "avocado",
    "word": "Quả bơ",
    "shortWord": "Bơ",
    "sentence": "Quả bơ béo ngậy thơm ngon",
    "southWord": "Trái bơ",
    "southShort": "Bơ",
    "southSentence": "Trái bơ dầm sữa béo thơm ngon lành",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/avocado.glb",
    "audio": "audio/avocado.mp3",
    "audioShort": "audio/avocado_short.mp3",
    "sentenceAudio": "audio/avocado_sentence.mp3",
    "southAudio": "audio_south/avocado.mp3",
    "southShortAudio": "audio_south/avocado_short.mp3",
    "centralWord": "Trái bơ",
    "centralShort": "Bơ",
    "centralSentence": "Trái bơ béo thơm ngon lành",
    "centralAudio": "audio_central/avocado.mp3",
    "centralShortAudio": "audio_central/avocado_short.mp3",
    "centralSentenceAudio": "audio_central/avocado_sentence.mp3",
    "southSentenceAudio": "audio_south/avocado_sentence.mp3",
    "hint": "Trái bơ béo thơm và giàu dinh dưỡng",
    "usage": {
      "actionBtn": "🥑 Dầm Quả Bơ Béo Ngậy",
      "actionType": "eat",
      "title": "Quả bơ béo ngậy giúp bé thông minh và cao lớn",
      "steps": [
        "🥑 Bóc lớp vỏ xanh mịn thấy lớp thịt bơ vàng ươm",
        "🥛 Thêm một chút sữa tươi dầm nhuyễn thơm lừng",
        "🥄 Dùng thìa múc từng miếng ăn ngon miệng"
      ]
    }
  },
  {
    "id": "cake",
    "word": "Bánh kem",
    "shortWord": "Bánh",
    "sentence": "Bé chúc mừng sinh nhật với bánh kem",
    "southSentence": "Bánh kem sinh nhật ngọt ngào ngon ghê",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/cake.glb",
    "audio": "audio/cake.mp3",
    "audioShort": "audio/cake_short.mp3",
    "sentenceAudio": "audio/cake_sentence.mp3",
    "southAudio": "audio_south/cake.mp3",
    "southShortAudio": "audio_south/cake_short.mp3",
    "centralAudio": "audio_central/cake.mp3",
    "centralShortAudio": "audio_central/cake_short.mp3",
    "centralSentenceAudio": "audio_central/cake_sentence.mp3",
    "southSentenceAudio": "audio_south/cake_sentence.mp3",
    "hint": "Bánh sinh nhật ngọt ngào phủ kem tươi",
    "usage": {
      "actionBtn": "🎂 Thổi Nến Bánh Kem",
      "actionType": "eat",
      "title": "Bé thổi nến mừng sinh nhật và thưởng thức bánh kem",
      "steps": [
        "🕯️ Cắm ngọn nến lung linh trên chiếc bánh sinh nhật",
        "🌬️ Thổi tắt ngọn nến và ước một điều ước ngoan",
        "🍰 Cắt từng phần bánh ngọt ngào chia cho cả nhà"
      ]
    }
  },
  {
    "id": "donut",
    "word": "Bánh ngọt",
    "shortWord": "Bánh",
    "sentence": "Chiếc bánh donut phủ kem dâu",
    "southSentence": "Bánh donut phủ kem dâu thơm lừng",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/donut.glb",
    "audio": "audio/donut.mp3",
    "audioShort": "audio/donut_short.mp3",
    "sentenceAudio": "audio/donut_sentence.mp3",
    "southAudio": "audio_south/donut.mp3",
    "southShortAudio": "audio_south/donut_short.mp3",
    "centralAudio": "audio_central/donut.mp3",
    "centralShortAudio": "audio_central/donut_short.mp3",
    "centralSentenceAudio": "audio_central/donut_sentence.mp3",
    "southSentenceAudio": "audio_south/donut_sentence.mp3",
    "hint": "Bánh vòng phủ kem dâu hồng rực rỡ",
    "usage": {
      "actionBtn": "🍩 Cắn Bánh Donut",
      "actionType": "eat",
      "title": "Chiếc bánh vòng xinh xắn phủ kẹo ngọt ngào",
      "steps": [
        "🍩 Chọn chiếc bánh vòng có rắc kẹo cốm sắc màu",
        "🤲 Cầm bằng hai bàn tay sạch sẽ",
        "😋 Cắn một miếng mềm xốp thơm mùi bơ sữa"
      ]
    }
  },
  {
    "id": "kebab",
    "word": "Xiên thịt nướng",
    "shortWord": "Thịt",
    "sentence": "Xiên thịt nướng thơm lừng nóng hổi",
    "southSentence": "Xiên thịt nướng thơm phức ăn ngon ghê",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/kebab.glb",
    "audio": "audio/kebab.mp3",
    "audioShort": "audio/kebab_short.mp3",
    "sentenceAudio": "audio/kebab_sentence.mp3",
    "southAudio": "audio_south/kebab.mp3",
    "southShortAudio": "audio_south/kebab_short.mp3",
    "centralAudio": "audio_central/kebab.mp3",
    "centralShortAudio": "audio_central/kebab_short.mp3",
    "centralSentenceAudio": "audio_central/kebab_sentence.mp3",
    "southSentenceAudio": "audio_south/kebab_sentence.mp3",
    "hint": "Món xiên thịt nướng thơm lừng",
    "usage": {
      "actionBtn": "🍢 Thưởng Thức Xiên Nướng",
      "actionType": "eat",
      "title": "Món thịt nướng xiên que thơm lừng cùng rau củ",
      "steps": [
        "🍢 Nướng thịt và ớt chuông vàng ươm trên bếp",
        "🌬️ Thổi nhẹ cho bớt nóng trước khi ăn",
        "😋 Cắn từng miếng thịt ngọt mềm đậm đà"
      ]
    }
  },
  {
    "id": "teacup",
    "word": "Tách trà",
    "shortWord": "Trà",
    "sentence": "Tách trà ấm áp tỏa hương thơm",
    "southSentence": "Tách trà ấm thơm lừng",
    "cat": "food",
    "catName": "Đồ ăn",
    "glb": "models/teacup.glb",
    "audio": "audio/teacup.mp3",
    "audioShort": "audio/teacup_short.mp3",
    "sentenceAudio": "audio/teacup_sentence.mp3",
    "southAudio": "audio_south/teacup.mp3",
    "southShortAudio": "audio_south/teacup_short.mp3",
    "centralAudio": "audio_central/teacup.mp3",
    "centralShortAudio": "audio_central/teacup_short.mp3",
    "centralSentenceAudio": "audio_central/teacup_sentence.mp3",
    "southSentenceAudio": "audio_south/teacup_sentence.mp3",
    "hint": "Tách trà ấm áp tỏa ngát hương",
    "usage": {
      "actionBtn": "☕ Uống Ngụm Nước Ấm",
      "actionType": "drink",
      "title": "Bé dùng tách nhỏ nhấp từng ngụm nước ấm thanh lọc",
      "steps": [
        "💧 Rót nước lọc ấm vào lòng chiếc tách sứ",
        "🤲 Dùng các ngón tay khéo léo cầm chắc quai",
        "☕ Nhấp từng ngụm nhỏ uống từ tốn lịch sự"
      ]
    }
  },
  {
    "id": "robot",
    "word": "Chú rô bốt",
    "shortWord": "Rô bốt",
    "sentence": "Chú rô bốt thông minh biết nhảy múa",
    "southWord": "Người máy",
    "southShort": "Người máy",
    "southSentence": "Người máy thông minh biết nhảy múa nè",
    "cat": "toys",
    "catName": "Đồ chơi",
    "glb": "models/robot.glb",
    "audio": "audio/robot.mp3",
    "audioShort": "audio/robot_short.mp3",
    "sentenceAudio": "audio/robot_sentence.mp3",
    "southAudio": "audio_south/robot.mp3",
    "southShortAudio": "audio_south/robot_short.mp3",
    "centralWord": "Người máy",
    "centralShort": "Người máy",
    "centralSentence": "Người máy thông minh biết nhảy múa",
    "centralAudio": "audio_central/robot.mp3",
    "centralShortAudio": "audio_central/robot_short.mp3",
    "centralSentenceAudio": "audio_central/robot_sentence.mp3",
    "southSentenceAudio": "audio_south/robot_sentence.mp3",
    "hint": "Người máy thông minh biết nhảy múa",
    "usage": {
      "actionBtn": "🤖 Bấm Nút Điều Khiển",
      "actionType": "toy",
      "title": "Bé bấm điều khiển để người máy biểu diễn nhảy múa",
      "steps": [
        "🔘 Bật công tắc nguồn ở phía sau lưng người máy",
        "🎮 Cầm bộ điều khiển từ xa bấm nút tiến lùi",
        "💃 Xem người máy vẫy tay và nhảy múa chào bé"
      ]
    }
  },
  {
    "id": "ball",
    "word": "Quả bóng",
    "shortWord": "Bóng",
    "sentence": "Bé cùng đá quả bóng tròn",
    "southWord": "Trái banh",
    "southShort": "Banh",
    "southSentence": "Bé thích đá trái banh lăn tăn",
    "cat": "toys",
    "catName": "Đồ chơi",
    "glb": "models/ball.glb",
    "audio": "audio/ball.mp3",
    "audioShort": "audio/ball_short.mp3",
    "sentenceAudio": "audio/ball_sentence.mp3",
    "southAudio": "audio_south/ball.mp3",
    "southShortAudio": "audio_south/ball_short.mp3",
    "centralWord": "Trái banh",
    "centralShort": "Banh",
    "centralSentence": "Bé đá trái banh lăn tăn trong sân",
    "centralAudio": "audio_central/ball.mp3",
    "centralShortAudio": "audio_central/ball_short.mp3",
    "centralSentenceAudio": "audio_central/ball_sentence.mp3",
    "southSentenceAudio": "audio_south/ball_sentence.mp3",
    "hint": "Quả bóng tròn xoe bé thích lăn tăn",
    "southHint": "Trái banh tròn xoe bé thích đá lăn tăn",
    "usage": {
      "actionBtn": "⚽ Sút Bóng Vào Gôn",
      "actionType": "play",
      "title": "Bé đá bóng hoặc ném bóng cùng các bạn rèn luyện thể thao",
      "steps": [
        "👐 Ôm bóng chuyền tay cho ba mẹ cùng chơi",
        "⚽ Đặt bóng xuống sân cỏ và sút thẳng vào gôn",
        "🏃 Chạy thật nhanh đuổi theo bóng rèn luyện đôi chân"
      ]
    }
  },
  {
    "id": "astronaut",
    "word": "Phi hành gia",
    "shortWord": "Phi hành gia",
    "sentence": "Chú phi hành gia bay vào vũ trụ",
    "southSentence": "Chú phi hành gia bay lên cung trăng",
    "cat": "toys",
    "catName": "Đồ chơi",
    "glb": "models/astronaut.glb",
    "audio": "audio/astronaut.mp3",
    "audioShort": "audio/astronaut_short.mp3",
    "sentenceAudio": "audio/astronaut_sentence.mp3",
    "southAudio": "audio_south/astronaut.mp3",
    "southShortAudio": "audio_south/astronaut_short.mp3",
    "centralAudio": "audio_central/astronaut.mp3",
    "centralShortAudio": "audio_central/astronaut_short.mp3",
    "centralSentenceAudio": "audio_central/astronaut_sentence.mp3",
    "southSentenceAudio": "audio_south/astronaut_sentence.mp3",
    "hint": "Chú phi hành gia bay vào vũ trụ",
    "usage": {
      "actionBtn": "🚀 Khám Phá Không Gian",
      "actionType": "toy",
      "title": "Bé hóa thân thành phi hành gia bay lên vũ trụ",
      "steps": [
        "🚀 Bước vào tàu con thoi thắt dây an toàn",
        "👨‍🚀 Mặc bộ quần áo vũ trụ đội mũ kính tròn",
        "🌌 Bay lơ lửng ngoài không gian ngắm các vì sao"
      ]
    }
  },
  {
    "id": "star",
    "word": "Ngôi sao",
    "shortWord": "Sao",
    "sentence": "Ngôi sao vàng năm cánh lấp lánh",
    "southSentence": "Ngôi sao vàng lấp lánh trên trời cao",
    "cat": "toys",
    "catName": "Đồ chơi",
    "glb": "models/star.glb",
    "audio": "audio/star.mp3",
    "audioShort": "audio/star_short.mp3",
    "sentenceAudio": "audio/star_sentence.mp3",
    "southAudio": "audio_south/star.mp3",
    "southShortAudio": "audio_south/star_short.mp3",
    "centralAudio": "audio_central/star.mp3",
    "centralShortAudio": "audio_central/star_short.mp3",
    "centralSentenceAudio": "audio_central/star_sentence.mp3",
    "southSentenceAudio": "audio_south/star_sentence.mp3",
    "hint": "Ngôi sao vàng năm cánh lấp lánh",
    "usage": {
      "actionBtn": "⭐ Nhận Sao Bé Ngoan",
      "actionType": "play",
      "title": "Ngôi sao vàng thưởng cho bé khi tập nói to rõ",
      "steps": [
        "🗣️ Cố gắng phát âm chuẩn từng từ vựng thật giỏi",
        "⭐ Nhận ngôi sao vàng lấp lánh dán vào bảng bé ngoan",
        "🏆 Gom đủ sao vàng để mở khóa rương kho báu"
      ]
    }
  },
  {
    "id": "boombox",
    "word": "Loa nghe nhạc",
    "shortWord": "Loa",
    "sentence": "Chiếc loa phát nhạc rộn ràng vui tai",
    "southSentence": "Cái loa mở nhạc nghe vui tai ghê",
    "cat": "toys",
    "catName": "Đồ chơi",
    "glb": "models/boombox.glb",
    "audio": "audio/boombox.mp3",
    "audioShort": "audio/boombox_short.mp3",
    "sentenceAudio": "audio/boombox_sentence.mp3",
    "southAudio": "audio_south/boombox.mp3",
    "southShortAudio": "audio_south/boombox_short.mp3",
    "centralAudio": "audio_central/boombox.mp3",
    "centralShortAudio": "audio_central/boombox_short.mp3",
    "centralSentenceAudio": "audio_central/boombox_sentence.mp3",
    "southSentenceAudio": "audio_south/boombox_sentence.mp3",
    "hint": "Chiếc máy phát nhạc rộn ràng vui tai",
    "usage": {
      "actionBtn": "📻 Bật Nhạc Nhún Nhảy",
      "actionType": "music",
      "title": "Bé bật loa nghe bài hát thiếu nhi và nhún nhảy theo",
      "steps": [
        "🔘 Bấm nút Play hình tam giác trên mặt máy",
        "🔊 Vặn núm tròn xoay để âm lượng vừa nghe",
        "🎶 Nhún nhảy múa may theo điệu nhạc rộn ràng"
      ]
    }
  },
  {
    "id": "toy_car",
    "word": "Xe ô tô",
    "shortWord": "Xe",
    "sentence": "Chiếc xe ô tô chạy bon bon",
    "southWord": "Xe hơi",
    "southShort": "Xe",
    "southSentence": "Chiếc xe hơi chạy bon bon trên đường",
    "cat": "vehicles",
    "catName": "Xe cộ",
    "glb": "models/toy_car.glb",
    "audio": "audio/toy_car.mp3",
    "audioShort": "audio/toy_car_short.mp3",
    "sentenceAudio": "audio/toy_car_sentence.mp3",
    "southAudio": "audio_south/toy_car.mp3",
    "southShortAudio": "audio_south/toy_car_short.mp3",
    "centralWord": "Xe hơi",
    "centralShort": "Xe",
    "centralSentence": "Chiếc xe hơi chạy bon bon trên đường",
    "centralAudio": "audio_central/toy_car.mp3",
    "centralShortAudio": "audio_central/toy_car_short.mp3",
    "centralSentenceAudio": "audio_central/toy_car_sentence.mp3",
    "southSentenceAudio": "audio_south/toy_car_sentence.mp3",
    "hint": "Brum brum! Chiếc xe bốn bánh bon bon",
    "southHint": "Brum brum! Chiếc xe hơi chạy bon bon",
    "usage": {
      "actionBtn": "🏎️ Kéo Xe Lăn Bánh",
      "actionType": "vehicle",
      "title": "Chiếc xe ô tô dây cót phóng vút trên đường",
      "steps": [
        "🖐️ Đặt xe xuống sàn kéo lùi về sau lấy đà",
        "💨 Thả tay ra xem xe lao vút về phía trước",
        "🏁 Cùng bạn bè thi đua xem xe ai chạy xa nhất"
      ]
    }
  },
  {
    "id": "bike",
    "word": "Xe đạp",
    "shortWord": "Xe đạp",
    "sentence": "Bé cùng đạp xe rèn luyện sức khỏe",
    "southSentence": "Bé chạy xe đạp vòng vòng sân nhà",
    "cat": "vehicles",
    "catName": "Xe cộ",
    "glb": "models/bike.glb",
    "audio": "audio/bike.mp3",
    "audioShort": "audio/bike_short.mp3",
    "sentenceAudio": "audio/bike_sentence.mp3",
    "southAudio": "audio_south/bike.mp3",
    "southShortAudio": "audio_south/bike_short.mp3",
    "centralAudio": "audio_central/bike.mp3",
    "centralShortAudio": "audio_central/bike_short.mp3",
    "centralSentenceAudio": "audio_central/bike_sentence.mp3",
    "southSentenceAudio": "audio_south/bike_sentence.mp3",
    "hint": "Bé đạp xe rèn luyện sức khỏe dẻo dai",
    "usage": {
      "actionBtn": "🚴 Đạp Xe Bon Bon",
      "actionType": "vehicle",
      "title": "Bé tập đạp xe giữ thăng bằng và rèn luyện đôi chân",
      "steps": [
        "⛑️ Đội mũ bảo hiểm vừa vặn để bảo vệ đầu",
        "🦶 Đặt hai chân lên bàn đạp tay giữ chặt ghi-đông",
        "🚴 Đạp đều chân cho xe bon bon lăn bánh quanh sân"
      ]
    }
  },
  {
    "id": "milk_truck",
    "word": "Xe tải",
    "shortWord": "Xe tải",
    "sentence": "Chiếc xe tải chở sữa đi giao hàng",
    "southSentence": "Xe tải to lớn chở sữa bon bon",
    "cat": "vehicles",
    "catName": "Xe cộ",
    "glb": "models/milk_truck.glb",
    "audio": "audio/milk_truck.mp3",
    "audioShort": "audio/milk_truck_short.mp3",
    "sentenceAudio": "audio/milk_truck_sentence.mp3",
    "southAudio": "audio_south/milk_truck.mp3",
    "southShortAudio": "audio_south/milk_truck_short.mp3",
    "centralAudio": "audio_central/milk_truck.mp3",
    "centralShortAudio": "audio_central/milk_truck_short.mp3",
    "centralSentenceAudio": "audio_central/milk_truck_sentence.mp3",
    "southSentenceAudio": "audio_south/milk_truck_sentence.mp3",
    "hint": "Xe tải to lớn chở hàng hóa bon bon",
    "usage": {
      "actionBtn": "🚚 Bấm Còi Xe Tải",
      "actionType": "vehicle",
      "title": "Xe bồn chở sữa tươi thơm ngon từ nông trại về",
      "steps": [
        "🥛 Nạp đầy sữa bò tươi nguyên chất từ trang trại",
        "🚚 Lái xe bon bon vượt qua các cung đường an toàn",
        "🏪 Giao sữa tươi bổ dưỡng đến tận tay các em nhỏ"
      ]
    }
  },
  {
    "id": "cup",
    "word": "Cái cốc",
    "shortWord": "Cốc",
    "sentence": "Bé dùng cốc để uống nước lọc",
    "southWord": "Cái ly",
    "southShort": "Ly",
    "southSentence": "Bé uống nước bằng cái ly xinh xinh",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/cup.glb",
    "audio": "audio/cup.mp3",
    "audioShort": "audio/cup_short.mp3",
    "sentenceAudio": "audio/cup_sentence.mp3",
    "southAudio": "audio_south/cup.mp3",
    "southShortAudio": "audio_south/cup_short.mp3",
    "centralWord": "Cái ly",
    "centralShort": "Ly",
    "centralSentence": "Bé uống nước bằng cái ly xinh xinh",
    "centralAudio": "audio_central/cup.mp3",
    "centralShortAudio": "audio_central/cup_short.mp3",
    "centralSentenceAudio": "audio_central/cup_sentence.mp3",
    "southSentenceAudio": "audio_south/cup_sentence.mp3",
    "hint": "Cốc dùng để bé uống nước mỗi ngày",
    "southHint": "Cái ly dùng để bé uống nước, uống sữa",
    "usage": {
      "actionBtn": "🥤 Rót Nước Uống Ực",
      "actionType": "drink",
      "title": "Chiếc cốc xinh xắn giúp bé uống nước đầy đủ mỗi ngày",
      "steps": [
        "💧 Rót nước lọc mát vừa đủ vào lòng cốc",
        "🤲 Dùng hai bàn tay nâng cốc cẩn thận không làm đổ",
        "🥤 Uống từng ngụm mát lành giúp cơ thể khỏe mạnh"
      ]
    }
  },
  {
    "id": "bottle",
    "word": "Bình nước",
    "shortWord": "Bình",
    "sentence": "Bình nước tiện lợi bé mang đi học",
    "southSentence": "Bình nước mát bé mang theo đi học",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/bottle.glb",
    "audio": "audio/bottle.mp3",
    "audioShort": "audio/bottle_short.mp3",
    "sentenceAudio": "audio/bottle_sentence.mp3",
    "southAudio": "audio_south/bottle.mp3",
    "southShortAudio": "audio_south/bottle_short.mp3",
    "centralAudio": "audio_central/bottle.mp3",
    "centralShortAudio": "audio_central/bottle_short.mp3",
    "centralSentenceAudio": "audio_central/bottle_sentence.mp3",
    "southSentenceAudio": "audio_south/bottle_sentence.mp3",
    "hint": "Bình nước tiện lợi bé mang đi học",
    "usage": {
      "actionBtn": "🍶 Vặn Nắp Rót Nước",
      "actionType": "drink",
      "title": "Bình nước tiện lợi mang theo khi bé đi học đi chơi",
      "steps": [
        "🔄 Vặn nắp mở miệng bình nước cẩn thận",
        "💧 Rút ống hút hoặc rót nước mát ra ly nhỏ",
        "🔒 Đóng chặt nắp cài then và bỏ vào ngăn balo"
      ]
    }
  },
  {
    "id": "shoe",
    "word": "Đôi giày",
    "shortWord": "Giày",
    "sentence": "Đôi giày xinh xắn bảo vệ chân bé",
    "southSentence": "Đôi giày xinh xắn mang vào êm chân",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/shoe.glb",
    "audio": "audio/shoe.mp3",
    "audioShort": "audio/shoe_short.mp3",
    "sentenceAudio": "audio/shoe_sentence.mp3",
    "southAudio": "audio_south/shoe.mp3",
    "southShortAudio": "audio_south/shoe_short.mp3",
    "centralAudio": "audio_central/shoe.mp3",
    "centralShortAudio": "audio_central/shoe_short.mp3",
    "centralSentenceAudio": "audio_central/shoe_sentence.mp3",
    "southSentenceAudio": "audio_south/shoe_sentence.mp3",
    "hint": "Đôi giày xinh bảo vệ đôi chân bé",
    "usage": {
      "actionBtn": "👟 Xỏ Giày Bước Đi",
      "actionType": "wear",
      "title": "Đôi giày bảo vệ bàn chân xinh khi bé chạy nhảy",
      "steps": [
        "🧦 Đi đôi tất (vớ) mềm mại êm ái vào chân",
        "👟 Xỏ mũi chân vào giày rồi kéo nhẹ phần gót",
        "🚶 Dán quai dính chắc chắn rồi tự tin bước đi dạo"
      ]
    }
  },
  {
    "id": "glasses",
    "word": "Kính mắt",
    "shortWord": "Kính",
    "sentence": "Chiếc kính mát che nắng rất đẹp",
    "southWord": "Kính mát",
    "southShort": "Kính",
    "southSentence": "Chiếc kính mát sành điệu che nắng",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/glasses.glb",
    "audio": "audio/glasses.mp3",
    "audioShort": "audio/glasses_short.mp3",
    "sentenceAudio": "audio/glasses_sentence.mp3",
    "southAudio": "audio_south/glasses.mp3",
    "southShortAudio": "audio_south/glasses_short.mp3",
    "centralWord": "Kính mát",
    "centralShort": "Kính",
    "centralSentence": "Chiếc kính mát che nắng rất đẹp",
    "centralAudio": "audio_central/glasses.mp3",
    "centralShortAudio": "audio_central/glasses_short.mp3",
    "centralSentenceAudio": "audio_central/glasses_sentence.mp3",
    "southSentenceAudio": "audio_south/glasses_sentence.mp3",
    "hint": "Chiếc kính sành điệu che nắng cho mắt",
    "southHint": "Chiếc kính mát che nắng sành điệu",
    "usage": {
      "actionBtn": "👓 Đeo Kính Chống Nắng",
      "actionType": "wear",
      "title": "Kính mát bảo vệ mắt bé khỏi ánh nắng chói chang",
      "steps": [
        "👐 Dùng hai tay cầm hai gọng kính mở rộng vừa phải",
        "👃 Đặt nhẹ phần đệm kính lên sống mũi thẳng",
        "😎 Cài hai gọng qua vành tai giúp nhìn rõ không chói"
      ]
    }
  },
  {
    "id": "camera",
    "word": "Máy ảnh",
    "shortWord": "Máy ảnh",
    "sentence": "Máy ảnh chụp lại nụ cười của bé",
    "southSentence": "Máy ảnh chụp nụ cười của con nè",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/camera.glb",
    "audio": "audio/camera.mp3",
    "audioShort": "audio/camera_short.mp3",
    "sentenceAudio": "audio/camera_sentence.mp3",
    "southAudio": "audio_south/camera.mp3",
    "southShortAudio": "audio_south/camera_short.mp3",
    "centralAudio": "audio_central/camera.mp3",
    "centralShortAudio": "audio_central/camera_short.mp3",
    "centralSentenceAudio": "audio_central/camera_sentence.mp3",
    "southSentenceAudio": "audio_south/camera_sentence.mp3",
    "hint": "Tách tách! Máy ảnh lưu giữ kỷ niệm đẹp",
    "usage": {
      "actionBtn": "📸 Bấm Tách Chụp Hình",
      "actionType": "camera",
      "title": "Bé ngắm ống kính và chụp lại nụ cười rạng rỡ của cả nhà",
      "steps": [
        "👀 Hướng ống kính máy ảnh về phía người thân bạn bè",
        "😁 Cười thật tươi và hô to: Kim chi một hai ba!",
        "🔘 Bấm nút Tách một cái để lưu lại bức ảnh kỷ niệm"
      ]
    }
  },
  {
    "id": "lantern",
    "word": "Cái đèn",
    "shortWord": "Đèn",
    "sentence": "Chiếc đèn phát ra ánh sáng lung linh",
    "southSentence": "Cái đèn sáng rực rỡ ấm cúng",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/lantern.glb",
    "audio": "audio/lantern.mp3",
    "audioShort": "audio/lantern_short.mp3",
    "sentenceAudio": "audio/lantern_sentence.mp3",
    "southAudio": "audio_south/lantern.mp3",
    "southShortAudio": "audio_south/lantern_short.mp3",
    "centralAudio": "audio_central/lantern.mp3",
    "centralShortAudio": "audio_central/lantern_short.mp3",
    "centralSentenceAudio": "audio_central/lantern_sentence.mp3",
    "southSentenceAudio": "audio_south/lantern_sentence.mp3",
    "hint": "Chiếc đèn chiếu ánh sáng ấm áp",
    "usage": {
      "actionBtn": "🏮 Thắp Sáng Đèn Lồng",
      "actionType": "light",
      "title": "Chiếc lồng đèn lung linh thắp sáng đêm hội Trung Thu",
      "steps": [
        "🏮 Bật công tắc cho bóng đèn bên trong sáng rực rỡ",
        "🚶 Cầm cán đèn cùng các bạn rước đèn quanh phố",
        "🌕 Cùng phá cỗ bánh dẻo bánh nướng dưới ánh trăng rằm"
      ]
    }
  },
  {
    "id": "plant",
    "word": "Chậu hoa cây cảnh",
    "shortWord": "Cây hoa",
    "sentence": "Chậu hoa xanh mát nở hoa xinh đẹp",
    "southWord": "Bông hoa",
    "southShort": "Hoa",
    "southSentence": "Bông hoa tươi thắm nở đẹp quá chừng",
    "cat": "objects",
    "catName": "Đồ dùng",
    "glb": "models/plant.glb",
    "audio": "audio/plant.mp3",
    "audioShort": "audio/plant_short.mp3",
    "sentenceAudio": "audio/plant_sentence.mp3",
    "southAudio": "audio_south/plant.mp3",
    "southShortAudio": "audio_south/plant_short.mp3",
    "centralWord": "Bông hoa",
    "centralShort": "Hoa",
    "centralSentence": "Bông hoa tươi thắm nở đẹp quá chừng",
    "centralAudio": "audio_central/plant.mp3",
    "centralShortAudio": "audio_central/plant_short.mp3",
    "centralSentenceAudio": "audio_central/plant_sentence.mp3",
    "southSentenceAudio": "audio_south/plant_sentence.mp3",
    "hint": "Chậu hoa xanh mát làm đẹp căn phòng",
    "southHint": "Bông hoa xinh xắn làm đẹp căn phòng",
    "usage": {
      "actionBtn": "🌱 Tưới Nước Cho Cây",
      "actionType": "plant",
      "title": "Bé tưới nước chăm sóc cây xanh giúp môi trường trong lành",
      "steps": [
        "☀️ Đặt chậu cây ở ban công nơi có ánh nắng ban mai",
        "🚿 Dùng bình tưới phun từng hạt nước li ti lên lá",
        "🌸 Ngắm nhìn cây đâm chồi nảy lộc nở những đóa hoa xinh"
      ]
    }
  }
];


// App State
const state = {
  voice: localStorage.getItem('voice_region') || 'south',
  speechRate: (() => {
    let r = parseFloat(localStorage.getItem('speech_rate'));
    if (!r || r < 1.0) {
      r = 1.0;
      localStorage.setItem('speech_rate', '1.0');
    }
    return r;
  })(),
  bgmEnabled: localStorage.getItem('bgm_enabled') !== 'false',
  timeLimit: parseInt(localStorage.getItem('time_limit'), 10) || 0,
  filter: 'all',
  learned: new Set(JSON.parse(localStorage.getItem('learned_words') || '[]')),
  viewMode: localStorage.getItem('view_mode') || 'map',
  chest: { step: 0, reward: null, opened: false },
  current: null,
  heroIndex: 0,
  flashcardIndex: 0,
  flashcardPlaying: false,
  flashcardTimer: null,
  quiz: { round: 0, score: 0, answer: null, locked: false },
  shadow: { round: 0, score: 0, answer: null, locked: false },
  memory: { pairsMatched: 0, firstCard: null, secondCard: null, locked: false, items: [] },
  basket: { category: null, targetItems: [], collected: [], round: 0, locked: false },
  whack: { score: 0, target: null, timer: null, timeLeft: 30, activeHoles: [], running: false },
  parentGateAnswer: null
};

const $ = (s) => document.querySelector(s);

function getItemData(item) {
  const isSouth = state.voice === 'south';
  const isCentral = state.voice === 'central';
  return {
    id: item.id,
    word: isCentral && item.centralWord ? item.centralWord : (isSouth && item.southWord ? item.southWord : item.word),
    shortWord: isCentral && item.centralShort ? item.centralShort : (isSouth && item.southShort ? item.southShort : item.shortWord),
    sentence: isCentral && item.centralSentence ? item.centralSentence : (isSouth && item.southSentence ? item.southSentence : item.sentence),
    audio: isCentral && item.centralAudio ? item.centralAudio : (isSouth && item.southAudio ? item.southAudio : item.audio),
    audioShort: isCentral && item.centralShortAudio ? item.centralShortAudio : (isSouth && item.southShortAudio ? item.southShortAudio : item.audioShort),
    sentenceAudio: isCentral && item.centralSentenceAudio ? item.centralSentenceAudio : (isSouth && item.southSentenceAudio ? item.southSentenceAudio : item.sentenceAudio),
    hint: isCentral && item.centralHint ? item.centralHint : (isSouth && item.southHint ? item.southHint : item.hint),
    cat: item.cat,
    catName: item.catName,
    glb: item.glb,
    usage: item.usage || null
  };
}

// Native Audio Player with Speed Control
let currentAudio = null;
function playAudio(path, onEnded) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  const audio = new Audio(path);
  audio.playbackRate = state.speechRate;
  currentAudio = audio;
  if (onEnded) audio.onended = onEnded;
  audio.play().catch((err) => {
    console.log('Audio touch needed:', err);
  });
  return audio;
}

function getAudioPath(name) {
  const isSouth = state.voice === 'south';
  const isCentral = state.voice === 'central';
  return isCentral ? `audio_central/${name}.mp3` : (isSouth ? `audio_south/${name}.mp3` : `audio/${name}.mp3`);
}

// CONFETTI CANNON SYSTEM
const confettiCanvas = $('#confettiCanvas');
const ctx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function fireConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 75) {
  const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#9b59b6', '#fed330', '#ff9ff3'];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 3;
    confettiParticles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
      rotation: Math.random() * 360,
      vRot: Math.random() * 8 - 4
    });
  }
  if (!confettiAnimationId) {
    updateConfetti();
  }
}
const launchConfetti = fireConfetti;

function updateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles = confettiParticles.filter((p) => p.alpha > 0);

  for (const p of confettiParticles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.22;
    p.vx *= 0.98;
    p.rotation += p.vRot;
    p.alpha -= p.decay;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(updateConfetti);
  } else {
    confettiAnimationId = null;
  }
}

function playFanfare() {
  const isSouth = state.voice === 'south';
  const isCentral = state.voice === 'central';
  const a = new Audio(isCentral ? 'audio_central/applause.wav' : (isSouth ? 'audio_south/applause.wav' : 'audio/applause.wav'));
  a.play().catch(() => {});
  fireConfetti(window.innerWidth / 2, window.innerHeight / 3, 100);
}

// Web Audio API Background Music
let audioCtx = null;
let bgmInterval = null;
let isBgmPlaying = false;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}


// CARTOON WEB AUDIO SYNTHESIZERS (GAME JUICE SFX)
function playCartoonBoing() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(140, now);
  osc.frequency.exponentialRampToValueAtTime(620, now + 0.18);
  gain.gain.setValueAtTime(0.09, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.28);
}

function playCartoonPop() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(750, now);
  osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);
  gain.gain.setValueAtTime(0.09, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.09);
}

function playCartoonSparkle() {
  initAudioContext();
  if (!audioCtx) return;
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    }, idx * 45);
  });
}


// PRACTICAL LIFE SIMULATION SOUNDS (WEB AUDIO)
function playUsageWaterSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const freqs = [350, 480, 620, 520, 400];
  freqs.forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, now + i * 0.08);
    osc.frequency.exponentialRampToValueAtTime(f * 1.3, now + i * 0.08 + 0.07);
    gain.gain.setValueAtTime(0.06, now + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.07);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + i * 0.08);
    osc.stop(now + i * 0.08 + 0.07);
  });
}

function playUsageEatSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  for (let i = 0; i < 3; i++) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800 + Math.random() * 400, now + i * 0.06);
    gain.gain.setValueAtTime(0.05, now + i * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.05);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now + i * 0.06);
    osc.stop(now + i * 0.06 + 0.05);
  }
}

function playCameraSound() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1200, now);
  osc.frequency.exponentialRampToValueAtTime(100, now + 0.05);
  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.06);
}

function playCarHonk() {
  initAudioContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  [440, 554].forEach(f => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(f, now);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.setValueAtTime(0.06, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  });
}

function playCartoonTadaa() {
  initAudioContext();
  if (!audioCtx) return;
  const chord = [392.00, 523.25, 659.25, 783.99];
  chord.forEach((freq) => {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.65);
  });
}

function playTone(freq, duration = 0.6, gainLevel = 0.035) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(gainLevel, audioCtx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

const lullabyNotes = [
  261.63, 329.63, 392.00, 523.25, 392.00, 329.63,
  293.66, 349.23, 440.00, 523.25, 440.00, 349.23,
  329.63, 392.00, 523.25, 659.25, 523.25, 392.00,
  261.63, 392.00, 523.25
];
let noteIndex = 0;

function startBGM() {
  if (isBgmPlaying) return;
  initAudioContext();
  if (!audioCtx) return;

  isBgmPlaying = true;
  $('#btnBgm').classList.add('playing');

  bgmInterval = setInterval(() => {
    if (!state.bgmEnabled) {
      stopBGM();
      return;
    }
    const freq = lullabyNotes[noteIndex % lullabyNotes.length];
    playTone(freq, 0.7, 0.03);
    noteIndex++;
  }, 750);
}

function stopBGM() {
  isBgmPlaying = false;
  if (bgmInterval) {
    clearInterval(bgmInterval);
    bgmInterval = null;
  }
  $('#btnBgm').classList.remove('playing');
}

function toggleBGM() {
  initAudioContext();
  state.bgmEnabled = !state.bgmEnabled;
  localStorage.setItem('bgm_enabled', state.bgmEnabled);
  if (state.bgmEnabled) {
    startBGM();
    showToast('🎵 Đã bật nhạc nền du dương');
  } else {
    stopBGM();
    showToast('🔇 Đã tắt nhạc nền');
  }
  const toggle = $('#settingBgmToggle');
  if (toggle) toggle.checked = state.bgmEnabled;
}

$('#btnBgm').addEventListener('click', toggleBGM);

// Eye Protection Timer
let appStartTime = Date.now();
if (state.timeLimit > 0) {
  startPlayTimer();
}

function startPlayTimer() {
  clearTimeout(window.playTimerTimeout);
  if (state.timeLimit > 0) {
    const ms = state.timeLimit * 60 * 1000;
    window.playTimerTimeout = setTimeout(() => {
      $('#timeUpModal').classList.remove('hidden');
      stopBGM();
    }, ms);
  }
}

$('#btnDismissTimeUp').addEventListener('click', () => {
  $('#timeUpModal').classList.add('hidden');
  appStartTime = Date.now();
  startPlayTimer();
  if (state.bgmEnabled) startBGM();
});


// Voice Recorder & AI Speech
let mediaRecorder = null;
let audioChunks = [];
let recordedBlobUrl = null;

const btnRecord = $('#btnRecord');
const recordText = $('#recordText');
const btnPlayRecorded = $('#btnPlayRecorded');
const aiStars = $('#aiStars');
const aiSpeechResult = $('#aiSpeechResult');

let speechRecognition = null;
const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognitionClass) {
  speechRecognition = new SpeechRecognitionClass();
  speechRecognition.lang = 'vi-VN';
  speechRecognition.interimResults = false;
}

if (btnRecord) {
  btnRecord.addEventListener('click', async () => {
    initAudioContext();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showToast('⚠️ Thiết bị không hỗ trợ ghi âm trên trình duyệt này');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      mediaRecorder = new MediaRecorder(stream);

      let recognizedText = '';
      if (speechRecognition) {
        try {
          speechRecognition.start();
          speechRecognition.onresult = (e) => {
            if (e.results[0] && e.results[0][0]) {
              recognizedText = e.results[0][0].transcript.toLowerCase();
            }
          };
          speechRecognition.onerror = () => {};
        } catch (e) {}
      }

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        if (recordedBlobUrl) URL.revokeObjectURL(recordedBlobUrl);
        recordedBlobUrl = URL.createObjectURL(blob);

        btnRecord.classList.remove('recording');
        recordText.textContent = '🎙️ Bé Nói Lại Nha';
        btnPlayRecorded.classList.remove('hidden');

        const targetWord = (state.current ? state.current.word : '').toLowerCase();
        const targetShort = (state.current ? state.current.shortWord : '').toLowerCase();

        let starsEarned = '⭐⭐⭐';
        let feedbackMsg = '🌟 Xuất sắc! Bé phát âm chuẩn 100%!';

        if (recognizedText) {
          if (recognizedText.includes(targetWord) || recognizedText.includes(targetShort)) {
            starsEarned = '⭐⭐⭐';
            feedbackMsg = `🌟 Xuất sắc! Bé nói đúng chữ: "${recognizedText}"!`;
          } else {
            starsEarned = '⭐⭐';
            feedbackMsg = `🌟 Bé nói rất tốt: "${recognizedText}"!`;
          }
        }

        aiStars.textContent = starsEarned;
        aiSpeechResult.textContent = feedbackMsg;
        aiSpeechResult.classList.remove('hidden');

        fireConfetti(window.innerWidth / 2, window.innerHeight / 2, 80);

        setTimeout(() => {
          const childAudio = new Audio(recordedBlobUrl);
          childAudio.play();
          showToast(feedbackMsg);
          setTimeout(() => {
            playAudio(getAudioPath('star_reward'));
          }, 1400);
        }, 300);

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      btnRecord.classList.add('recording');
      recordText.textContent = '🔴 Đang nghe bé nói... (3s)';

      setTimeout(() => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
        }
      }, 2800);
    } catch (err) {
      console.log('Mic permission:', err);
      showToast('⚠️ Ba mẹ vui lòng cho phép quyền micro để bé tập nói nhé');
    }
  });
}

if (btnPlayRecorded) {
  btnPlayRecorded.addEventListener('click', () => {
    if (recordedBlobUrl) {
      const a = new Audio(recordedBlobUrl);
      a.play();
    }
  });
}


// ANIMATION INFOS & CONTROLS FOR ANIMALS AND 3D MODELS
const ANIM_INFO = {
  // Animals
  Waddle: { label: "🦆 Bơi lội", hint: "Chú vịt bơi lội nhịp nhàng" },
  Dance: { label: "💃 Nhảy múa", hint: "Quác quác! Nhảy múa ăn mừng" },
  Swim: { label: "🐟 Bơi lội", hint: "Chú cá bơi lội vẫy đuôi uyển chuyển" },
  Jump: { label: "🌊 Quẫy nước", hint: "Chú cá quẫy nước phóng lên cao" },
  Survey: { label: "🦊 Ngó nghiêng", hint: "Bạn Cáo ngơ ngác ngó quanh tò mò" },
  Walk: { label: "🐾 Đi dạo", hint: "Bạn Cáo bước đi thong thả" },
  Run: { label: "⚡ Chạy nhảy", hint: "Bạn Cáo chạy lon ton tinh nghịch" },
  horse_A_: { label: "🐎 Phi nước đại", hint: "Chú ngựa tung vó phi nhanh" },
  parrot_A_: { label: "🦜 Vỗ cánh", hint: "Chú vẹt vỗ cánh bay lượn" },
  flamingo_flyA_: { label: "🦩 Sải cánh", hint: "Hồng hạc sải cánh tuyệt đẹp" },
  storkFly_B_: { label: "🕊️ Tung cánh", hint: "Chú cò trắng tung cánh bay lượn" },
  // Vehicles & Toys - EXPLODED VIEW & SIMULATION
  Holobike_Loop: { label: "🔍 Phân rã xe đạp", hint: "Tách rời 356 linh kiện xe đạp lơ lửng cực đỉnh" },
  Exploded_Truck: { label: "🔍 Phân rã xe tải", hint: "Tách rời bánh xe và bồn sữa bay lơ lửng 3D" },
  Exploded_Car: { label: "🔍 Phân rã xe hơi", hint: "Nâng mui kính và ghế da tách rời lơ lửng" },
  Disassemble_Robot: { label: "🔍 Phân rã Người Máy", hint: "Tách rời đầu, tay, chân và giáp ngực lơ lửng cực ngầu" },
  ZeroGravity_Float: { label: "🌌 Không trọng lực", hint: "Phi hành gia bay lơ lửng ngoài vũ trụ" },
  Bass_Beat_Pulse: { label: "🔊 Rung Bass", hint: "Loa nảy nhịp theo sóng nhạc cực sung" },
  Bounce_Spin: { label: "⚽ Nảy tưng tưng", hint: "Quả bóng nảy cao xoay tròn 3D" },
  Magic_Shine_Pulse: { label: "✨ Hào quang", hint: "Ngôi sao tỏa sáng lấp lánh nảy xoay 3D" },
  Wheels: { label: "🚚 Lăn bánh", hint: "Xe bon bon trên đường" },
  Wave: { label: "👋 Vẫy tay", hint: "Người máy vẫy tay chào bé" },
  ThumbsUp: { label: "👍 Khen giỏi", hint: "Khen ngợi bé phát âm giỏi" },
  Walking: { label: "🚶 Đi bộ", hint: "Người máy bước đi vững chãi" },
  Running: { label: "🏃 Chạy nhanh", hint: "Người máy chạy thật nhanh" },
  Dance: { label: "💃 Nhảy múa", hint: "Nhảy múa rộn ràng ăn mừng" },
  Jump: { label: "⚡ Nhảy cao", hint: "Bật nhảy cao tràn đầy năng lượng" },
  Yes: { label: "🙆 Gật đầu", hint: "Gật đầu đồng ý với bé" },
  No: { label: "🙅 Lắc đầu", hint: "Lắc đầu trêu đùa vui nhộn" }
};

function updateModalAnimations() {
  const viewer = $("#modalViewer");
  const animBar = $("#modalAnimBar");
  const animChips = $("#modalAnimChips");
  if (!viewer || !animBar || !animChips) return;

  const anims = viewer.availableAnimations || [];
  if (anims.length === 0) {
    animBar.classList.add("hidden");
    animChips.innerHTML = "";
    return;
  }

  animBar.classList.remove("hidden");
  const current = viewer.animationName || anims[0];
  animChips.innerHTML = anims.map((name) => {
    const info = ANIM_INFO[name] || { label: "✨ " + name, hint: "Động tác " + name };
    const isActive = name === current;
    return '<button class="anim-chip ' + (isActive ? "active" : "") + '" data-anim="' + name + '" title="' + info.hint + '">' + info.label + '</button>';
  }).join("");

  const btnPlayPause = $("#btnAnimPlayPause");
  if (btnPlayPause) {
    btnPlayPause.textContent = viewer.paused ? "▶️ Tiếp tục" : "⏸️ Tạm dừng";
  }

  animChips.querySelectorAll(".anim-chip").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const anim = btn.getAttribute("data-anim");
      setViewerAnimation(anim);
    });
  });
}

function setViewerAnimation(animName) {
  const viewer = $("#modalViewer");
  if (!viewer) return;

  viewer.animationName = animName;
  viewer.play();

  const chips = document.querySelectorAll("#modalAnimChips .anim-chip");
  chips.forEach((c) => {
    c.classList.toggle("active", c.getAttribute("data-anim") === animName);
  });

  const btnPlayPause = $("#btnAnimPlayPause");
  if (btnPlayPause) btnPlayPause.textContent = "⏸️ Tạm dừng";

  const info = ANIM_INFO[animName] || { label: animName, hint: "Đang cử động " + animName };
  showToast("✨ " + (info.hint || info.label));
  playFanfare();

  viewer.style.transition = "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)";
  viewer.style.transform = "scale(1.1) translateY(-12px)";
  setTimeout(() => {
    viewer.style.transform = "scale(1) translateY(0)";
  }, 350);
}

// AR & Dance
$('#btnArView').addEventListener('click', () => {
  const viewer = $('#modalViewer');
  if (viewer && viewer.canActivateAR) {
    viewer.activateAR();
  } else {
    showToast('💡 Ba mẹ mở link trên iPhone hoặc Android để chiếu 3D ra sàn nhà nhé!');
  }
});

$('#btnDance3D').addEventListener('click', () => {
  const viewer = $('#modalViewer');
  if (!viewer) return;

  const anims = viewer.availableAnimations || [];
  if (anims.length > 0) {
    const current = viewer.animationName || anims[0];
    const nextIdx = (anims.indexOf(current) + 1) % anims.length;
    const nextAnim = anims[nextIdx];
    setViewerAnimation(nextAnim);
    launchConfetti();
  } else {
    playFanfare();
    launchConfetti();
    viewer.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    viewer.style.transform = 'scale(1.18) translateY(-25px) rotate(12deg)';
    setTimeout(() => {
      viewer.style.transform = 'scale(1) translateY(0) rotate(0)';
    }, 450);
    showToast('💃 Hoan hô! Bạn 3D đang nhảy múa vui quá nè!');
  }
});

$('#btnAnimPlayPause').addEventListener('click', (e) => {
  e.stopPropagation();
  const viewer = $('#modalViewer');
  if (!viewer) return;
  if (viewer.paused) {
    viewer.play();
    $('#btnAnimPlayPause').textContent = '⏸️ Tạm dừng';
    showToast('▶️ Bạn 3D tiếp tục cử động nè!');
  } else {
    viewer.pause();
    $('#btnAnimPlayPause').textContent = '▶️ Tiếp tục';
    showToast('⏸️ Đã tạm dừng cử động');
  }
});

$('#modalViewer').addEventListener('load', updateModalAnimations);

// PRACTICAL LIFE SIMULATION INTERACTIVE HANDLER (RICH VISUAL & AUDIO FX)
function triggerPracticalSimulation() {
  if (!state.current) return;
  const item = state.current;
  const viewer = $('#modalViewer');
  if (!viewer) return;

  const usage = item.usage || {};
  const actionType = usage.actionType || 'default';
  const isSouth = state.voice === 'south';

  playFanfare();
  launchConfetti();

  const badge = $('#fxComicBadge');
  const fxLayer = $('#fxElementLayer');

  function spawnFloatingEmojis(emojis) {
    if (!fxLayer) return;
    fxLayer.innerHTML = '';
    for (let k = 0; k < 8; k++) {
      const el = document.createElement('span');
      el.className = 'fx-floating-emoji';
      el.textContent = emojis[k % emojis.length];
      el.style.left = (12 + Math.random() * 76) + '%';
      el.style.top = (35 + Math.random() * 35) + '%';
      el.style.animationDelay = (k * 0.08) + 's';
      fxLayer.appendChild(el);
      setTimeout(() => el.remove(), 1300);
    }
  }

  function showComic(text) {
    if (!badge) return;
    badge.textContent = text;
    badge.classList.remove('hidden');
    badge.style.animation = 'none';
    void badge.offsetWidth;
    badge.style.animation = 'comicBadgePop 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
  }

  if (actionType === 'drink') {
    playUsageWaterSound();
    showComic('ỰC ỰC! 🥤');
    spawnFloatingEmojis(['💧', '💦', '🫧', '🌊', '✨']);
    viewer.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
    viewer.style.transform = 'scale(1.22) rotate(32deg) translateY(-14px)';
    setTimeout(() => { viewer.style.transform = 'scale(1) rotate(0) translateY(0)'; }, 650);
    showToast(isSouth ? '🥤 Ực ực! Con uống nước mát lành sảng khoái ghê!' : '🥤 Ực ực! Bé uống nước mát lành sảng khoái ghê!');
  } else if (actionType === 'eat') {
    playUsageEatSound();
    showComic('RỘP RỘP! 😋');
    spawnFloatingEmojis(['😋', '✨', '⭐', '🍎', '🍰', '🍪']);
    viewer.style.transition = 'transform 0.25s ease';
    viewer.style.transform = 'scale(1.28) rotate(-10deg)';
    setTimeout(() => { viewer.style.transform = 'scale(1) rotate(0)'; }, 450);
    showToast(isSouth ? '😋 Ngon quá! Con cắn một miếng bổ dưỡng nghen!' : '😋 Ngon quá! Bé cắn một miếng bổ dưỡng nhé!');
  } else if (actionType === 'camera') {
    playCameraSound();
    showComic('TÁCH! 📸');
    const fl = $('#cameraFlashOverlay');
    if (fl) {
      fl.classList.add('active');
      setTimeout(() => fl.classList.remove('active'), 250);
    }
    spawnFloatingEmojis(['📸', '✨', '🌟', '💖', '😁']);
    showToast(isSouth ? '📸 Tách! Con cười tươi xinh xắn quá nè!' : '📸 Tách! Bé cười tươi xinh xắn quá nè!');
  } else if (actionType === 'vehicle') {
    playCarHonk();
    showComic('PHÂN RÃ 3D! 🚗');
    spawnFloatingEmojis(['🔍', '⚙️', '💨', '🏁', '⚡', '✨']);

    const anims = viewer.availableAnimations || [];
    const expAnim = anims.find(a => a.includes('Exploded') || a.includes('Holobike'));
    if (expAnim) {
      setViewerAnimation(expAnim);
    } else {
      viewer.style.transition = 'transform 0.35s ease';
      viewer.style.transform = 'scale(1.18) translateX(42px)';
      setTimeout(() => { viewer.style.transform = 'scale(1) translateX(0)'; }, 500);
    }
    showToast(isSouth ? '🚗 Phân rã 3D! Con nhìn các linh kiện xe bay lơ lửng nè!' : '🚗 Phân rã 3D! Bé nhìn các linh kiện xe bay lơ lửng nhé!');
  } else if (actionType === 'plant') {
    playUsageWaterSound();
    showComic('TÍ TÁCH! 🌸');
    spawnFloatingEmojis(['🚿', '💧', '🌸', '🌼', '🌺', '🌱']);
    viewer.style.transition = 'transform 0.35s ease';
    viewer.style.transform = 'scale(1.16) translateY(-14px)';
    setTimeout(() => { viewer.style.transform = 'scale(1) translateY(0)'; }, 400);
    showToast(isSouth ? '🌸 Tí tách! Cây xanh tươi tốt nở những bông hoa xinh!' : '🌸 Tí tách! Cây xanh tươi tốt nở những bông hoa xinh!');
  } else if (actionType === 'toy') {
    playCartoonSparkle();
    const anims = viewer.availableAnimations || [];
    const disAnim = anims.find(a => a.includes('Disassemble') || a.includes('ZeroGravity') || a.includes('Dance'));
    if (disAnim) {
      setViewerAnimation(disAnim);
      showComic('BIẾN HÌNH! 🤖');
      spawnFloatingEmojis(['🤖', '⚡', '✨', '🌟', '🚀']);
      showToast(isSouth ? '🤖 Biến hình phân rã 3D cực ngầu luôn nè con!' : '🤖 Biến hình phân rã 3D cực ngầu luôn nhé bé!');
    } else {
      playCartoonBoing();
      showComic('VUI QUÁ! 🧸');
      spawnFloatingEmojis(['🧸', '🎈', '✨', '🌟']);
      showToast(isSouth ? '🧸 Bạn đồ chơi cử động vui nhộn cùng con nè!' : '🧸 Bạn đồ chơi cử động vui nhộn cùng bé nè!');
    }
  } else if (actionType === 'play') {
    playCartoonBoing();
    const anims = viewer.availableAnimations || [];
    const playAnim = anims.find(a => a.includes('Bounce') || a.includes('Magic'));
    if (playAnim) {
      setViewerAnimation(playAnim);
    }
    showComic('TƯNG TƯNG! ⚽');
    spawnFloatingEmojis(['⚽', '⭐', '✨', '🎉']);
    showToast(isSouth ? '⚽ Tưng tưng! Trò chơi thể thao thật vui khỏe nè!' : '⚽ Tưng tưng! Trò chơi thể thao thật vui khỏe nhé!');
  } else if (actionType === 'wear') {
    playCartoonSparkle();
    showComic('TỰ TIN! 👟');
    spawnFloatingEmojis(['👟', '🧦', '✨', '⭐', '🚶']);
    viewer.style.transition = 'transform 0.3s ease';
    viewer.style.transform = 'scale(1.18) translateY(-18px)';
    setTimeout(() => { viewer.style.transform = 'scale(1) translateY(0)'; }, 450);
    showToast(isSouth ? '👟 Con mang vào người tự tin bước đi dạo nè!' : '👟 Bé mang vào người tự tin bước đi dạo nhé!');
  } else if (actionType === 'music') {
    playCartoonSparkle();
    showComic('RỘN RÀNG! 🎶');
    spawnFloatingEmojis(['🎵', '🎶', '🎸', '🎺', '🌈', '✨']);
    viewer.style.transition = 'transform 0.3s ease';
    viewer.style.transform = 'scale(1.22) rotate(14deg)';
    setTimeout(() => { viewer.style.transform = 'scale(1) rotate(0)'; }, 450);
    showToast(isSouth ? '🎶 Giai điệu rộn ràng, cùng nhún nhảy theo nhạc nào!' : '🎶 Giai điệu rộn ràng, cùng nhún nhảy theo nhạc nào!');
  } else if (actionType === 'animal') {
    if (viewer.play) viewer.play();
    showComic('QUÁC QUÁC! 🐾');
    spawnFloatingEmojis(['🐾', '💖', '⭐', '🎈', '✨']);
    viewer.style.transition = 'transform 0.4s ease';
    viewer.style.transform = 'scale(1.18) translateY(-20px) rotate(-8deg)';
    setTimeout(() => { viewer.style.transform = 'scale(1) translateY(0) rotate(0)'; }, 500);
    showToast(isSouth ? '🐾 Bạn nhỏ vui vẻ chạy nhảy cùng con nè!' : '🐾 Bạn nhỏ vui vẻ chạy nhảy cùng bé nè!');
  } else {
    playCartoonBoing();
    showComic('HOAN HÔ! ⭐');
    spawnFloatingEmojis(['✨', '🌟', '💖', '🎉']);
    viewer.style.transition = 'transform 0.35s ease';
    viewer.style.transform = 'scale(1.18) translateY(-16px)';
    setTimeout(() => { viewer.style.transform = 'scale(1) translateY(0)'; }, 400);
    showToast(isSouth ? '✨ Con đã khám phá cách sử dụng bạn này rồi!' : '✨ Bé đã khám phá cách sử dụng bạn này rồi!');
  }
}

$('#btnTryAction')?.addEventListener('click', triggerPracticalSimulation);
$('#btnFloatSimulate')?.addEventListener('click', triggerPracticalSimulation);



// Baby 3D Toy Park
function renderPark() {
  const parkGrid = $('#parkGrid');
  const learnedIds = state.learned;
  const learnedItems = rawWords.filter((w) => learnedIds.has(w.id)).map(getItemData);

  $('#parkSummary').textContent = `Bé đã mở khóa được ${learnedItems.length} / 29 bạn nhỏ vào khu vườn!`;

  if (learnedItems.length === 0) {
    parkGrid.innerHTML = `
      <div class="park-empty-hint">
        🌱 Bé ơi, hãy bấm vào các thẻ từ vựng bên dưới và tập nói để mở khóa các bạn 3D vào khu vườn kỳ diệu nhé!
      </div>
    `;
    return;
  }

  parkGrid.innerHTML = learnedItems.map((item) => `
    <div class="park-item" data-id="${item.id}" title="Chạm để chào bạn ${item.word}">
      <div class="park-item-box">
        <model-viewer
          src="${item.glb}"
          alt="${item.word}"
          autoplay
          auto-rotate
          rotation-per-second="40deg"
          camera-controls
          disable-zoom
          interaction-prompt="none"
          loading="lazy">
        </model-viewer>
      </div>
      <span>⭐ ${item.word}</span>
    </div>
  `).join('');

  parkGrid.querySelectorAll('.park-item').forEach((box) => {
    box.addEventListener('click', () => {
      const item = learnedItems.find((x) => x.id === box.dataset.id);
      if (item) {
        playAudio(item.audio);
        fireConfetti(box.getBoundingClientRect().left + 40, box.getBoundingClientRect().top + 30, 30);
      }
    });
  });
}

$('#btnParkCheer').addEventListener('click', () => {
  playFanfare();
  showToast('🎉 Chúc mừng khu vườn 3D của bé thật đông vui!');
});

// Flashcard Auto Mode
function openFlashcardMode() {
  state.flashcardIndex = 0;
  state.flashcardPlaying = true;
  $('#flashcardModal').classList.remove('hidden');
  updateFlashcardSlide();
}

function updateFlashcardSlide() {
  const all = rawWords.map(getItemData);
  const current = all[state.flashcardIndex];

  $('#fcViewer').setAttribute('src', current.glb);
  $('#fcWord').textContent = current.word;
  $('#fcSentence').textContent = `“${current.sentence}”`;
  if ($('#fcUsageText') && current.usage) $('#fcUsageText').textContent = current.usage.title;
  $('#fcProgress').textContent = `${state.flashcardIndex + 1} / ${all.length}`;

  playAudio(current.audio, () => {
    setTimeout(() => {
      if (state.flashcardPlaying) {
        playAudio(current.sentenceAudio);
      }
    }, 400);
  });

  clearTimeout(state.flashcardTimer);
  if (state.flashcardPlaying) {
    state.flashcardTimer = setTimeout(() => {
      state.flashcardIndex = (state.flashcardIndex + 1) % all.length;
      updateFlashcardSlide();
    }, 4600);
  }
}

$('#btnOpenFlashcard').addEventListener('click', openFlashcardMode);

$('#btnCloseFlashcard').addEventListener('click', () => {
  state.flashcardPlaying = false;
  clearTimeout(state.flashcardTimer);
  $('#flashcardModal').classList.add('hidden');
});

$('#fcPlayPause').addEventListener('click', () => {
  state.flashcardPlaying = !state.flashcardPlaying;
  $('#fcPlayPause').textContent = state.flashcardPlaying ? '⏸️ Tạm dừng' : '▶️ Tiếp tục';
  if (state.flashcardPlaying) {
    updateFlashcardSlide();
  } else {
    clearTimeout(state.flashcardTimer);
  }
});

$('#fcNext').addEventListener('click', () => {
  const all = rawWords;
  state.flashcardIndex = (state.flashcardIndex + 1) % all.length;
  updateFlashcardSlide();
});

$('#fcPrev').addEventListener('click', () => {
  const all = rawWords;
  state.flashcardIndex = (state.flashcardIndex - 1 + all.length) % all.length;
  updateFlashcardSlide();
});

function applyVoiceUI() {
  const isSouth = state.voice === 'south';
  const isCentral = state.voice === 'central';
  $('#btnVoiceSouth').classList.toggle('active', isSouth);
  $('#btnVoiceCentral').classList.toggle('active', isCentral);
  $('#btnVoiceNorth').classList.toggle('active', !isSouth && !isCentral);

  if (isSouth) {
    $('#heroChip').textContent = '🌴 Đang dùng: Giọng Miền Nam thân thương';
    $('#subHeading').textContent = 'Hôm nay bé muốn tập nói từ gì nè?';
    $('#greeting').textContent = '🔊 Nghe cô chào con';
    $('#quizQuestion').textContent = 'Con lắng nghe và chọn đúng hình nghen!';
    const arcSub = $('#arcadeSubtitle'); if (arcSub) arcSub.textContent = 'Sáu trò chơi tương tác với sắc thái miền Nam thân thương, giúp con phát triển toàn diện!';
    $('#learn').textContent = '⭐ Con nói được từ này rồi!';
  } else if (isCentral) {
    $('#heroChip').textContent = '🏮 Đang dùng: Giọng Miền Trung gần gũi';
    $('#subHeading').textContent = 'Hôm ni bé muốn tập nói từ gì hè?';
    $('#greeting').textContent = '🔊 Nghe cô chào con';
    $('#quizQuestion').textContent = 'Con nghe rồi chọn đúng hình nghe!';
    const arcSub = $('#arcadeSubtitle'); if (arcSub) arcSub.textContent = 'Sáu trò chơi với giọng đọc miền Trung gần gũi, giúp con luyện tai nghe và phản xạ nhanh!';
    $('#learn').textContent = '⭐ Con nói được từ ni rồi!';
  } else {
    $('#heroChip').textContent = '🌸 Đang dùng: Giọng Miền Bắc chuẩn mực';
    $('#subHeading').textContent = 'Hôm nay bé muốn tập nói từ gì nhé?';
    $('#greeting').textContent = '🔊 Nghe cô chào bé';
    $('#quizQuestion').textContent = 'Bé lắng nghe và chọn đúng hình nhé!';
    const arcSub = $('#arcadeSubtitle'); if (arcSub) arcSub.textContent = 'Sáu trò chơi tương tác với giọng chuẩn phổ thông miền Bắc, rèn luyện trí nhớ và phản xạ cho bé!';
    $('#learn').textContent = '⭐ Bé đã nói được từ này!';
  }
}

function renderGrid() {
  const isSouth = state.voice === 'south';
  const list = rawWords
    .filter((item) => state.filter === 'all' || item.cat === state.filter)
    .map(getItemData);

  const container = $('#grid');

  container.innerHTML = list.map((item) => {
    const isLearned = state.learned.has(item.id);
    return `
      <article class="card ${isLearned ? 'learned' : ''}" data-id="${item.id}" tabindex="0" role="button">
        <div class="card-top-tags">
          <span class="badge-3d">Hình 3D</span>
          <span class="badge-learned">${isLearned ? (isSouth ? '✓ Đã thu thập' : '✓ Đã tập nói') : ''}</span>
        </div>
        <div class="card-3d-box">
          <model-viewer
            src="${item.glb}"
            alt="${item.word}"
            autoplay
            auto-rotate
            rotation-per-second="25deg"
            camera-controls
            disable-zoom
            interaction-prompt="none"
            loading="lazy"
            reveal="auto"
            shadow-intensity="1">
          </model-viewer>
        </div>
        <h3>${item.word}</h3>
        <p class="pronounce">Tập nói: "${item.shortWord}"</p>
        <p class="hint">${item.hint}</p>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.card').forEach((card) => {
    const trigger = () => {
      const raw = rawWords.find((x) => x.id === card.dataset.id);
      if (raw) openWord(raw);
    };
    card.addEventListener('click', trigger);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger();
      }
    });
  });
}

function updateProgress() {
  const count = state.learned.size;
  $('#progressText').textContent = `${count} / 5 từ`;
  $('#progressBar').style.width = `${Math.min(count / 5, 1) * 100}%`;
  $('#settingLearnedSummary').textContent = `Đã hoàn thành ${count} / 29 từ vựng`;
  localStorage.setItem('learned_words', JSON.stringify([...state.learned]));
  renderPark();
  renderAdventureMap();
}

function openWord(rawItem) {
  initAudioContext();
  const item = getItemData(rawItem);
  state.current = { raw: rawItem, ...item };

  const viewer = $('#modalViewer');
  viewer.setAttribute('src', item.glb);
  viewer.setAttribute('alt', item.word);

  $('#modalCat').textContent = item.catName.toUpperCase();
  $('#modalWord').textContent = item.word;
  $('#modalShort').textContent = `"${item.shortWord}"`;
  $('#modalFull').textContent = `"${item.word}"`;
  $('#modalSentence').textContent = `“${item.sentence}”`;
  $('#modalHint').textContent = item.hint;

  // Render Practical Usage Guide
  const usageCard = $('#modalUsageCard');
  if (usageCard && item.usage) {
    usageCard.classList.remove('hidden');
    $('#usageTitle').textContent = item.usage.title || 'Bé dùng như thế nào?';
    $('#tryActionText').textContent = item.usage.actionBtn || 'Thử Dùng Ngay';

    const stepsList = $('#usageStepsList');
    if (stepsList && item.usage.steps) {
      stepsList.innerHTML = item.usage.steps.map((step, idx) => `
        <div class="usage-step-item">
          <span class="usage-step-num">${idx + 1}</span>
          <span>${step}</span>
        </div>
      `).join('');
    }
  } else if (usageCard) {
    usageCard.classList.add('hidden');
  }


  if (btnPlayRecorded) btnPlayRecorded.classList.add('hidden');
  if (recordText) recordText.textContent = 'Bé Nói Thử Nha (Bấm Ghi Âm)';
  if (aiSpeechResult) aiSpeechResult.classList.add('hidden');
  if (aiStars) aiStars.textContent = '⭐⭐⭐';

  $('#wordModal').classList.remove('hidden');
  setTimeout(updateModalAnimations, 60);

  playAudio(item.audio);
}

function closeModal(id) {
  const modal = $(`#${id}`);
  if (modal) modal.classList.add('hidden');
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (id === 'whackModal') {
    state.whack.running = false;
    clearInterval(state.whack.timer);
  }
  if (id === 'flashcardModal') {
    state.flashcardPlaying = false;
    clearTimeout(state.flashcardTimer);
  }
  if (id === 'quizModal') state.quiz.locked = false;
  if (id === 'shadowModal') state.shadow.locked = false;
  if (id === 'memoryModal') state.memory.locked = false;
  if (id === 'basketModal') state.basket.locked = false;
}

function showToast(text) {
  const toast = $('#toast');
  toast.textContent = text;
  toast.classList.remove('hidden');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 2200);
}

function setVoiceRegion(region) {
  initAudioContext();
  state.voice = region;
  localStorage.setItem('voice_region', region);
  applyVoiceUI();
  renderGrid();
  renderPark();
  playAudio(getAudioPath('greeting'));
  showToast(region === 'south' ? '🌴 Đã chuyển sang Giọng Miền Nam' : (region === 'central' ? '🏮 Đã chuyển sang Giọng Miền Trung' : '🌸 Đã chuyển sang Giọng Miền Bắc'));
}

$('#btnVoiceSouth').addEventListener('click', () => setVoiceRegion('south'));
$('#btnVoiceCentral').addEventListener('click', () => setVoiceRegion('central'));
$('#btnVoiceNorth').addEventListener('click', () => setVoiceRegion('north'));

document.querySelectorAll('.tabs button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.filter = btn.dataset.cat;
    renderGrid();
  });
});

$('#greeting').addEventListener('click', () => {
  initAudioContext();
  playAudio(getAudioPath('greeting'));
});

// Hero 3D Controls
const heroModels = [
  { glb: 'models/duck.glb', audioName: 'duck_greeting' },
  { glb: 'models/robot.glb', audioName: 'robot' },
  { glb: 'models/ball.glb', audioName: 'ball' },
  { glb: 'models/apple.glb', audioName: 'apple' },
  { glb: 'models/toy_car.glb', audioName: 'toy_car' },
  { glb: 'models/fox.glb', audioName: 'fox' }
];

$('#heroSpeak').addEventListener('click', () => {
  initAudioContext();
  const currentHero = heroModels[state.heroIndex];
  playAudio(getAudioPath(currentHero.audioName));
});

$('#heroSwitch').addEventListener('click', () => {
  initAudioContext();
  state.heroIndex = (state.heroIndex + 1) % heroModels.length;
  const nextModel = heroModels[state.heroIndex];
  const heroViewer = $('#heroViewer');
  if (heroViewer) {
    heroViewer.setAttribute('src', nextModel.glb);
  }
  playAudio(getAudioPath(nextModel.audioName));
  showToast('🔄 Đã đổi hình 3D mới!');
});

$('#hearShort').addEventListener('click', () => {
  if (state.current) playAudio(state.current.audioShort);
});

$('#hearFull').addEventListener('click', () => {
  if (state.current) playAudio(state.current.audio);
});

$('#hearSentence').addEventListener('click', () => {
  if (state.current) playAudio(state.current.sentenceAudio);
});

$('#learn').addEventListener('click', () => {
  if (!state.current) return;
  state.learned.add(state.current.id);
  renderGrid();
  updateProgress();
  closeModal('wordModal');
  const isSouth = state.voice === 'south';
  showToast(isSouth ? `⭐ Con nói từ "${state.current.word}" giỏi dữ ta!` : `⭐ Bé phát âm "${state.current.word}" giỏi lắm!`);
  playFanfare();
  setTimeout(() => {
    playAudio(getAudioPath('praise'));
  }, 900);
});

document.querySelectorAll('.close').forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentOverlay = btn.closest('.overlay');
    if (parentOverlay) closeModal(parentOverlay.id);
  });
});

document.querySelectorAll('.overlay').forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// QUIZ 1: NGHE TIẾNG ĐOÁN HÌNH 3D
function startQuiz() {
  initAudioContext();
  state.quiz = { round: 0, score: 0, answer: null, locked: false };
  $('#quizModal').classList.remove('hidden');
  nextQuizRound();
}

function playQuizQuestionAudio() {
  if (!state.quiz.answer) return;
  playAudio(getAudioPath('find_prompt'), () => {
    setTimeout(() => {
      playAudio(state.quiz.answer.audio);
    }, 180);
  });
}

function nextQuizRound() {
  const isSouth = state.voice === 'south';
  const allFormatted = rawWords.map(getItemData);

  if (state.quiz.round >= 5) {
    $('#quizQuestion').textContent = isSouth ? '🎉 Hoan hô con đã hoàn thành!' : '🎉 Hoan hô bé đã hoàn thành!';
    $('#options').innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 20px 10px; line-height: 1.8;">
        <p style="font-size: 17px; font-weight: 800; color: #26de81;">
          🌟 ${isSouth ? 'Con đoán đúng' : 'Bé đã đoán đúng'} ${state.quiz.score} / 5 câu hỏi 3D!
        </p>
        <button class="primary" id="restartQuiz">${isSouth ? 'Con Chơi Lại Vòng Khác 🚀' : 'Bé Chơi Lại Vòng Khác 🚀'}</button>
      </div>
    `;
    $('#listen').classList.add('hidden');
    $('#restartQuiz').addEventListener('click', startQuiz);
    playFanfare();
    setTimeout(() => {
      playAudio(getAudioPath('quiz_complete'));
    }, 900);
    return;
  }

  state.quiz.locked = false;
  state.quiz.answer = allFormatted[Math.floor(Math.random() * allFormatted.length)];

  const wrongOptions = allFormatted
    .filter((w) => w.id !== state.quiz.answer.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const choices = [state.quiz.answer, ...wrongOptions].sort(() => Math.random() - 0.5);

  $('#score').textContent = `${state.quiz.score} / 5`;
  $('#feedback').textContent = '';
  $('#listen').classList.remove('hidden');
  $('#quizQuestion').textContent = isSouth
    ? `Câu ${state.quiz.round + 1}: Đố con tìm thấy "${state.quiz.answer.word}"?`
    : `Câu ${state.quiz.round + 1}: Đố bé tìm thấy "${state.quiz.answer.word}"?`;

  $('#options').innerHTML = choices.map((item) => `
    <button class="quiz-option" data-id="${item.id}">
      <div class="quiz-3d-box">
        <model-viewer
          src="${item.glb}"
          alt="${item.word}"
          autoplay
          auto-rotate
          rotation-per-second="35deg"
          camera-controls
          disable-zoom
          interaction-prompt="none"
          loading="eager"
          reveal="auto"
          shadow-intensity="1">
        </model-viewer>
      </div>
      <strong>${item.word}</strong>
    </button>
  `).join('');

  document.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => handleQuizAnswer(btn));
  });

  playQuizQuestionAudio();
}

function handleQuizAnswer(btn) {
  if (state.quiz.locked) return;
  state.quiz.locked = true;

  const isSouth = state.voice === 'south';
  const isCorrect = btn.dataset.id === state.quiz.answer.id;
  btn.classList.add(isCorrect ? 'correct' : 'wrong');

  if (isCorrect) {
    state.quiz.score++;
    state.learned.add(state.quiz.answer.id);
    $('#feedback').textContent = isSouth ? '🌟 Hoan hô! Con chọn chính xác rồi!' : '🌟 Hoan hô! Bé chọn chính xác rồi!';
    $('#feedback').style.color = '#26de81';
    showToast(isSouth ? '🌟 Con chọn đúng rồi nè!' : '🌟 Bé chọn chính xác!');
    fireConfetti(btn.getBoundingClientRect().left + 50, btn.getBoundingClientRect().top + 50, 45);
    playAudio(getAudioPath('correct'));
  } else {
    $('#feedback').textContent = isSouth
      ? `Gần đúng rồi nè! Đây là "${state.quiz.answer.word}" nghen!`
      : `Gần đúng rồi! Đây là "${state.quiz.answer.word}" nhé!`;
    $('#feedback').style.color = '#fc5c65';
    document.querySelector(`[data-id="${state.quiz.answer.id}"]`)?.classList.add('correct');
    playAudio(getAudioPath('wrong'), () => {
      setTimeout(() => {
        playAudio(state.quiz.answer.audio);
      }, 200);
    });
  }

  state.quiz.round++;
  renderGrid();
  updateProgress();
  setTimeout(nextQuizRound, 2000);
}

$('#listen').addEventListener('click', playQuizQuestionAudio);
$('#startQuiz').addEventListener('click', startQuiz);

// MINI-GAME 2: ĐOÁN BÓNG 3D BÍ ẨN
function startShadowGame() {
  initAudioContext();
  state.shadow = { round: 0, score: 0, answer: null, locked: false };
  $('#shadowModal').classList.remove('hidden');
  nextShadowRound();
}

function nextShadowRound() {
  const isSouth = state.voice === 'south';
  const allFormatted = rawWords.map(getItemData);

  if (state.shadow.round >= 5) {
    $('#shadowTitle').textContent = isSouth ? '🎉 Hoan hô con đã đoán bóng xong!' : '🎉 Hoan hô bé đã đoán bóng xong!';
    $('#shadowChoices').innerHTML = `
      <div style="padding: 16px; line-height: 1.8;">
        <p style="font-size: 17px; font-weight: 800; color: #26de81;">
          🌟 ${isSouth ? 'Con đoán đúng' : 'Bé đã đoán đúng'} ${state.shadow.score} / 5 câu đố bóng!
        </p>
        <button class="primary" id="restartShadow">${isSouth ? 'Con Chơi Lại Vòng Khác 🚀' : 'Bé Chơi Lại Vòng Khác 🚀'}</button>
      </div>
    `;
    $('#restartShadow').addEventListener('click', startShadowGame);
    playFanfare();
    setTimeout(() => {
      playAudio(getAudioPath('quiz_complete'));
    }, 900);
    return;
  }

  state.shadow.locked = false;
  state.shadow.answer = allFormatted[Math.floor(Math.random() * allFormatted.length)];

  const wrongOptions = allFormatted
    .filter((w) => w.id !== state.shadow.answer.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const choices = [state.shadow.answer, ...wrongOptions].sort(() => Math.random() - 0.5);

  $('#shadowScore').textContent = `${state.shadow.score} / 5`;
  $('#shadowFeedback').textContent = '';
  $('#shadowTitle').textContent = `Câu ${state.shadow.round + 1}: Đây là bóng của ai nào?`;

  const shadowViewer = $('#shadowViewer');
  const box = shadowViewer.parentElement;
  box.classList.remove('revealed');
  shadowViewer.setAttribute('src', state.shadow.answer.glb);
  shadowViewer.setAttribute('exposure', '0');

  $('#shadowChoices').innerHTML = choices.map((item) => `
    <button class="shadow-choice-btn" data-id="${item.id}">
      ${item.word}
    </button>
  `).join('');

  document.querySelectorAll('.shadow-choice-btn').forEach((btn) => {
    btn.addEventListener('click', () => handleShadowAnswer(btn));
  });
}

function handleShadowAnswer(btn) {
  if (state.shadow.locked) return;
  state.shadow.locked = true;

  const isSouth = state.voice === 'south';
  const isCorrect = btn.dataset.id === state.shadow.answer.id;
  const shadowViewer = $('#shadowViewer');
  const box = shadowViewer.parentElement;

  shadowViewer.setAttribute('exposure', '1.1');
  box.classList.add('revealed');

  btn.classList.add(isCorrect ? 'correct' : 'wrong');

  if (isCorrect) {
    state.shadow.score++;
    state.learned.add(state.shadow.answer.id);
    $('#shadowFeedback').textContent = isSouth ? '🌟 Chuẩn luôn! Con tinh mắt quá nè!' : '🌟 Chuẩn luôn! Bé tinh mắt quá!';
    $('#shadowFeedback').style.color = '#26de81';
    fireConfetti(btn.getBoundingClientRect().left + 80, btn.getBoundingClientRect().top + 20, 50);
    playAudio(getAudioPath('correct'));
  } else {
    $('#shadowFeedback').textContent = `Đây chính là "${state.shadow.answer.word}" đó bé ơi!`;
    $('#shadowFeedback').style.color = '#fc5c65';
    document.querySelector(`[data-id="${state.shadow.answer.id}"]`)?.classList.add('correct');
    playAudio(state.shadow.answer.audio);
  }

  state.shadow.round++;
  renderGrid();
  updateProgress();
  setTimeout(nextShadowRound, 2200);
}

$('#startShadowGame').addEventListener('click', startShadowGame);


// ==========================================================================
// GAME 3: LẬT THẺ TRÍ NHỚ 3D (3D MEMORY MATCH)
// ==========================================================================
function openMemoryGame() {
  initAudioContext();
  $('#memoryModal').classList.remove('hidden');
  initMemoryRound();
}

function initMemoryRound() {
  const isSouth = state.voice === 'south';
  const isCentral = state.voice === 'central';
  state.memory = {
    pairsMatched: 0,
    firstCard: null,
    secondCard: null,
    locked: false,
    items: []
  };

  $('#memoryScore').textContent = 'Cặp đúng: 0 / 3';
  $('#memoryTitle').textContent = isSouth
    ? 'Con hãy lật tìm 2 thẻ giống nhau nghen!'
    : (isCentral ? 'Con hãy lật tìm 2 thẻ giống nhau nghe!' : 'Bé hãy lật tìm 2 thẻ giống nhau nhé!');
  $('#memoryInstruct').textContent = 'Chạm vào từng lá bài ma thuật để xem bạn 3D nào đang trốn bên trong.';
  $('#memoryFeedback').textContent = '';

  // Select 3 random distinct items from rawWords
  const all = [...rawWords].sort(() => Math.random() - 0.5);
  const selected = all.slice(0, 3).map(getItemData);

  // Duplicate to make 3 pairs = 6 cards
  const cards = [];
  selected.forEach((item, idx) => {
    cards.push({ id: item.id, item, key: idx * 2 });
    cards.push({ id: item.id, item, key: idx * 2 + 1 });
  });
  cards.sort(() => Math.random() - 0.5);
  state.memory.items = cards;

  const grid = $('#memoryGrid');
  grid.innerHTML = cards.map((c, i) =>
    '<div class="memory-card" data-key="' + i + '" data-id="' + c.id + '">' +
      '<div class="memory-card-inner">' +
        '<div class="memory-card-back">⭐</div>' +
        '<div class="memory-card-front">' +
          '<model-viewer src="' + c.item.glb + '" autoplay auto-rotate rotation-per-second="35deg" camera-controls disable-zoom interaction-prompt="none"></model-viewer>' +
          '<span>' + c.item.word + '</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  ).join('');

  grid.querySelectorAll('.memory-card').forEach((cardEl) => {
    cardEl.addEventListener('click', () => {
      const idx = parseInt(cardEl.dataset.key, 10);
      handleMemoryCardClick(cardEl, state.memory.items[idx]);
    });
  });

  playAudio(getAudioPath('find_prompt'));
}

function handleMemoryCardClick(cardEl, cardData) {
  if (state.memory.locked) return;
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

  const isSouth = state.voice === 'south';
  cardEl.classList.add('flipped');
  playAudio(cardData.item.audioShort);

  if (!state.memory.firstCard) {
    state.memory.firstCard = { el: cardEl, data: cardData };
    return;
  }

  // Second card flipped
  state.memory.secondCard = { el: cardEl, data: cardData };
  state.memory.locked = true;

  if (state.memory.firstCard.data.id === state.memory.secondCard.data.id) {
    // MATCH!
    state.memory.firstCard.el.classList.add('matched');
    state.memory.secondCard.el.classList.add('matched');
    state.memory.pairsMatched++;
    $('#memoryScore').textContent = 'Cặp đúng: ' + state.memory.pairsMatched + ' / 3';

    playFanfare();
    launchConfetti();
    showToast(isSouth ? '🌟 Con ghép đúng cặp ' + cardData.item.word + ' rồi nè!' : '🌟 Bé ghép đúng cặp ' + cardData.item.word + ' rồi!');

    state.memory.firstCard = null;
    state.memory.secondCard = null;
    state.memory.locked = false;

    if (state.memory.pairsMatched === 3) {
      setTimeout(() => {
        playAudio(getAudioPath('quiz_complete'));
        $('#memoryTitle').textContent = isSouth ? '🎉 Hoan hô! Con có trí nhớ siêu phàm!' : '🎉 Hoan hô! Bé có trí nhớ siêu phàm!';
        $('#memoryGrid').innerHTML =
          '<div style="grid-column: 1 / -1; text-align: center; padding: 24px;">' +
            '<div style="font-size: 54px; margin-bottom: 10px;">🏆 ⭐ 🌟</div>' +
            '<p style="font-size: 16px; font-weight: 800; color: #2d3436; margin-bottom: 16px;">' +
              (isSouth ? 'Con đã tìm đủ 3 cặp bài 3D xuất sắc lắm!' : 'Bé đã tìm đủ 3 cặp bài 3D xuất sắc lắm!') +
            '</p>' +
            '<button class="primary" id="btnRestartMemory" style="padding: 12px 24px; font-size: 15px;">' +
              (isSouth ? 'Con Chơi Ván Mới 🚀' : 'Bé Chơi Ván Mới 🚀') +
            '</button>' +
          '</div>';
        $('#btnRestartMemory').addEventListener('click', initMemoryRound);
      }, 700);
    }
  } else {
    // MISMATCH
    playAudio(getAudioPath('wrong'));
    setTimeout(() => {
      if (state.memory.firstCard) state.memory.firstCard.el.classList.remove('flipped');
      if (state.memory.secondCard) state.memory.secondCard.el.classList.remove('flipped');
      state.memory.firstCard = null;
      state.memory.secondCard = null;
      state.memory.locked = false;
    }, 1100);
  }
}

// ==========================================================================
// GAME 4: THU HOẠCH BỎ GIỎ (BASKET CATEGORY SORTING)
// ==========================================================================
const BASKET_CATEGORIES = [
  { cat: 'animals', name: 'Con Vật 🐶', promptSouth: 'Con hãy nhặt 3 bạn Con Vật bỏ vào giỏ nghen!', promptNorth: 'Bé hãy nhặt 3 bạn Con Vật bỏ vào giỏ nhé!' },
  { cat: 'food', name: 'Đồ Ăn & Uống 🍎', promptSouth: 'Con hãy nhặt 3 món Đồ Ăn ngon lành bỏ vào giỏ nghen!', promptNorth: 'Bé hãy nhặt 3 món Đồ Ăn ngon lành bỏ vào giỏ nhé!' },
  { cat: 'toys', name: 'Đồ Chơi 🧸', promptSouth: 'Con hãy nhặt 3 món Đồ Chơi bỏ vào giỏ nghen!', promptNorth: 'Bé hãy nhặt 3 món Đồ Chơi bỏ vào giỏ nhé!' },
  { cat: 'vehicles', name: 'Xe Cộ 🚗', promptSouth: 'Con hãy nhặt các loại Xe Cộ bỏ vào giỏ nghen!', promptNorth: 'Bé hãy nhặt các loại Xe Cộ bỏ vào giỏ nhé!' },
  { cat: 'objects', name: 'Đồ Dùng 👕', promptSouth: 'Con hãy nhặt 3 món Đồ Dùng bỏ vào giỏ nghen!', promptNorth: 'Bé hãy nhặt 3 món Đồ Dùng bỏ vào giỏ nhé!' }
];

function openBasketGame() {
  initAudioContext();
  $('#basketModal').classList.remove('hidden');
  initBasketRound();
}

function initBasketRound() {
  const isSouth = state.voice === 'south';
  state.basket = {
    category: null,
    targetItems: [],
    collected: [],
    round: 0,
    locked: false
  };

  const catConfig = BASKET_CATEGORIES[Math.floor(Math.random() * BASKET_CATEGORIES.length)];
  state.basket.category = catConfig.cat;

  const targetPool = rawWords.filter(w => w.cat === catConfig.cat).sort(() => Math.random() - 0.5).slice(0, 3).map(getItemData);
  const otherPool = rawWords.filter(w => w.cat !== catConfig.cat).sort(() => Math.random() - 0.5).slice(0, 3).map(getItemData);
  const combined = [...targetPool, ...otherPool].sort(() => Math.random() - 0.5);

  $('#basketTargetText').textContent = isSouth ? catConfig.promptSouth : catConfig.promptNorth;
  $('#basketProgress').textContent = 'Đã nhặt: 0 / 3';
  $('#basketStatusText').textContent = isSouth ? 'Giỏ Thần Kỳ Đang Chờ Con' : 'Giỏ Thần Kỳ Đang Chờ Bé';
  $('#basketHintText').textContent = isSouth ? 'Chạm vào món đồ đúng để bay vào giỏ nghen!' : 'Chạm vào món đồ đúng để bay vào giỏ nhé!';
  $('#basketCollectedPreview').innerHTML = '';
  $('#basketFeedback').textContent = '';

  const shelf = $('#basketItemsShelf');
  shelf.innerHTML = combined.map(item =>
    '<div class="basket-item" data-id="' + item.id + '" data-cat="' + item.cat + '">' +
      '<model-viewer src="' + item.glb + '" autoplay auto-rotate rotation-per-second="30deg" camera-controls disable-zoom interaction-prompt="none"></model-viewer>' +
      '<strong>' + item.word + '</strong>' +
    '</div>'
  ).join('');

  shelf.querySelectorAll('.basket-item').forEach(el => {
    el.addEventListener('click', () => {
      const item = combined.find(x => x.id === el.dataset.id);
      handleBasketItemClick(el, item);
    });
  });

  playAudio(getAudioPath('find_prompt'));
}

function handleBasketItemClick(itemEl, item) {
  if (state.basket.locked) return;
  if (itemEl.classList.contains('collected')) return;

  const isSouth = state.voice === 'south';

  if (item.cat === state.basket.category) {
    // CORRECT!
    itemEl.classList.add('collected');
    state.basket.collected.push(item);
    playAudio(item.audio);

    const zone = $('#basketDropZone');
    zone.style.transition = 'transform 0.25s ease';
    zone.style.transform = 'scale(1.12)';
    setTimeout(() => { zone.style.transform = 'scale(1)'; }, 280);

    const count = state.basket.collected.length;
    $('#basketProgress').textContent = 'Đã nhặt: ' + count + ' / 3';
    $('#basketCollectedPreview').innerHTML += '<span>✓ ' + item.word + '</span>';
    showToast(isSouth ? '🧺 Con đã bỏ ' + item.word + ' vào giỏ nè!' : '🧺 Bé đã bỏ ' + item.word + ' vào giỏ!');

    if (count === 3) {
      state.basket.locked = true;
      setTimeout(() => {
        playFanfare();
        playAudio(getAudioPath('quiz_complete'));
        launchConfetti();
        $('#basketTargetText').textContent = isSouth ? '🎉 Hoan hô con đã thu hoạch đầy giỏ!' : '🎉 Hoan hô bé đã thu hoạch đầy giỏ!';
        $('#basketItemsShelf').innerHTML =
          '<div style="grid-column: 1 / -1; text-align: center; padding: 20px;">' +
            '<div style="font-size: 54px; margin-bottom: 10px;">🧺 ✨ 🌟</div>' +
            '<p style="font-size: 16px; font-weight: 800; color: #166534; margin-bottom: 16px;">' +
              (isSouth ? 'Giỏ đầy ắp rồi! Con phân loại đồ vật giỏi dữ ta!' : 'Giỏ đầy ắp rồi! Bé phân loại đồ vật giỏi lắm!') +
            '</p>' +
            '<button class="primary" id="btnRestartBasket" style="padding: 12px 24px; font-size: 15px;">' +
              (isSouth ? 'Con Thu Hoạch Tiếp 🚀' : 'Bé Thu Hoạch Tiếp 🚀') +
            '</button>' +
          '</div>';
        $('#btnRestartBasket').addEventListener('click', initBasketRound);
      }, 600);
    }
  } else {
    // WRONG
    playAudio(getAudioPath('wrong'));
    itemEl.style.transition = 'transform 0.15s ease';
    itemEl.style.transform = 'translateX(-6px)';
    setTimeout(() => { itemEl.style.transform = 'translateX(6px)'; }, 150);
    setTimeout(() => { itemEl.style.transform = 'translateX(0)'; }, 300);
    showToast(isSouth ? 'Úi, món này thuộc nhóm khác rồi nè!' : 'Úi, món này thuộc nhóm khác rồi bé ơi!');
  }
}

$('#basketHearTask').addEventListener('click', () => {
  playAudio(getAudioPath('find_prompt'));
});

// ==========================================================================
// GAME 5: BẮT BẠN NHANH TAY (WHACK-A-BUDDY FAST REFLEX)
// ==========================================================================
function openWhackGame() {
  initAudioContext();
  $('#whackModal').classList.remove('hidden');
  startWhackGame();
}

function startWhackGame() {
  clearInterval(state.whack.timer);
  state.whack = {
    score: 0,
    target: null,
    timer: null,
    timeLeft: 30,
    activeHoles: [],
    running: true
  };

  $('#whackScore').textContent = 'Điểm: 0';
  $('#whackTimer').textContent = '⏱️ 30s';
  $('#whackFeedback').textContent = '';

  state.whack.timer = setInterval(() => {
    state.whack.timeLeft--;
    $('#whackTimer').textContent = '⏱️ ' + state.whack.timeLeft + 's';
    if (state.whack.timeLeft <= 0) {
      endWhackGame();
    }
  }, 1000);

  nextWhackRound();
}

function nextWhackRound() {
  if (!state.whack.running) return;

  const isSouth = state.voice === 'south';
  const allShuffled = [...rawWords].sort(() => Math.random() - 0.5);
  const target = getItemData(allShuffled[0]);
  state.whack.target = target;

  const distractors = allShuffled.slice(1, 4).map(getItemData);
  const choices = [target, ...distractors].sort(() => Math.random() - 0.5);

  $('#whackQuestion').textContent = isSouth
    ? 'Con hãy chạm thật nhanh vào bạn "' + target.word + '" nghen!'
    : 'Bé hãy chạm thật nhanh vào bạn "' + target.word + '" nhé!';

  playAudio(target.audioShort);

  const grid = $('#whackGrid');
  grid.innerHTML = choices.map(item =>
    '<div class="whack-hole" data-id="' + item.id + '">' +
      '<div class="whack-character">' +
        '<model-viewer src="' + item.glb + '" autoplay auto-rotate rotation-per-second="45deg" camera-controls disable-zoom interaction-prompt="none"></model-viewer>' +
        '<span>' + item.word + '</span>' +
      '</div>' +
    '</div>'
  ).join('');

  setTimeout(() => {
    grid.querySelectorAll('.whack-hole').forEach(h => h.classList.add('popped'));
  }, 40);

  grid.querySelectorAll('.whack-hole').forEach(hole => {
    hole.addEventListener('click', () => {
      if (!state.whack.running) return;
      if (hole.dataset.id === state.whack.target.id) {
        // HIT!
        hole.classList.add('hit');
        state.whack.score += 10;
        $('#whackScore').textContent = 'Điểm: ' + state.whack.score;
        playFanfare();
        showToast(isSouth ? '⚡ Bắt trúng bạn ' + target.word + ' rồi nè! +10 điểm!' : '⚡ Bắt trúng bạn ' + target.word + ' rồi! +10 điểm!');
        setTimeout(nextWhackRound, 450);
      } else {
        // WRONG HOLE
        hole.style.transition = 'transform 0.1s ease';
        hole.style.transform = 'scale(0.95)';
        setTimeout(() => { hole.style.transform = 'scale(1)'; }, 150);
      }
    });
  });
}

function endWhackGame() {
  state.whack.running = false;
  clearInterval(state.whack.timer);

  playFanfare();
  playAudio(getAudioPath('quiz_complete'));
  launchConfetti();

  const isSouth = state.voice === 'south';
  $('#whackQuestion').textContent = isSouth ? '🎉 Hết giờ rồi! Con phản xạ nhanh dữ ta!' : '🎉 Hết giờ rồi! Bé phản xạ nhanh quá!';
  $('#whackGrid').innerHTML =
    '<div style="grid-column: 1 / -1; text-align: center; padding: 24px;">' +
      '<div style="font-size: 54px; margin-bottom: 10px;">⚡ 🏆 🌟</div>' +
      '<p style="font-size: 18px; font-weight: 800; color: #c2410c; margin-bottom: 8px;">' +
        (isSouth ? 'Tổng điểm của con:' : 'Tổng điểm của bé:') + ' ' + state.whack.score + ' điểm!' +
      '</p>' +
      '<p style="color: #64748b; font-size: 14px; margin-bottom: 18px;">' +
        (state.whack.score >= 40 ? 'Bé đạt danh hiệu: Thần Đồng Nhanh Tay 🚀' : 'Bé đã tập trung rất tốt! Luyện tiếp để lên điểm cao hơn nhé!') +
      '</p>' +
      '<button class="primary" id="btnRestartWhack" style="padding: 12px 24px; font-size: 15px;">' +
        (isSouth ? 'Con Chơi Lại Vòng Khác 🚀' : 'Bé Chơi Lại Vòng Khác 🚀') +
      '</button>' +
    '</div>';
  $('#btnRestartWhack').addEventListener('click', startWhackGame);
}

$('#whackHearTarget').addEventListener('click', () => {
  if (state.whack.target) playAudio(state.whack.target.audio);
});

// ==========================================================================
// ARCADE LOBBY NAVIGATION & CARD CLICK EVENTS
// ==========================================================================
$('#btnNavArcade')?.addEventListener('click', () => {
  initAudioContext();
  playFanfare();
  const arcade = $('#arcadeSection');
  if (arcade) {
    arcade.scrollIntoView({ behavior: 'smooth' });
    arcade.style.transition = 'transform 0.4s ease';
    arcade.style.transform = 'scale(1.02)';
    setTimeout(() => { arcade.style.transform = 'scale(1)'; }, 450);
  }
});

// Game 1
$('#arcadeCardQuiz')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') startQuiz();
});
// Game 2
$('#arcadeCardShadow')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') startShadowGame();
});
// Game 3
$('#startMemoryGame')?.addEventListener('click', openMemoryGame);
$('#arcadeCardMemory')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') openMemoryGame();
});
// Game 4
$('#startBasketGame')?.addEventListener('click', openBasketGame);
$('#arcadeCardBasket')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') openBasketGame();
});
// Game 5
$('#startWhackGame')?.addEventListener('click', openWhackGame);
$('#arcadeCardWhack')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') openWhackGame();
});
// Game 6
$('#startCinemaGame')?.addEventListener('click', openFlashcardMode);
$('#arcadeCardCinema')?.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') openFlashcardMode();
});



// ==========================================================================
// 50K FULL OPTION SUITE: ADVENTURE MAP, MASCOT, GAME JUICE, CHEST UNBOXING
// ==========================================================================

// 1. TOUCH / CURSOR STAR TRAILS & GAME JUICE PARTICLES
const particleCanvas = $('#particleCanvas');
let pCtx = null;
let touchParticles = [];

if (particleCanvas) {
  pCtx = particleCanvas.getContext('2d');
  function resizeParticleCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  resizeParticleCanvas();
  window.addEventListener('resize', resizeParticleCanvas);

  function spawnTouchParticle(x, y) {
    const emojis = ['⭐', '✨', '🌟', '💛', '🎈', '💖'];
    const em = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2.5 + 1.2;
    touchParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.2,
      emoji: em,
      size: Math.random() * 8 + 14,
      alpha: 1,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8
    });
    if (touchParticles.length > 50) touchParticles.shift();
  }

  function renderTouchParticles() {
    if (!pCtx) return;
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    for (let i = touchParticles.length - 1; i >= 0; i--) {
      const p = touchParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.alpha -= 0.025;
      p.rot += p.rotSpeed;

      if (p.alpha <= 0) {
        touchParticles.splice(i, 1);
        continue;
      }

      pCtx.save();
      pCtx.globalAlpha = Math.max(p.alpha, 0);
      pCtx.translate(p.x, p.y);
      pCtx.rotate((p.rot * Math.PI) / 180);
      pCtx.font = p.size + 'px sans-serif';
      pCtx.textAlign = 'center';
      pCtx.textBaseline = 'middle';
      pCtx.fillText(p.emoji, 0, 0);
      pCtx.restore();
    }
    requestAnimationFrame(renderTouchParticles);
  }
  requestAnimationFrame(renderTouchParticles);

  window.addEventListener('pointermove', (e) => {
    if (Math.random() < 0.35) spawnTouchParticle(e.clientX, e.clientY);
  });
  window.addEventListener('pointerdown', (e) => {
    for (let k = 0; k < 4; k++) spawnTouchParticle(e.clientX, e.clientY);
  });
}

// 2. ADVENTURE MAP REALMS & WINDING TRAILS
const ADVENTURE_REALMS = [
  {
    cat: 'animals',
    name: 'Đảo Thú Cưng',
    icon: '🐾',
    badge: 'Vương Quốc 1',
    desc: 'Khám phá 7 người bạn động vật đáng yêu'
  },
  {
    cat: 'food',
    name: 'Vườn Trái Cây & Bánh Ngọt',
    icon: '🍎',
    badge: 'Vương Quốc 2',
    desc: 'Thưởng thức 7 món ăn ngon lành bổ dưỡng'
  },
  {
    cat: 'toys',
    name: 'Xưởng Đồ Chơi Ma Thuật',
    icon: '🧸',
    badge: 'Vương Quốc 3',
    desc: 'Khám phá 5 món đồ chơi biết nhảy múa'
  },
  {
    cat: 'vehicles',
    name: 'Thành Phố Siêu Tốc',
    icon: '🚗',
    badge: 'Vương Quốc 4',
    desc: '3 phương tiện giao thông bon bon trên đường'
  },
  {
    cat: 'objects',
    name: 'Vương Quốc Bé Ngoan',
    icon: '👕',
    badge: 'Vương Quốc 5',
    desc: '7 đồ dùng thân thuộc bé nhìn thấy mỗi ngày'
  }
];

function renderAdventureMap() {
  const container = $('#adventureRealmsWrap');
  if (!container) return;

  const learnedSet = state.learned;
  let globalStopIndex = 1;

  container.innerHTML = ADVENTURE_REALMS.map((realm, realmIdx) => {
    const realmWords = rawWords.filter(w => w.cat === realm.cat).map(getItemData);
    const learnedInRealm = realmWords.filter(w => learnedSet.has(w.id)).length;

    const stopsHtml = realmWords.map((item, itemIdx) => {
      const isCompleted = learnedSet.has(item.id);
      const isCurrentActive = !isCompleted && (itemIdx === 0 || learnedSet.has(realmWords[itemIdx - 1].id));
      const stopNum = globalStopIndex++;

      return `
        <div class="trail-stop btn-jelly ${isCompleted ? 'completed' : ''} ${isCurrentActive ? 'active' : ''}" data-id="${item.id}" title="${item.word}">
          <div class="trail-stop-circle">
            <span class="trail-stop-num">${stopNum}</span>
            <model-viewer
              src="${item.glb}"
              alt="${item.word}"
              autoplay
              auto-rotate
              rotation-per-second="25deg"
              camera-controls
              disable-zoom
              interaction-prompt="none"
              loading="lazy">
            </model-viewer>
          </div>
          <span class="trail-stop-label">${item.word}</span>
          <span class="trail-stop-stars">${isCompleted ? '⭐⭐⭐' : (isCurrentActive ? '⭐' : '🔒')}</span>
        </div>
      `;
    }).join('');

    return `
      <article class="adventure-realm-card">
        <div class="realm-header-bar">
          <div class="realm-title-group">
            <div class="realm-icon-badge">${realm.icon}</div>
            <div>
              <h3>${realm.name}</h3>
              <span>${realm.desc}</span>
            </div>
          </div>
          <div class="realm-progress-tag">
            Tiến độ: ${learnedInRealm} / ${realmWords.length}
          </div>
        </div>

        <div class="adventure-trail">
          ${stopsHtml}

          <!-- TRẠM RƯƠNG BÁU MILESTONE Ở CUỐI MỖI VƯƠNG QUỐC -->
          <div class="trail-chest-milestone btn-jelly" data-realm="${realm.cat}" title="Mở Rương Báu ${realm.name}">
            <div class="chest-milestone-circle">🎁</div>
            <span class="chest-milestone-label">Rương Báu ${realmIdx + 1}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Event handlers for trail stops
  container.querySelectorAll('.trail-stop').forEach((stop) => {
    stop.addEventListener('click', () => {
      playCartoonPop();
      const raw = rawWords.find(x => x.id === stop.dataset.id);
      if (raw) openWord(raw);
    });
  });

  // Event handlers for milestone chests
  container.querySelectorAll('.trail-chest-milestone').forEach((chest) => {
    chest.addEventListener('click', () => {
      openMysteryChest();
    });
  });

  // Update progress counter
  const mapProgress = $('#mapProgressCount');
  if (mapProgress) {
    mapProgress.textContent = `${state.learned.size} / ${rawWords.length}`;
  }
}

// 3. VIEW MODE SWITCHER (ADVENTURE MAP VS CLASSIC GRID)
function applyViewMode(mode) {
  state.viewMode = mode;
  localStorage.setItem('view_mode', mode);

  const mapSec = $('#adventureMapSection');
  const gridHead = $('#gridHeadingSection');
  const tabs = document.querySelector('.tabs');
  const grid = $('#grid');

  const btnMap = $('#btnViewMap');
  const btnGrid = $('#btnViewGrid');

  if (mode === 'map') {
    if (mapSec) mapSec.style.display = 'block';
    if (gridHead) gridHead.style.display = 'none';
    if (tabs) tabs.style.display = 'none';
    if (grid) grid.style.display = 'none';
    if (btnMap) btnMap.classList.add('active');
    if (btnGrid) btnGrid.classList.remove('active');
    renderAdventureMap();
  } else {
    if (mapSec) mapSec.style.display = 'none';
    if (gridHead) gridHead.style.display = 'flex';
    if (tabs) tabs.style.display = 'flex';
    if (grid) grid.style.display = 'grid';
    if (btnGrid) btnGrid.classList.add('active');
    if (btnMap) btnMap.classList.remove('active');
    renderGrid();
  }
}

$('#btnViewMap')?.addEventListener('click', () => {
  playCartoonBoing();
  applyViewMode('map');
});

$('#btnViewGrid')?.addEventListener('click', () => {
  playCartoonBoing();
  applyViewMode('grid');
});

// 4. FLOATING 3D MASCOT COMPANION (INTERACTIVE BUDDY)
const MASCOT_PHRASES = [
  "Quác quác! Bé yêu của cô ơi, cùng học nói nghen! 🦆",
  "Hoan hô! Tui thích chơi cùng bé dữ lắm nè! ⭐",
  "Bé ơi, thử mở chiếc rương báu xem có gì bất ngờ nha! 🎁",
  "Con nói to rõ từng từ là giỏi nhất nhà luôn! 🌟",
  "Chạm vào bạn 3D tiếp theo trên bản đồ nào bé ơi! 🚀"
];

let mascotPhraseIndex = 0;
let mascotIdleTimeout = null;

function triggerMascotCheer() {
  playCartoonBoing();
  const mascotWidget = $('#mascotWidget');
  const mascotText = $('#mascotText');

  mascotPhraseIndex = (mascotPhraseIndex + 1) % MASCOT_PHRASES.length;
  if (mascotText) mascotText.textContent = MASCOT_PHRASES[mascotPhraseIndex];

  if (mascotWidget) {
    mascotWidget.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    mascotWidget.style.transform = 'scale(1.22) translateY(-16px) rotate(6deg)';
    setTimeout(() => {
      mascotWidget.style.transform = 'scale(1) translateY(0) rotate(0)';
    }, 380);
  }

  // Spawn star confetti around mascot
  const rect = mascotWidget?.getBoundingClientRect();
  if (rect && typeof spawnTouchParticle === 'function') {
    for (let k = 0; k < 6; k++) {
      spawnTouchParticle(rect.left + rect.width / 2, rect.top);
    }
  }

  resetMascotIdle();
}

$('#mascotWidget')?.addEventListener('click', triggerMascotCheer);

function resetMascotIdle() {
  clearTimeout(mascotIdleTimeout);
  mascotIdleTimeout = setTimeout(() => {
    const mascotText = $('#mascotText');
    if (mascotText) {
      mascotText.textContent = "Bé ơi, con chạm vào bạn tiếp theo trên bản đồ nghen! 🚀";
    }
  }, 14000);
}
window.addEventListener('pointerdown', resetMascotIdle);

// 5. 3D MYSTERY CHEST UNBOXING SYSTEM
function openMysteryChest() {
  initAudioContext();
  state.chest = { step: 0, reward: null, opened: false };
  $('#mysteryChestModal')?.classList.remove('hidden');

  $('#chestGiantIcon')?.classList.remove('hidden');
  $('#chestRewardBox')?.classList.add('hidden');
  $('#btnTapChest')?.classList.remove('hidden');
  $('#btnRestartChest')?.classList.add('hidden');
  $('#chestStepCount').textContent = 'Chạm: 0 / 3';
  $('#chestTitle').textContent = 'Bé Hãy Chạm 3 Lần Vào Rương Để Mở Nhé!';
  $('#chestInstruct').textContent = 'Rương ma thuật đang rung lắc nảy lửa, chạm mạnh nào!';

  playCartoonSparkle();
}

$('#btnOpenMysteryChest')?.addEventListener('click', openMysteryChest);

function handleChestTap() {
  state.chest.step++;
  const wrapper = $('#chest3DWrapper');

  if (state.chest.step === 1) {
    playCartoonBoing();
    if (wrapper) {
      wrapper.classList.add('rumble');
      setTimeout(() => wrapper.classList.remove('rumble'), 350);
    }
    $('#chestStepCount').textContent = 'Chạm: 1 / 3';
    $('#chestInstruct').textContent = 'Hay quá! Còn 2 lần nữa, chạm tiếp nào bé ơi!';
  } else if (state.chest.step === 2) {
    playCartoonSparkle();
    if (wrapper) {
      wrapper.classList.add('rumble');
      setTimeout(() => wrapper.classList.remove('rumble'), 350);
    }
    $('#chestStepCount').textContent = 'Chạm: 2 / 3';
    $('#chestInstruct').textContent = 'Sắp mở rồi! Chạm lần cuối thật mạnh nào!';
  } else if (state.chest.step >= 3) {
    // BURST OPEN REWARD!
    playCartoonTadaa();
    launchConfetti();

    // Pick a random reward from vocabulary
    const all = rawWords.map(getItemData);
    const reward = all[Math.floor(Math.random() * all.length)];
    state.chest.reward = reward;
    state.chest.opened = true;

    $('#chestGiantIcon')?.classList.add('hidden');
    const rewardBox = $('#chestRewardBox');
    if (rewardBox) {
      rewardBox.classList.remove('hidden');
      $('#chestRewardViewer')?.setAttribute('src', reward.glb);
      $('#chestRewardWord').textContent = 'Bạn ' + reward.word;
      $('#chestRewardHint').textContent = '“' + reward.sentence + '”';
    }

    $('#chestTitle').textContent = '🎉 Hoan Hô! Bé Đã Mở Được Bạn ' + reward.word + '!';
    $('#chestInstruct').textContent = 'Bạn nhỏ đã xuất hiện và vui mừng chào đón con nè!';
    $('#btnTapChest')?.classList.add('hidden');
    $('#btnRestartChest')?.classList.remove('hidden');

    playAudio(reward.audio);
  }
}

$('#btnTapChest')?.addEventListener('click', handleChestTap);
$('#chestGiantIcon')?.addEventListener('click', handleChestTap);
$('#btnRestartChest')?.addEventListener('click', openMysteryChest);

// PARENT GATE & SETTINGS
function generateMathQuestion() {
  const n1 = Math.floor(Math.random() * 5) + 2;
  const n2 = Math.floor(Math.random() * 4) + 1;
  state.parentGateAnswer = n1 + n2;
  $('#mathQuestion').textContent = `${n1} + ${n2} = ?`;
  $('#mathAnswerInput').value = '';
  $('#mathError').classList.add('hidden');
}

$('#btnParentGate').addEventListener('click', () => {
  generateMathQuestion();
  $('#parentGateScreen').classList.remove('hidden');
  $('#parentSettingsScreen').classList.add('hidden');
  $('#parentModal').classList.remove('hidden');
});

$('#btnVerifyMath').addEventListener('click', () => {
  const val = parseInt($('#mathAnswerInput').value, 10);
  if (val === state.parentGateAnswer) {
    $('#parentGateScreen').classList.add('hidden');
    $('#parentSettingsScreen').classList.remove('hidden');
    $('#settingRate').value = String(state.speechRate);
    $('#settingBgmToggle').checked = state.bgmEnabled;
    $('#settingTimeLimit').value = String(state.timeLimit);
    $('#settingLearnedSummary').textContent = `Đã hoàn thành ${state.learned.size} / 29 từ vựng`;
  } else {
    $('#mathError').classList.remove('hidden');
    generateMathQuestion();
  }
});

$('#btnSaveParentSettings').addEventListener('click', () => {
  state.speechRate = parseFloat($('#settingRate').value) || 0.8;
  localStorage.setItem('speech_rate', state.speechRate);

  const prevBgm = state.bgmEnabled;
  state.bgmEnabled = $('#settingBgmToggle').checked;
  localStorage.setItem('bgm_enabled', state.bgmEnabled);
  if (state.bgmEnabled && !prevBgm) startBGM();
  if (!state.bgmEnabled && prevBgm) stopBGM();

  state.timeLimit = parseInt($('#settingTimeLimit').value, 10) || 0;
  localStorage.setItem('time_limit', state.timeLimit);
  startPlayTimer();

  closeModal('parentModal');
  showToast('💾 Ba mẹ đã lưu cài đặt thành công!');
});

$('#btnResetProgress').addEventListener('click', () => {
  if (confirm('Ba mẹ có chắc muốn đặt lại toàn bộ sao tiến độ của bé không?')) {
    state.learned.clear();
    localStorage.removeItem('learned_words');
    renderGrid();
    updateProgress();
    showToast('✨ Đã đặt lại tiến độ học tập!');
    closeModal('parentModal');
  }
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(() => {
      console.log('PWA ServiceWorker ready for full offline play');
    }).catch((err) => {
      console.log('PWA ServiceWorker registration notice:', err);
    });
  });
}

// Global Touch Listener to initialize AudioContext
window.addEventListener('pointerdown', () => {
  initAudioContext();
  if (state.bgmEnabled && !isBgmPlaying) {
    startBGM();
  }
}, { once: true });

// Initialize App
applyVoiceUI();
renderGrid();
updateProgress();
renderPark();
applyViewMode(state.viewMode);
resetMascotIdle();



// PRELOAD FREQUENT 3D MODELS IN BACKGROUND CACHE
if ("caches" in window) {
  const PRELOAD_MODELS = [
    "models/duck.glb",
    "models/fox.glb",
    "models/fish.glb",
    "models/apple.glb",
    "models/robot.glb",
    "models/ball.glb",
    "models/toy_car.glb"
  ];
  window.addEventListener("load", () => {
    caches.open("be-hoc-noi-3d-v2").then(cache => {
      PRELOAD_MODELS.forEach(m => cache.add(m).catch(() => {}));
    }).catch(() => {});
  });
}
