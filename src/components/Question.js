import React, {Component} from 'react';
import {connect} from "react-redux";

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
        this.timeout = null;
        this.messageTimeout = null;
    }

    render() {
        const {firstNumber, secondNumber, result} = this.props.nextQuestion;
        return (
            <div className="d-flex align-items-center justify-content-center quiz-main-box flipInX">
                <div className="number-one">{firstNumber}</div>
                <div className="number-seperator mx-4">X</div>
                <div className="number-two">{secondNumber}</div>
                <div className="number-seperator mx-4"> =</div>
                <input type="number" min="1" max="100" className="quiz-guess  ml-4" onKeyUp={this.onKeyUpHandler.bind(this, result)}/>
                {this.getResultMessage()}
            </div>
        );
    }

    onKeyUpHandler(result, event) {
        if (event.keyCode === 13) {
            this.checkResult(parseInt(event.target.value), result)
            event.target.value = '';
        }
    }

    getResultMessage() {
        if (this.state.message) {
            return <div className="alert quiz-guess-result ml-2">
                {this.state.message}
            </div>
        }
        return null;
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
        }, function() {
            this.messageTimeout = setTimeout(() =>  {
                this.setState({
                    message: null
                })
            }, 1000)
        });

        if (!this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.props.dispatch({
                type: 'FINISH_OR_NEXT',
                payload: {
                    winPoint: answerPoint,
                }
            })
        }, 300)
    }

    // sayaçlar sıfırlanıyor
    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
        this.messageTimeout && clearTimeout(this.messageTimeout);
    }
}

export default connect()(Question)

