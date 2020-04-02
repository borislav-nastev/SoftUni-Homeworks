function reverseArrayOfString(data =[]) {
    
    let resultArray = data.slice();

    for (let i = 0; i < resultArray.length / 2; i++) {
        
        let lastElement = resultArray[resultArray.length - i - 1];
        let firstElement = resultArray[i];

        resultArray[i] = lastElement;
        resultArray[resultArray.length - i - 1] = firstElement;
    }

    console.log(resultArray.join(" "));
}

reverseArrayOfString(['33', '123', '0', 'dd']);