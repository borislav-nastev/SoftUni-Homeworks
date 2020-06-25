function sortArray(arr, criteria) {

    const helpers = {
        asc: arr => arr.sort((a,b) => a - b),
        desc: arr => arr.sort((a, b) => b - a),
    }

    return helpers[criteria](arr);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));