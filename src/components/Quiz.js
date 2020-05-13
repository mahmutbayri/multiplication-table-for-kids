import React, {Component} from 'react';
import QuizHeader from './QuizHeader';
import {connect} from "react-redux";
import Question from "./Question";

class Quiz extends Component {
    render() {

        const {quizStarted, onClick} = this.props;

        console.log(this.props);

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

                        {!quizStarted ? <button onClick={onClick} type="button" className="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
                            <img className="quiz-start-icon" alt="Start Quiz" src="https://image.flaticon.com/icons/svg/1944/1944882.svg"/>
                            <h2 className="quiz-start-text ml-4"> Çarpmaya Başla</h2>
                        </button> : null }
                    </div>
                    {quizStarted ? <Question /> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      quizStarted: state.quizStarted,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({type: 'START_QUIZ'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)

