function phoneBook(data) {

    let people = data.slice();
    let phoneBookMap = new Map();

    for (let person of people) {

        let [name, phoneNumber] = person.split(" ");
        phoneBookMap.set(name, phoneNumber);
    }

    for (let [name, phoneNumber] of phoneBookMap) {
        console.log(`${name} -> ${phoneNumber}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);