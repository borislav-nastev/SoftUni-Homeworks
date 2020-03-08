function skiTrip(input) {

    let days = Number(input.shift());
    let typeRoom = input.shift();
    let grade = input.shift();
    let price = 0;
    let nights = days - 1;

    switch (typeRoom) {

        case "room for one person": {
            price = nights * 18;
        }
            break;

        case "apartment": {
            if (days < 10) {
                price = (nights * 25) * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = (nights * 25) * 0.65;
            } else {
                price = (nights * 25) * 0.50;
            }
        }
            break;

        case "president apartment": {
            if (days < 10) {
                price = (nights * 35) * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = (nights * 35) * 0.85;
            } else {
                price = (nights * 35) * 0.80;
            }
        }
            break;
    }

    if (grade === "positive") {
        price = price + (price * 0.25);
    } else {
        price = price - (price * 0.10);
    }

    console.log(price.toFixed(2));
}

skiTrip([2, "apartment", "positive"]);