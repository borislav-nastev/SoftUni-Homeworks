function sumFirstAndLastElements(array = []) {
    
    let firstElement = array[0];
    let lastElement = array[array.length - 1];

    let result = Number(firstElement) + Number(lastElement);

    console.log(result);
}

sumFirstAndLastElements(['20', '30', '40']);