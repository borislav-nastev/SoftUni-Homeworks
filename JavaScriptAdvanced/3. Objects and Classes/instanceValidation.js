class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId) {
        const pattern = /^\d{6}$/gm;

        if (!pattern.test(clientId)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = clientId;
    }

    get clientId() {
        return this._clientId;
    }

    set email(email) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!pattern.test(email)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    get email() {
        return this._email;
    }

    set firstName(name) {

        const pattern = /^[A-Za-z]{3,}/gm;

        if (name.length < 3 || name.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (!pattern.test(name)) {
            throw new TypeError(`First name must contain only Latin characters`);
        }

        this._firstName = name
    }

    get firstName () {
        return this._firstName;
    }

    set lastName(name) {

        const pattern = /^[A-Za-z]{3,}/gm;

        if (name.length < 3 || name.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!pattern.test(name)) {
            throw new TypeError(`Last name must contain only Latin characters`);
        }

        this._lastName = name;
    }

    get lastName() {
        return this._lastName;
    }
}

//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
//let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');