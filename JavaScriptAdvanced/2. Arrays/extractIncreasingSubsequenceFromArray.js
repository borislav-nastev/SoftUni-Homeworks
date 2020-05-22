function extractIncreasingSubsequenceFromArray(input) {

    let output = [];

    for (let i = 0; i < input.length; i++) {

        let isBigger = true;
        let currentElement = input[i];

        for (let j = 0; j < output.length; j++) {
            if (currentElement < output[j]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            output.push(currentElement);
        }
    }

    console.log(output.join('\n'));
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);