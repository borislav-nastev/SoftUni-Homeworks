function factorialDivision(firstNumber, secondNumber) {

    let firstFactorial = findFactorial(firstNumber);
    let secondFactorial = findFactorial(secondNumber);
    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));

    function findFactorial(num) {
        let result = 1;

        for (let i = num; i >= 1; i--) {
            result = result * i;
        }

        return result;
    }
}

factorialDivision(6, 2);