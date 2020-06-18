class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = name;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    set fullName(value) {

        const fullNamePattern = /[A-Za-z]+ [A-Za-z]+/;

        if(fullNamePattern.test(value)) {
            [this._firstName, this._lastName] = value.split(' ');
        }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
