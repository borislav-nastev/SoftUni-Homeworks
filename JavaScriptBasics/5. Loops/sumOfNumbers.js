function sumOfNumbers(input) {

    let sum = 0;

    for (let i = 0; i < input.length; i++) {

        let currentElement = Number(input[i]);
        sum += currentElement;
    }

    console.log(sum);
}

sumOfNumbers([10, 5, 10]);