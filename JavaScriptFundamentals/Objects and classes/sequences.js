function sequences(input) {

    let array = input.map(e => JSON.parse(e));
    let sorted = array.map(e => e.sort((a, b) => b - a));
    let resultArray = [];

    for (let line of sorted) {
        let isContain = doesArrayOfArraysContainArray(resultArray, line);

        if (isContain === false) {
            resultArray.push(line);
        }
    }

    let sortedResult = resultArray.sort((a, b) => a.length - b.length);
    sortedResult.forEach(e => console.log(`[${e.join(", ")}]`));

    function doesArrayOfArraysContainArray(arrayOfArrays, array) {
        let arr = arrayOfArrays.map(e => e.slice(0));
        let a = array.slice(0);

        for (let i = 0; i < arr.length; i++) {

            if (arr[i].join(',') === a.join(',')) {
                return true;
            }
        }

        return false;
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]", "[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]"]);