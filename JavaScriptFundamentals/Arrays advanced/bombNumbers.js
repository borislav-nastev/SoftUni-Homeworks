function bombNumbers(data = [], bombNumberArray = []) {

    let bombNumber = bombNumberArray[0];
    let countNeighbors = bombNumberArray[1];
    let myArray = data.slice();

    while (myArray.includes(bombNumber)) {

        let indexOfNumber = myArray.indexOf(bombNumber);
        let startIndex = indexOfNumber - countNeighbors;

        if (startIndex < 0) {
            startIndex = 0;
        }

        myArray.splice(indexOfNumber, countNeighbors + 1);
        myArray.splice(startIndex, countNeighbors);
    }

    let sum = myArray.reduce((a, b) => a + b, 0);
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);