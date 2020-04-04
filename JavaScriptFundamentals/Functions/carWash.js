function carWash(commands) {

    let percentages = 0;

    for (let command of commands) {

        if (command === "soap") {
            percentages = soap(percentages);
        } else if (command === "water") {
            percentages = water(percentages);
        } else if (command === "vacuum cleaner") {
            percentages = vacuum(percentages);
        } else if (command === "mud") {
            percentages = mud(percentages);
        }
    }

    console.log(`The car is ${percentages.toFixed(2)}% clean.`);

    function soap(per) {
        return per += 10;
    }

    function water(per) {
        return per = per + (per * 0.20);
    }

    function vacuum(per) {
        return per = per + (per * 0.25);
    }

    function mud(per) {
        return per = per - (per * 0.10);
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);