function personInfo(firstName, lastName, age) {

    let person = {
        firstName,
        lastName,
        age: Number(age)
    };

    for (let personKey in person) {
        console.log(`${personKey}: ${person[personKey]}`);
    }
}

personInfo("Peter",
    "Pan",
    "20"
);