function solve(num) {

    let spice = num;
    let yieldForWorkers = 26;
    let days = 0;
    let totalSpice = 0;

    while (spice >= 100) {
        totalSpice += (spice - yieldForWorkers);
        spice -= 10;
        days++;
    }

    if (totalSpice < yieldForWorkers) {
        yieldForWorkers = totalSpice;
    }

    totalSpice -= yieldForWorkers;

    console.log(days);
    console.log(totalSpice);
}

solve(111);