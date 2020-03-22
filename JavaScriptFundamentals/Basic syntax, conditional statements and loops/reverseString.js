function reverseString(input) {

    return Array.from(String(input))
        .reverse()
        .join("");
}

console.log(reverseString("Hello"));