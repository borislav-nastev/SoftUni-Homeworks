function login(input) {
    let username = input[0];

    for (let i = 1; i < input.length; i++) {

        let currentPassword = Array.from(input[i]).reverse().join("");

        if (username === currentPassword) {
            console.log(`User ${username} logged in.`);
            break;

        } else {
            if (i >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }
}

login(['Acer','login','go','let me in','recA']);