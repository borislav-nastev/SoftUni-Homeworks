function numbersSequence(n, k) {

    let resultArray = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = i - k;

        if (startIndex < 0) {
            startIndex = 0;
        }

        let currentArr = resultArray.slice(startIndex, i);
        let currentNumber = currentArr.reduce((a, b) => a + b, 0);
        resultArray.push(currentNumber);
    }

    console.log(resultArray.join(" "));
}

numbersSequence(8, 2);