function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let countStep = base;
    let row = 0;

    while (countStep > 2) {

        let currentMarble = 0;
        let currentStone = 0;
        let currentLapis = 0;
        row++;

        if (row % 5 === 0) {
            currentLapis = (countStep * 4) - 4;
            currentStone = (countStep * countStep) - currentLapis;

        } else {
            currentMarble = (countStep * 4) - 4;
            currentStone = (countStep * countStep) - currentMarble;
        }

        stone += currentStone;
        marble += currentMarble;
        lapis += currentLapis;
        countStep -= 2;
    }

    row++;
    stone = Math.ceil(stone * increment);
    marble = Math.ceil(marble * increment);
    lapis = Math.ceil(lapis * increment);
    let gold = Math.ceil((countStep * countStep) * increment);
    let hight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${hight}`);
}

thePyramidOfKingDjoser(11, 1);