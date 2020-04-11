function equalNeighbors(matrix) {

    let countEqualNeighbors = 0;

    for (let i = 0; i < matrix.length - 1; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === matrix[i + 1][j]) {
                countEqualNeighbors++;
            }

            if (matrix[i][j] === matrix[i][j + 1]) {
                countEqualNeighbors++;
            }

            if ( i === matrix.length - 2 && matrix[i + 1][j] === matrix[i + 1][j + 1]) {
                countEqualNeighbors++;
            }
        }
    }

    console.log(countEqualNeighbors);
}

equalNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
);