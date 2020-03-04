function bonusScore(input) {

    let number = Number(input.shift());
    let bonusPoints = 0;
    let score = 0;

    if (number > 1000) {
        bonusPoints = (number * 0.10);

    } else if (number > 100) {
        bonusPoints = (number * 0.20);

    } else {
        bonusPoints = 5;
    }

    if (number % 2 === 0) {
        bonusPoints += 1;
        
    } else if (number % 5 === 0) {
        bonusPoints += 2;
    }

    score = number + bonusPoints;

    console.log(bonusPoints);
    console.log(score);
}

bonusScore([15875]);