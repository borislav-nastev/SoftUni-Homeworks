function equalSum(array) {

    let isEqual = false;

    for (let index = 0; index < array.length; index++) {

        let leftSide = array.slice(0, index)
            .reduce((a, b) => a + b, 0);
        let rightSide = array.slice(index + 1)
            .reduce((a, b) => a + b, 0);

        if (leftSide === rightSide) {

            console.log(index);
            isEqual = true;
            break;
        }
    }

    if (!isEqual) {

        console.log("no");
    }
}

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);