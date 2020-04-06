function mathPower(num, power) {

    let result = grading(num, power);

    function grading(num, power) {
        
        return Math.pow(num, power);
    }

    console.log(result);
}

mathPower(3, 4);