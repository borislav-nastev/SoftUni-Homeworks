function serializeString(input) {

    let text = input[0];
    let charsObject = {};

    for (let i = 0; i < text.length; i++) {

        if (!charsObject.hasOwnProperty(text[i])) {
            charsObject[text[i]] = [];
        }

        charsObject[text[i]].push(i);
    }

    for (let key in charsObject) {
        console.log(`${key}:${charsObject[key].join("/")}`);
    }
}

serializeString(['abababa', '']);