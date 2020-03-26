function reversedChars(firstChar, secondChar, thirdChar) {

    let arr = Array.from(arguments)
        .reverse();

    console.log(arr.join(" "));
}

reversedChars('A',
    'B',
    'C'
);