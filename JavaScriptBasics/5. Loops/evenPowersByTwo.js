function evenPowers(input) {

    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {

        let num = Math.pow(2, i);
        console.log(num);
    }
}

evenPowers([3]);