import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QuizHeader from './QuizHeader';
import Question from './Question';
import {questionGenerator} from '../helpers';
import CountDown from './CountDown';

class Quiz extends Component {
    render() {
        const {
            quizStarted, onClick, questionLimit, nextQuestion, currentQuizQuestionIndex, onTimerEnd,
        } = this.props;
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX">
                <div className="quiz-container">
                    <div className="quiz-heading">
                        <QuizHeader/>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                        <CountDown
                            startTimer={quizStarted}
                            currentQuizQuestionIndex={currentQuizQuestionIndex}
                            timerEnd={onTimerEnd}
                        />
                        {!quizStarted ? (
                            <button onClick={() => onClick(questionLimit)} type="button" className="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
                                <img className="quiz-start-icon" alt="Start Quiz" src="https://image.flaticon.com/icons/svg/1944/1944882.svg"/>
                                <h2 className="quiz-start-text ml-4"> Çarpmaya Başla</h2>
                            </button>
                        ) : null}
                    </div>
                    {quizStarted ? <Question nextQuestion={nextQuestion}/> : null}
                </div>
            </div>
        );
    }
}

Quiz.propTypes = {
    nextQuestion: PropTypes.oneOfType([
        PropTypes.shape({
            firstNumber: PropTypes.number,
            secondNumber: PropTypes.number,
            result: PropTypes.number,
        }),
        PropTypes.oneOf([null]),
    ]).isRequired,
    questionLimit: PropTypes.number.isRequired,
    onTimerEnd: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    quizStarted: PropTypes.bool.isRequired,
    currentQuizQuestionIndex: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
    quizStarted: state.quizStarted,
    questionLimit: state.questionLimit,
    questions: state.questions,
    currentQuizQuestionIndex: state.currentQuizQuestionIndex,
    nextQuestion: state.nextQuestion,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (limit) => {
        const questions = [];
        /* eslint no-plusplus:["error",{"allowForLoopAfterthoughts":true}] */
        for (let i = 0; i < limit; i++) {
            questions.push(questionGenerator());
        }
        dispatch({
            type: 'START_QUIZ',
            questions,
        });
    },
    onTimerEnd: () => {
        dispatch({
            type: 'FINISH_OR_NEXT',
            payload: {
                winPoint: 0,
            },
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
