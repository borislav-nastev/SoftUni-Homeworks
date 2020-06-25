const solution = (function () {

    return {
        add: (firstPoint, secondPoint) => [firstPoint[0] + secondPoint[0], firstPoint[1] + secondPoint[1]],
        multiply: (arr, number) => [arr[0] * number, arr[1] * number],
        length: arr => Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2)),
        dot: (firstPoint, secondPoint) => (firstPoint[0] * secondPoint[0]) + (firstPoint[1] * secondPoint[1]),
        cross: (firstPoint, secondPoint) => (firstPoint[0] * secondPoint[1]) - (firstPoint[1] * secondPoint[0])
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));