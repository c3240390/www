function ShowQuiz(){
    document.getElementById("QuizButton").classList.add("NewPage");
    document.getElementById("quizPage").classList.remove("NewPage");

}

function showResult(isCorrect) {
    const result = document.getElementById("result");
    const nextBtn = document.getElementById("nextPage");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：４番 Atlantis";
    }

    nextBtn.style.display = "block";
}


function A1() {
    showResult(false);
}

function A2() {
    showResult(false);
}

function A3() {
    showResult(false);
}


function A4() {
    showResult(true);
}

function nextQuestion() {

    document.getElementById("result").textContent = "";
    document.getElementById("nextPage")
}