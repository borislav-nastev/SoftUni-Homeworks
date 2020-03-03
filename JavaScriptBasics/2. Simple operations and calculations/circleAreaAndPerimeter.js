function circleAreaAndPerimeter(input) {
  
    let r = Number(input.shift());

    let areaOfCircle = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    console.log(areaOfCircle.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter([3]);