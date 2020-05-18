function stringLength(firstString, secondString, thirdString) {

    let concatenateString = firstString + secondString + thirdString;
    let stringLength = concatenateString.length;
    let averageLength = Math.floor(stringLength / arguments.length);

    console.log(stringLength);
    console.log(averageLength);
}

stringLength('pasta', '5', '22.3');