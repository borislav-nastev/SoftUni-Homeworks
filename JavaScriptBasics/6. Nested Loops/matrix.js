function matrix(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let l = c; l <= d; l++) {
                for (let m = c; m <= d; m++) {

                    if ((i + m) === (j + l) && (i !== j) && (l !== m)) {
                        console.log(`${i}${j}`);
                        console.log(`${l}${m}\n`);
                    }
                }
            }
        }
    }
}

matrix([1, 2, 3, 4]);