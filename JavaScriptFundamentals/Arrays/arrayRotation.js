function rotation(array, rotationNumber) {
    
    let result = array.slice();

    for (let i = 0; i < rotationNumber; i++) {
        
        let currentElement = result.shift();
        result.push(currentElement);
    }

    console.log(result.join(" "));
}

rotation([51, 47, 32, 61, 21], 2);