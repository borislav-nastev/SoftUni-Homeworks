function specialNumbers(input) {

    let number = Number(input[0]);
    let printLine = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {

                    if ((number % i === 0) && (number % j === 0) && (number % k === 0) && (number % l === 0)) {
                        printLine += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    console.log(printLine);
}

specialNumbers([5]);