function checkBudgetForGarden(input) {

    let flowers = input.shift();
    let countFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let sum = 0;

    switch (flowers) {

        case "Roses": {
            sum = countFlowers * 5;

            if (countFlowers > 80) {
                sum = sum - (sum * 0.10);
            }
        }
            break;

        case "Dahlias": {
            sum = countFlowers * 3.80;

            if (countFlowers > 90) {
                sum = sum - (sum * 0.15);
            }
        }
            break;

        case "Tulips": {
            sum = countFlowers * 2.80;

            if (countFlowers > 80) {
                sum = sum - (sum * 0.15);
            }
        }
            break;

        case "Narcissus": {
            sum = countFlowers * 3;

            if (countFlowers < 120) {
                sum = sum + (sum * 0.15);
            }
        }
            break;

        case "Gladiolus": {
            sum = countFlowers * 2.50;

            if (countFlowers < 80) {
                sum = sum + (sum * 0.20);
            }
        }
            break;
    }

    let money = Math.abs(budget - sum);

    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowers} and ${money.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
    }
}

checkBudgetForGarden(["Gladiolus", 64, 160]);