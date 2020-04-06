function grades(grade) {

    let outPut = "";

    if (grade >= 2 && grade <= 6) {
        checkGrade(grade);
    }

    function checkGrade(grade) {

        if (grade >= 2 && grade <= 2.99) {
            outPut = "Fail";
        } else if (grade >= 3 && grade <= 3.49) {
            outPut = "Poor";
        } else if (grade >= 3.50 && grade <= 4.49) {
            outPut = "Good";
        } else if (grade >= 4.50 && grade <= 5.49) {
            outPut = "Very good";
        } else {
            outPut = "Excellent";
        }

        return outPut;
    }

    return outPut;
}

console.log(grades(3.33));