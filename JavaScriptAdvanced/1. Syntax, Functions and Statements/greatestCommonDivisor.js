function greatestCommonDivisor(firstNumber, secondNumber) {

    let minNumber = Math.min(firstNumber, secondNumber);
    let biggestCommonDivisor = 0;

    for (let i = 1; i <= minNumber; i++) {

        let firstNumberResult = firstNumber / i;
        let secondNumberResult = secondNumber / i;

        if (Number.isInteger(firstNumberResult) && Number.isInteger(secondNumberResult)) {
            biggestCommonDivisor = i;
        }
    }

    console.log(biggestCommonDivisor);
}

greatestCommonDivisor(2154, 458);