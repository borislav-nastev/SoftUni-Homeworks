function distinctArray(input = []) {

    let array = input.slice();
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (!resultArray.includes(currentElement)) {
            resultArray.push(currentElement);
        }
    }

    console.log(resultArray.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);