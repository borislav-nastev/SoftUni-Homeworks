function coding(input) {

    let number = Number(input.shift());
    let numberArray = number.toString()
        .split("")
        .reverse()
        .map(Number);

    for (let number of numberArray) {

        if (number === 0) {
            console.log("ZERO");
            continue;
        }

        let value = number + 33;
        let currentLine = String.fromCharCode(value);

        console.log(currentLine.repeat(number));
    }
}

coding([9347439]);