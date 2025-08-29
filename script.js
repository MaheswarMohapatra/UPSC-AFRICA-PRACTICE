// Africa Quiz – UPSC Practice (50 MCQs)
// Pure JavaScript (no framework).

// ***********************
//  Question Bank (50 Qs)
// ***********************
const QUESTIONS = [
  { q: "Which is the largest country in Africa by area?", options: ["Algeria", "Sudan", "Democratic Republic of the Congo", "Libya"], answer: 0 },
  { q: "Which is the most populous country in Africa?", options: ["Ethiopia", "Egypt", "Nigeria", "South Africa"], answer: 2 },
  { q: "The longest river in Africa is:", options: ["Congo", "Niger", "Zambezi", "Nile"], answer: 3 },
  { q: "Mount Kilimanjaro is located in which country?", options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"], answer: 1 },
  { q: "The Sahara Desert primarily lies in which part of Africa?", options: ["Southern Africa", "North Africa", "Central Africa", "East Africa"], answer: 1 },
  { q: "The African Union (AU) headquarters is located in:", options: ["Nairobi", "Cairo", "Addis Ababa", "Abuja"], answer: 2 },
  { q: "Which lake is the largest in Africa by area?", options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Turkana"], answer: 1 },
  { q: "Victoria Falls lies on the border of:", options: ["Kenya–Tanzania", "Zambia–Zimbabwe", "DRC–Angola", "Ethiopia–Sudan"], answer: 1 },
  { q: "The Horn of Africa includes which country?", options: ["Ghana", "Somalia", "Namibia", "Senegal"], answer: 1 },
  { q: "Which strait separates Africa from Europe near Morocco?", options: ["Strait of Malacca", "Bering Strait", "Strait of Gibraltar", "Bab-el-Mandeb"], answer: 2 },
  { q: "Which ocean lies to the east of Africa?", options: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Atlantic Ocean"], answer: 1 },
  { q: "The Great Rift Valley runs mainly through which region of Africa?", options: ["West Africa", "North Africa", "East Africa", "Southern Africa"], answer: 2 },
  { q: "Which country is an island nation off Africa’s east coast?", options: ["Madagascar", "Eritrea", "Gabon", "Benin"], answer: 0 },
  { q: "Which river has the largest discharge in Africa?", options: ["Congo", "Nile", "Orange", "Senegal"], answer: 0 },
  { q: "The Kalahari Desert is largely found in:", options: ["Botswana", "Tunisia", "Ethiopia", "Gabon"], answer: 0 },
  { q: "Which is the highest peak in Africa?", options: ["Mount Kenya", "Mount Stanley", "Mount Meru", "Mount Kilimanjaro"], answer: 3 },
  { q: "Addis Ababa is the capital of:", options: ["Eritrea", "Ethiopia", "Somalia", "Sudan"], answer: 1 },
  { q: "Which lake is also known as Lake Nyasa?", options: ["Lake Victoria", "Lake Malawi", "Lake Tanganyika", "Lake Albert"], answer: 1 },
  { q: "The Blue Nile originates from:", options: ["Lake Tana", "Lake Victoria", "Lake Albert", "Lake Turkana"], answer: 0 },
  { q: "Which of these countries lies in West Africa?", options: ["Kenya", "Ghana", "Eritrea", "Tanzania"], answer: 1 },
  { q: "The capital of Nigeria is:", options: ["Lagos", "Abuja", "Kano", "Ibadan"], answer: 1 },
  { q: "‘Mosi-oa-Tunya’ refers to which natural feature?", options: ["Table Mountain", "Fish River Canyon", "Victoria Falls", "Mount Cameroon"], answer: 2 },
  { q: "Which desert runs along the Atlantic coast of Namibia?", options: ["Namib Desert", "Thar Desert", "Simpson Desert", "Gobi Desert"], answer: 0 },
  { q: "Lake Tanganyika mainly drains into which river system?", options: ["Zambezi", "Congo", "Niger", "Nile"], answer: 1 },
  { q: "Which African country is known as the ‘Rainbow Nation’?", options: ["Kenya", "South Africa", "Mozambique", "Zimbabwe"], answer: 1 },
  { q: "The currency widely used by many West & Central African countries is a form of:", options: ["Rupee", "CFA franc", "Dollar", "Pound"], answer: 1 },
  { q: "Which city is the legislative capital of South Africa?", options: ["Pretoria", "Johannesburg", "Cape Town", "Durban"], answer: 2 },
  { q: "Which is the deepest lake in Africa?", options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Chad"], answer: 0 },
  { q: "The Sahel region is a transition zone between:", options: ["Forest and desert", "Savanna and rainforest", "Sahara and savanna", "Mountains and coast"], answer: 2 },
  { q: "Which country controls the Suez Canal on Africa’s northeast?", options: ["Libya", "Egypt", "Sudan", "Ethiopia"], answer: 1 },
  { q: "Timbuktu, a historic center of learning, is in:", options: ["Mali", "Chad", "Niger", "Burkina Faso"], answer: 0 },
  { q: "Which is the largest hot desert in the world?", options: ["Arabian", "Gobi", "Sahara", "Kalahari"], answer: 2 },
  { q: "The island nation located in the Indian Ocean, famous for vanilla and biodiversity:", options: ["Seychelles", "Cape Verde", "Comoros", "Mauritius"], answer: 0 },
  { q: "Which river forms part of the border between Namibia and South Africa?", options: ["Limpopo", "Zambezi", "Orange", "Okavango"], answer: 2 },
  { q: "Lake Chad is located in which part of Africa?", options: ["Northwest", "Northeast", "Central-north (Sahel)", "Southern tip"], answer: 2 },
  { q: "Which capital lies at high altitude in East Africa?", options: ["Abuja", "Antananarivo", "Addis Ababa", "Gaborone"], answer: 2 },
  { q: "The African Great Lakes region includes:", options: ["Victoria, Tanganyika, Malawi", "Baikal, Victoria, Tanganyika", "Erie, Victoria, Malawi", "Victoria, Superior, Malawi"], answer: 0 },
  { q: "The Strait of Bab-el-Mandeb connects the Red Sea to the:", options: ["Black Sea", "Gulf of Aden", "Mediterranean Sea", "Persian Gulf"], answer: 1 },
  { q: "Which country is landlocked?", options: ["Mozambique", "Eritrea", "Uganda", "Morocco"], answer: 2 },
  { q: "The Cape of Good Hope is located in:", options: ["Egypt", "South Africa", "Morocco", "Algeria"], answer: 1 },
  { q: "Which river flows through Egypt?", options: ["Zambezi", "Niger", "Nile", "Congo"], answer: 2 },
  { q: "Great Zimbabwe is an archaeological site in:", options: ["Zambia", "Zimbabwe", "Malawi", "Botswana"], answer: 1 },
  { q: "Which country was formerly known as Abyssinia?", options: ["Eritrea", "Ethiopia", "Somalia", "Sudan"], answer: 1 },
  { q: "The Atlas Mountains are primarily in:", options: ["Morocco, Algeria, Tunisia", "Kenya, Uganda, Tanzania", "Namibia, Botswana, South Africa", "Ethiopia, Eritrea, Djibouti"], answer: 0 },
  { q: "Which country lies on both sides of the Equator?", options: ["Egypt", "Kenya", "Tunisia", "Morocco"], answer: 1 },
  { q: "The Comoros archipelago is located between:", options: ["Somalia and Yemen", "Madagascar and Mozambique", "Egypt and Israel", "Ghana and Ivory Coast"], answer: 1 },
  { q: "Which is a major oil-producing country in Africa?", options: ["Niger", "Gambia", "Nigeria", "Lesotho"], answer: 2 },
  { q: "The Okavango Delta is found in:", options: ["Angola", "Zambia", "Botswana", "Namibia"], answer: 2 },
  { q: "Which lake is shared by Tanzania, Uganda, and Kenya?", options: ["Lake Albert", "Lake Victoria", "Lake Turkana", "Lake Kivu"], answer: 1 },
  { q: "Which canal provides a sea route between the Mediterranean and the Red Sea?", options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"], answer: 1 },
  { q: "Which is the southernmost country on the African mainland?", options: ["Lesotho", "South Africa", "Eswatini", "Namibia"], answer: 1 },
];

// Shuffle questions for each attempt (optional)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const state = {
  order: [],
  current: 0,
  answers: [], // stores index chosen or null
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function startQuiz() {
  state.order = shuffle(QUESTIONS.map((_, idx) => idx));
  state.current = 0;
  state.answers = new Array(QUESTIONS.length).fill(null);
  $("#start-card").classList.add("hidden");
  $("#result-card").classList.add("hidden");
  $("#quiz-card").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const idx = state.order[state.current];
  const qObj = QUESTIONS[idx];
  $("#question-text").textContent = `${state.current + 1}. ${qObj.q}`;

  const optionsDiv = $("#options");
  optionsDiv.innerHTML = "";

  qObj.options.forEach((opt, i) => {
    const id = `opt-${state.current}-${i}`;
    const wrapper = document.createElement("label");
    wrapper.className = "option";
    wrapper.innerHTML = `
      <input type="radio" name="q${state.current}" value="${i}" id="${id}">
      <div><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</div>
    `;
    optionsDiv.appendChild(wrapper);
  });

  // Restore selection if previously chosen
  const chosen = state.answers[idx];
  if (chosen !== null) {
    const input = document.querySelector(`input[name='q${state.current}'][value='${chosen}']`);
    if (input) { input.checked = true; }
  }

  // Update progress UI
  $("#progress-text").textContent = `Question ${state.current + 1} of ${QUESTIONS.length}`;
  const pct = ((state.current) / (QUESTIONS.length)) * 100;
  $("#progress-bar").style.width = `${pct}%`;

  // Buttons
  $("#prev-btn").disabled = state.current === 0;
  $("#next-btn").classList.toggle("hidden", state.current === QUESTIONS.length - 1);
  $("#submit-btn").classList.toggle("hidden", state.current !== QUESTIONS.length - 1);
}

function captureAnswer() {
  const sel = document.querySelector(`input[name='q${state.current}']:checked`);
  const idx = state.order[state.current];
  state.answers[idx] = sel ? parseInt(sel.value) : null;
}

function nextQ() {
  captureAnswer();
  if (state.current < QUESTIONS.length - 1) {
    state.current += 1;
    renderQuestion();
  }
}

function prevQ() {
  captureAnswer();
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
}

function submitQuiz() {
  captureAnswer();

  let correct = 0, wrong = 0, skipped = 0;
  const tbody = $("#review-table tbody");
  tbody.innerHTML = "";

  QUESTIONS.forEach((q, idx) => {
    const chosen = state.answers[idx];
    const isSkipped = chosen === null;
    const isCorrect = !isSkipped && chosen === q.answer;
    if (isSkipped) skipped += 1;
    else if (isCorrect) correct += 1;
    else wrong += 1;

    const tr = document.createElement("tr");
    tr.className = isSkipped ? "skipped" : (isCorrect ? "correct" : "wrong");

    const ua = isSkipped ? "—" : `${String.fromCharCode(65 + chosen)}. ${q.options[chosen]}`;
    const ca = `${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${q.q}</td>
      <td>${ua}</td>
      <td>${ca}</td>
      <td>${isSkipped ? "Skipped" : (isCorrect ? "Correct" : "Wrong")}</td>
    `;
    tbody.appendChild(tr);
  });

  const score = correct; // +1 for correct, 0 otherwise
  $("#score-line").textContent = `Score: ${score} / ${QUESTIONS.length}  |  Correct: ${correct}, Wrong: ${wrong}, Skipped: ${skipped}`;

  $("#quiz-card").classList.add("hidden");
  $("#result-card").classList.remove("hidden");
}

function retake() {
  $("#start-card").classList.remove("hidden");
  $("#result-card").classList.add("hidden");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  $("#start-btn").addEventListener("click", startQuiz);
  $("#next-btn").addEventListener("click", nextQ);
  $("#prev-btn").addEventListener("click", prevQ);
  $("#submit-btn").addEventListener("click", submitQuiz);
  $("#retake-btn").addEventListener("click", retake);
});


// ***********************
//  TIMER LOGIC (30 mins)
// ***********************
let timerInterval;
const totalTime = 30 * 60; // 30 minutes in seconds
let timeLeft = totalTime;

function startTimer() {
  timeLeft = totalTime;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Submitting your answers.");
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const text = `Time Left: ${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
  if (!document.querySelector(".timer")) {
    const div = document.createElement("div");
    div.className = "timer";
    div.style.marginBottom = "10px";
    div.style.fontWeight = "bold";
    document.querySelector("#quiz-card").prepend(div);
  }
  document.querySelector(".timer").textContent = text;
}

// Modify startQuiz to start timer
const oldStartQuiz = startQuiz;
startQuiz = function() {
  oldStartQuiz();
  startTimer();
}

// Clear timer on submit
const oldSubmitQuiz = submitQuiz;
submitQuiz = function() {
  clearInterval(timerInterval);
  oldSubmitQuiz();
}
