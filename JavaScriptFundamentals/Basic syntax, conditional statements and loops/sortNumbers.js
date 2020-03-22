function sort(a, b, c) {

    Array.from(arguments)
        .sort((a, b) => b - a)
        .forEach(e => console.log(e));

}

sort(2, 1, 3);