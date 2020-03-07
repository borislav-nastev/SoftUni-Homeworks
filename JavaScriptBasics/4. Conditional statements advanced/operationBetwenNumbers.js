function operationBetweenNumber(input) {

    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();

    let result = 0;
    let evenOrOdd = "";

    switch (operator) {
        case "+": {
            result = num1 + num2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
        }
            break;

        case "-": {
            result = num1 - num2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);
        }
            break;

        case "*": {
            result = num1 * num2;
            if (result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);
        }
            break;

        case "/": {
            result = num1 / num2;
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }
        }
            break;

        case "%": {
            result = num1 % num2;
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                console.log(`${num1} % ${num2} = ${result}`);
            }
        }
            break;
    }
}

operationBetweenNumber([10, 0, "+"]);