function minNumber(input) {

    let countNumbers = Number(input.shift());
    let counter = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (counter !== countNumbers) {
        let num = Number(input.shift());

        if (num < minNum) {
            minNum = num;
        }

        counter++;
    }

    console.log(minNum);
}

minNumber([3, -10, 20, -30]);