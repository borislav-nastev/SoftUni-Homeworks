function employees(input) {

    let resultArray = [];

    input.forEach(e => {
        let obj = {
            name: e,
            personalNumber: e.length
        };
        resultArray.push(obj);
    });

    for (let line of resultArray) {
        console.log(`Name: ${line.name} -- Personal Number: ${line.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);