function calculator(firsNumber, operator, secondNumber) {

    let operatorObj = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    };

    let result = operatorObj[operator](firsNumber, secondNumber);
    console.log(result.toFixed(2));
}

calculator(5,
    '/',
    10
);