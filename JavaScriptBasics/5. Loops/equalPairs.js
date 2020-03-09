function equalPairs(input) {

    let n = Number(input[0]);
    n = n * 2;

    let lastPair = 0;
    let nextPair = 0;

    for (let i = 1; i <= n; i += 2) {

        let num1 = Number(input[i]);
        let num2 = Number(input[i + 1]);

        if (nextPair !== lastPair) {
            lastPair = nextPair;
        }

        nextPair = num1 + num2;
    }

    if (n <= 2) {
        console.log(`Yes, value=${nextPair}`);

    } else if (nextPair === lastPair) {
        console.log(`Yes, value=${lastPair}`);

    } else {
        let diff = Math.abs(nextPair - lastPair);
        console.log(`No, maxdiff=${diff}`);
    }
}

equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);