function checkForEqualArrays(firstArray, secondArray) {

    let isEqual = false;

    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] === secondArray[i]) {
            isEqual = true;

        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        let sum = firstArray
            .map(Number)
            .reduce((a, b) => a + b, 0);

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

checkForEqualArrays(['1'], ['10']);