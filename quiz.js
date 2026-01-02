let quiz = {};

fetch("https://RAW_GITHUB_KAMU/quiz.json")
  .then(r => r.json())
  .then(d => {
    quiz = d;
    document.getElementById("question").innerText = d.question;
  });

function submitAnswer() {
  const user = document.getElementById("answer").value.trim().toLowerCase();
  const correct = quiz.answer.toLowerCase();

  if (user === correct) {
    document.getElementById("msg").innerHTML =
      "✅ BENAR!<br><a href='" + quiz.reward + "'>Klaim hadiah</a>";
  } else {
    document.getElementById("msg").innerText = "❌ Jawaban salah";
  }
}


