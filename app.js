const STORAGE_KEYS = {
  result: "literstella_beta_result_v5",
  leads: "literstella_beta_leads_v5",
  eventLog: "literstella_beta_events_v5",
};

const GOALS = [
  { id: "exam", emoji: "🎓", title: "시험·수능", desc: "점수 이후에도 남는 읽기 힘이 필요해요." },
  { id: "career", emoji: "💼", title: "커리어·유학", desc: "영어 문서를 오래 읽는 힘을 만들고 싶어요." },
  { id: "conversation", emoji: "✈️", title: "회화·여행", desc: "문장과 표현을 자연스럽게 쌓고 싶어요." },
  { id: "lifestyle", emoji: "☕", title: "취미·교양", desc: "공부가 아니라 오래 가는 취향으로 읽고 싶어요." },
];

const STAMINA_QUESTIONS = [
  { id: "ST01", title: "원서를 펼쳤을 때 가장 먼저 부담스러운 것은?", options: [
    { id: "A", label: "첫 장부터 모르는 단어가 많을까 봐", score: 0, type: "A" },
    { id: "B", label: "내용은 궁금하지만 오래 못 읽을까 봐", score: 0.5, type: "S" },
    { id: "C", label: "좋은 문장은 느리게라도 읽고 싶어요", score: 1, type: "E" },
  ]},
  { id: "ST02", title: "모르는 단어가 나오면 보통 어떻게 하나요?", options: [
    { id: "A", label: "바로 사전을 찾고 뜻을 적어야 마음이 놓여요", score: 0, type: "A" },
    { id: "B", label: "표시만 하고 일단 흐름을 따라가요", score: 1, type: "S" },
    { id: "C", label: "장면의 감정이 이해되면 잠시 넘어가요", score: 0.5, type: "E" },
  ]},
  { id: "ST03", title: "완독을 어렵게 만드는 가장 큰 이유는?", options: [
    { id: "A", label: "문장 구조가 막히면 다시 앞장으로 돌아가요", score: 0, type: "A" },
    { id: "B", label: "혼자 읽다 보면 재미가 이어지지 않아요", score: 0.5, type: "S" },
    { id: "C", label: "나에게 맞는 책을 찾으면 계속할 수 있을 것 같아요", score: 1, type: "X" },
  ]},
];

const LEVEL_QUESTIONS = [
  { id: "L01", sentence: "I like reading books.", title: "이 문장은 어느 정도 읽히나요?", options: [ { id: "A", label: "바로 이해된다", score: 1 }, { id: "B", label: "대충 이해된다", score: 0.5 }, { id: "C", label: "어렵다", score: 0 } ] },
  { id: "L02", sentence: "She gave me a book.", title: "이 문장의 의미는 어느 쪽에 가깝나요?", options: [ { id: "A", label: "그녀가 나에게 책을 줬다", score: 1 }, { id: "B", label: "내가 그녀에게 책을 줬다", score: 0 }, { id: "C", label: "잘 모르겠다", score: 0 } ] },
  { id: "L03", sentence: "I have finished my homework.", title: "이 문장은 어떤 느낌인가요?", options: [ { id: "A", label: "숙제를 끝낸 상태가 현재와 이어진다", score: 1 }, { id: "B", label: "예전에 끝냈다는 정도만 알겠다", score: 0.5 }, { id: "C", label: "잘 모르겠다", score: 0 } ] },
  { id: "L04", sentence: "I was tired, but I kept working.", title: "이 문장의 흐름은?", options: [ { id: "A", label: "피곤했지만 계속했다", score: 1 }, { id: "B", label: "피곤해서 멈췄다", score: 0 }, { id: "C", label: "잘 모르겠다", score: 0 } ] },
  { id: "L05", sentence: "I was about to leave when he called me.", title: "이 문장의 장면은?", options: [ { id: "A", label: "떠나려던 순간 전화가 왔다", score: 1 }, { id: "B", label: "떠난 뒤 전화가 왔다", score: 0 }, { id: "C", label: "잘 모르겠다", score: 0 } ] },
  { id: "L06", sentence: "The silence was not empty, but full of meaning.", title: "이 문장의 분위기는?", options: [ { id: "A", label: "침묵에도 의미가 있었다", score: 1 }, { id: "B", label: "침묵은 아무 의미 없었다", score: 0 }, { id: "C", label: "단어는 알지만 문장 느낌은 어렵다", score: 0.5 } ] },
];

const PREFERENCE_QUESTIONS = [
  { id: "P01", title: "원서를 읽는다면 더 끌리는 방식은?", options: [ { id: "S", label: "이야기 흐름을 따라가며 몰입하기", type: "S" }, { id: "A", label: "문장 구조와 표현을 정확히 이해하기", type: "A" }, { id: "E", label: "좋은 문장과 감정을 오래 느끼기", type: "E" }, { id: "X", label: "배경지식과 의미를 탐구하기", type: "X" } ]},
  { id: "P02", title: "막히는 문장을 만났을 때 나는 보통?", options: [ { id: "S", label: "일단 다음 장면으로 넘어가며 흐름을 잡는다", type: "S" }, { id: "A", label: "문법 구조를 확인해야 마음이 놓인다", type: "A" }, { id: "E", label: "그 장면의 감정과 분위기부터 떠올린다", type: "E" }, { id: "X", label: "왜 이런 표현을 썼는지 맥락을 찾아본다", type: "X" } ]},
  { id: "P03", title: "완독을 계속하게 만드는 힘은?", options: [ { id: "S", label: "다음 이야기가 궁금한 몰입감", type: "S" }, { id: "A", label: "실력이 쌓이고 있다는 정확한 감각", type: "A" }, { id: "E", label: "나에게 남는 문장과 위로", type: "E" }, { id: "X", label: "작품이 던지는 질문과 해석", type: "X" } ]},
  { id: "P04", title: "읽은 뒤 가장 하고 싶은 활동은?", options: [ { id: "S", label: "챕터별 줄거리와 다음 장면 정리", type: "S" }, { id: "A", label: "핵심 문장 구조와 표현 복습", type: "A" }, { id: "E", label: "좋은 문장을 필사하고 간직하기", type: "E" }, { id: "X", label: "작품 배경과 상징을 더 알아보기", type: "X" } ]},
  { id: "P05", title: "지금 더 끌리는 시작점은?", options: [ { id: "S", label: "익숙한 이야기로 원서 완독에 도전", type: "S" }, { id: "A", label: "정확한 해석과 문장 훈련", type: "A" }, { id: "E", label: "문학적인 감정과 취향의 루틴", type: "E" }, { id: "X", label: "영어로 사고를 확장하는 독서", type: "X" } ]},
];

const BOOKS = {
  B001: { title: "Daddy-Long-Legs", ko: "키다리 아저씨", level: "L1 입문", ar: "6.1", lexile: "925L", types: ["E", "A"], tags: ["편지체", "감정", "첫 완독"], image: "./assets/book-daddy-long-legs.webp", desc: "편지 형식으로 이어지는 짧고 자연스러운 문장이 강점입니다. 영어 원서를 처음 펼치는 독자에게 부담은 낮추고, 감정의 밀도는 놓치지 않게 해줍니다." },
  B002: { title: "Charlotte’s Web", ko: "샬롯의 거미줄", level: "L1 입문", ar: "4.4", lexile: "680L", types: ["S", "E"], tags: ["우정", "서사", "따뜻함"], image: "./assets/book-charlottes-web.webp", desc: "아름다운 문체와 우정의 서사가 분명해 처음 원서 읽기의 리듬을 만들기 좋습니다." },
  B003: { title: "The Little Prince", ko: "어린 왕자", level: "L1 입문", ar: "5.0", lexile: "710L", types: ["E", "X"], tags: ["짧은 문장", "상징", "감성"], image: "./assets/book-the-little-prince.webp", desc: "문장은 길지 않지만 오래 생각하게 만드는 상징이 많아, 감정과 의미를 함께 읽고 싶은 독자에게 맞습니다." },
  B004: { title: "Diary of a Wimpy Kid", ko: "윔피 키드", level: "L1 입문", ar: "5.2", lexile: "950L", types: ["S"], tags: ["일상", "유머", "가벼운 시작"], image: "./assets/book-diary-of-a-wimpy-kid.webp", desc: "그림과 일상적 유머가 함께 있어 영어 페이지를 넘기는 부담을 낮춰줍니다." },
  B005: { title: "Anne of Green Gables", ko: "빨강머리 앤", level: "L2 문장 이해", ar: "7.3", lexile: "990L", types: ["S", "E", "A"], tags: ["감정 표현", "성장", "재시작"], image: "./assets/book-anne-of-green-gables.webp", desc: "앤의 말과 장면을 따라가며 감정 표현과 문장 구조를 함께 익힐 수 있습니다. 다시 시작하고 싶은 독자에게 가장 넓게 맞는 첫 클래식입니다." },
  B006: { title: "Peter Pan", ko: "피터 팬", level: "L2 문장 이해", ar: "7.0", lexile: "920L", types: ["S", "X"], tags: ["모험", "상상", "스토리"], image: "./assets/book-peter-pan.webp", desc: "모험과 상상력이 선명해 이야기의 흐름을 잡으며 읽기 좋습니다." },
  B007: { title: "The Wind in the Willows", ko: "버드나무에 부는 바람", level: "L2 문장 이해", ar: "8.2", lexile: "1140L", types: ["E", "X"], tags: ["묘사", "우정", "고전"], image: "./assets/book-the-wind-in-the-willows.webp", desc: "느린 호흡의 묘사와 관계 중심의 장면을 읽으며 문장 감각을 넓힙니다." },
  B008: { title: "Wonder", ko: "원더", level: "L2 문장 이해", ar: "4.8", lexile: "790L", types: ["S", "E"], tags: ["현대", "공감", "짧은 챕터"], image: "./assets/book-wonder.webp", desc: "짧은 챕터와 현대적인 표현 덕분에 공감하며 지속하기 좋습니다." },
  B009: { title: "Little Women", ko: "작은 아씨들", level: "L3 자연 독해", ar: "7.6", lexile: "1100L", types: ["E", "A", "S"], tags: ["일상 대화", "가족", "문학"], image: "./assets/book-little-women.webp", desc: "자매들의 대화와 일상 장면을 통해 자연스러운 영어와 문학적 감정을 함께 쌓습니다." },
  B010: { title: "The Giver", ko: "기억 전달자", level: "L3 자연 독해", ar: "5.7", lexile: "760L", types: ["X", "S"], tags: ["사유", "디스토피아", "명료한 문장"], image: "./assets/book-the-giver.webp", desc: "문장은 비교적 명료하지만 질문이 깊습니다. 영어로 생각을 확장하고 싶은 독자에게 좋습니다." },
  B011: { title: "Animal Farm", ko: "동물농장", level: "L3 자연 독해", ar: "7.3", lexile: "1170L", types: ["X", "A"], tags: ["우화", "사회", "풍자"], image: "./assets/book-animal-farm.webp", desc: "짧은 분량 안에 사회적 의미가 응축되어 있어, 읽기에서 사유로 넘어가기 좋은 책입니다." },
  B012: { title: "Flipped", ko: "플립", level: "L3 자연 독해", ar: "4.8", lexile: "720L", types: ["S", "E"], tags: ["교차 시점", "성장", "관계"], image: "./assets/book-flipped.webp", desc: "두 인물의 시점이 교차해 관계와 감정 변화를 따라가는 힘을 기릅니다." },
  B013: { title: "Pride and Prejudice", ko: "오만과 편견", level: "L4 상위권", ar: "12.0", lexile: "1190L", types: ["A", "E", "X"], tags: ["관계", "논리", "고급 구조"], image: "./assets/book-pride-and-prejudice.webp", desc: "고급 문장 구조와 미묘한 관계 표현을 함께 읽는 책입니다. 정확하게 읽고 싶은 독자에게 큰 성취감을 줍니다." },
  B014: { title: "To Kill a Mockingbird", ko: "앵무새 죽이기", level: "L4 상위권", ar: "5.6", lexile: "790L", types: ["X", "E"], tags: ["사회", "성장", "윤리"], image: "./assets/book-to-kill-a-mockingbird.webp", desc: "언어 난이도만이 아니라 사회적 맥락과 윤리적 질문을 함께 읽어야 하는 작품입니다." },
  B015: { title: "1984", ko: "1984", level: "L4 상위권", ar: "8.9", lexile: "1090L", types: ["X", "A"], tags: ["사회비판", "추상", "사고"], image: "./assets/book-1984.webp", desc: "문장 너머의 권력, 언어, 사회 체계를 읽는 단계에 적합합니다." },
  B016: { title: "Of Mice and Men", ko: "생쥐와 인간", level: "L4 상위권", ar: "4.5", lexile: "630L", types: ["E", "A"], tags: ["짧은 분량", "대화", "비극"], image: "./assets/book-of-mice-and-men.webp", desc: "짧지만 감정 밀도가 높아 인물의 대화와 침묵을 깊게 읽게 합니다." },
  B017: { title: "Sherlock Holmes", ko: "셜록 홈즈", level: "L5 혼자 읽을 수 있는 레벨", ar: "7.3", lexile: "1070L", types: ["X", "A"], tags: ["추론", "논리", "탐구"], image: "./assets/book-sherlock-holmes.webp", desc: "문장 속 단서를 따라가며 논리적으로 읽는 힘을 기릅니다. L4까지 지나온 독자라면 혼자 읽는 영어 독서의 자유를 넓혀볼 수 있습니다." },
  B018: { title: "The Great Gatsby", ko: "위대한 개츠비", level: "L5 혼자 읽을 수 있는 레벨", ar: "7.3", lexile: "1070L", types: ["X", "E", "A"], tags: ["상징", "은유", "문학적 사고"], image: "./assets/book-the-great-gatsby.webp", desc: "화려한 문장과 상징이 많아, 단순 해석을 넘어 문학적 감각을 키우는 단계입니다. 원어민보다 더 자유롭게 문학을 해석하는 독서를 목표로 삼기 좋습니다." },
  B019: { title: "The Old Man and the Sea", ko: "노인과 바다", level: "L5 혼자 읽을 수 있는 레벨", ar: "5.1", lexile: "940L", types: ["X", "E"], tags: ["문체", "상징", "집중"], image: "./assets/book-the-old-man-and-the-sea.webp", desc: "간결한 문장 안에서 삶의 태도와 상징을 읽어내는 집중형 원서입니다. 쉬운 문장 너머의 의미를 스스로 붙잡는 단계에 어울립니다." },
  B020: { title: "Brave New World", ko: "멋진 신세계", level: "L5 혼자 읽을 수 있는 레벨", ar: "7.5", lexile: "870L", types: ["X", "A"], tags: ["미래사회", "비판", "철학"], image: "./assets/book-brave-new-world.webp", desc: "영어 독서를 사회와 인간에 대한 질문으로 확장하고 싶은 독자에게 적합합니다. 혼자 읽고, 해석하고, 생각을 넓히는 목표 단계입니다." },
};

const HP_SERIES = [
  { n: 1, title: "Harry Potter and the Philosopher’s Stone", ko: "해리포터와 마법사의 돌", ar: "5.5", lexile: "880L", words: "76,944", chapters: "17", note: "시리즈 입문. 익숙한 세계관 덕분에 첫 완독 경험을 만들기 좋습니다.", tip: "전략: 모르는 단어를 전부 찾기보다 장면의 흐름을 먼저 잡으세요.", image: "./assets/book-harry-potter-1.webp" },
  { n: 2, title: "Harry Potter and the Chamber of Secrets", ko: "해리포터와 비밀의 방", ar: "6.7", lexile: "940L", words: "85,141", chapters: "18", note: "분량과 사건 구조가 조금 더 복잡해집니다. 1권의 리듬을 유지하는 것이 핵심입니다.", tip: "전략: 챕터마다 사건 하나만 요약해도 흐름이 살아납니다.", image: "./assets/book-harry-potter-2.webp" },
  { n: 3, title: "Harry Potter and the Prisoner of Azkaban", ko: "해리포터와 아즈카반의 죄수", ar: "6.7", lexile: "880L", words: "107,253", chapters: "22", note: "인물 관계와 반전이 커지며 독해 지구력이 필요해집니다.", tip: "전략: 인물 관계를 간단히 적어두면 후반 몰입도가 높아집니다.", image: "./assets/book-harry-potter-3.webp" },
  { n: 4, title: "Harry Potter and the Goblet of Fire", ko: "해리포터와 불의 잔", ar: "6.8", lexile: "880L", words: "190,637", chapters: "37", note: "분량이 크게 늘어나는 전환점입니다. 난이도보다 지속 루틴이 중요합니다.", tip: "전략: 하루 분량을 짧게 쪼개고, 장면 단위로 완주하세요.", image: "./assets/book-harry-potter-4.webp" },
  { n: 5, title: "Harry Potter and the Order of the Phoenix", ko: "해리포터와 불사조 기사단", ar: "7.2", lexile: "950L", words: "257,045", chapters: "38", note: "시리즈 중 가장 긴 권입니다. 감정선과 정치적 갈등이 복합적으로 등장합니다.", tip: "전략: 완벽한 해석보다 장기 호흡의 완독 계획이 먼저입니다.", image: "./assets/book-harry-potter-5.webp" },
  { n: 6, title: "Harry Potter and the Half-Blood Prince", ko: "해리포터와 혼혈 왕자", ar: "7.2", lexile: "1030L", words: "168,923", chapters: "30", note: "표현의 깊이와 회상 구조가 늘어납니다. 장면 간 연결을 보는 힘이 필요합니다.", tip: "전략: 과거 정보와 현재 사건을 나누어 정리하세요.", image: "./assets/book-harry-potter-6.webp" },
  { n: 7, title: "Harry Potter and the Deathly Hallows", ko: "해리포터와 죽음의 성물", ar: "6.9", lexile: "980L", words: "198,227", chapters: "37", note: "시리즈 완결권입니다. 주제와 상징이 깊어져 완독 이후 성취감이 큽니다.", tip: "전략: 결말을 향한 질문을 하나 정하고 끝까지 따라가세요.", image: "./assets/book-harry-potter-7.webp" },
];

const TYPE_LABELS = {
  S: { label: "S 스토리 몰입형", short: "스토리 몰입형", desc: "이야기의 다음 장면이 궁금해야 오래 읽는 타입" },
  A: { label: "A 분석 정독형", short: "분석 정독형", desc: "문장 구조와 정확한 이해가 중요한 타입" },
  E: { label: "E 감정 공감형", short: "감정 공감형", desc: "좋은 문장과 정서적 몰입이 중요한 타입" },
  X: { label: "X 의미 탐구형", short: "의미 탐구형", desc: "배경, 상징, 질문을 깊게 파고드는 타입" },
};
const LEVEL_LABELS = { L1: "L1 입문 독자", L2: "L2 문장 감각형 독자", L3: "L3 자연 독해형 독자" };
const LEVEL_EXPLANATIONS = {
  L1: "영어를 못한다는 뜻이 아닙니다. 아직 원서의 리듬을 몸에 익히기 전이므로, 짧은 분량과 익숙한 감정선을 가진 책에서 첫 완독 경험을 만드는 단계입니다.",
  L2: "문장을 어느 정도 따라갈 수 있습니다. 다만 단어와 구조에 오래 붙잡히면 흐름이 끊기기 쉬우므로, 장면을 먼저 잡고 필요한 문장만 천천히 보는 균형이 중요합니다.",
  L3: "혼자 읽는 힘이 이미 있습니다. 이제부터는 어려운 책을 무리하게 고르기보다, 분량과 맥락을 견디며 깊이 있는 작품으로 확장하는 단계입니다.",
};
const TYPE_EXPLANATIONS = {
  S: "줄거리와 다음 장면이 살아 있어야 오래 갑니다. 먼저 흐름을 붙잡고, 단어는 나중에 정리하는 방식이 지속에 유리합니다.",
  A: "정확히 이해해야 마음이 놓이는 독자입니다. 모든 문장을 분석하기보다, 막힌 문장 몇 개를 골라 구조를 보는 방식이 효율적입니다.",
  E: "마음에 남는 문장이 생길 때 다시 책을 펼치는 독자입니다. 좋은 문장을 표시하고 소리 내어 읽거나 필사하는 루틴이 잘 맞습니다.",
  X: "작품의 배경과 상징, 작가의 질문이 궁금할수록 깊게 읽는 독자입니다. 읽은 내용을 내 언어로 해석하는 활동이 오래 갑니다.",
};
const SECONDARY_EXPLANATION = "보조 성향은 두 번째 취향입니다. 추천 원서를 바꾸기보다, 읽는 루틴을 더 오래 유지하게 만드는 보완 장치로 활용합니다.";
const ROUTINES = {
  S: ["줄거리를 먼저 잡고 멈추지 않기", "챕터가 끝나면 장면을 3줄로 정리하기", "모르는 단어는 표시만 하고 흐름 유지하기", "오늘 가장 궁금했던 다음 장면을 한 문장으로 말하기"],
  A: ["짧은 분량을 정해 천천히 읽기", "해석이 막힌 문장 2개만 골라 구조 보기", "같은 표현이 반복되는 지점 표시하기", "오늘 배운 표현을 내 문장으로 바꿔보기"],
  E: ["마음에 남는 문장 하나 먼저 고르기", "장면의 감정선을 한국어로 짧게 메모하기", "좋은 문장을 소리 내어 읽기", "필사하거나 저장해 다음 날 다시 보기"],
  X: ["작품 배경과 시대를 짧게 확인하기", "상징처럼 보이는 단어를 표시하기", "작가가 던지는 질문을 하나 적기", "읽은 내용을 내 삶의 언어로 다시 말하기"],
};
const TRUST_NOTES = {
  S: "혼자 읽던 원서를 몇 장 넘기지 못하다가, 익숙한 이야기와 강독 흐름이 생기자 다시 책을 꺼냈다는 후기가 많았습니다.",
  A: "대충 읽고 지나갔던 문장을 다시 보며, 문장 구조가 보이기 시작했다는 후기가 반복적으로 나타났습니다.",
  E: "좋은 문장과 장면이 남기 시작하면, 영어가 과제가 아니라 하루의 일부가 되었다는 반응이 많았습니다.",
  X: "작품의 배경과 상징을 함께 읽을 때, 단순 독해를 넘어 문학을 읽는 감각이 생겼다는 후기가 많았습니다.",
};
const MOTIVATION_REVIEWS = [
  { title: "혼자였다면 멈췄을 책", text: "혼자 읽었다면 몇 장 넘기지 못했을 책을, 강의 흐름을 따라가며 끝까지 읽을 수 있었다는 후기가 반복적으로 나왔습니다." },
  { title: "단어 부담이 줄어든 순간", text: "모르는 단어가 나와도 문맥에서 먼저 유추해보고, 필요한 것만 다시 보는 방식으로 읽기 속도와 이해감이 함께 좋아졌다는 목소리가 있었습니다." },
  { title: "다시 꺼내게 된 원서", text: "예전에 사두고 덮어두었던 해리포터 원서를 다시 꺼내고, 다음 강의가 궁금해지는 경험이 생겼다는 후기도 있었습니다." },
];
const FREE_RESOURCES = {
  classic: { label: "클래식 원서 시작 무료 체험 자료", title: "좋은 문장을 오래 곁에 두고 싶은 분에게", image: "./assets/free-classic-sample.webp", bullets: ["클래식 원서 PDF 체험판", "워크북 샘플", "클래식 영어 뉴스레터", "필사 루틴 안내"], cta: "클래식 시작 자료 확인", href: "https://class.literstella.co.kr/classes" },
  harrypotter: { label: "해리포터 원서 시작 무료 체험 자료", title: "이미 아는 이야기로 원서 흐름을 잡고 싶은 분에게", image: "./assets/free-harrypotter-sample.webp", bullets: ["Harry Potter and the Philosopher’s Stone 무료 강독", "무료 단어장", "해리포터 뉴스레터", "2권 완독 클럽 안내"], cta: "해리포터 시작 자료 확인", href: "https://class.literstella.co.kr/p/new-9" },
};

const state = { screenIndex: 0, goal: null, staminaAnswers: {}, levelAnswers: {}, preferenceAnswers: {}, staminaQuestionIndex: 0, levelQuestionIndex: 0, preferenceQuestionIndex: 0, result: null };
const screens = ["screenIntro", "screenGoal", "screenStamina", "screenLevel", "screenPreference", "screenResult"];

function $(selector, root = document) { return root.querySelector(selector); }
function $all(selector, root = document) { return [...root.querySelectorAll(selector)]; }
function handleImageError(img, label) { const frame = img.closest(".image-frame"); if (!frame) return; const ph = frame.querySelector(".image-placeholder"); if (ph) ph.textContent = label || "이미지 영역"; frame.classList.add("is-placeholder"); }
window.handleImageError = handleImageError;
function escapeHtml(value) { return String(value).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch])); }
function logEvent(name, payload = {}) { const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.eventLog) || "[]"); events.push({ name, payload, at: new Date().toISOString() }); localStorage.setItem(STORAGE_KEYS.eventLog, JSON.stringify(events.slice(-120))); }

function renderGoalChoices() {
  const box = $("#goalChoices"); if (!box) return;
  box.innerHTML = GOALS.map(goal => `<button class="choice-card" type="button" data-goal="${goal.id}"><strong>${goal.emoji} ${goal.title}</strong><span>${goal.desc}</span></button>`).join("");
  $all("[data-goal]", box).forEach(btn => btn.addEventListener("click", () => { state.goal = btn.dataset.goal; $all("[data-goal]", box).forEach(item => item.classList.toggle("selected", item === btn)); $("#screenGoal [data-next]").disabled = false; logEvent("goal_select", { goal: state.goal }); }));
}
function renderQuestion(boxSelector, questions, index, answerMap, dataAttr, onClick) {
  const q = questions[index]; const selected = answerMap[q.id]?.id; const box = $(boxSelector);
  box.innerHTML = `<div class="question-counter">${index + 1} / ${questions.length}</div><h4 class="question-title">${q.title}</h4>${q.sentence ? `<div class="question-sentence">${q.sentence}</div>` : ""}<div class="option-list">${q.options.map(option => `<button class="option-button ${selected === option.id ? "selected" : ""}" type="button" ${dataAttr}="${option.id}">${option.label}</button>`).join("")}</div>`;
  $all(`[${dataAttr}]`, box).forEach(btn => btn.addEventListener("click", () => onClick(q, btn.getAttribute(dataAttr))));
}
function renderStaminaQuestion() {
  renderQuestion("#staminaQuestionBox", STAMINA_QUESTIONS, state.staminaQuestionIndex, state.staminaAnswers, "data-stamina-option", (q, id) => { const option = q.options.find(item => item.id === id); state.staminaAnswers[q.id] = option; renderStaminaQuestion(); logEvent("stamina_answer", { q_id: q.id, option_id: option.id }); });
  $("#staminaPrev").textContent = state.staminaQuestionIndex === 0 ? "이전 단계" : "이전 문항"; $("#staminaNext").textContent = state.staminaQuestionIndex === STAMINA_QUESTIONS.length - 1 ? "문장 감각으로" : "다음 문항"; $("#staminaNext").disabled = !state.staminaAnswers[STAMINA_QUESTIONS[state.staminaQuestionIndex].id];
}
function renderLevelQuestion() {
  renderQuestion("#levelQuestionBox", LEVEL_QUESTIONS, state.levelQuestionIndex, state.levelAnswers, "data-level-option", (q, id) => { const option = q.options.find(item => item.id === id); state.levelAnswers[q.id] = option; renderLevelQuestion(); logEvent("level_answer", { q_id: q.id, option_id: option.id }); });
  $("#levelPrev").textContent = state.levelQuestionIndex === 0 ? "독서 지구력으로" : "이전 문항"; $("#levelNext").textContent = state.levelQuestionIndex === LEVEL_QUESTIONS.length - 1 ? "읽기 취향으로" : "다음 문항"; $("#levelNext").disabled = !state.levelAnswers[LEVEL_QUESTIONS[state.levelQuestionIndex].id];
}
function renderPreferenceQuestion() {
  renderQuestion("#preferenceQuestionBox", PREFERENCE_QUESTIONS, state.preferenceQuestionIndex, state.preferenceAnswers, "data-preference-option", (q, id) => { const option = q.options.find(item => item.id === id); state.preferenceAnswers[q.id] = option; renderPreferenceQuestion(); logEvent("preference_answer", { q_id: q.id, type: option.type }); });
  $("#preferencePrev").textContent = state.preferenceQuestionIndex === 0 ? "문장 감각으로" : "이전 문항"; $("#preferenceNext").textContent = state.preferenceQuestionIndex === PREFERENCE_QUESTIONS.length - 1 ? "결과 보기" : "다음 문항"; $("#preferenceNext").disabled = !state.preferenceAnswers[PREFERENCE_QUESTIONS[state.preferenceQuestionIndex].id];
}
function setScreen(index) {
  state.screenIndex = index; screens.forEach((id, i) => $("#" + id)?.classList.toggle("active", i === index));
  $all("[data-side-step]").forEach((item, i) => item.classList.toggle("active", i === index));
  const pct = Math.round((index / (screens.length - 1)) * 100); $("#progressBar").style.width = `${pct}%`; $("#progressPercent").textContent = `${pct}%`; $("#progressLabel").textContent = ["시작", "목적 확인", "독서 지구력", "문장 감각", "읽기 취향", "결과"][index] || "진행 중";
  $("#diagnosis")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
function goNext() { if (state.screenIndex < screens.length - 1) setScreen(state.screenIndex + 1); }
function goPrev() { if (state.screenIndex > 0) setScreen(state.screenIndex - 1); }

function calculateResult() {
  const levelScore = Object.values(state.levelAnswers).reduce((sum, answer) => sum + (answer.score || 0), 0);
  const staminaScore = Object.values(state.staminaAnswers).reduce((sum, answer) => sum + (answer.score || 0), 0);
  const totalScore = levelScore + staminaScore;
  let level = "L1"; if (totalScore >= 6.2) level = "L3"; else if (totalScore >= 3.5) level = "L2";
  const typeScores = { S: 0, A: 0, E: 0, X: 0 };
  Object.values(state.staminaAnswers).forEach(answer => { typeScores[answer.type] += .5; });
  Object.values(state.preferenceAnswers).forEach(answer => { typeScores[answer.type] += 1; });
  const priority = ["S", "A", "E", "X"];
  const type = priority.sort((a, b) => (typeScores[b] - typeScores[a]) || priority.indexOf(a) - priority.indexOf(b))[0];
  const secondary = Object.entries(typeScores).filter(([k]) => k !== type).sort((a, b) => b[1] - a[1])[0]?.[0] || "E";
  const books = recommendBooks(level, type, secondary);
  const route = type === "S" && level !== "L3" ? "harrypotter" : "classic";
  const result = { level, levelLabel: LEVEL_LABELS[level], type, typeLabel: TYPE_LABELS[type].label, typeShort: TYPE_LABELS[type].short, secondary, secondaryLabel: TYPE_LABELS[secondary].label, goal: state.goal, score: totalScore.toFixed(1), typeScores, books, route, routine: ROUTINES[type], note: TRUST_NOTES[type], createdAt: new Date().toISOString() };
  state.result = result; localStorage.setItem(STORAGE_KEYS.result, JSON.stringify(result)); return result;
}
function recommendationSlotLabel(index) {
  return index === 0 ? "리터스텔라 클래식 원서" : `추천 원서 ${index}`;
}
function recommendBooks(level, type, secondary) {
  const matrix = {
    L1: { S: ["B001", "B002", "B004"], A: ["B001", "B008", "B005"], E: ["B001", "B003", "B002"], X: ["B001", "B003", "B008"] },
    L2: { S: ["B005", "B008", "B012"], A: ["B005", "B008", "B006"], E: ["B005", "B003", "B008"], X: ["B005", "B007", "B010"] },
    L3: { S: ["B009", "B010", "B012"], A: ["B013", "B009", "B011"], E: ["B009", "B005", "B018"], X: ["B017", "B018", "B015"] },
  };
  const ids = matrix[level]?.[type] || matrix[level]?.[secondary] || ["B005", "B008", "B001"];
  return ids.map((id, index) => ({ id, slotLabel: recommendationSlotLabel(index), ...BOOKS[id] }));
}

function renderResult() {
  const result = calculateResult();
  const mount = $("#resultMount");
  mount.innerHTML = `
    <div class="result-hero">
      <span class="screen-tag">Your Reading Report</span>
      <h3>${result.levelLabel}<br />${result.typeLabel}</h3>
      <p>${TYPE_LABELS[result.type].desc}. 지금 필요한 것은 더 어려운 목표가 아니라, 다시 펼칠 수 있는 첫 책과 루틴입니다.</p>
      <div class="result-summary-grid">
        <div class="result-summary-card"><span>나의 원서 읽기 레벨</span><strong>${result.levelLabel}</strong><p>${LEVEL_EXPLANATIONS[result.level]}</p></div>
        <div class="result-summary-card"><span>나의 읽기 유형</span><strong>${result.typeLabel}</strong><p>${TYPE_EXPLANATIONS[result.type]}</p></div>
        <div class="result-summary-card"><span>보조 성향</span><strong>${result.secondaryLabel}</strong><p>${TYPE_EXPLANATIONS[result.secondary]} ${SECONDARY_EXPLANATION}</p></div>
      </div>
    </div>
    <h3 class="question-title">추천 원서 3권</h3>
    <div class="result-book-grid">${result.books.map(bookCardHtml).join("")}</div>
    <div class="routine-card routine-card--visual"><span class="micro-label">나에게 맞는 읽기 루틴</span>${routineVisualHtml(result.routine)}<p>${result.note}</p></div>
    <div class="motivation-card-wrap"><span class="micro-label">먼저 읽어본 사람들의 변화</span><div class="motivation-grid">${motivationCardsHtml().join("")}</div></div>
    <div class="report-toolbar no-print"><button class="btn btn-primary" type="button" data-open-result-report>📄 결과 리포트 PDF로 보기/저장</button><button class="btn btn-primary mobile-download-report" type="button" data-download-result-report>📄 결과 리포트 PDF 다운로드</button><button class="btn btn-share" type="button" data-share-result>🔗 결과 공유하기</button><button class="btn btn-ghost" type="button" data-restart>↻ 다시 진단하기</button></div>
    <p class="share-message" id="shareMessage" role="status" aria-live="polite"></p>
    <div class="resource-cta-grid resource-cta-grid--result">${resourceCardHtml(FREE_RESOURCES.classic)}${resourceCardHtml(FREE_RESOURCES.harrypotter)}</div>
    <div class="email-card"><h3>결과 리포트를 메일로 받아두세요.</h3><p>지금 확인한 추천 원서와 읽기 루틴을 나중에 다시 볼 수 있도록 이메일로 저장합니다.</p><form class="email-form" id="emailForm"><input type="email" name="email" placeholder="이메일 주소" required /><button class="btn btn-secondary" type="submit">결과 메일로 받기</button><label class="consent-row"><input type="checkbox" name="consent" required /> 결과 리포트 및 관련 안내 메일 수신에 동의합니다.</label><p class="form-message" id="formMessage" role="status"></p></form></div>`;
  $("[data-open-result-report]")?.addEventListener("click", () => openResultReport(result));
  $("[data-download-result-report]")?.addEventListener("click", async () => { openResultReport(result); await new Promise(resolve => setTimeout(resolve, 250)); downloadCurrentReport(); });
  $("[data-share-result]")?.addEventListener("click", () => shareResult(result));
  $("[data-restart]")?.addEventListener("click", resetSurvey);
  $("#emailForm")?.addEventListener("submit", handleEmailSubmit);
  logEvent("result_view", { level: result.level, type: result.type, route: result.route });
}
function routineVisualHtml(items = []) {
  return `<div class="routine-visual" aria-label="추천 루틴 단계">${items.map((item, idx) => `<div class="routine-step"><span class="routine-step-number">${String(idx + 1).padStart(2, "0")}</span><strong>${item}</strong></div>`).join("")}</div>`;
}
function motivationCardsHtml(limit = 3) {
  return MOTIVATION_REVIEWS.slice(0, limit).map(review => `<article class="motivation-card"><strong>${review.title}</strong><p>${review.text}</p></article>`);
}
function reportInsightCard(label, value, desc) {
  return `<div class="report-metric"><span>${label}</span><strong>${value}</strong><p>${desc}</p></div>`;
}
function bookCardHtml(book) {
  return `<article class="recommended-book-card"><div class="book-slot-badge">${book.slotLabel || "추천 원서"}</div><div class="image-frame book-cover-lg book-cover-portrait"><img src="${book.image}" alt="${book.title} 표지 이미지" onerror="handleImageError(this, '${book.title} 이미지 영역')" /><div class="image-placeholder">${book.title} 이미지 영역</div></div><div class="book-card-copy"><h4>${book.title}</h4><p class="ko-title">${book.ko}</p><div class="metric-row"><span>${book.level}</span><span>AR ${book.ar}</span><span>Lexile ${book.lexile}</span></div><p>${book.desc}</p></div></article>`;
}
function resourceCardHtml(resource) {
  return `<article class="resource-card"><div class="image-frame resource-thumb"><img src="${resource.image}" alt="${resource.label} 이미지" onerror="handleImageError(this, '${resource.label} 이미지 영역')" /><div class="image-placeholder">${resource.label} 이미지 영역</div></div><div class="resource-content"><span class="micro-label">${resource.label}</span><h3>${resource.title}</h3><ul>${resource.bullets.map(b => `<li>${b}</li>`).join("")}</ul><a class="resource-link" href="${resource.href}" target="_blank" rel="noopener">${resource.cta}</a></div></article>`;
}

async function shareResult(result) {
  const url = window.location.href.split("#")[0];
  const bookTitles = (result.books || []).map(book => book.ko ? `${book.title}(${book.ko})` : book.title).join(", ");
  const shareText = `나의 리터스텔라 원서 읽기 진단 결과\n${result.levelLabel} · ${result.typeLabel}\n추천 원서: ${bookTitles}\n${url}`;
  const message = $("#shareMessage");
  try {
    if (navigator.share) {
      await navigator.share({ title: "나의 원서 읽기 진단 결과", text: shareText, url });
      if (message) message.textContent = "공유 창을 열었습니다.";
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      if (message) message.textContent = "결과 요약과 링크를 클립보드에 복사했습니다.";
    } else {
      if (message) message.textContent = "공유 기능을 지원하지 않는 브라우저입니다. 주소창의 링크를 복사해주세요.";
    }
    logEvent("result_share", { level: result.level, type: result.type, route: result.route });
  } catch (error) {
    if (message) message.textContent = "공유가 취소되었거나 지원되지 않습니다.";
  }
}

function showProtectionToast() {
  let toast = document.querySelector(".protection-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "protection-toast";
    toast.setAttribute("role", "status");
    toast.textContent = "프로그램 저작권 보호를 위해 오른쪽 클릭이 제한되어 있습니다.";
    document.body.appendChild(toast);
  }
  toast.classList.add("is-visible");
  clearTimeout(showProtectionToast.timer);
  showProtectionToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function enableContentProtection() {
  document.addEventListener("contextmenu", event => {
    event.preventDefault();
    showProtectionToast();
  });
  document.addEventListener("dragstart", event => {
    if (event.target && event.target.tagName === "IMG") event.preventDefault();
  });
}

function handleEmailSubmit(event) {
  event.preventDefault(); const form = event.currentTarget; const email = form.email.value.trim(); const msg = $("#formMessage");
  if (!email || !form.consent.checked) { msg.textContent = "이메일과 수신 동의를 확인해주세요."; return; }
  const leads = JSON.parse(localStorage.getItem(STORAGE_KEYS.leads) || "[]"); leads.push({ email, result: state.result, createdAt: new Date().toISOString() }); localStorage.setItem(STORAGE_KEYS.leads, JSON.stringify(leads)); msg.textContent = "저장되었습니다. 결과 리포트를 다시 확인할 수 있도록 준비해두겠습니다."; form.reset(); logEvent("email_submit", { email, level: state.result?.level, type: state.result?.type });
}

function resetSurvey() {
  Object.assign(state, { screenIndex: 0, goal: null, staminaAnswers: {}, levelAnswers: {}, preferenceAnswers: {}, staminaQuestionIndex: 0, levelQuestionIndex: 0, preferenceQuestionIndex: 0, result: null });
  renderGoalChoices(); renderStaminaQuestion(); renderLevelQuestion(); renderPreferenceQuestion(); setScreen(0);
}

function renderResources() { const grid = $("#resourceCtaGrid"); if (grid) grid.innerHTML = resourceCardHtml(FREE_RESOURCES.classic) + resourceCardHtml(FREE_RESOURCES.harrypotter); }
function renderBookMaps() {
  const levelMount = $("#levelBookMap"); const typeMount = $("#typeBookMap"); if (!levelMount || !typeMount) return;
  const books = Object.values(BOOKS).map((b, i) => ({ id: Object.keys(BOOKS)[i], ...b }));
  const levelGroups = [
    { key: "L1", title: "L1 입문 — 처음 끝까지 읽기", desc: "부담보다 완독 경험을 먼저 만드는 단계", filter: b => b.level.startsWith("L1") },
    { key: "L2", title: "L2 문장 이해 — 문장과 감정의 균형", desc: "문장 구조와 이야기 흐름을 함께 잡는 단계", filter: b => b.level.startsWith("L2") },
    { key: "L3", title: "L3 자연 독해 — 읽는 상태 유지", desc: "분량과 맥락을 견디는 힘을 키우는 단계", filter: b => b.level.startsWith("L3") },
    { key: "L4", title: "L4 상위권 — 고급 구조와 표현", desc: "사회적 맥락과 복문 구조를 읽는 단계", filter: b => b.level.startsWith("L4") },
    { key: "L5", title: "L5 혼자 읽을 수 있는 레벨 — 축하합니다!", desc: "원어민보다 더 자유로운 영어 독서를 즐겨보세요. Harry Potter and the Philosopher’s Stone이 AR 5.5, 미국 초등 5~6학년권 텍스트라면, 이 단계는 고전과 현대문학을 스스로 해석하는 목표 지점입니다.", filter: b => b.level.startsWith("L5") },
  ];
  levelMount.innerHTML = levelGroups.map(group => `<section class="book-level-group"><div class="book-level-title"><div><h3>${group.title}</h3><p>${group.desc}</p></div></div><div class="book-grid">${books.filter(group.filter).map(mapCardHtml).join("")}</div></section>`).join("");
  const typeGroups = ["S", "A", "E", "X"];
  typeMount.innerHTML = typeGroups.map(type => `<section class="book-level-group"><div class="book-level-title"><div><h3>${TYPE_LABELS[type].short}</h3><p>${TYPE_LABELS[type].desc}</p></div></div><div class="book-grid">${books.filter(b => b.types.includes(type)).slice(0, 8).map(mapCardHtml).join("")}</div></section>`).join("");
  $all("[data-map-tab]").forEach(btn => btn.addEventListener("click", () => { const tab = btn.dataset.mapTab; $all("[data-map-tab]").forEach(b => b.classList.toggle("active", b === btn)); levelMount.hidden = tab !== "level"; typeMount.hidden = tab !== "type"; }));
}
function mapCardHtml(book) {
  return `<article class="map-card"><div class="image-frame map-cover book-cover-portrait"><img src="${book.image}" alt="${book.title} 표지 이미지" onerror="handleImageError(this, '${book.title} 이미지 영역')" /><div class="image-placeholder">${book.title} 이미지 영역</div></div><div class="map-card-copy"><h4>${book.title}</h4><p class="ko-title">${book.ko}</p><div class="metric-row"><span>${book.level}</span><span>AR ${book.ar}</span><span>Lexile ${book.lexile}</span></div><p>${book.desc}</p></div></article>`;
}
function renderHarryPotterSeries() {
  const mount = $("#harryPotterSeriesList"); if (!mount) return;
  mount.innerHTML = HP_SERIES.map(item => `<article class="series-card"><div class="image-frame series-cover book-cover-portrait"><img src="${item.image}" alt="${item.title} 표지 이미지" onerror="handleImageError(this, '${item.title} 이미지 영역')" /><div class="image-placeholder">${item.title} 이미지 영역</div></div><div><h3>${item.title}</h3><p class="ko-title">${item.ko}</p><p>${item.note}</p><p><strong>${item.tip}</strong></p></div><div class="series-meta"><span>AR ${item.ar}</span><span>Lexile ${item.lexile}</span><span>${item.words} words</span><span>${item.chapters} chapters</span></div></article>`).join("");
}

function openSampleReport() {
  const sample = {
    level: "L2",
    type: "S",
    secondary: "E",
    levelLabel: "L2 문장 감각형 독자",
    typeLabel: "S 스토리 몰입형",
    secondaryLabel: "E 감정 공감형",
    books: [
      { ...BOOKS.B005, id: "B005", slotLabel: "리터스텔라 클래식 원서" },
      { ...BOOKS.B008, id: "B008", slotLabel: "추천 원서 1" },
      { ...BOOKS.B012, id: "B012", slotLabel: "추천 원서 2" }
    ],
    routine: ["흐름 먼저 읽기", "마음에 남는 문장 표시", "소리 내어 읽기", "오늘 장면을 한 문장으로 말하기"],
    note: "다시 시작하고 싶은 독자에게 필요한 것은 더 쉬운 책만이 아닙니다. 너무 유치하지 않으면서도, 마음이 먼저 따라갈 수 있는 첫 책이 필요합니다."
  };
  renderReportPreview(sample, { sample: true });
}
function openResultReport(result) { renderReportPreview(result, { sample: false }); }
function renderReportPreview(result, { sample }) {
  const section = $("#reportPreviewSection"); const mount = $("#reportPreviewMount"); if (!section || !mount) return;
  $("#reportPreviewTitle").textContent = sample ? "샘플 결과 PDF 미리보기" : "나의 결과 리포트 PDF 미리보기";
  mount.innerHTML = reportPageHtml(result, { sample });
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  logEvent(sample ? "sample_report_preview" : "result_report_preview", { sample });
}
function reportPageHtml(result, { sample }) {
  const books = result.books || [];
  const levelKey = result.level || "L2";
  const typeKey = result.type || "S";
  const secondaryKey = result.secondary || "E";
  return `<main class="report-page" id="printableReport"><header class="report-page-header"><div><p class="report-label">${sample ? "Sample Result Report" : "Personal Reading Report"}</p><h1>${sample ? "샘플 결과 리포트" : "나의 원서 읽기 결과 리포트"}</h1><p>${sample ? "당신과 비슷한 독자는 이런 결과를 받게 됩니다." : "지금 읽을 수 있는 문장 감각과 오래 갈 수 있는 읽기 방식을 한 장으로 정리했습니다."}</p></div><div class="report-page-logo">LiterStella<br><span>${new Date().toLocaleDateString("ko-KR")}</span></div></header><section class="report-dashboard">${reportInsightCard("원서 읽기 레벨", result.levelLabel, LEVEL_EXPLANATIONS[levelKey])}${reportInsightCard("읽기 유형", result.typeLabel, TYPE_EXPLANATIONS[typeKey])}${reportInsightCard("보조 성향", result.secondaryLabel, TYPE_EXPLANATIONS[secondaryKey])}</section><section class="report-main-grid"><div class="report-panel"><h2>추천 원서 3권</h2><div class="report-book-row">${books.map(reportBookHtml).join("")}</div></div><aside class="report-panel report-side-panel"><h2>추천 루틴</h2>${routineVisualHtml(result.routine || [])}<p class="report-note">${result.note || "원서는 완벽하게 해석하는 일이 아니라, 다시 펼칠 수 있는 방식으로 오래 만나는 일입니다."}</p><div class="report-review-box"><strong>후기에서 반복된 변화</strong>${motivationCardsHtml(2).map(card => card).join("")}</div></aside></section><section class="report-resource-row">${reportResourceHtml(FREE_RESOURCES.classic)}${reportResourceHtml(FREE_RESOURCES.harrypotter)}</section></main>`;
}
function reportBookHtml(book) {
  return `<article class="report-book"><div class="report-book-ribbon">${book.slotLabel || "추천 원서"}</div><div class="report-book-thumb"><img src="${book.image}" alt="${book.title} 표지" onerror="this.closest('.report-book-thumb').classList.add('is-placeholder')" /></div><div><h3>${book.title}</h3><p class="ko-title">${book.ko} · ${book.level} · AR ${book.ar} · Lexile ${book.lexile}</p><p>${book.desc}</p></div></article>`;
}
function reportResourceHtml(resource) { return `<article class="report-resource-card"><h3>${resource.label}</h3><p>${resource.title}</p><a class="report-resource-button" href="${resource.href}" target="_blank" rel="noopener">${resource.cta}</a></article>`; }
async function downloadCurrentReport() {
  const report = document.querySelector("#reportPreviewMount .report-page") || document.querySelector("#printableReport");
  if (!report) return;
  if (!window.html2canvas || !window.jspdf?.jsPDF) {
    alert("PDF 다운로드 모듈을 불러오는 중입니다. 잠시 후 다시 눌러주세요.");
    return;
  }
  try {
    const canvas = await window.html2canvas(report, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0
    });
    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;
    pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, pageHeight);
    pdf.save("literstella-reading-report.pdf");
    logEvent("report_pdf_download", { mobile: window.matchMedia("(max-width: 720px)").matches });
  } catch (error) {
    alert("PDF 다운로드 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
}

function clearPrintRoot() {
  document.body.classList.remove("print-report-only");
  document.querySelector("#printRoot")?.remove();
}

function printCurrentReport() {
  const preview = $("#reportPreviewSection");
  const report = $("#printableReport");
  if (!preview || preview.classList.contains("hidden") || !report) return;

  clearPrintRoot();

  // 브라우저 인쇄 미리보기에서 빈 A4만 출력되는 문제를 막기 위해
  // 화면 안의 리포트를 그대로 복제해 body 바로 아래의 전용 인쇄 루트에 넣는다.
  // 이렇게 하면 숨김 섹션, overflow, display 규칙의 영향을 받지 않는다.
  const printRoot = document.createElement("div");
  printRoot.id = "printRoot";

  const reportClone = report.cloneNode(true);
  reportClone.id = "printableReportForPrint";
  reportClone.setAttribute("aria-label", "인쇄용 원서 읽기 결과 리포트");
  printRoot.appendChild(reportClone);

  document.body.appendChild(printRoot);
  document.body.classList.add("print-report-only");

  window.requestAnimationFrame(() => {
    setTimeout(() => window.print(), 80);
  });
}

window.addEventListener("afterprint", clearPrintRoot);
function closeReportPreview() {
  $("#reportPreviewSection")?.classList.add("hidden");
  $("#reportPreviewMount").innerHTML = "";
  clearPrintRoot();
}

function init() {
  enableContentProtection();
  renderGoalChoices(); renderStaminaQuestion(); renderLevelQuestion(); renderPreferenceQuestion(); renderResources(); renderBookMaps(); renderHarryPotterSeries(); setScreen(0);
  $all("[data-start-survey]").forEach(btn => btn.addEventListener("click", () => { setScreen(0); $("#diagnosis")?.scrollIntoView({ behavior: "smooth", block: "start" }); logEvent("survey_start_click"); }));
  $all("[data-open-sample-report]").forEach(btn => btn.addEventListener("click", openSampleReport));
  $all("[data-next]").forEach(btn => btn.addEventListener("click", () => { if (state.screenIndex === 4) { renderResult(); setScreen(5); } else goNext(); }));
  $all("[data-prev]").forEach(btn => btn.addEventListener("click", goPrev));
  $("#staminaPrev")?.addEventListener("click", () => { if (state.staminaQuestionIndex === 0) setScreen(1); else { state.staminaQuestionIndex -= 1; renderStaminaQuestion(); } });
  $("#staminaNext")?.addEventListener("click", () => { if (state.staminaQuestionIndex < STAMINA_QUESTIONS.length - 1) { state.staminaQuestionIndex += 1; renderStaminaQuestion(); } else setScreen(3); });
  $("#levelPrev")?.addEventListener("click", () => { if (state.levelQuestionIndex === 0) setScreen(2); else { state.levelQuestionIndex -= 1; renderLevelQuestion(); } });
  $("#levelNext")?.addEventListener("click", () => { if (state.levelQuestionIndex < LEVEL_QUESTIONS.length - 1) { state.levelQuestionIndex += 1; renderLevelQuestion(); } else setScreen(4); });
  $("#preferencePrev")?.addEventListener("click", () => { if (state.preferenceQuestionIndex === 0) setScreen(3); else { state.preferenceQuestionIndex -= 1; renderPreferenceQuestion(); } });
  $("#preferenceNext")?.addEventListener("click", () => { if (state.preferenceQuestionIndex < PREFERENCE_QUESTIONS.length - 1) { state.preferenceQuestionIndex += 1; renderPreferenceQuestion(); } else { renderResult(); setScreen(5); } });
  $("[data-print-report]")?.addEventListener("click", printCurrentReport);
  $("[data-download-report]")?.addEventListener("click", downloadCurrentReport);
  $("[data-close-report]")?.addEventListener("click", closeReportPreview);
}

document.addEventListener("DOMContentLoaded", init);
