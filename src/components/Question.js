import React, {Component} from 'react';
import {connect} from "react-redux";

class Question extends Component {

    constructor() {
        super();
        this.state = {
            message: null
        }
        this.timeout = null;
    }

    render() {
        const {firstNumber, secondNumber, result} = this.props.nexQuestion;
        return (
            <div className="d-flex align-items-center justify-content-center quiz-main-box flipInX">
                <div className="number-one">{firstNumber}</div>
                <div className="number-seperator mx-4">X</div>
                <div className="number-two">{secondNumber}</div>
                <div className="number-seperator mx-4"> =</div>
                <input type="number" className="quiz-guess  ml-4" onKeyUp={(event) => {
                    if (event.keyCode === 13) {
                        this.checkResult(parseInt(event.target.value), result)
                        event.target.value = '';
                    }
                }}/>
                {
                    this.state.message
                        ? <div className="alert quiz-guess-result ml-2">
                            {this.state.message}
                        </div>
                        : null
                }
            </div>
        );
    }

    checkResult(inputValue, correctValue) {
        let answerPoint = 0;
        let message = 'Yanlış';
        if (inputValue === correctValue) {
            message = 'Doğru';
            answerPoint = 10;
        }
        this.setState({
            message: message
        });

        if(!this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.props.dispatch({
                type: 'SET_NEXT_QUESTION',
                payload: {
                    winPoint: answerPoint,
                }
            })
        }, 1000)

    }
}

export default connect()(Question)

