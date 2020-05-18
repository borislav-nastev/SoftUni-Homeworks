function wordsUppercase(input) {

    const pattern = /\w+/gim;

    let words = input.match(pattern)
        .map(e => e.toUpperCase());

    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');