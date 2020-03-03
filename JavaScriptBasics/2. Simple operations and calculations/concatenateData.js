function concatenateData(data) {
    
    let firstName = data.shift();
    let lastName = data.shift();
    let age = Number(data.shift());
    let town = data.shift();

    console.log(`I am ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateData(["Borislav", "Nastev", "29", "Sofia"]);

