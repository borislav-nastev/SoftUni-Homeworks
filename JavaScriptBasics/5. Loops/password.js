function password(input) {

    let userName = input.shift();
    let pass = input.shift();

    let command = input.shift();

    while (command !== pass) {

        command = input.shift();
    }

    console.log(`Welcome ${userName}!`);
}

password(["Nakov",
    1234,
    "pass",
    1324,
    1234]);