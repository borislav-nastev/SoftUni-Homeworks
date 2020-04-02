function reverse(parameters, array) {
    
    let newArray = array
    .slice(0, parameters)
    .reverse()
    .join(" ");

    console.log(newArray);
}

reverse(3, [10, 20, 30, 40, 50]);