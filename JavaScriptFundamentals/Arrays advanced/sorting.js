function sorting(input = []) {

    let descendingOrderArray = input.slice();
    descendingOrderArray = descendingOrderArray.sort((a, b) => b - a);

    let resultArr = [];

    while (descendingOrderArray.length > 0) {

        let biggestElement = descendingOrderArray.shift();
        let smallestElement = descendingOrderArray.pop();

        resultArr.push(biggestElement);
        resultArr.push(smallestElement);
    }

    console.log(resultArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);