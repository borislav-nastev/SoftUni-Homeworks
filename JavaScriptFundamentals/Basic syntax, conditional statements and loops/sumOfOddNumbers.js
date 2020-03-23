function sumOfOddNumbers(countOddNumbers) {

    let sum = 0;
    let currentNumber = 1;

    for (let i = 0; i < countOddNumbers; i++) {

        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
            sum += currentNumber;
            currentNumber += 2;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);