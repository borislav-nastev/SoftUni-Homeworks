function sumDigits(number) {

    let result = String(number)
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);

    console.log(result);
}

sumDigits(245678);