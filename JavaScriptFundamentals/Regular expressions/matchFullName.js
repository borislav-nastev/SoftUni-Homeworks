function matchFullName(input) {

    const regex = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/gm;
    let names = [];
    let validName = "";

    while (validName = regex.exec(input[0])) {
        names.push(validName[0]);
    }

    console.log(names.join(" "));
}

matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);