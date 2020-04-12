function notation(input) {

    let isError = false;
    let operands = [];
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    for (let i = 0; i < input.length; i++) {

        if (typeof input[i] === "number") {
            operands.push(input[i]);

        } else {

            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                isError = true;
                break;
            }

            let firstOperand = operands[operands.length - 2];
            let secondOperand = operands[operands.length - 1];
            operands.splice(operands.length - 2, 2);
            operands.push(operations[input[i]](firstOperand, secondOperand));
        }
    }

    if(operands.length > 1) {
        console.log("Error: too many operands!");
        isError = true;
    }

    if(!isError) {
        console.log(operands.join(" "));
    }
}

notation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);