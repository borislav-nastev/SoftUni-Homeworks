function smallShop(input) {

    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let price = 0;

    if (city === "Sofia") {

        if (product === "coffee") {
            price = quantity * 0.50;
        } else if (product === "water") {
            price = quantity * 0.80;
        } else if (product === "beer") {
            price = quantity * 1.20;
        } else if (product === "sweets") {
            price = quantity * 1.45;
        } else if (product === "peanuts") {
            price = quantity * 1.60;
        } else {
            price = "error";
        }

    } else if (city === "Plovdiv") {

        if (product === "coffee") {
            price = quantity * 0.40;
        } else if (product === "water") {
            price = quantity * 0.70;
        } else if (product === "beer") {
            price = quantity * 1.15;
        } else if (product === "sweets") {
            price = quantity * 1.30;
        } else if (product === "peanuts") {
            price = quantity * 1.50;
        } else {
            price = "error";
        }

    } else if (city === "Varna") {

        if (product === "coffee") {
            price = quantity * 0.45;
        } else if (product === "water") {
            price = quantity * 0.70;
        } else if (product === "beer") {
            price = quantity * 1.10;
        } else if (product === "sweets") {
            price = quantity * 1.35;
        } else if (product === "peanuts") {
            price = quantity * 1.55;
        } else {
            price = "error";
        }

    } else {
        price = "error";
    }

    console.log(price);

}

smallShop(["sweets", "Sofia", 2.23]);