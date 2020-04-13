function searchNumber(data = [], commandsArray) {

    let countElements = commandsArray[0];
    let countDeleteElements = commandsArray[1];
    let searchNumber = commandsArray[2];
    let countSearchNumber = 0;

    let array = data.slice(0, countElements);
    array.splice(0, countDeleteElements);

    if (array.includes(searchNumber)) {
        countSearchNumber = array.filter(e => e === searchNumber).length;
    }

    console.log(`Number ${searchNumber} occurs ${countSearchNumber} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);