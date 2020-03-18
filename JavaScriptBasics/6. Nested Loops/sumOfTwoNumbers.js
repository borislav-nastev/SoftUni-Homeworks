function sumTwoNumbers(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let isMagic = false;
    let counter = 0;

    for (let i = firstNumber; i <= lastNumber; i++) {
        for (let j = firstNumber; j <= lastNumber; j++) {

            counter++;
            let currentValue = i + j;

            if (currentValue === magicNumber) {
                isMagic = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                break;
            }

        }

        if (isMagic) {
            break;
        }
    }

    if (!isMagic) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumTwoNumbers([23, 24, 20]);