function checkBudgetForJourney(input) {

    let budget = Number(input.shift());
    let season = input.shift();

    let distance = "";
    let typeOfHoliday = "";
    let spendMoney = 0;

    if (budget > 1000) {
        distance = "Europe";
        typeOfHoliday = "Hotel";
        spendMoney = budget * 0.90;

    } else if (budget <= 100) {
        distance = "Bulgaria";

        if (season === "summer") {
            spendMoney = budget * 0.30;
            typeOfHoliday = "Camp";

        } else {
            spendMoney = budget * 0.70;
            typeOfHoliday = "Hotel";
        }

    } else if (budget <= 1000) {
        distance = "Balkans";

        if (season === "summer") {
            typeOfHoliday = "Camp";
            spendMoney = budget * 0.40;

        } else {
            typeOfHoliday = "Hotel";
            spendMoney = budget * 0.80;
        }
    }

    console.log(`Somewhere in ${distance}`);
    console.log(`${typeOfHoliday} - ${spendMoney.toFixed(2)}`);

}

checkBudgetForJourney([1500, "summer"]);