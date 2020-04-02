function nonDecreasingSubsequence(data = []) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let resultArray = [];

    for (let i = 0; i < data.length; i++) {

        let currentElement = data[i];

        if (currentElement >= maxNumber) {

            maxNumber = currentElement;
            resultArray.push(maxNumber);
        }

    }
    
    console.log(resultArray.join(" "));
}

nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);