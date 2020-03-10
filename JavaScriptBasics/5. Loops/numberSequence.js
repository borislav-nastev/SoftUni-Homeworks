function numberSequence(input) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {

        if (input[i] > maxNumber) {
            maxNumber = input[i];
        }

        if (input[i] < minNumber) {
            minNumber = input[i];
        }
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

numberSequence([-1, 5250, 500, 546.55]);