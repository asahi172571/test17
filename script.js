
let questions = ["13,1,20,5", "さんかく しかく まる", "あ→い→う→え→？", "月火水木金？", "Y M C A ?"];
let answers = ["cate", "★", "お", "土", "!"];
let current = 0;

function startGame() {
  document.getElementById("teamInput").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  showQuestion();
}

function showQuestion() {
  document.getElementById("questionBox").innerText = questions[current];
  document.getElementById("answerInput").value = "";
}

function submitAnswer() {
  const input = document.getElementById("answerInput").value.trim();
  const feedback = document.getElementById("feedback");
  if (input === answers[current]) {
    feedback.textContent = "⭕ 正解！";
    document.getElementById("history").innerHTML += `<div>Q${current + 1}: ${questions[current]} → ${input}</div>`;
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      feedback.textContent = "🎉 全問正解！お疲れさま！";
    }
  } else {
    feedback.textContent = "❌ 不正解";
  }
}
