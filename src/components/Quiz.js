import React, {Component} from 'react';
import QuizHeader from './QuizHeader';
import {connect} from "react-redux";
import Question from "./Question";
import {questionGenerator} from "../helpers";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.timerFire = null;

        this.state = {
            timerText: '----',
        }

        // this.timerResart();
    }

    render() {
        const {quizStarted, onClick, questionLimit, nextQuestion} = this.props;

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX">
                <div className="quiz-container">
                    <div className="quiz-heading">
                        <QuizHeader/>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                        <h4 className="alert alert-success count-down-box ">
                            <small className="mr-1">Quiz Time</small>
                            <span className="badge badge-dark" id="timer-box">{this.state.timerText}</span>
                        </h4>

                        {!quizStarted ? <button onClick={() => onClick(questionLimit)} type="button" className="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
                            <img className="quiz-start-icon" alt="Start Quiz" src="https://image.flaticon.com/icons/svg/1944/1944882.svg"/>
                            <h2 className="quiz-start-text ml-4"> Çarpmaya Başla</h2>
                        </button> : null}
                    </div>
                    {quizStarted ? <Question nextQuestion={nextQuestion}/> : null}
                </div>
            </div>
        );
    }

    timerResart() {

        this.timerFire && clearInterval(this.timerFire);

        this.timer(0, 10, text => {
            this.setState({
                timerText: text
            });
        }, () => {
            this.props.timerEnd();
            clearInterval(this.timerFire);
        });
    }

    timer(minute, second, callback, timerEndCallBack) {
        this.timerFire = setInterval(function () {
            // if (!document.hasFocus()) {
            //     return;
            // }
            second--;

            callback(minute + ":" + (second < 10 ? "0" : "") + second)

            if (second !== 0) {
                return;
            }

            if (minute > 0 && second === 0) {
                minute--;
                second = 60;
                return;
            }

            // zaman bitti yeni soru
            timerEndCallBack();
            clearInterval(this.timerFire);
        }.bind(this), 1000);
    }
}

//{quizStarted ? nextQuestion ?  <Question nextQuestion={nextQuestion}/> :  <div>Completer</div> : null}

const mapStateToProps = (state) => {
    return {
        quizStarted: state.quizStarted,
        questionLimit: state.questionLimit,
        questions: state.questions,
        currentQuizQuestionIndex: state.currentQuizQuestionIndex,
        nextQuestion: state.nextQuestion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (limit) => {
            const questions = [];
            for (let i = 0; i < limit; i++) {
                questions.push(questionGenerator())
            }
            dispatch({
                type: 'START_QUIZ',
                questions: questions
            })
        },
        timerEnd: () => {
            dispatch({
                type: 'FINISH_OR_NEXT',
                payload: {
                    winPoint: 0
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

