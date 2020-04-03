function sumEven(array) {
    
    let evenSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentValue = Number(array[i]);

        if(currentValue % 2 === 0) {
            evenSum+= currentValue;
        }
    }

    console.log(evenSum);
}

sumEven(['3','5','7','9']);