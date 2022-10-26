//Quiz codes

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// when startQuiz button is clicked, show info box
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

// when exitQuiz button clicked, hide info box
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(25); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

//elements for continueQuiz buttons
let timeValue = 25;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


