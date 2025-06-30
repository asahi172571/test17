let current = 0;
let teamName = "";
const questions = ["13,1,20,5", "さんかく しかく まる", "あ→い→う→え→？", "月火水木金？", "Y M C A ?"];
const answers = ["cate", "★", "お", "土", "!"];

function startGame() {
  teamName = document.getElementById("teamName").value.trim();
  if (!teamName) return alert("チーム名を入力して！");
  document.getElementById("teamInput").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("headerTeam").textContent = `Team: ${teamName}`;
  showQuestion();
  startTimer(60);
}

function showQuestion() {
  document.getElementById("questionBox").textContent = questions[current];
  document.getElementById("answerInput").value = "";
}

function submitAnswer() {
  const input = document.getElementById("answerInput").value.trim();
  const feedback = document.getElementById("feedback");

  if (input === answers[current]) {
    feedback.textContent = "⭕ 正解！";
    appendChat(`よくわかったな。次はこれだ：${questions[current + 1] ?? "お見事、全問クリア！"}`, "system");

    const history = document.getElementById("history");
    history.innerHTML += `<div class="history-item">Q${current + 1}: ${questions[current]} → ${input}</div>`;

    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.getElementById("questionBox").textContent = "🎉 全問正解！";
    }
  } else {
    feedback.textContent = "❌ 不正解";
    showIncorrectAnimation();
  }
}

function appendChat(message, sender = "system") {
  const chatArea = document.getElementById("chatArea");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = message;
  chatArea.appendChild(bubble);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function showIncorrectAnimation() {
  const feedback = document.getElementById("feedback");
  feedback.classList.add("shake");
  setTimeout(() => feedback.classList.remove("shake"), 1000);
}

function startTimer(minutes) {
  const display = document.getElementById("timer");
  let seconds = minutes * 60;

  const timer = setInterval(() => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    display.textContent = `${m}:${s}`;
    seconds--;

    if (seconds < 0) clearInterval(timer);
  }, 1000);
}
