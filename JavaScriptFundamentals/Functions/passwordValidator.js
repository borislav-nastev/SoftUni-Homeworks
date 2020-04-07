function passwordValidator(password) {

    let isValidLength = checkPasswordLength(password);
    let isValidSymbols = checkPasswordSymbols(password);
    let isValidCountDigits = checkCountDigits(password);

    if (!isValidLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isValidSymbols) {
        console.log("Password must consist only of letters and digits");
    }

    if (!isValidCountDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (isValidLength && isValidSymbols && isValidCountDigits) {
        console.log("Password is valid");
    }

    function checkPasswordLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function checkPasswordSymbols(password) {
        let regex = /^[A-Za-z0-9]+$/g;
        return regex.test(password);
    }

    function checkCountDigits(password) {
        let regex = /\d{2}/g;
        return regex.test(password);
    }
}

passwordValidator('My2@a');