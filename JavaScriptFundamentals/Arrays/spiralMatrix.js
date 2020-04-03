function matrix(rows, cols) {

    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;
    let spiralMatrix = [];

    for (let i = 0; i < rows; i++) {
        spiralMatrix.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            spiralMatrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            spiralMatrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startCol] = counter;
            counter++;
        }
        startCol++;

    }

    spiralMatrix = spiralMatrix.map(e => e.join(" "));
    console.log(spiralMatrix.join("\n"));
}

matrix(5, 5);