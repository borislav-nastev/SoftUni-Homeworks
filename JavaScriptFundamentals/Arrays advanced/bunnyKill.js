function solve(input) {

    let coordinates = input.pop().split(" ").filter(x => x !== "");
    let array = input.slice().map(e => e.split(" ")).map(e => e.map(Number));
    let totalDmg = 0;
    let count = 0;

    let rows = array.length;
    let cols = array[0].length;

    for (let i = 0; i < coordinates.length; i++) {

        let [corX, corY] = coordinates[i].split(",").map(Number);

        if (corX < array.length && corY < array[corX].length) {
            let dmg = array[corX][corY];

            if (dmg > 0) {
                totalDmg += dmg;
                count++;

                if ((corX - 1) >= 0 && (corY - 1) >= 0) {
                    array[corX - 1][corY - 1] -= dmg;
                }
                if (corX >= 0 && (corY - 1) >= 0) {
                    array[corX][corY - 1] -= dmg;
                }
                if ((corX + 1) < rows && (corY - 1) >= 0) {
                    array[corX + 1][corY - 1] -= dmg;
                }
                if ((corX + 1) < rows) {
                    array[corX + 1][corY] -= dmg;
                }
                if ((corX + 1) < rows && (corY + 1) < cols) {
                    array[corX + 1][corY + 1] -= dmg;
                }
                if ((corY + 1) < cols) {
                    array[corX][corY + 1] -= dmg;
                }
                if ((corX - 1) >= 0 && (corY + 1) < cols) {
                    array[corX - 1][corY + 1] -= dmg;
                }
                if ((corX - 1) >= 0) {
                    array[corX - 1][corY] -= dmg;
                }

                array[corX][corY] = 0;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > 0) {
                count++;
                totalDmg += array[i][j];
            }
        }
    }

    console.log(totalDmg);
    console.log(count);
}

solve(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']
);