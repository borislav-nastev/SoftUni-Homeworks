function moneyFromMovie(input) {

    let typeMovie = input.shift();
    let countRow = Number(input.shift());
    let countColumns = Number(input.shift());

    let allPlaceInHall = countColumns * countRow;
    let money = 0;

    if (typeMovie === "Premiere") {
        money = allPlaceInHall * 12.00;
    } else if (typeMovie === "Normal") {
        money = allPlaceInHall * 7.50;
    } else {
        money = allPlaceInHall * 5.00
    }

    console.log(`${money.toFixed(2)} leva`);
}

moneyFromMovie(["Discount", 12, 30]);