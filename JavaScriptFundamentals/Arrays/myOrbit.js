function orbit(input) {

    let rows = input[0];
    let cols = input[1];
    let startRowIndex = input[2];
    let startColsIndex = input[3];
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            matrix[row][col] = Math.max(Math.abs(row - startRowIndex), Math.abs(col - startColsIndex)) +1;
        }
    }

    matrix = matrix.map(e=> e.join(" "));
    console.log(matrix.join("\n"))
}

orbit([5, 5, 2, 2]);