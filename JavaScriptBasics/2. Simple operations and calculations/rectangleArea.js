function rectangleArea(input) {

    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let wight = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);

    let area = wight * height;
    let perimeter = 2 * (wight + height);

    console.log(Math.abs(area).toFixed(2));
    console.log(Math.abs(perimeter).toFixed(2));

}

rectangleArea([60, 20, 10, 50]);