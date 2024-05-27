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
    question:
      " Who sang the title song for the latest Bond film, No Time to Die?",
    answers: [
      { text: "Adele", correct: false },
      { text: "Sam Smith", correct: false },
      { text: "Billie Eilish", correct: true },
      { text: "akon", correct: false },
    ],
  },
  {
    question:
      "Which flies a green, white, and orange (in that order) tricolor flag?",
    answers: [
      { text: "Ireland", correct: true },
      { text: "Ivory Coast", correct: false },
      { text: "Italy", correct: false },
      { text: "Delhi", correct: false },
    ],
  },
  {
    question: "What company makes the Xperia model of smartphone?",
    answers: [
      { text: "Samsung", correct: false },
      { text: "Sony", correct: true },
      { text: "Nokia", correct: false },
      { text: "htc", correct: false },
    ],
  },
  {
    question: "Which city is home to the Brandenburg Gate?",
    answers: [
      { text: "Vienna", correct: false },
      { text: "Zurich", correct: false },
      { text: "Canberra", correct: false },
      { text: "Berlin", correct: true },
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
    button.addEventListener("click", selectAnswer);
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
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(divAns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
};
showScore = () => {
  resetAnswer();
  questiondiv.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextbtn.innerHTML = "Restart";
  nextbtn.style.display = "block";
};
handleNextButton = () => {
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};
nextbtn.addEventListener("click", () => {
  if (currentquestionIndex < questions.length) {
    handleNextButton();
  } else {
    quizStart();
  }
});
quizStart();
