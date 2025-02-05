// קוד הקונפטי
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W;
  this.y = Math.random() * H - H;
  this.r = randomFromTo(11, 33);
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function () {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

let animationFrameId = null;

function Draw() {
  const results = [];

  animationFrameId = requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

// עדכון גודל הקנבס בשינוי גודל החלון
window.addEventListener(
  "resize",
  function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  },
  false
);

// יצירת חלקיקי קונפטי
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// אתחול הקנבס
canvas.width = W;
canvas.height = H;

const questions = [
  {
    question: "מה השם הגנרי של דורמיקום?",
    answers: [
      { text: "Ketalar", correct: false },
      { text: "Sugammadex", correct: false },
      { text: "Midazolam", correct: true },
      { text: "Scolin", correct: false },
    ],
    explanation: "דורמיקום הוא השם המסחרי של Midazolam.",
  },
  {
    question: "מה המינון המקסימלי של מנת דורמיקום?",
    answers: [
      { text: "10mg", correct: false },
      { text: "2.5-5mg", correct: false },
      { text: "5mg", correct: true },
      { text: "2.5mg", correct: false },
    ],
    explanation: "מנת הדורמיקום המקסימלית המקובלת היא 5mg.",
  },
  {
    question: "מה הקונטרה אינדיקציה של דורמיקום?",
    answers: [
      { text: "גלאוקומה זווית חדה חריפה", correct: true },
      { text: "לחץ דם מעל 180", correct: false },
      { text: "טרימוס", correct: false },
    ],
    explanation: "דורמיקום אסור בשימוש במצבים של גלאוקומה זווית חדה חריפה.",
  },
  {
    question: "מה הקונטרה אינדיקציה של דורמיקום?",
    answers: [
      { text: "מתחת לגיל חצי שנה", correct: false },
      { text: "לחץ דם מתחת 100", correct: false },
      { text: "לחץ דם מעל 180", correct: true },
      { text: "טרימוס", correct: false },
    ],
    explanation: "לחץ דם גבוה מ-180 הוא גורם שמונע שימוש בדורמיקום.",
  },
  {
    question: "כמה mg צריך לתת למטופל במשקל 80KG?",
    answers: [
      { text: "80mg", correct: false },
      { text: "0.8mg", correct: false },
      { text: "8mg", correct: true },
      { text: "5mg", correct: false },
    ],
    explanation: "המינון המומלץ למטופל במשקל זה הוא 8mg.",
  },
  // המשך שאלות נוספות
  {
    question:
      "יקבל 60 ml עבור משקל 60 KG של דורמיקום מהול ב- NaCl 2 אמפולות. כמה ml המינון?",
    answers: [
      { text: "3ml", correct: false },
      { text: "12ml", correct: false },
      { text: "6ml", correct: true },
      { text: "5ml", correct: false },
    ],
    explanation: "החישוב עבור המינון הנכון מצביע על 6ml.",
  },
  {
    question:
      "דורמיקום עלי להזריק על מנת לקבל 8 ml למטופל? מהול ב- NaCl 2 אמפולות, משקל 80 KG?",
    answers: [
      { text: "2ml", correct: false },
      { text: "4ml", correct: false },
      { text: "6ml", correct: false },
      { text: "8ml", correct: true },
    ],
    explanation: "הכמות המדויקת עבור משקל זה היא 8ml.",
  },
  {
    question: "כמה זמן לוקח ל- IM דורמיקום להשפיע?",
    answers: [
      { text: "5-2M", correct: false },
      { text: "3-2M", correct: true },
      { text: "10-5M", correct: false },
      { text: "14-6M", correct: false },
    ],
    explanation: "דורמיקום משפיע דרך IM בדרך כלל תוך 2-3 דקות.",
  },
  {
    question: "מה המינון של IV שחרור של דורמיקום?",
    answers: [
      { text: "5mg", correct: false },
      { text: "10mg", correct: false },
      { text: "2.5-5mg", correct: true },
      { text: "2.5mg", correct: false },
    ],
    explanation: "המינון המתאים לשחרור IV של דורמיקום הוא 2.5-5mg.",
  },
  {
    question: "איזה גודל טובוס מינימלי נדרש על מנת להשתמש בבוג'י?",
    answers: [
      { text: "6", correct: true },
      { text: "5.5", correct: false },
      { text: "5", correct: false },
      { text: "6.5", correct: false },
    ],
    explanation: "על מנת להשתמש בבוג'י נדרש טובוס בגודל מינימלי של 6",
  },
];

let totalQuestions = questions.length; // קובע את מספר השאלות בצורה דינאמית
let currentQuestionIndex = 0;
let score = 0;

let isAnswerButtonClicked = false;

let timerInterval;
const TIMER_DURATION = 30;
const WARNING_THRESHOLD = 10;

function startTimer() {
  let timeLeft = TIMER_DURATION;
  const timerElement = document.getElementById("timer");
  timerElement.classList.remove("hidden");
  timerElement.classList.remove("warning");

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= WARNING_THRESHOLD) {
      timerElement.classList.add("warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeUp();
    }
  }, 1000);
}

function handleTimeUp() {
  const buttons = document.querySelectorAll(".answer-btn");
  const correctAnswer = questions[currentQuestionIndex].answers.find(
    (a) => a.correct
  );

  // Mark the correct answer button
  buttons.forEach((button) => {
    if (button.textContent === correctAnswer.text) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  // Update the progress dot to be red
  const progressDots = document.querySelectorAll(".progress-dot");
  progressDots[currentQuestionIndex].classList.remove("current");
  progressDots[currentQuestionIndex].classList.add("wrong");

  // Display the explanation
  document.getElementById(
    "explanation-text"
  ).textContent = `נגמר הזמן!\n\n${questions[currentQuestionIndex].explanation}`;
  document.getElementById("explanation").classList.add("show");
  document.getElementById("timer").classList.add("hidden");
}

function showQuestion(questionData) {
  const questionContainer = document.getElementById("question-container");
  const answerContainer = document.getElementById("answer-buttons");
  const explanation = document.getElementById("explanation");
  const timer = document.getElementById("timer");

  // סימון הנקודה הכחולה לשאלה הנוכחית
  const progressDots = document.querySelectorAll(".progress-dot");
  progressDots.forEach((dot) => dot.classList.remove("current")); // מסיר את הסימון מכל הנקודות
  if (currentQuestionIndex < totalQuestions) {
    progressDots[currentQuestionIndex].classList.add("current");
  }

  timer.textContent = TIMER_DURATION;
  explanation.classList.remove("show");
  timer.classList.remove("hidden");
  questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;
  answerContainer.innerHTML = "";

  questionData.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className = "answer-btn";

    button.onclick = function () {
      clearInterval(timerInterval);
      timer.classList.add("hidden");

      const buttons = document.querySelectorAll(".answer-btn");
      const correctButton = Array.from(buttons).find(
        (btn) =>
          btn.textContent === questionData.answers.find((a) => a.correct).text
      );

      if (answer.correct) {
        this.classList.add("correct");
        score += 10;
        document.getElementById(
          "explanation-text"
        ).textContent = `תשובה נכונה!\n\n${questionData.explanation}`;
        updateProgressBar(true);
      } else {
        this.classList.add("wrong");
        correctButton.classList.add("correct");
        document.getElementById(
          "explanation-text"
        ).textContent = `טעית!\n\n${questionData.explanation}`;
        updateProgressBar(false);
      }

      explanation.classList.add("show");
      buttons.forEach((btn) => (btn.disabled = true));
    };
    answerContainer.appendChild(button);
  });

  startTimer();
}

function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  initializeProgressBar();
  // מוסיפים סימון לנקודה הראשונה רק כשהחידון מתחיל
  const firstDot = document.querySelector(".progress-dot");
  if (firstDot) {
    firstDot.classList.add("current");
  }
  showQuestion(questions[currentQuestionIndex]);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    context.clearRect(0, 0, W, H);
  }
}

function nextQuestion() {
  if (!isAnswerButtonClicked) {
    isAnswerButtonClicked = true;
    clearInterval(timerInterval);
    currentQuestionIndex++;

    // אם הגענו לשאלה האחרונה
    if (currentQuestionIndex >= questions.length) {
      endQuiz();
    } else {
      showQuestion(questions[currentQuestionIndex]);

      // עדכון הכפתור לטקסט "למסך הסיום" אם זו השאלה האחרונה
      const button = document.querySelector("#explanation button"); // הכפתור לשאלה הבאה
      if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => {
          button.textContent = "יאללה, למסך הסיום!";
        }, 2000); // השהייה של 2000 מילישניות (2 שניות)
      }

      // עדכון הנקודה הנוכחית בציר
      const progressDots = document.querySelectorAll(".progress-dot");
      progressDots[currentQuestionIndex].classList.add("current");
    }

    // למנוע מצב שבו המשתמש לוחץ מהר פעמיים על הכפתור ומדלג על שאלה
    setTimeout(() => {
      isAnswerButtonClicked = false;
    }, 1000); // מחכה שנייה לפני שאפשר ללחוץ שוב
  }
}

function endQuiz() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("end-screen").classList.remove("hidden");
  document.getElementById(
    "score-display"
  ).textContent = `ציונך: ${score} מתוך ${questions.length * 10}`;
  Draw(); // התחלת אנימציית הקונפטי
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("end-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  // איפוס כל הנקודות למצב התחלתי
  const progressDots = document.querySelectorAll(".progress-dot");
  progressDots.forEach((dot) => {
    dot.classList.remove("current", "correct", "wrong");
  });
  // סימון הנקודה הראשונה כנוכחית
  progressDots[0].classList.add("current");
  // עצירת אנימציית הקונפטי
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    context.clearRect(0, 0, W, H);
  }
  showQuestion(questions[currentQuestionIndex]);
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document
    .getElementById("dark-mode-toggle")
    .querySelector(".material-icons");
  const explanationBox = document.getElementById("explanation");
  const overlay = document.getElementById("dark-mode-overlay");

  // הוספה או הסרה של המחלקה למצב כהה
  body.classList.toggle("dark-mode");

  // עדכון אייקון לפי המצב
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "light_mode"; // אייקון שמש למצב כהה פעיל
  } else {
    toggleButton.textContent = "dark_mode"; // אייקון ירח למצב רגיל
  }
}

function initializeProgressBar() {
  const progressTrack = document.getElementById("progress-track");
  progressTrack.innerHTML = "";

  for (let i = 0; i < totalQuestions; i++) {
    const dot = document.createElement("div");
    dot.classList.add("progress-dot");
    progressTrack.appendChild(dot);
  }
}

function updateProgressBar(isCorrect) {
  const progressDots = document.querySelectorAll(".progress-dot");

  // סימון השאלה הנוכחית בהתאם לתשובה
  if (isCorrect) {
    progressDots[currentQuestionIndex].classList.add("correct");
  } else {
    progressDots[currentQuestionIndex].classList.add("wrong");
  }

  progressDots[currentQuestionIndex].classList.remove("current");
}

// הפעלת הפונקציה בהתחלה
initializeProgressBar();
