function hotelRoom(input) {

    let month = input.shift();
    let countNights = Number(input.shift());
    let priceApartment = 0;
    let priceStudio = 0;

    if (month === "May" || month === "October") {
        priceApartment = countNights * 65;
        priceStudio = countNights * 50;

        if (countNights > 14) {
            priceStudio = priceStudio - (priceStudio * 0.30);

        } else if (countNights > 7) {
            priceStudio = priceStudio - (priceStudio * 0.05);
        }

    } else if (month === "June" || month === "September") {
        priceStudio = countNights * 75.20;
        priceApartment = countNights * 68.70;

        if (countNights > 14) {
            priceStudio = priceStudio - (priceStudio * 0.20);
        }

    } else if (month === "July" || month === "August") {
        priceStudio = countNights * 76;
        priceApartment = countNights * 77;
    }

    if (countNights > 14) {
        priceApartment = priceApartment - (priceApartment * 0.10);
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["August", 20]);