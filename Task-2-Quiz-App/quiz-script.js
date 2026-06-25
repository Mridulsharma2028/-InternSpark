const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('btnStart');

startBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  questionScreen.classList.remove('hidden');
  loadQuestion();
});

const questions = [
  {
    question: "In 'Spider-Man: Far From Home', what is the name of the AI system Tony Stark gave to Peter as a final gift?",
    options: ["J.A.R.V.I.S.", "H.E.R.B.I.E.", "F.R.I.D.A.Y.", "E.D.I.T.H."],
    answer: 3,
    explanation: "E.D.I.T.H. (Even Dead, I'm The Hero) was Tony's parting gift — a pair of smart glasses granting Peter access to Stark's entire satellite network and weapons arsenal."
  },
  {
    question: "In 'Daredevil Season 1', what is the name of the law firm Matt co-founds with his best friend Foggy in Hell's Kitchen?",
    options: ["Murdock & Page", "Nelson & Murdock", "Hogarth, Chao & Benowitz LLP", "Goodman, Lieber, Kurtzberg & Holliway"],
    answer: 1,
    explanation: "Nelson & Murdock — Foggy's name comes first as a nod to his foundational role; the firm serves Hell's Kitchen's underdogs from a shoestring budget."
  },
  {
    question: "In 'The Batman', how many years has Bruce Wayne been operating as Batman at the start of the film?",
    options: ["Six Months", "Two Years", "Five Years", "Ten Years"],
    answer: 1,
    explanation: "The film opens at Year Two of Bruce's vigilante career — deliberately showing a rawer, angrier Batman still figuring out how to be a detective and symbol."
  },
  {
    question: "In the first 'Iron Man' movie, what is the 'Mark' number of the first suit Tony builds in the cave?",
    options: ["Mark IV", "Mark I", "Mark III", "Mark II"],
    answer: 1,
    explanation: "The Mark I was cobbled together from scrap in an Afghan cave — a crude but brilliant proof-of-concept that launched every suit that followed."
  },
  {
    question: "Which glowing rock is Superman's only weakness?",
    options: ["Emeralds", "Vibranium", "Kryptonite", "Adamantite"],
    answer: 2,
    explanation: "Kryptonite is a radioactive mineral from Superman's home planet Krypton — its radiation directly undermines the solar energy that powers his abilities."
  },
  {
    question: "What is the Hulk's human name?",
    options: ["Tony Stark", "Bruce Banner", "Steve Rogers", "Bruce Wayne"],
    answer: 1,
    explanation: "Dr. Bruce Banner is a gamma-radiation physicist whose exposure to a gamma bomb triggers his transformation into the Hulk whenever he gets angry."
  }
];

let current = 0;
let score = 0;
let skipped = 0;
let wrong = 0;
let answered = false;

const totalEl       = document.getElementById('totalQ');
const counterEl     = document.getElementById('qCounter');
const questionEl    = document.getElementById('questionText');
const optionsEl     = document.getElementById('optionsContainer');
const explanationEl = document.getElementById('explanation');
const nextBtn       = document.getElementById('btnNext');
const skipBtn       = document.getElementById('btnSkip');
const progressBar   = document.getElementById('progressBar');
const scoreBadge    = document.getElementById('scoreBadge');

const resultScreen   = document.getElementById('resultScreen');
const questionScreen = document.getElementById('questionScreen');
const resultEmoji    = document.getElementById('resultEmoji');
const resultTitle    = document.getElementById('resultTitle');
const resultScoreEl  = document.getElementById('resultScore');
const correctNumEl   = document.getElementById('correctNum');
const wrongNumEl     = document.getElementById('wrongNum');
const skipNumEl      = document.getElementById('skipNum');

totalEl.textContent = questions.length;

function loadQuestion() {
  answered = false;
  const q = questions[current];

  counterEl.textContent  = `Question ${current + 1} of ${questions.length}`;
  questionEl.textContent = q.question;
  explanationEl.classList.remove('show');
  explanationEl.textContent = '';
  nextBtn.classList.remove('show');
  skipBtn.disabled = false;

  progressBar.style.width = `${(current / questions.length) * 100}%`;
  scoreBadge.textContent  = `Score: ${score}`;

  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  skipBtn.disabled = true;

  const q = questions[current];
  const btns = optionsEl.querySelectorAll('.option-btn');

  btns.forEach(b => b.disabled = true);

  if (index === q.answer) {
    btns[index].classList.add('correct');
    score++;
  } else {
    btns[index].classList.add('wrong');
    btns[q.answer].classList.add('correct');
    wrong++;
  }

  explanationEl.textContent = q.explanation;
  explanationEl.classList.add('show');
  nextBtn.classList.add('show');
  scoreBadge.textContent = `Score: ${score}`;
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function skipQuestion() {
  if (answered) return;
  skipped++;
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progressBar.style.width = '100%';
  questionScreen.classList.add('hidden');
  resultScreen.classList.add('show');

  const pct = Math.round((score / questions.length) * 100);

  let emoji, title;
  if (pct === 100)      { emoji = '🏆'; title = 'Perfect Score!'; }
  else if (pct >= 66)   { emoji = '🎉'; title = 'Well Done!'; }
  else if (pct >= 33)   { emoji = '💪'; title = 'Keep Going!'; }
  else                  { emoji = '📚'; title = 'Study Up!'; }

  resultEmoji.textContent    = emoji;
  resultTitle.textContent    = title;
  resultScoreEl.innerHTML    = `You got <strong>${score}</strong> out of ${questions.length} correct`;
  correctNumEl.textContent   = score;
  wrongNumEl.textContent     = wrong;
  skipNumEl.textContent      = skipped;
}

function restartQuiz() {
  current  = 0;
  score    = 0;
  skipped  = 0;
  wrong    = 0;
  answered = false;

  resultScreen.classList.remove('show');
  questionScreen.classList.remove('hidden');
  progressBar.style.width = '0%';
  scoreBadge.textContent  = 'Score: 0';
  loadQuestion();
}

// Wire up buttons
nextBtn.addEventListener('click', nextQuestion);
skipBtn.addEventListener('click', skipQuestion);
document.getElementById('btnRestart').addEventListener('click', restartQuiz);
