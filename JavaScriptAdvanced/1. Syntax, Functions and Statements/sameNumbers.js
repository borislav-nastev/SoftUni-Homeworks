function sameNumbers(number) {

    let numberToString = number.toString();
    let digitsSum = 0;
    let isSame = true;

    for (let i = 0; i < numberToString.length - 1; i++) {

        if (numberToString[i] !== numberToString[i + 1]) {
            isSame = false;
            break;
        }
    }

    digitsSum = numberToString.split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);

    console.log(isSame);
    console.log(digitsSum);
}

sameNumbers(1234);