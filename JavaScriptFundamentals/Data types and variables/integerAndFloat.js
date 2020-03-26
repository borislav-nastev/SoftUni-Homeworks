function checkIntegerOrFloat(firstNumber, secondNumber, thirdNumber) {
    
    let sumAllNumbers = firstNumber + secondNumber + thirdNumber;
    let output = "";

    if(Number.isInteger(sumAllNumbers)) {
        output = `${sumAllNumbers} - Integer`;
    } else {
        output = `${sumAllNumbers} - Float`;
    }

    console.log(output);
}

checkIntegerOrFloat(9, 100, 1.1);