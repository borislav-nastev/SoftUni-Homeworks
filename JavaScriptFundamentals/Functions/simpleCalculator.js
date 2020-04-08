const calculator = (firstOperand, secondOperand, operator) => {

    let calculatorObj = {
        "add": (a, b) => a + b,
        "subtract": (a, b) => a - b,
        "multiply": (a, b) => a * b,
        "divide": (a, b) => a / b
    };

    let result = calculatorObj[operator](firstOperand, secondOperand);
    console.log(result);
};

calculator(40, 8, 'divide');