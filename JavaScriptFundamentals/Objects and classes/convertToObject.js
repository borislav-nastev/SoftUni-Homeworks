function convertToObject(json) {

    let myObject = JSON.parse(json);

    for (let myObjectKey in myObject) {
        console.log(`${myObjectKey}: ${myObject[myObjectKey]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');