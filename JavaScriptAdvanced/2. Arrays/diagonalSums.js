function diagonalSums(input) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[i][input.length - 1 - i];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);