function solve(num) {

    let isSpecial = "";

    function checkForSpecial(element) {
        element = Number(element);

        if (element === 5 || element === 7 || element === 11) {
            isSpecial = "True";
        } else {
            isSpecial = "False";
        }

        return isSpecial;
    }

    function sumDigits(arr) {
        let sum = arr.map(Number)
            .reduce((a, b) => a + b, 0);
        checkForSpecial(sum);
    }

    for (let i = 1; i <= num; i++) {

        let numberToString = String(i);

        if (numberToString.length === 1) {
            checkForSpecial(i);
            console.log(`${i} -> ${isSpecial}`);

        } else {
            let array = numberToString.split("");
            sumDigits(array);
            console.log(`${i} -> ${isSpecial}`);
        }
    }
}

solve(15);