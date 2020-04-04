function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    return subtract(add(firstNumber, secondNumber), thirdNumber);
}

console.log(addAndSubtract(1, 17, 30));