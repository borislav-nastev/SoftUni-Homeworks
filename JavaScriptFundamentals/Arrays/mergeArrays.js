function mergeArrays(firstArray, secondArray) {

    let result = [];

    firstArray.map((element, index) => {

        let currentElement;

        if (index % 2 === 0) {

            currentElement = Number(firstArray[index]) + Number(secondArray[index]);

        } else {

            currentElement = firstArray[index] + secondArray[index];
        }

        result[result.length] = currentElement;
    });

    console.log(result.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);