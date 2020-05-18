function aggregateElements(input) {

    let inverse = (x, y) => x + (1 / y);
    let sumOfElements = input.reduce((a, b) => a + b, 0);
    let inverseSum = input.reduce(inverse, 0);
    let concatenateElements = input.reduce((a, b) => a + b.toString());
    let output = `${sumOfElements}\n${inverseSum}\n${concatenateElements}`;

    console.log(output);
}

aggregateElements([2, 4, 8, 16]);