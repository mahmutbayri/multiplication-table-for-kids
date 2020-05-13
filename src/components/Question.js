import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
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
        );
    }
}

export default Question;
