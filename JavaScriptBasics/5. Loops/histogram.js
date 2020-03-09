function histogram(input) {

    let n = Number(input.shift());

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0; i < n; i++) {

        if (input[i] < 200) {
            p1Counter++;

        } else if (input[i] >= 800) {
            p5Counter++;

        } else if (input[i] >= 600 && input[i] <= 799) {
            p4Counter++;

        } else if (input[i] >= 400 && input[i] <= 599) {
            p3Counter++

        } else if (input[i] >= 200 && input[i] <= 399) {
            p2Counter++;
        }
    }

    console.log(`${((p1Counter / input.length) * 100).toFixed(2)}%`);
    console.log(`${((p2Counter / input.length) * 100).toFixed(2)}%`);
    console.log(`${((p3Counter / input.length) * 100).toFixed(2)}%`);
    console.log(`${((p4Counter / input.length) * 100).toFixed(2)}%`);
    console.log(`${((p5Counter / input.length) * 100).toFixed(2)}%`);
}

histogram([7, 800, 801, 250, 199, 399, 599, 799]);