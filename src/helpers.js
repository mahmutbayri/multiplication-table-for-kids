export function questionGenerator() {
    const firstNumber = Math.floor(Math.random() * 9) + 1;
    const secondNumber = Math.floor(Math.random() * 9) + 1;
    return {
        firstNumber,
        secondNumber,
        result: firstNumber * secondNumber
    }
}
