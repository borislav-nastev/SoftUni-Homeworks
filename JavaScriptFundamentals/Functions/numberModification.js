function numberModification(number) {

    let averageSum = 0;

    while (averageSum <= 5) {

        let arr = splitNumber(number);
        let sum = sumDigits(arr);
        averageSum = sum / arr.length;

        if (averageSum <= 5) {
            arr.push("9");
        }

        number = arr.map(Number).join("");
    }

    console.log(number);

    function sumDigits(arr) {
        return arr.reduce((a, b) => Number(a) + Number(b), 0);
    }

    function splitNumber(num) {
        return String(num)
            .split("");
    }
}

numberModification(5835);