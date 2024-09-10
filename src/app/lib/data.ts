export type Quiz = {
  question: string;
  keyword: string;
  keyIndex: number;
  answers: Array<Answer>;
};

export type Answer = {
  answer: string;
  correct?: boolean;
};

export const grandTotalCharLength = 18;

export const keyColumnIndex = 9;

export const quizNumToShowSolveAll = 6;

export const secret = "Tan rã thuộc địa";

export const rules: string[] = [];

export const quizzes: Array<Quiz> = [
  {
    question: "Nước nào ở Châu Á tuyên bố độc lập vào ngày 02/09/1945?",
    keyword: "VIETNAM",
    keyIndex: 2,
    answers: [
      { answer: "A. Việt Nam", correct: true },
      { answer: "B. Malaysia" },
      { answer: "C. Indonesia" },
      { answer: "D. Thái Lan" },
    ],
  },
  {
    question:
      "Nước mà Quang Linh Vlogs hiện đang hỗ trợ phát triển nông nghiệp?",
    keyword: "ANGOLA",
    keyIndex: 0,
    answers: [
      { answer: "A. Algeria" },
      { answer: "B. Cộng hòa Nam Phi" },
      { answer: "C. Namibia" },
      { answer: "D. Angola", correct: true },
    ],
  },
  {
    question: "Tên gọi sau này của Tây Nam Phi là gì?",
    keyword: "NAMIBIA",
    keyIndex: 0,
    answers: [
      { answer: "A. Zimbabwe" },
      { answer: "B. Namibia", correct: true },
      { answer: "C. Cộng hòa Tây Phi" },
      { answer: "D. Algeria" },
    ],
  },
  {
    question: "Chế độ phân biệt chủng tộc ở châu Phi tên gì?",
    keyword: "APARTHEID",
    keyIndex: 4,
    answers: [
      { answer: "A. Phát xít" },
      { answer: "B. Đế quốc" },
      { answer: "C. Apartheid", correct: true },
      { answer: "D. Thuộc địa" },
    ],
  },
  {
    question: "Nước đấu tranh giành độc lập vào năm 1952 là?",
    keyword: "AICAP",
    keyIndex: 0,
    answers: [
      { answer: "A. Ấn Độ" },
      { answer: "B. Algeria" },
      { answer: "C. Guinea-Bissau" },
      { answer: "D. Ai Cập", correct: true },
    ],
  },
  {
    question: "Ai là người đã lãnh đạo Cách mạng nhân dân Cuba?",
    keyword: "FIDELCASTRO",
    keyIndex: 8,
    answers: [
      { answer: "A. Fidel Castro", correct: true },
      { answer: "B. George Washington" },
      { answer: "C. Nelson Mandela" },
      { answer: "D. Boris Johnson" },
    ],
  },
  {
    question: "Vị lãnh tụ vĩ đại trong lòng chúng ta là ai?",
    keyword: "HOCHIMINH",
    keyIndex: 0,
    answers: [
      { answer: "A. Lê Thánh Tôn" },
      { answer: "B. Trần Quốc Tuấn" },
      { answer: "C. Lê Văn Tám" },
      { answer: "D. Hồ Chí Minh", correct: true },
    ],
  },
  {
    question: "Nước được Bồ Đào Nha trao trả độc lập vào tháng 06/1975?",
    keyword: "MOZAMBIQUE",
    keyIndex: 8,
    answers: [
      { answer: "A. Zimbabwe" },
      { answer: "B. Mozambique", correct: true },
      { answer: "C. Guinea-Bissau" },
      { answer: "D. Angola" },
    ],
  },
  {
    question:
      "Một nước châu Á, là hàng xóm của chúng ta, tuyên bố độc lập vào 12/10/1945 là nước nào?",
    keyword: "LAO",
    keyIndex: 2,
    answers: [
      { answer: "A. Trung Quốc" },
      { answer: "B. Campuchia" },
      { answer: "C. Lào", correct: true },
      { answer: "D. Thái Lan" },
    ],
  },
  {
    question: "Châu lục khô nóng nhất thế giới là gì?",
    keyword: "CHAUPHI",
    keyIndex: 0,
    answers: [
      { answer: "A. Châu Úc" },
      { answer: "B. Châu Á" },
      { answer: "C. Châu Mỹ" },
      { answer: "D. Châu Phi", correct: true },
    ],
  },
  {
    question:
      "Nước nào đã trao trả độc lập cho các nước Guinea-Bissau, Mozambique, Angola?",
    keyword: "BODAONHA",
    keyIndex: 2,
    answers: [
      { answer: "A. Bồ Đào Nha", correct: true },
      { answer: "B. Tây Ban Nha" },
      { answer: "C. Pháp" },
      { answer: "D. Nhật Bản" },
    ],
  },
  {
    question:
      "Khu vực ở châu Mỹ thường nói các tiếng Tây Ban Nha, Bồ Đào Nha là gì?",
    keyword: "MILATINH",
    keyIndex: 1,
    answers: [
      { answer: "A. Bắc Mĩ" },
      { answer: "B. Trung Mĩ" },
      { answer: "C. Nam Mĩ" },
      { answer: "D. Mĩ La-tinh", correct: true },
    ],
  },
  {
    question: "Châu lục lớn nhất thế giới, giáp với châu Âu và châu Phi là gì?",
    keyword: "CHAUA",
    keyIndex: 4,
    answers: [
      { answer: "A. Châu Mỹ" },
      { answer: "B. Châu Á", correct: true },
      { answer: "C. Châu Nam Cực" },
      { answer: "D. Châu Úc" },
    ],
  },
];
