function printEveryNthElementFromArray(input) {

    let nthElement = Number(input.pop());

    for (let i = 0; i < input.length; i+=nthElement) {
        console.log(input[i]);
    }
}

printEveryNthElementFromArray(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);

