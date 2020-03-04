function checkPassword(input) {

    let password = input.shift();

    if (password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");

    } else {
        console.log("Wrong password!");
    }
}

checkPassword(["s3cr3t!P@ssw0rd"]);