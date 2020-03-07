function personalTitles(input) {

    let age = Number(input.shift());
    let gender = input.shift();
    let result = "";

    if (gender === "m") {

        if (age >= 16) {
            result = "Mr.";

        } else {
            result = "Master";
        }

    } else {

        if (age >= 16) {
            result = "Ms.";

        } else {
            result = "Miss";
        }
    }

    console.log(result);

}

personalTitles([12, "f"]);