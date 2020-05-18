function mathOperations(firstOperand, secondOperand, operator) {

    let actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }

    let result = actions[operator](firstOperand, secondOperand);
    console.log(result);
}

mathOperations(	3, 5.5, '*');