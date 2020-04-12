function negativeOrPositiveNumbers(numbers = []) {
    
    let resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        
        if(numbers[i] < 0) {
            resultArray.unshift(numbers[i]);
        } else {
            resultArray.push(numbers[i]);
        }
    }

    console.log(resultArray.join("\n"));
}

negativeOrPositiveNumbers([7, -2, 8, 9]);