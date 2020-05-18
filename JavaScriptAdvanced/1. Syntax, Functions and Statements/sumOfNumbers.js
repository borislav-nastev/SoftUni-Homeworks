function sumOfAllNumbersBetweenTwoNumbers(firstNumber, secondNumber) {

    let result = 0;
    let a = Number(firstNumber);
    let b = Number(secondNumber);

    for (let i = a; i <= b; i++) {
        result += i;
    }

    return result;
}

console.log(sumOfAllNumbersBetweenTwoNumbers('-8', '20'));