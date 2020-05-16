import React, {Component} from 'react';
import QuizHeader from './QuizHeader';
import {connect} from "react-redux";
import Question from "./Question";
import {questionGenerator} from "../helpers";

class Quiz extends Component {
    render() {

        const {quizStarted, onClick, questionLimit, finishQuiz} = this.props;
        const nextQuestion = this.nextOrFinish();

        if(!nextQuestion) {
            finishQuiz();
            return <div>quez bitti</div>
        }
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX">
                <div className="quiz-container">
                    <div className="quiz-heading">
                        <QuizHeader/>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                        <h4 className="alert alert-success count-down-box ">
                            <small className="mr-1">Quiz Time</small>
                            {' '}
                            <span className="badge badge-dark" id="timer-box">0:10</span>
                        </h4>

                        {!quizStarted ? <button onClick={() => onClick(questionLimit)} type="button" className="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
                            <img className="quiz-start-icon" alt="Start Quiz" src="https://image.flaticon.com/icons/svg/1944/1944882.svg"/>
                            <h2 className="quiz-start-text ml-4"> Çarpmaya Başla</h2>
                        </button> : null}
                    </div>
                    {quizStarted ? <Question nexQuestion={nextQuestion}/> : null}
                </div>
            </div>
        );
    }

    nextOrFinish() {
        const {questions, currentQuizQuestionIndex, questionLimit} = this.props;
        if (currentQuizQuestionIndex < questionLimit) {
            return questions[currentQuizQuestionIndex]
        }
        return false;
    }
}

const mapStateToProps = (state) => {
    return {
        quizStarted: state.quizStarted,
        questionLimit: state.questionLimit,
        questions: state.questions,
        currentQuizQuestionIndex: state.currentQuizQuestionIndex
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
        finishQuiz: () => {
            dispatch({
                type: 'FINISH_QUIZ'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

