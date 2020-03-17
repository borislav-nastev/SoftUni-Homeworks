function passGenerator(input) {

    let n = Number(input[0]);
    let l = Number(input[1]);

    let printLine = "";

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            for (let k = 97; k < 97 + l; k++) {
                for (let o = 97; o < 97 + l; o++) {
                    for (let p = 1; p <= n; p++) {

                        if (p > i && p > j) {
                            printLine += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(o)}${p} `;
                        }
                    }
                }
            }
        }
    }

    console.log(printLine);
}

passGenerator([3, 1]);