function equalNeighbors(input) {

    let counterEqualNeighbors = 0;

    for (let i = 0; i < input.length; i++) {

        if (i === input.length - 1) {

            for (let j = 0; j < input[i].length; j++) {
                if (input[i][j] === input[i][j + 1]) {
                    counterEqualNeighbors++;
                }
            }

        } else {

            for (let j = 0; j < input[i].length; j++) {

                if (input[i][j] === input[i + 1][j] || input[i][j] === input[i][j + 1]) {
                    counterEqualNeighbors++;
                }
            }
        }
    }

    console.log(counterEqualNeighbors);
}

equalNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);