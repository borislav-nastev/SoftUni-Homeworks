function largestNumber(firstNumber, secondNumber, thirdNumber) {

    return `The largest number is ${Math.max(...arguments)}.` ;
}

console.log(largestNumber(-3, -5, -22.5));