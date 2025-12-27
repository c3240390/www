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






function ShowQuiz3() {
    document.getElementById("quizPage2").classList.add("NewPage");
    document.getElementById("quizPage3").classList.remove("NewPage");
}

function showResult3(isCorrect) {
    const result = document.getElementById("result3");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：ニュー・マイ・ノーマル";
    }

       document.getElementById("Answer3").classList.add("NewPage");
   document.getElementById("NextBtn3").classList.remove("NewPage");

}

function A32() {
    showResult3(false);
}

function A33() {
    showResult3(false);
}

function A34() {
    showResult3(false);
}


function A31() {
    showResult3(true);
}





function ShowQuiz4() {
    document.getElementById("quizPage3").classList.add("NewPage");
    document.getElementById("quizPage4").classList.remove("NewPage");
}

function showResult4(isCorrect) {
    const result = document.getElementById("result4");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：2013年";
    }

       document.getElementById("Answer4").classList.add("NewPage");
   document.getElementById("NextBtn4").classList.remove("NewPage");

}

function A41() {
    showResult4(false);
}

function A42() {
    showResult4(false);
}

function A44() {
    showResult4(false);
}


function A43() {
    showResult4(true);
}





function ShowQuiz5() {
    document.getElementById("quizPage4").classList.add("NewPage");
    document.getElementById("quizPage5").classList.remove("NewPage");
}

function showResult4(isCorrect) {
    const result = document.getElementById("result5");

    if (isCorrect) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = "✕ 不正解　正解：7月8日";
    }

       document.getElementById("Answer5").classList.add("NewPage");
   document.getElementById("NextBtn5").classList.remove("NewPage");

}

function A51() {
    showResult5(false);
}

function A52() {
    showResult5(false);
}

function A53() {
    showResult5(false);
}


function A54() {
    showResult5(true);
}