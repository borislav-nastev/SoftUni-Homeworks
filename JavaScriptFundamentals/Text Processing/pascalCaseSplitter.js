function pascalCaseSplitter(text) {

    let result = [];
    let word = text[0];

    for (let i = 1; i < text.length; i++) {

        if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) {
            result.push(word);
            word = text[i];

        } else {
            word += text[i];
        }

        if (i === text.length - 1) {
            result.push(word);
        }
    }

    console.log(result.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');