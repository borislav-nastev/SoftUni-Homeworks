function solve(firstWord, char, correctWord) {

    let replacedWord = firstWord.replace("_", char);
    let output = replacedWord === correctWord ? "Matched" : "Not Matched";
    console.log(output);
}

solve('Str_ng', 'o', 'Strong');