function rotateArray(data = []) {
    
    let rotation = Number(data.pop()) % data.length;
    let array = data.slice();

    for (let i = 0; i < rotation; i++) {
        
        let currentElement = array.pop();
        array.unshift(currentElement); 
    }

    console.log(array.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);