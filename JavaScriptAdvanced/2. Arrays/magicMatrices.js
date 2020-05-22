function magicMatrices(input) {

    let firstRowSum = input[0].reduce((a, b) => a + b, 0);
    let col = (arr, n) => arr.map(x => x[n]);
    let isEqual = true;

    for (let i = 0; i < input.length; i++) {

        let currentRowSum = input[i].reduce((a, b) => a + b, 0);
        let currentColSum = col(input, i).reduce((a, b) => a + b, 0);

        if (firstRowSum !== currentRowSum || currentColSum !== currentRowSum) {
            isEqual = false;
            break;
        }
    }

    console.log(isEqual);
}

magicMatrices([[4, 5, 6],
                    [6, 5, 4],
                    [5, 5, 5]]);