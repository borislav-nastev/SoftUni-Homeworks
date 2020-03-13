function maxNumber(input) {

    let countNumbers = Number(input.shift());
    let counter = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (counter !== countNumbers) {
        let num = Number(input.shift());

        if (num > maxNum) {
            maxNum = num;
        }

        counter++;
    }

    console.log(maxNum);
}

maxNumber([3, -10, 20, -30]);