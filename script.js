const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
  {
    question: "What is the capital of india?",
    answers: [
      { text: "Paris", correct: false },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: true },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Canberra", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
];

const questiondiv = document.querySelector(".question");
const divAns = document.querySelector(".answer");
const nextbtn = document.querySelector(".nextbtn");

let currentquestionIndex = 0;
let score = 0;

quizStart = () => {
  currentquestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
};

showQuestion = () => {
  resetAnswer();
  let currentQuestion = questions[currentquestionIndex];
  let questionNumber = currentquestionIndex + 1;
  questiondiv.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("ans-btn");
      divAns.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click" selectAnswer)
  });
};
resetAnswer = () => {
  nextbtn.style.display = "none";
  while (divAns.firstChild) {
    divAns.removeChild(divAns.firstChild);
  }
};
selectAnswer = (e) => { 
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
}
quizStart();
