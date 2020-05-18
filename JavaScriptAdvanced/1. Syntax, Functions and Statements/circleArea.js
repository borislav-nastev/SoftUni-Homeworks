function circleArea(input) {

    let output;

    if (typeof input === "number") {
        output = (Math.PI * input * input).toFixed(2);

    } else {
        output = `We can not calculate the circle area, because we receive a ${typeof input}.`
    }

    return output;
}

console.log(circleArea('name'));