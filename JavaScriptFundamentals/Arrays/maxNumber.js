function maxNumber(array) {

    let result = [];
    let isBigger = false;

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];

        if (i === array.length - 1) {
            result.push(currentElement);
            break;
        }

        for (let j = i + 1; j < array.length; j++) {

            if (currentElement > array[j]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            result.push(currentElement);
        }
    }

    console.log(result.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);