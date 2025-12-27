function ShowQuiz(){
    document.getElementById("QuizButton").classList.add("NewPage");
    document.getElementById("quizPage1").classList.remove("NewPage");

}

function showResult(isCorrect) {
    const result = document.getElementById("result");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：Atlantis";
    }

   document.getElementById("Answer1").classList.add("NewPage");
   document.getElementById("NextBtn1").classList.remove("NewPage");
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



function ShowQuiz2(){
    document.getElementById("quizPage1").classList.add("NewPage");
    document.getElementById("quizPage2").classList.remove("NewPage");

}






function showResult2(isCorrect) {
    const result = document.getElementById("result2");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：ヴェルトラウム～銘銘編～";
    }

       document.getElementById("Answer2").classList.add("NewPage");
   document.getElementById("NextBtn2").classList.remove("NewPage");

}

function A21() {
    showResult2(false);
}

function A23() {
    showResult2(false);
}

function A24() {
    showResult2(false);
}


function A22() {
    showResult2(true);
}

function ShowQuiz3(){
    document.getElementById("quizPage2").classList.add("NewPage");
    document.getElementById("quizPage3").classList.remove("NewPage");

}