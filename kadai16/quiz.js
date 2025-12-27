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
        result.textContent = "✕ 不正解　正解：Atlantis";
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

    document.getElementById("result");
    document.getElementById("nextPage");
}

function ShowQuiz(){
    document.getElementById("nextPage").classList.add("NewPage2");
    document.getElementById("quizPage2").classList.remove("NewPage2");

}




function showResult(isCorrect) {
    const result = document.getElementById("result");
    const nextBtn = document.getElementById("nextPage");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：ヴェルトラウム～銘銘編～";
    }

    nextBtn.style.display = "block";
}

function A21() {
    showResult(false);
}

function A23() {
    showResult(false);
}

function A24() {
    showResult(false);
}


function 22() {
    showResult(true);
}

function nextQuestion() {

    document.getElementById("result2");
    document.getElementById("nextPage2");
}

function ShowQuiz(){
    document.getElementById("nextPage2").classList.add("NewPage2");
    document.getElementById("quizPage2").classList.remove("NewPage2");

}