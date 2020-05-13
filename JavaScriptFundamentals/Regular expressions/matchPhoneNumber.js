function matchPhoneNumber(input) {

    const regex = /\+[359]+( |-)[2]\1[0-9]{3}\1[0-9]{4}\b/gm;
    let numbers = [];
    let validNumber;

    while (validNumber = regex.exec(input[0])) {
        numbers.push(validNumber[0]);
    }

    console.log(numbers.join(", "));
}

matchPhoneNumber([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
]);