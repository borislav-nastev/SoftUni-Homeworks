function addAndSubtract(array) {

    let result = [];
    let arraySum = 0;
    let resultSum = 0;

    array.forEach((element, index) => {

        let newElement = 0;
        arraySum += element;

        if (element % 2 === 0) {

            newElement = element + index;

        } else {

            newElement = element - index;
        }

        result.push(newElement);
        resultSum += newElement;
    });
    
    console.log(result);
    console.log(`${arraySum}\n${resultSum}`);
}

addAndSubtract([5, 15, 23, 56, 35]);