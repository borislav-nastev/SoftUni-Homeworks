function biggestNumber(firstNumber, secondNumber, thirdNumber) {

    let array = Array.from(arguments)
        .sort((a, b) => b - a);

    console.log(array[0]);

}

biggestNumber(10, 5, 60);