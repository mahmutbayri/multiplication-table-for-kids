import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null,
        };
        this.timeout = null;
        this.messageTimeout = null;
    }

    // sayaçlar sıfırlanıyor
    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        if (this.messageTimeout) {
            clearTimeout(this.messageTimeout);
        }
    }

    onKeyUpHandler(result, event) {
        if (event.keyCode === 13) {
            this.checkResult(parseInt(event.target.value, 10), result);
            /* eslint no-param-reassign: "error" */
            event.target.value = '';
        }
    }

    getResultMessage() {
        const {message} = this.state;
        if (message) {
            return (
                <div className="alert quiz-guess-result ml-2">
                    {message}
                </div>
            );
        }
        return null;
    }

    checkResult(inputValue, correctValue) {
        const {dispatch} = this.props;
        let answerPoint = 0;
        let message = 'Yanlış';
        if (inputValue === correctValue) {
            message = 'Doğru';
            answerPoint = 10;
        }
        this.setState({
            message,
        }, () => {
            this.messageTimeout = setTimeout(() => {
                this.setState({
                    message: null,
                });
            }, 1000);
        });

        if (!this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            dispatch({
                type: 'FINISH_OR_NEXT',
                payload: {
                    winPoint: answerPoint,
                },
            });
        }, 300);
    }

    render() {
        const {nextQuestion} = this.props;
        const {firstNumber, secondNumber, result} = nextQuestion;
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
}

Question.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nextQuestion: PropTypes.shape({
        firstNumber: PropTypes.number,
        secondNumber: PropTypes.number,
        result: PropTypes.number,
    }).isRequired,
};

export default connect()(Question);
