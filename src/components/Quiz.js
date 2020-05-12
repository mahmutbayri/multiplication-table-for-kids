import React, {Component} from 'react';
import QuizHeader from "./QuizHeader";

class Quiz extends Component {
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm position-relative students-test-panel flipInX">
                <div className="quiz-container">
                    <div className="quiz-heading">
                        <QuizHeader/>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                        <h4 className="alert alert-success count-down-box ">
                            <small className="mr-1">Quiz Time</small> <span className="badge badge-dark" id="timer-box">0:10</span>
                        </h4>
                        <button type="button" className="d-flex align-items-center justify-content-center btn btn-success btn-lg btn-block py-5 start-to-quiz">
                            <img className="quiz-start-icon" src="https://image.flaticon.com/icons/svg/1944/1944882.svg"/>
                            <h2 className="quiz-start-text ml-4"> Çarpmaya Başla</h2>
                        </button>
                    </div>

                    <div className="d-flex align-items-center justify-content-center quiz-main-box flipInX">
                        <div className="number-one">0</div>
                        <div className="number-seperator mx-4">X</div>
                        <div className="number-two">3</div>
                        <div className="number-seperator mx-4"> =</div>
                        <input className="quiz-guess  ml-4" type="text"/>
                        <div className="alert  quiz-guess-result ml-2">
                            98
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;
