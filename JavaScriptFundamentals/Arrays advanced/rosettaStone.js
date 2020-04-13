function solve(input) {

    let n = Number(input.shift());
    let templateMatrix = [];

    for (let i = 0; i < n; i++) {
        let currentLine = input.shift();
        templateMatrix.push(currentLine);
    }

    console.log(templateMatrix);
    console.log(input);
}

solve([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);