const rawWords = [
  // CON VẬT (7)
  {
    id: 'duck',
    word: 'Con vịt',
    shortWord: 'Vịt',
    sentence: 'Con vịt đang bơi dưới nước',
    southSentence: 'Con vịt bơi dưới nước nè',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/duck.glb',
    audio: 'audio/duck.mp3',
    audioShort: 'audio/duck_short.mp3',
    sentenceAudio: 'audio/duck_sentence.mp3',
    southAudio: 'audio_south/duck.mp3',
    southShortAudio: 'audio_south/duck_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/duck.mp3',
    centralShortAudio: 'audio_central/duck_short.mp3',
    centralSentenceAudio: 'audio_central/duck_sentence.mp3',
    southSentenceAudio: 'audio_south/duck_sentence.mp3',
    hint: 'Quác quác! Chú vịt vàng bơi dưới nước'
  },
  {
    id: 'fish',
    word: 'Con cá',
    shortWord: 'Cá',
    sentence: 'Con cá bơi lội tung tăng',
    southSentence: 'Con cá bơi tung tăng dưới nước',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/fish.glb',
    audio: 'audio/fish.mp3',
    audioShort: 'audio/fish_short.mp3',
    sentenceAudio: 'audio/fish_sentence.mp3',
    southAudio: 'audio_south/fish.mp3',
    southShortAudio: 'audio_south/fish_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/fish.mp3',
    centralShortAudio: 'audio_central/fish_short.mp3',
    centralSentenceAudio: 'audio_central/fish_sentence.mp3',
    southSentenceAudio: 'audio_south/fish_sentence.mp3',
    hint: 'Bơi lội tung tăng trong làn nước trong veo'
  },
  {
    id: 'fox',
    word: 'Con cáo',
    shortWord: 'Cáo',
    sentence: 'Chú cáo có chiếc đuôi dài',
    southSentence: 'Chú cáo có cái đuôi dài ghê',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/fox.glb',
    audio: 'audio/fox.mp3',
    audioShort: 'audio/fox_short.mp3',
    sentenceAudio: 'audio/fox_sentence.mp3',
    southAudio: 'audio_south/fox.mp3',
    southShortAudio: 'audio_south/fox_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/fox.mp3',
    centralShortAudio: 'audio_central/fox_short.mp3',
    centralSentenceAudio: 'audio_central/fox_sentence.mp3',
    southSentenceAudio: 'audio_south/fox_sentence.mp3',
    hint: 'Chú cáo thông minh có chiếc đuôi dài'
  },
  {
    id: 'horse',
    word: 'Con ngựa',
    shortWord: 'Ngựa',
    sentence: 'Con ngựa phi nhanh trên đồng cỏ',
    southSentence: 'Con ngựa chạy nhanh dữ ta',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/horse.glb',
    audio: 'audio/horse.mp3',
    audioShort: 'audio/horse_short.mp3',
    sentenceAudio: 'audio/horse_sentence.mp3',
    southAudio: 'audio_south/horse.mp3',
    southShortAudio: 'audio_south/horse_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/horse.mp3',
    centralShortAudio: 'audio_central/horse_short.mp3',
    centralSentenceAudio: 'audio_central/horse_sentence.mp3',
    southSentenceAudio: 'audio_south/horse_sentence.mp3',
    hint: 'Phi nhanh lạch cạch trên đồng cỏ'
  },
  {
    id: 'parrot',
    word: 'Con vẹt',
    shortWord: 'Vẹt',
    sentence: 'Chú vẹt biết nói tiếng người',
    southSentence: 'Chú vẹt biết nói chuyện nữa nè',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/parrot.glb',
    audio: 'audio/parrot.mp3',
    audioShort: 'audio/parrot_short.mp3',
    sentenceAudio: 'audio/parrot_sentence.mp3',
    southAudio: 'audio_south/parrot.mp3',
    southShortAudio: 'audio_south/parrot_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/parrot.mp3',
    centralShortAudio: 'audio_central/parrot_short.mp3',
    centralSentenceAudio: 'audio_central/parrot_sentence.mp3',
    southSentenceAudio: 'audio_south/parrot_sentence.mp3',
    hint: 'Chú vẹt rực rỡ biết nhại tiếng người'
  },
  {
    id: 'flamingo',
    word: 'Chim hồng hạc',
    shortWord: 'Hồng hạc',
    sentence: 'Chim hồng hạc có bộ lông màu hồng',
    southSentence: 'Chim hồng hạc lông màu hồng đẹp quá',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/flamingo.glb',
    audio: 'audio/flamingo.mp3',
    audioShort: 'audio/flamingo_short.mp3',
    sentenceAudio: 'audio/flamingo_sentence.mp3',
    southAudio: 'audio_south/flamingo.mp3',
    southShortAudio: 'audio_south/flamingo_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/flamingo.mp3',
    centralShortAudio: 'audio_central/flamingo_short.mp3',
    centralSentenceAudio: 'audio_central/flamingo_sentence.mp3',
    southSentenceAudio: 'audio_south/flamingo_sentence.mp3',
    hint: 'Loài chim lông hồng duyên dáng'
  },
  {
    id: 'stork',
    word: 'Con cò',
    shortWord: 'Cò',
    sentence: 'Con cò bay lả bay la',
    southSentence: 'Con cò trắng bay lả bay la',
    cat: 'animals',
    catName: 'Con vật',
    glb: 'models/stork.glb',
    audio: 'audio/stork.mp3',
    audioShort: 'audio/stork_short.mp3',
    sentenceAudio: 'audio/stork_sentence.mp3',
    southAudio: 'audio_south/stork.mp3',
    southShortAudio: 'audio_south/stork_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/stork.mp3',
    centralShortAudio: 'audio_central/stork_short.mp3',
    centralSentenceAudio: 'audio_central/stork_sentence.mp3',
    southSentenceAudio: 'audio_south/stork_sentence.mp3',
    hint: 'Chú cò trắng bay lả bay la'
  },

  // ĐỒ ĂN & UỐNG (7)
  {
    id: 'apple',
    word: 'Quả táo',
    shortWord: 'Táo',
    sentence: 'Bé thích ăn quả táo đỏ',
    southWord: 'Trái táo',
    southShort: 'Táo',
    southSentence: 'Bé thích ăn trái táo đỏ ngọt lịm',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/apple.glb',
    audio: 'audio/apple.mp3',
    audioShort: 'audio/apple_short.mp3',
    sentenceAudio: 'audio/apple_sentence.mp3',
    southAudio: 'audio_south/apple.mp3',
    southShortAudio: 'audio_south/apple_short.mp3',
    centralWord: 'Trái táo',
    centralShort: 'Táo',
    centralSentence: 'Bé ăn trái táo đỏ ngọt lịm',
    centralAudio: 'audio_central/apple.mp3',
    centralShortAudio: 'audio_central/apple_short.mp3',
    centralSentenceAudio: 'audio_central/apple_sentence.mp3',
    southSentenceAudio: 'audio_south/apple_sentence.mp3',
    hint: 'Quả táo đỏ giòn ngọt, thơm ngon',
    southHint: 'Trái táo đỏ tươi giòn ngọt ngon lành'
  },
  {
    id: 'watermelon',
    word: 'Quả dưa hấu',
    shortWord: 'Dưa hấu',
    sentence: 'Quả dưa hấu ngọt mát mùa hè',
    southWord: 'Trái dưa hấu',
    southShort: 'Dưa hấu',
    southSentence: 'Trái dưa hấu ngọt mát ăn đã quá',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/watermelon.glb',
    audio: 'audio/watermelon.mp3',
    audioShort: 'audio/watermelon_short.mp3',
    sentenceAudio: 'audio/watermelon_sentence.mp3',
    southAudio: 'audio_south/watermelon.mp3',
    southShortAudio: 'audio_south/watermelon_short.mp3',
    centralWord: 'Trái dưa hấu',
    centralShort: 'Dưa hấu',
    centralSentence: 'Trái dưa hấu ngọt mát mùa hè',
    centralAudio: 'audio_central/watermelon.mp3',
    centralShortAudio: 'audio_central/watermelon_short.mp3',
    centralSentenceAudio: 'audio_central/watermelon_sentence.mp3',
    southSentenceAudio: 'audio_south/watermelon_sentence.mp3',
    hint: 'Dưa hấu vỏ xanh ruột đỏ mát lành',
    southHint: 'Trái dưa hấu vỏ xanh ruột đỏ ngọt mát'
  },
  {
    id: 'avocado',
    word: 'Quả bơ',
    shortWord: 'Bơ',
    sentence: 'Quả bơ béo ngậy thơm ngon',
    southWord: 'Trái bơ',
    southShort: 'Bơ',
    southSentence: 'Trái bơ dầm sữa béo thơm ngon lành',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/avocado.glb',
    audio: 'audio/avocado.mp3',
    audioShort: 'audio/avocado_short.mp3',
    sentenceAudio: 'audio/avocado_sentence.mp3',
    southAudio: 'audio_south/avocado.mp3',
    southShortAudio: 'audio_south/avocado_short.mp3',
    centralWord: 'Trái bơ',
    centralShort: 'Bơ',
    centralSentence: 'Trái bơ béo thơm ngon lành',
    centralAudio: 'audio_central/avocado.mp3',
    centralShortAudio: 'audio_central/avocado_short.mp3',
    centralSentenceAudio: 'audio_central/avocado_sentence.mp3',
    southSentenceAudio: 'audio_south/avocado_sentence.mp3',
    hint: 'Trái bơ béo thơm và giàu dinh dưỡng'
  },
  {
    id: 'cake',
    word: 'Bánh kem',
    shortWord: 'Bánh',
    sentence: 'Bé chúc mừng sinh nhật với bánh kem',
    southSentence: 'Bánh kem sinh nhật ngọt ngào ngon ghê',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/cake.glb',
    audio: 'audio/cake.mp3',
    audioShort: 'audio/cake_short.mp3',
    sentenceAudio: 'audio/cake_sentence.mp3',
    southAudio: 'audio_south/cake.mp3',
    southShortAudio: 'audio_south/cake_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/cake.mp3',
    centralShortAudio: 'audio_central/cake_short.mp3',
    centralSentenceAudio: 'audio_central/cake_sentence.mp3',
    southSentenceAudio: 'audio_south/cake_sentence.mp3',
    hint: 'Bánh sinh nhật ngọt ngào phủ kem tươi'
  },
  {
    id: 'donut',
    word: 'Bánh ngọt',
    shortWord: 'Bánh',
    sentence: 'Chiếc bánh donut phủ kem dâu',
    southSentence: 'Bánh donut phủ kem dâu thơm lừng',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/donut.glb',
    audio: 'audio/donut.mp3',
    audioShort: 'audio/donut_short.mp3',
    sentenceAudio: 'audio/donut_sentence.mp3',
    southAudio: 'audio_south/donut.mp3',
    southShortAudio: 'audio_south/donut_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/donut.mp3',
    centralShortAudio: 'audio_central/donut_short.mp3',
    centralSentenceAudio: 'audio_central/donut_sentence.mp3',
    southSentenceAudio: 'audio_south/donut_sentence.mp3',
    hint: 'Bánh vòng phủ kem dâu hồng rực rỡ'
  },
  {
    id: 'kebab',
    word: 'Xiên thịt nướng',
    shortWord: 'Thịt',
    sentence: 'Xiên thịt nướng thơm lừng nóng hổi',
    southSentence: 'Xiên thịt nướng thơm phức ăn ngon ghê',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/kebab.glb',
    audio: 'audio/kebab.mp3',
    audioShort: 'audio/kebab_short.mp3',
    sentenceAudio: 'audio/kebab_sentence.mp3',
    southAudio: 'audio_south/kebab.mp3',
    southShortAudio: 'audio_south/kebab_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/kebab.mp3',
    centralShortAudio: 'audio_central/kebab_short.mp3',
    centralSentenceAudio: 'audio_central/kebab_sentence.mp3',
    southSentenceAudio: 'audio_south/kebab_sentence.mp3',
    hint: 'Món xiên thịt nướng thơm lừng'
  },
  {
    id: 'teacup',
    word: 'Tách trà',
    shortWord: 'Trà',
    sentence: 'Tách trà ấm áp tỏa hương thơm',
    southSentence: 'Tách trà ấm thơm lừng',
    cat: 'food',
    catName: 'Đồ ăn',
    glb: 'models/teacup.glb',
    audio: 'audio/teacup.mp3',
    audioShort: 'audio/teacup_short.mp3',
    sentenceAudio: 'audio/teacup_sentence.mp3',
    southAudio: 'audio_south/teacup.mp3',
    southShortAudio: 'audio_south/teacup_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/teacup.mp3',
    centralShortAudio: 'audio_central/teacup_short.mp3',
    centralSentenceAudio: 'audio_central/teacup_sentence.mp3',
    southSentenceAudio: 'audio_south/teacup_sentence.mp3',
    hint: 'Tách trà ấm áp tỏa ngát hương'
  },

  // ĐỒ CHƠI (5)
  {
    id: 'robot',
    word: 'Chú rô bốt',
    shortWord: 'Rô bốt',
    sentence: 'Chú rô bốt thông minh biết nhảy múa',
    southWord: 'Người máy',
    southShort: 'Người máy',
    southSentence: 'Người máy thông minh biết nhảy múa nè',
    cat: 'toys',
    catName: 'Đồ chơi',
    glb: 'models/robot.glb',
    audio: 'audio/robot.mp3',
    audioShort: 'audio/robot_short.mp3',
    sentenceAudio: 'audio/robot_sentence.mp3',
    southAudio: 'audio_south/robot.mp3',
    southShortAudio: 'audio_south/robot_short.mp3',
    centralWord: 'Người máy',
    centralShort: 'Người máy',
    centralSentence: 'Người máy thông minh biết nhảy múa',
    centralAudio: 'audio_central/robot.mp3',
    centralShortAudio: 'audio_central/robot_short.mp3',
    centralSentenceAudio: 'audio_central/robot_sentence.mp3',
    southSentenceAudio: 'audio_south/robot_sentence.mp3',
    hint: 'Người máy thông minh biết nhảy múa'
  },
  {
    id: 'ball',
    word: 'Quả bóng',
    shortWord: 'Bóng',
    sentence: 'Bé cùng đá quả bóng tròn',
    southWord: 'Trái banh',
    southShort: 'Banh',
    southSentence: 'Bé thích đá trái banh lăn tăn',
    cat: 'toys',
    catName: 'Đồ chơi',
    glb: 'models/ball.glb',
    audio: 'audio/ball.mp3',
    audioShort: 'audio/ball_short.mp3',
    sentenceAudio: 'audio/ball_sentence.mp3',
    southAudio: 'audio_south/ball.mp3',
    southShortAudio: 'audio_south/ball_short.mp3',
    centralWord: 'Trái banh',
    centralShort: 'Banh',
    centralSentence: 'Bé đá trái banh lăn tăn trong sân',
    centralAudio: 'audio_central/ball.mp3',
    centralShortAudio: 'audio_central/ball_short.mp3',
    centralSentenceAudio: 'audio_central/ball_sentence.mp3',
    southSentenceAudio: 'audio_south/ball_sentence.mp3',
    hint: 'Quả bóng tròn xoe bé thích lăn tăn',
    southHint: 'Trái banh tròn xoe bé thích đá lăn tăn'
  },
  {
    id: 'astronaut',
    word: 'Phi hành gia',
    shortWord: 'Phi hành gia',
    sentence: 'Chú phi hành gia bay vào vũ trụ',
    southSentence: 'Chú phi hành gia bay lên cung trăng',
    cat: 'toys',
    catName: 'Đồ chơi',
    glb: 'models/astronaut.glb',
    audio: 'audio/astronaut.mp3',
    audioShort: 'audio/astronaut_short.mp3',
    sentenceAudio: 'audio/astronaut_sentence.mp3',
    southAudio: 'audio_south/astronaut.mp3',
    southShortAudio: 'audio_south/astronaut_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/astronaut.mp3',
    centralShortAudio: 'audio_central/astronaut_short.mp3',
    centralSentenceAudio: 'audio_central/astronaut_sentence.mp3',
    southSentenceAudio: 'audio_south/astronaut_sentence.mp3',
    hint: 'Chú phi hành gia bay vào vũ trụ'
  },
  {
    id: 'star',
    word: 'Ngôi sao',
    shortWord: 'Sao',
    sentence: 'Ngôi sao vàng năm cánh lấp lánh',
    southSentence: 'Ngôi sao vàng lấp lánh trên trời cao',
    cat: 'toys',
    catName: 'Đồ chơi',
    glb: 'models/star.glb',
    audio: 'audio/star.mp3',
    audioShort: 'audio/star_short.mp3',
    sentenceAudio: 'audio/star_sentence.mp3',
    southAudio: 'audio_south/star.mp3',
    southShortAudio: 'audio_south/star_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/star.mp3',
    centralShortAudio: 'audio_central/star_short.mp3',
    centralSentenceAudio: 'audio_central/star_sentence.mp3',
    southSentenceAudio: 'audio_south/star_sentence.mp3',
    hint: 'Ngôi sao vàng năm cánh lấp lánh'
  },
  {
    id: 'boombox',
    word: 'Loa nghe nhạc',
    shortWord: 'Loa',
    sentence: 'Chiếc loa phát nhạc rộn ràng vui tai',
    southSentence: 'Cái loa mở nhạc nghe vui tai ghê',
    cat: 'toys',
    catName: 'Đồ chơi',
    glb: 'models/boombox.glb',
    audio: 'audio/boombox.mp3',
    audioShort: 'audio/boombox_short.mp3',
    sentenceAudio: 'audio/boombox_sentence.mp3',
    southAudio: 'audio_south/boombox.mp3',
    southShortAudio: 'audio_south/boombox_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/boombox.mp3',
    centralShortAudio: 'audio_central/boombox_short.mp3',
    centralSentenceAudio: 'audio_central/boombox_sentence.mp3',
    southSentenceAudio: 'audio_south/boombox_sentence.mp3',
    hint: 'Chiếc máy phát nhạc rộn ràng vui tai'
  },

  // XE CỘ & GIAO THÔNG (3)
  {
    id: 'toy_car',
    word: 'Xe ô tô',
    shortWord: 'Xe',
    sentence: 'Chiếc xe ô tô chạy bon bon',
    southWord: 'Xe hơi',
    southShort: 'Xe',
    southSentence: 'Chiếc xe hơi chạy bon bon trên đường',
    cat: 'vehicles',
    catName: 'Xe cộ',
    glb: 'models/toy_car.glb',
    audio: 'audio/toy_car.mp3',
    audioShort: 'audio/toy_car_short.mp3',
    sentenceAudio: 'audio/toy_car_sentence.mp3',
    southAudio: 'audio_south/toy_car.mp3',
    southShortAudio: 'audio_south/toy_car_short.mp3',
    centralWord: 'Xe hơi',
    centralShort: 'Xe',
    centralSentence: 'Chiếc xe hơi chạy bon bon trên đường',
    centralAudio: 'audio_central/toy_car.mp3',
    centralShortAudio: 'audio_central/toy_car_short.mp3',
    centralSentenceAudio: 'audio_central/toy_car_sentence.mp3',
    southSentenceAudio: 'audio_south/toy_car_sentence.mp3',
    hint: 'Brum brum! Chiếc xe bốn bánh bon bon',
    southHint: 'Brum brum! Chiếc xe hơi chạy bon bon'
  },
  {
    id: 'bike',
    word: 'Xe đạp',
    shortWord: 'Xe đạp',
    sentence: 'Bé cùng đạp xe rèn luyện sức khỏe',
    southSentence: 'Bé chạy xe đạp vòng vòng sân nhà',
    cat: 'vehicles',
    catName: 'Xe cộ',
    glb: 'models/bike.glb',
    audio: 'audio/bike.mp3',
    audioShort: 'audio/bike_short.mp3',
    sentenceAudio: 'audio/bike_sentence.mp3',
    southAudio: 'audio_south/bike.mp3',
    southShortAudio: 'audio_south/bike_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/bike.mp3',
    centralShortAudio: 'audio_central/bike_short.mp3',
    centralSentenceAudio: 'audio_central/bike_sentence.mp3',
    southSentenceAudio: 'audio_south/bike_sentence.mp3',
    hint: 'Bé đạp xe rèn luyện sức khỏe dẻo dai'
  },
  {
    id: 'milk_truck',
    word: 'Xe tải',
    shortWord: 'Xe tải',
    sentence: 'Chiếc xe tải chở sữa đi giao hàng',
    southSentence: 'Xe tải to lớn chở sữa bon bon',
    cat: 'vehicles',
    catName: 'Xe cộ',
    glb: 'models/milk_truck.glb',
    audio: 'audio/milk_truck.mp3',
    audioShort: 'audio/milk_truck_short.mp3',
    sentenceAudio: 'audio/milk_truck_sentence.mp3',
    southAudio: 'audio_south/milk_truck.mp3',
    southShortAudio: 'audio_south/milk_truck_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/milk_truck.mp3',
    centralShortAudio: 'audio_central/milk_truck_short.mp3',
    centralSentenceAudio: 'audio_central/milk_truck_sentence.mp3',
    southSentenceAudio: 'audio_south/milk_truck_sentence.mp3',
    hint: 'Xe tải to lớn chở hàng hóa bon bon'
  },

  // ĐỒ DÙNG & QUẦN ÁO (7)
  {
    id: 'cup',
    word: 'Cái cốc',
    shortWord: 'Cốc',
    sentence: 'Bé dùng cốc để uống nước lọc',
    southWord: 'Cái ly',
    southShort: 'Ly',
    southSentence: 'Bé uống nước bằng cái ly xinh xinh',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/cup.glb',
    audio: 'audio/cup.mp3',
    audioShort: 'audio/cup_short.mp3',
    sentenceAudio: 'audio/cup_sentence.mp3',
    southAudio: 'audio_south/cup.mp3',
    southShortAudio: 'audio_south/cup_short.mp3',
    centralWord: 'Cái ly',
    centralShort: 'Ly',
    centralSentence: 'Bé uống nước bằng cái ly xinh xinh',
    centralAudio: 'audio_central/cup.mp3',
    centralShortAudio: 'audio_central/cup_short.mp3',
    centralSentenceAudio: 'audio_central/cup_sentence.mp3',
    southSentenceAudio: 'audio_south/cup_sentence.mp3',
    hint: 'Cốc dùng để bé uống nước mỗi ngày',
    southHint: 'Cái ly dùng để bé uống nước, uống sữa'
  },
  {
    id: 'bottle',
    word: 'Bình nước',
    shortWord: 'Bình',
    sentence: 'Bình nước tiện lợi bé mang đi học',
    southSentence: 'Bình nước mát bé mang theo đi học',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/bottle.glb',
    audio: 'audio/bottle.mp3',
    audioShort: 'audio/bottle_short.mp3',
    sentenceAudio: 'audio/bottle_sentence.mp3',
    southAudio: 'audio_south/bottle.mp3',
    southShortAudio: 'audio_south/bottle_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/bottle.mp3',
    centralShortAudio: 'audio_central/bottle_short.mp3',
    centralSentenceAudio: 'audio_central/bottle_sentence.mp3',
    southSentenceAudio: 'audio_south/bottle_sentence.mp3',
    hint: 'Bình nước tiện lợi bé mang đi học'
  },
  {
    id: 'shoe',
    word: 'Đôi giày',
    shortWord: 'Giày',
    sentence: 'Đôi giày xinh xắn bảo vệ chân bé',
    southSentence: 'Đôi giày xinh xắn mang vào êm chân',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/shoe.glb',
    audio: 'audio/shoe.mp3',
    audioShort: 'audio/shoe_short.mp3',
    sentenceAudio: 'audio/shoe_sentence.mp3',
    southAudio: 'audio_south/shoe.mp3',
    southShortAudio: 'audio_south/shoe_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/shoe.mp3',
    centralShortAudio: 'audio_central/shoe_short.mp3',
    centralSentenceAudio: 'audio_central/shoe_sentence.mp3',
    southSentenceAudio: 'audio_south/shoe_sentence.mp3',
    hint: 'Đôi giày xinh bảo vệ đôi chân bé'
  },
  {
    id: 'glasses',
    word: 'Kính mắt',
    shortWord: 'Kính',
    sentence: 'Chiếc kính mát che nắng rất đẹp',
    southWord: 'Kính mát',
    southShort: 'Kính',
    southSentence: 'Chiếc kính mát sành điệu che nắng',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/glasses.glb',
    audio: 'audio/glasses.mp3',
    audioShort: 'audio/glasses_short.mp3',
    sentenceAudio: 'audio/glasses_sentence.mp3',
    southAudio: 'audio_south/glasses.mp3',
    southShortAudio: 'audio_south/glasses_short.mp3',
    centralWord: 'Kính mát',
    centralShort: 'Kính',
    centralSentence: 'Chiếc kính mát che nắng rất đẹp',
    centralAudio: 'audio_central/glasses.mp3',
    centralShortAudio: 'audio_central/glasses_short.mp3',
    centralSentenceAudio: 'audio_central/glasses_sentence.mp3',
    southSentenceAudio: 'audio_south/glasses_sentence.mp3',
    hint: 'Chiếc kính sành điệu che nắng cho mắt',
    southHint: 'Chiếc kính mát che nắng sành điệu'
  },
  {
    id: 'camera',
    word: 'Máy ảnh',
    shortWord: 'Máy ảnh',
    sentence: 'Máy ảnh chụp lại nụ cười của bé',
    southSentence: 'Máy ảnh chụp nụ cười của con nè',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/camera.glb',
    audio: 'audio/camera.mp3',
    audioShort: 'audio/camera_short.mp3',
    sentenceAudio: 'audio/camera_sentence.mp3',
    southAudio: 'audio_south/camera.mp3',
    southShortAudio: 'audio_south/camera_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/camera.mp3',
    centralShortAudio: 'audio_central/camera_short.mp3',
    centralSentenceAudio: 'audio_central/camera_sentence.mp3',
    southSentenceAudio: 'audio_south/camera_sentence.mp3',
    hint: 'Tách tách! Máy ảnh lưu giữ kỷ niệm đẹp'
  },
  {
    id: 'lantern',
    word: 'Cái đèn',
    shortWord: 'Đèn',
    sentence: 'Chiếc đèn phát ra ánh sáng lung linh',
    southSentence: 'Cái đèn sáng rực rỡ ấm cúng',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/lantern.glb',
    audio: 'audio/lantern.mp3',
    audioShort: 'audio/lantern_short.mp3',
    sentenceAudio: 'audio/lantern_sentence.mp3',
    southAudio: 'audio_south/lantern.mp3',
    southShortAudio: 'audio_south/lantern_short.mp3',
    centralWord: undefined,
    centralShort: undefined,
    centralSentence: undefined,
    centralAudio: 'audio_central/lantern.mp3',
    centralShortAudio: 'audio_central/lantern_short.mp3',
    centralSentenceAudio: 'audio_central/lantern_sentence.mp3',
    southSentenceAudio: 'audio_south/lantern_sentence.mp3',
    hint: 'Chiếc đèn chiếu ánh sáng ấm áp'
  },
  {
    id: 'plant',
    word: 'Chậu hoa cây cảnh',
    shortWord: 'Cây hoa',
    sentence: 'Chậu hoa xanh mát nở hoa xinh đẹp',
    southWord: 'Bông hoa',
    southShort: 'Hoa',
    southSentence: 'Bông hoa tươi thắm nở đẹp quá chừng',
    cat: 'objects',
    catName: 'Đồ dùng',
    glb: 'models/plant.glb',
    audio: 'audio/plant.mp3',
    audioShort: 'audio/plant_short.mp3',
    sentenceAudio: 'audio/plant_sentence.mp3',
    southAudio: 'audio_south/plant.mp3',
    southShortAudio: 'audio_south/plant_short.mp3',
    centralWord: 'Bông hoa',
    centralShort: 'Hoa',
    centralSentence: 'Bông hoa tươi thắm nở đẹp quá chừng',
    centralAudio: 'audio_central/plant.mp3',
    centralShortAudio: 'audio_central/plant_short.mp3',
    centralSentenceAudio: 'audio_central/plant_sentence.mp3',
    southSentenceAudio: 'audio_south/plant_sentence.mp3',
    hint: 'Chậu hoa xanh mát làm đẹp căn phòng',
    southHint: 'Bông hoa xinh xắn làm đẹp căn phòng'
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
  current: null,
  heroIndex: 0,
  flashcardIndex: 0,
  flashcardPlaying: false,
  flashcardTimer: null,
  quiz: { round: 0, score: 0, answer: null, locked: false },
  shadow: { round: 0, score: 0, answer: null, locked: false },
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
    glb: item.glb
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
  playFanfare();
  viewer.style.transition = 'transform 0.4s ease';
  viewer.style.transform = 'scale(1.15) translateY(-20px) rotate(15deg)';
  setTimeout(() => {
    viewer.style.transform = 'scale(1) translateY(0) rotate(0)';
  }, 450);
  showToast('💃 Hoan hô! Bạn 3D đang nhảy múa vui quá nè!');
});

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
    $('#challengeDesc').textContent = 'Hai chế độ đố vui thông minh với giọng đọc miền Nam gần gũi, giúp bé phản xạ tự nhiên.';
    $('#learn').textContent = '⭐ Con nói được từ này rồi!';
  } else if (isCentral) {
    $('#heroChip').textContent = '🏮 Đang dùng: Giọng Miền Trung gần gũi';
    $('#subHeading').textContent = 'Hôm ni bé muốn tập nói từ gì hè?';
    $('#greeting').textContent = '🔊 Nghe cô chào con';
    $('#quizQuestion').textContent = 'Con nghe rồi chọn đúng hình nghe!';
    $('#challengeDesc').textContent = 'Hai chế độ đố vui với sắc thái miền Trung thân thương, giúp bé nghe đa dạng giọng Việt.';
    $('#learn').textContent = '⭐ Con nói được từ ni rồi!';
  } else {
    $('#heroChip').textContent = '🌸 Đang dùng: Giọng Miền Bắc chuẩn mực';
    $('#subHeading').textContent = 'Hôm nay bé muốn tập nói từ gì nhé?';
    $('#greeting').textContent = '🔊 Nghe cô chào bé';
    $('#quizQuestion').textContent = 'Bé lắng nghe và chọn đúng hình nhé!';
    $('#challengeDesc').textContent = 'Hai chế độ đố vui thông minh với giọng đọc miền Bắc chuẩn xác, giúp bé nhớ lâu.';
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

  if (btnPlayRecorded) btnPlayRecorded.classList.add('hidden');
  if (recordText) recordText.textContent = 'Bé Nói Thử Nha (Bấm Ghi Âm)';
  if (aiSpeechResult) aiSpeechResult.classList.add('hidden');
  if (aiStars) aiStars.textContent = '⭐⭐⭐';

  $('#wordModal').classList.remove('hidden');

  playAudio(item.audio);
}

function closeModal(id) {
  const modal = $(`#${id}`);
  if (modal) modal.classList.add('hidden');
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


