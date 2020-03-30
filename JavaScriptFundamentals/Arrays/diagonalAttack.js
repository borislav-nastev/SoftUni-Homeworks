function diagonalAttack(input) {

    let array = input.slice()
        .map(e => e.split(" "))
        .map(e => e.map(Number));

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < array.length; i++) {

        firstDiagonalSum += array[i][i];
        secondDiagonalSum += array[i][array.length - i - 1];
    }

    if (firstDiagonalSum !== secondDiagonalSum) {
        let outPut = array.map(e => e.join(" "));
        console.log(outPut.join("\n"));

    } else {

        console.log(replace(array, secondDiagonalSum))
    }

    function replace(arr, value) {

        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr[i].length; j++) {

                if (j !== i && j !== arr[i].length - 1 - i) {
                    arr[i][j] = value;
                }
            }
        }

        arr = arr.map(e => e.join(" "));
        return arr.join("\n");
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);