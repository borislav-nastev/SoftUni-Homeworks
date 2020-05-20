function biggestElement(input) {

    let biggestElements = [];

    for (let line of input) {
        let currentBiggest = Math.max(...line);
        biggestElements.push(currentBiggest);
    }

    return biggestElements.sort((a, b) => b - a)[0];
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));