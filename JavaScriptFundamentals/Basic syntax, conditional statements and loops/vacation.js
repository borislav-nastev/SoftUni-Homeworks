function sumPrice(group, typeOfGroup, day) {

    let output = "";
    let totalSum = 0;

    switch (typeOfGroup) {

        case "Students": {
            if (day === "Friday") {
                totalSum = group * 8.45;
            } else if (day === "Saturday") {
                totalSum = group * 9.80;
            } else if (day === "Sunday") {
                totalSum = group * 10.46;
            }
            if (group >= 30) {
                totalSum *= 0.85;
            }
            output = `Total price: ${totalSum.toFixed(2)}`;
        }
            break;

        case "Business": {
            if (group >= 100) {
                group -= 10;
            }
            if (day === "Friday") {
                totalSum = group * 10.90;
            } else if (day === "Saturday") {
                totalSum = group * 15.60;
            } else if (day === "Sunday") {
                totalSum = group * 16;
            }
            output = `Total price: ${totalSum.toFixed(2)}`;
        }
            break;

        case "Regular": {
            if (day === "Friday") {
                totalSum = group * 15;
            } else if (day === "Saturday") {
                totalSum = group * 20;
            } else if (day === "Sunday") {
                totalSum = group * 22.50;
            }
            if (group >= 10 && group <= 20) {
                totalSum *= 0.95;
            }
            output = `Total price: ${totalSum.toFixed(2)}`;
        }
            break;
    }

    console.log(output);
}

sumPrice(40,
    "Regular",
    "Saturday"
);