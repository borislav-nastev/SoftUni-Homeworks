function lastKNumbersSequence(n, k) {

    let array = [1];

    for (let i = 1; i < n; i++) {

        let startIndex = i - k;

        if (startIndex < 0) {
            startIndex = 0;
        }

        let lastKElements = array.slice(startIndex);
        let nextElement = lastKElements.reduce((a,b) => a + b, 0);
        array.push(nextElement);
    }

    return array.join(' ');
}

console.log(lastKNumbersSequence(8, 2));