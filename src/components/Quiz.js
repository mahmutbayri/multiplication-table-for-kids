import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QuizHeader from './QuizHeader';
import Question from './Question';
import {questionGenerator} from '../helpers';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.timerFire = null;

        this.state = {
            timerText: '----',
        };

        // this.timerRestart();
    }

    timerRestart() {
        const {timerEnd} = this.props;

        if (this.timerFire) {
            clearInterval(this.timerFire);
        }

        this.timer(0, 10, (text) => {
            this.setState({
                timerText: text,
            });
        }, () => {
            timerEnd();
            clearInterval(this.timerFire);
        });
    }

    timer(_minute, _second, callback, timerEndCallBack) {
        let minute = _minute;
        let second = _second;
        this.timerFire = setInterval(() => {
            second -= 1;
            callback(`${minute}:${second < 10 ? '0' : ''}${second}`);
            if (second !== 0) {
                return;
            }
            if (minute > 0 && second === 0) {
                minute -= 1;
                second = 60;
                return;
            }
            // zaman bitti yeni soru
            timerEndCallBack();
            clearInterval(this.timerFire);
        }, 1000);
    }

    render() {
        const {
            quizStarted, onClick, questionLimit, nextQuestion,
        } = this.props;

        const {timerText} = this.state;

        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX">
                <div className="quiz-container">
                    <div className="quiz-heading">
                        <QuizHeader/>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                        <h4 className="alert alert-success count-down-box ">
                            <small className="mr-1">Quiz Time</small>
                            <span className="badge badge-dark" id="timer-box">{timerText}</span>
                        </h4>

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
    timerEnd: PropTypes.func.isRequired,
    nextQuestion: PropTypes.shape({
        firstNumber: PropTypes.number,
        secondNumber: PropTypes.number,
        result: PropTypes.number,
    }).isRequired,
    questionLimit: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    quizStarted: PropTypes.bool.isRequired,
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
    timerEnd: () => {
        dispatch({
            type: 'FINISH_OR_NEXT',
            payload: {
                winPoint: 0,
            },
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
