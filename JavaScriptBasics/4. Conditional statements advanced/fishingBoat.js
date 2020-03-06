function fishingBoat(input) {

    let budget = Number(input.shift());
    let season = input.shift();
    let countFishMan = Number(input.shift());

    let moneyForRent = 0;

    if (season === "Spring") {
        moneyForRent = 3000;
    } else if (season === "Winter") {
        moneyForRent = 2600;
    } else {
        moneyForRent = 4200;
    }

    if (countFishMan <= 6) {
        moneyForRent = moneyForRent - (moneyForRent * 0.10);

    } else if (countFishMan >= 7 && countFishMan <= 11) {
        moneyForRent = moneyForRent - (moneyForRent * 0.15);

    } else {
        moneyForRent = moneyForRent - (moneyForRent * 0.25);
    }

    if (countFishMan % 2 === 0 && season !== "Autumn") {
        moneyForRent = moneyForRent - (moneyForRent * 0.05);
    }

    let money = Math.abs(budget - moneyForRent);

    if (moneyForRent <= budget) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }

}

fishingBoat([2000, "Winter", 13]);