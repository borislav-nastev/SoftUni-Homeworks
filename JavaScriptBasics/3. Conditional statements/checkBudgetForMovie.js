function checkBudgetForMovie(input) {

    let budget = Number(input.shift());
    let movieStatistics = Number(input.shift());
    let priceForClothesForOneStatistic = Number(input.shift());

    let moneyForDecor = budget * 0.10;
    let moneyForAllClothes = movieStatistics * priceForClothesForOneStatistic;

    if (movieStatistics > 150) {
        
        moneyForAllClothes = moneyForAllClothes - (moneyForAllClothes * 0.10);
    }

    let moneyForMovie = moneyForAllClothes + moneyForDecor;
    let money = Math.abs(budget - moneyForMovie);

    if (moneyForMovie <= budget) {

        console.log(`Action!\nWingard starts filming with ${money.toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money!\nWingard needs ${money.toFixed(2)} leva more.`);
    }
}

checkBudgetForMovie([9587.88, 222, 55.68]);