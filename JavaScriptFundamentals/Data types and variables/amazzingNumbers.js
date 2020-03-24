function checkForAmazzingNumbers(number) {

    let sumOfDigits = String(number)
        .split("")
        .reduce((a, b) => Number(a) + Number(b), 0);

    let output = String(sumOfDigits).includes("9")
        ? `${number} Amazing? True`
        : `${number} Amazing? False`;

    console.log(output);
}

checkForAmazzingNumbers(1233);