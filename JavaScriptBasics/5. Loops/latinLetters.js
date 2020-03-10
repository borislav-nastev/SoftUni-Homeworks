function latinLetters() {

    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {

        let letter = String.fromCharCode(i);
        console.log(letter);
    }
}

latinLetters();