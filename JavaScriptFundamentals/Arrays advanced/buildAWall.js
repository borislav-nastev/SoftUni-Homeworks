function buildWall(input) {

    let moneyForOneCubic = 1900;
    let array = input.slice().map(Number);
    let resultArray = [];
    let finalWallFeet = array.length * 30;
    let currentFeet = 0;
    let dayCubic = 195;

    while (finalWallFeet !== currentFeet) {
        let workGroups = 0;

        for (let i = 0; i < array.length; i++) {

            if (array[i] === 30) {
                continue;
            }

            workGroups++;
            array[i]++;
        }

        currentFeet = array.reduce((a, b) => a + b, 0);
        let totalDayCubic = workGroups * dayCubic;
        resultArray.push(totalDayCubic);
    }

    let totalCubic = resultArray.reduce((a, b) => a + b, 0);
    let cubicSum = totalCubic * moneyForOneCubic;
    console.log(resultArray.join(", "));
    console.log(`${cubicSum} pesos`);
}

buildWall([17, 22, 17, 19, 17]);