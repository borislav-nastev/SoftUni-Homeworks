function days(number) {

    let daysArray = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (number < 0 || number > 7) {
        console.log("Invalid day!");
    } else {
        console.log(daysArray[number - 1]);
    }
}

days(11);