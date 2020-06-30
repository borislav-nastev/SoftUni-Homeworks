function orderRectangles(input) {

    const output = [];

    input.forEach(([width, height]) => {
        output.push(createObject(width, height));
    });

    output.sort((a, b) => a.compareTo(b));
    return output;

    function createObject(a, b) {

        const result = {};

        result.width = a;
        result.height = b;

        result.area = function () {
            return this.width * this.height;
        };

        result.compareTo = function (other) {
            return other.area() - this.area() || other.width - this.width;
        };

        return result;
    }
}

orderRectangles([[1, 20], [20, 1], [5, 3], [5, 3]]);