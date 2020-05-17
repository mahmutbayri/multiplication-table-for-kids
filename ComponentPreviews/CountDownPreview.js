import ReactDOM from "react-dom";
import CountDown from "../src/components/CountDown";
import React from "react";

let root = document.getElementById("app");
let startTimer = false;
let currentQuestionIndex = 0;
let totalQuestions = 4;

let renderTimer = () => {
    ReactDOM.render(
        <div>
            <CountDown
                startTimer={startTimer}
                currentQuizQuestionIndex={currentQuestionIndex}
                timerEnd={() => {
                    startTimer = true;
                    renderTimer();
                }}
            />
            Current Question index: <span>{currentQuestionIndex}</span>
            <br/>
            <button className="btn btn-primary" onClick={() => {
                currentQuestionIndex += 1;
                renderTimer();
            }}>Next question
            </button>
        </div>,
        root
    );
}

renderTimer();

