function maxSequenceOfEqualElements(array) {

    let newArray = array.slice();
    let longestEqualElements = "";

    for (let i = 0; i < newArray.length; i++) {

        let currentEqualElement = "";
        currentEqualElement += `${newArray[i]} `;

        for (let j = i + 1; j < newArray.length; j++) {

            if (newArray[i] === newArray[j]) {
                currentEqualElement += `${newArray[i]} `;

                if (longestEqualElements.length < currentEqualElement.length) {
                    longestEqualElements = currentEqualElement;
                }

            } else {
                currentEqualElement = "";
                break;
            }
        }
    }

    console.log(longestEqualElements);
}

maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);