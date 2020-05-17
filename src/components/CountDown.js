import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatTime} from '../helpers';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.defaultRemainingTime = 5;
        this.state = {
            timerText: formatTime(this.defaultRemainingTime),
        };
        this.timer = null;
    }

    componentDidUpdate(prevProps) {
        const {currentQuizQuestionIndex, startTimer} = this.props;
        if (
            (prevProps.startTimer === false && startTimer === true)
            || (prevProps.currentQuizQuestionIndex !== currentQuizQuestionIndex)
        ) {
            // console.log('timer run again')
            this.startTimer();
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    intervalTimer(duration, callback, timerEndCallBack) {
        let timer = duration;
        // console.log("start new timer", timer);
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setInterval(() => {
            // console.log("setInterval", timer);
            callback(formatTime(timer));
            /* eslint no-plusplus: 0 */
            if (--timer < 0) {
                callback(formatTime(this.defaultRemainingTime));
                timerEndCallBack();
                clearInterval(this.timer);
            }
        }, 1000);
    }

    startTimer() {
        const {timerEnd} = this.props;
        this.intervalTimer(this.defaultRemainingTime, (formattedTime) => {
            this.setState({
                timerText: formattedTime,
            });
        }, () => {
            timerEnd();
        });
    }

    render() {
        const {timerText} = this.state;
        return (
            <h4 className="alert alert-success count-down-box ">
                <small className="mr-1">Quiz Time</small>
                <span className="badge badge-dark">{timerText}</span>
            </h4>
        );
    }
}

CountDown.propTypes = {
    currentQuizQuestionIndex: PropTypes.number.isRequired,
    startTimer: PropTypes.bool.isRequired,
    timerEnd: PropTypes.func.isRequired,
};

export default CountDown;
