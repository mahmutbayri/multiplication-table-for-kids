export function questionGenerator() {
    const firstNumber = Math.floor(Math.random() * 9) + 1;
    const secondNumber = Math.floor(Math.random() * 9) + 1;
    return {
        firstNumber,
        secondNumber,
        result: firstNumber * secondNumber,
    };
}

/**
 *
 * @param timeAsSeconds integer
 */
export function formatTime(timeAsSeconds) {
    let minutes = parseInt(timeAsSeconds / 60, 10);
    let seconds = parseInt(timeAsSeconds % 60, 10);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
}
