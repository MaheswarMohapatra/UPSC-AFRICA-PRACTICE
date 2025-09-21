// UPSC/OPSC Quiz – 100 PYQs
// Pure JavaScript (no framework).

// ***********************
//  Question Bank (100 Qs)
// ***********************
 const QUESTIONS = [
  // ==== EXISTING 55 QUESTIONS ====
  { q: "The Constitution of India came into effect on:", options: ["15th August 1947", "26th January 1950", "26th November 1949", "2nd October 1950"], answer: 1 },
  { q: "Who is called the ‘Father of the Indian Constitution’?", options: ["Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel", "Rajendra Prasad"], answer: 1 },
  { q: "The Constitution of India is inspired by which of the following countries?", options: ["USA, UK, Ireland, Canada", "France, UK, Japan, Germany", "China, USA, UK, Australia", "UK, USA, Russia, Canada"], answer: 0 },
  { q: "The Directive Principles of State Policy are enshrined in which Part of the Constitution?", options: ["Part III", "Part IV", "Part V", "Part VI"], answer: 1 },
  { q: "Which of the following is the basic structure of the Indian Constitution?", options: ["Fundamental Rights, Parliament, Judiciary", "Supremacy of Constitution, Secularism, Democracy", "Union and State List", "Fundamental Duties only"], answer: 1 },
  { q: "The preamble of the Constitution mentions India as:", options: ["Sovereign, Socialist, Secular, Democratic Republic", "Sovereign, Socialist, Democratic Republic", "Sovereign, Democratic Republic", "Secular, Democratic Republic"], answer: 0 },
  { q: "The Constituent Assembly of India was formed in:", options: ["1945", "1946", "1947", "1948"], answer: 1 },
  { q: "The Constitution of India borrowed the concept of Fundamental Rights from:", options: ["UK", "USA", "Ireland", "Canada"], answer: 2 },
  { q: "The concept of Directive Principles of State Policy is borrowed from:", options: ["Ireland", "UK", "USA", "France"], answer: 0 },
  { q: "Which Article of the Constitution declares India as a sovereign, socialist, secular, and democratic republic?", options: ["Article 1", "Preamble", "Article 14", "Article 19"], answer: 1 },
  { q: "Which of the following is not a Fundamental Right?", options: ["Right to Equality", "Right to Freedom", "Right to Property", "Right against Exploitation"], answer: 2 },
  { q: "The Right to Education is provided under which Article?", options: ["Article 19", "Article 21A", "Article 25", "Article 32"], answer: 1 },
  { q: "Which Fundamental Right was abolished as a Fundamental Right by the 44th Amendment?", options: ["Right to Freedom", "Right to Property", "Right to Education", "Right to Constitutional Remedies"], answer: 1 },
  { q: "Which of the following rights are included under the Right against Exploitation?", options: ["Prohibition of child labor", "Prohibition of forced labor", "Both (a) and (b)", "Right to Work"], answer: 2 },
  { q: "Which Article guarantees the Right to Equality?", options: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"], answer: 0 },
  { q: "Freedom of religion in India is guaranteed under:", options: ["Articles 25-28", "Articles 19-22", "Articles 14-18", "Articles 32-35"], answer: 0 },
  { q: "Right to Constitutional Remedies is provided under which Article?", options: ["Article 32", "Article 21", "Article 19", "Article 14"], answer: 0 },
  { q: "The Fundamental Rights are applicable to:", options: ["Citizens only", "Non-citizens only", "Citizens and non-citizens equally", "None of the above"], answer: 2 },
  { q: "Which right is known as the ‘heart and soul’ of the Constitution?", options: ["Right to Freedom", "Right to Constitutional Remedies", "Right to Equality", "Right against Exploitation"], answer: 1 },
  { q: "Which of the following rights can be suspended during emergency?", options: ["Right to Equality", "Right to Constitutional Remedies", "Right to Freedom", "Right against Exploitation"], answer: 2 },
  { q: "Who conducts elections to the offices of the President and Vice-President of India?", options: ["Election Commission of India", "Prime Minister", "Parliament", "Supreme Court"], answer: 0 },
  { q: "The system of proportional representation by means of the single transferable vote is used in:", options: ["Lok Sabha elections", "Rajya Sabha elections", "State Legislative Assembly elections", "Panchayat elections"], answer: 1 },
  { q: "The tenure of the Rajya Sabha is:", options: ["4 years", "5 years", "6 years", "7 years"], answer: 2 },
  { q: "Universal adult franchise in India was first introduced in:", options: ["1935 Government of India Act", "1947 Independence Act", "Constitution of India, 1950", "Representation of People Act, 1951"], answer: 2 },
  { q: "The Representation of the People Act in India governs:", options: ["Election of MPs and MLAs", "Conduct of elections", "Disqualification of candidates", "All of the above"], answer: 3 },
  { q: "Who is eligible to vote in India?", options: ["Every citizen above 18 years", "Every citizen above 21 years", "Every resident above 18 years", "Every citizen above 16 years"], answer: 0 },
  { q: "Who can contest for the Lok Sabha elections?", options: ["Any citizen above 25 years", "Any citizen above 30 years", "Any citizen above 21 years", "Any citizen above 35 years"], answer: 0 },
  { q: "Who supervises the conduct of elections in India?", options: ["Supreme Court", "President", "Election Commission", "Prime Minister"], answer: 2 },
  { q: "The Rajya Sabha represents:", options: ["The Union", "The People", "States", "All of the above"], answer: 2 },
  { q: "The Lok Sabha represents:", options: ["States", "Union", "The People", "President"], answer: 2 },
  { q: "The President of India is elected by:", options: ["Members of Lok Sabha only", "Members of Parliament and Legislative Assemblies", "Electoral College", "Both (b) and (c)"], answer: 3 },
  { q: "Who can remove the Vice-President of India?", options: ["Prime Minister", "Rajya Sabha", "Lok Sabha", "President"], answer: 1 },
  { q: "The President can dissolve the Lok Sabha:", options: ["On advice of the Prime Minister", "At his own discretion", "With approval of Supreme Court", "Only during emergency"], answer: 0 },
  { q: "Which Article empowers the President to declare National Emergency?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], answer: 0 },
  { q: "Who is the Constitutional head of the Union Executive?", options: ["Prime Minister", "President", "Chief Justice", "Speaker"], answer: 1 },
  { q: "Who appoints the Prime Minister of India?", options: ["President", "Lok Sabha", "Rajya Sabha", "Election Commission"], answer: 0 },
  { q: "The advice of the Council of Ministers to the President is:", options: ["Binding", "Optional", "Advisory only", "Non-binding"], answer: 0 },
  { q: "The President can grant pardon under which Article?", options: ["Article 72", "Article 74", "Article 75", "Article 76"], answer: 0 },
  { q: "The Vice-President of India is the ex-officio:", options: ["Prime Minister", "Chairman of Rajya Sabha", "Speaker of Lok Sabha", "President of India"], answer: 1 },
  { q: "Who acts as President in case of vacancy or absence?", options: ["Vice-President", "Chief Justice", "Prime Minister", "Speaker of Lok Sabha"], answer: 0 },
  { q: "The Parliament of India consists of:", options: ["Lok Sabha only", "Rajya Sabha only", "Lok Sabha and Rajya Sabha", "President and Lok Sabha"], answer: 2 },
  { q: "The maximum strength of the Lok Sabha can be:", options: ["500", "525", "550", "552"], answer: 3 },
  { q: "The Rajya Sabha is a permanent body because:", options: ["It never dissolves", "Its members retire after 6 years", "Elections are held every 6 years", "Both (a) and (b)"], answer: 3 },
  { q: "Who presides over the Rajya Sabha sessions in the absence of the Vice-President?", options: ["Prime Minister", "Deputy Chairman", "Speaker", "Minister of Parliamentary Affairs"], answer: 1 },
  { q: "Money Bill can only be introduced in:", options: ["Rajya Sabha", "Lok Sabha", "Either House", "President’s discretion"], answer: 1 },
  { q: "The quorum for each House of Parliament is:", options: ["1/4th of total members", "1/10th of total members", "1/3rd of total members", "1/2 of total members"], answer: 0 },
  { q: "The power to summon and prorogue the Parliament rests with:", options: ["Prime Minister", "President", "Speaker", "Lok Sabha"], answer: 1 },
  { q: "The joint sitting of Parliament is presided over by:", options: ["President", "Speaker of Lok Sabha", "Chairman of Rajya Sabha", "Prime Minister"], answer: 1 },
  { q: "Who decides whether a bill is a Money Bill?", options: ["Lok Sabha", "Rajya Sabha", "President", "Speaker of Lok Sabha"], answer: 3 },
  { q: "Which of the following statements about Rajya Sabha is correct?", options: ["Members are directly elected by people", "Rajya Sabha can be dissolved", "Rajya Sabha represents states", "Rajya Sabha initiates Money Bills"], answer: 2 },
  { q: "The Indian Constitution provides for a:", options: ["Unitary system", "Federal system", "Quasi-federal system", "Confederal system"], answer: 2 },
  { q: "Which amendment made India a “Quasi-Federal” system?", options: ["42nd Amendment", "44th Amendment", "73rd Amendment", "91st Amendment"], answer: 0 },
  { q: "Which Article allows Parliament to amend any part of the Constitution?", options: ["Article 356", "Article 368", "Article 370", "Article 352"], answer: 1 },
  { q: "Constitution can be amended by:", options: ["Simple majority", "Special majority", "Unanimous majority", "None of the above"], answer: 1 },
  { q: "Which part of the Constitution deals with Fundamental Duties?", options: ["Part IVA", "Part III", "Part IV", "Part V"], answer: 0 },

  // ==== ADDITIONAL 45 QUESTIONS ====
  { q: "Which of the following is a Fundamental Duty?", options: ["To vote", "To safeguard public property", "To pay taxes", "To serve in armed forces"], answer: 1 },
  { q: "The concept of separation of powers is borrowed from:", options: ["UK", "USA", "France", "Germany"], answer: 1 },
  { q: "The President can be removed by:", options: ["Impeachment", "No provision", "By Parliament resolution", "By PM advice"], answer: 0 },
  { q: "Which article deals with emergency provisions?", options: ["Article 352-360", "Article 370", "Article 368", "Article 356"], answer: 0 },
  { q: "The Comptroller and Auditor General of India is appointed by:", options: ["President", "Prime Minister", "Parliament", "Finance Ministry"], answer: 0 },
  { q: "Which Article deals with powers of the Prime Minister?", options: ["Article 74", "Article 75", "Article 76", "Article 77"], answer: 1 },
  { q: "The number of members in Rajya Sabha is:", options: ["250", "245", "240", "230"], answer: 1 },
  { q: "The maximum strength of the Lok Sabha is:", options: ["545", "550", "552", "500"], answer: 2 },
  { q: "The minimum age for Lok Sabha membership is:", options: ["21", "25", "30", "35"], answer: 1 },
  { q: "The minimum age for Rajya Sabha membership is:", options: ["25", "30", "35", "40"], answer: 1 },
  { q: "The term of office of the President is:", options: ["4 years", "5 years", "6 years", "7 years"], answer: 2 },
  { q: "The Union List is mentioned in:", options: ["7th Schedule", "6th Schedule", "8th Schedule", "9th Schedule"], answer: 0 },
  { q: "The Concurrent List is mentioned in:", options: ["7th Schedule", "6th Schedule", "8th Schedule", "9th Schedule"], answer: 0 },
  { q: "The State List is mentioned in:", options: ["7th Schedule", "6th Schedule", "8th Schedule", "9th Schedule"], answer: 0 },
  { q: "Who is the guardian of the Constitution?", options: ["President", "Supreme Court", "Parliament", "Prime Minister"], answer: 1 },
  { q: "Who is the head of judiciary in India?", options: ["President", "Chief Justice", "Attorney General", "Prime Minister"], answer: 1 },
  { q: "The total number of Fundamental Duties is:", options: ["10", "11", "12", "13"], answer: 3 },
  { q: "Which Article deals with Fundamental Rights during emergency?", options: ["Article 352", "Article 359", "Article 370", "Article 368"], answer: 1 },
  { q: "The 73rd Amendment relates to:", options: ["Panchayati Raj", "Urban Local Bodies", "Fundamental Duties", "Directive Principles"], answer: 0 },
  { q: "The 74th Amendment relates to:", options: ["Panchayati Raj", "Urban Local Bodies", "Fundamental Duties", "Directive Principles"], answer: 1 },
  { q: "Which Article provides protection of President from criminal proceedings?", options: ["Article 361", "Article 360", "Article 352", "Article 368"], answer: 0 },
  { q: "The idea of judicial review is borrowed from:", options: ["USA", "UK", "France", "Ireland"], answer: 0 },
  { q: "The Parliament can make laws on State subjects during:", options: ["President’s Rule", "Emergency", "Both", "None"], answer: 2 },
  { q: "The Governor of a State is appointed by:", options: ["President", "Chief Minister", "Prime Minister", "Parliament"], answer: 0 },
  { q: "The Parliament can amend the Constitution with:", options: ["Simple majority", "Special majority", "Unanimous majority", "None"], answer: 1 },
  { q: "Which Article deals with directive principles?", options: ["Article 36-51", "Article 14-18", "Article 19-22", "Article 32-35"], answer: 0 },
  { q: "India is declared a secular country in:", options: ["Preamble", "Article 14", "Article 19", "Directive Principles"], answer: 0 },
  { q: "Which Article provides protection against arrest and detention?", options: ["Article 21", "Article 22", "Article 20", "Article 19"], answer: 1 },
  { q: "Who appoints the Chief Election Commissioner?", options: ["President", "Prime Minister", "Parliament", "Supreme Court"], answer: 0 },
  { q: "Directive Principles aim to:", options: ["Promote social justice", "Promote economic justice", "Both", "None"], answer: 2 },
  { q: "The Indian Constitution is:", options: ["Rigid", "Flexible", "Rigid and Flexible", "None"], answer: 2 },
  { q: "Which Article deals with Right to Freedom of Religion?", options: ["Articles 25-28", "Articles 19-22", "Articles 14-18", "Article 32"], answer: 0 },
  { q: "Which Article deals with equality before law?", options: ["Article 14", "Article 19", "Article 21", "Article 15"], answer: 0 },
  { q: "Which Article deals with protection of minorities?", options: ["Article 29", "Article 30", "Article 32", "Article 14"], answer: 0 },
  { q: "The power of judicial review in India is vested in:", options: ["Supreme Court", "High Court", "President", "Parliament"], answer: 0 },
  { q: "The Parliament can override judicial decisions during:", options: ["Emergency", "None", "State Emergency", "Financial Emergency"], answer: 1 },
  { q: "Who is the final interpreter of the Constitution?", options: ["Supreme Court", "President", "Prime Minister", "Parliament"], answer: 0 },
  { q: "The Preamble declares India to be:", options: ["Sovereign, Socialist, Secular, Democratic Republic", "Sovereign, Democratic Republic", "Socialist, Secular Republic", "Democratic Republic"], answer: 0 },
  { q: "Which Article deals with citizenship?", options: ["Article 5-11", "Article 12-15", "Article 16-20", "Article 21-25"], answer: 0 },
  { q: "Which Article deals with Fundamental Duties?", options: ["Article 51A", "Article 19", "Article 21", "Article 14"], answer: 0 },
  { q: "The President addresses the Parliament in:", options: ["Budget Session", "Monsoon Session", "Both", "None"], answer: 2 },
  { q: "The Constitution was adopted on:", options: ["26th November 1949", "26th January 1950", "15th August 1947", "2nd October 1950"], answer: 0 },
  { q: "The idea of secularism in India is derived from:", options: ["Preamble", "Directive Principles", "Judiciary", "Fundamental Rights"], answer: 0 },
  { q: "Which Article of the Constitution deals with the protection of minorities?", options: ["Article 29-30", "Article 25-28", "Article 14-18", "Article 21A"], answer: 0 },
  { q: "Who is responsible for the amendment of the Constitution?", options: ["President", "Parliament", "Supreme Court", "Prime Minister"], answer: 1 }


];


// ***********************
//  SHUFFLE LOGIC
// ***********************
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
  answers: [],
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
  startTimer();
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

  const chosen = state.answers[idx];
  if (chosen !== null) {
    const input = document.querySelector(`input[name='q${state.current}'][value='${chosen}']`);
    if (input) input.checked = true;
  }

  $("#progress-text").textContent = `Question ${state.current + 1} of ${QUESTIONS.length}`;
  const pct = ((state.current) / (QUESTIONS.length)) * 100;
  $("#progress-bar").style.width = `${pct}%`;

  $("#prev-btn").disabled = state.current === 0;
  $("#next-btn").classList.toggle("hidden", state.current === QUESTIONS.length - 1);
  $("#submit-btn").classList.toggle("hidden", state.current !== QUESTIONS.length - 1);
}

function captureAnswer() {
  const sel = document.querySelector(`input[name='q${state.current}']:checked`);
  const idx = state.order[state.current];
  state.answers[idx] = sel ? parseInt(sel.value) : null;
}

function nextQ() { captureAnswer(); if (state.current < QUESTIONS.length - 1) { state.current += 1; renderQuestion(); } }
function prevQ() { captureAnswer(); if (state.current > 0) { state.current -= 1; renderQuestion(); } }

function submitQuiz() {
  captureAnswer();
  clearInterval(timerInterval);

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

  $("#score-line").textContent = `Score: ${correct} / ${QUESTIONS.length}  |  Correct: ${correct}, Wrong: ${wrong}, Skipped: ${skipped}`;

  $("#quiz-card").classList.add("hidden");
  $("#result-card").classList.remove("hidden");
}

function retake() {
  $("#start-card").classList.remove("hidden");
  $("#result-card").classList.add("hidden");
}

// ***********************
//  TIMER LOGIC (45 mins)
// ***********************
let timerInterval;
const totalTime = 45 * 60;
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

// ***********************
//  EVENT LISTENERS
// ***********************
document.addEventListener("DOMContentLoaded", () => {
  $("#start-btn").addEventListener("click", startQuiz);
  $("#next-btn").addEventListener("click", nextQ);
  $("#prev-btn").addEventListener("click", prevQ);
  $("#submit-btn").addEventListener("click", submitQuiz);
  $("#retake-btn").addEventListener("click", retake);
});
