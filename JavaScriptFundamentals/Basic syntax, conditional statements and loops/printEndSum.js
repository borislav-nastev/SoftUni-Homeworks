function printEndSum(start, end) {

    let sum = 0;
    let printLine = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        printLine += `${i} `;
    }

    console.log(`${printLine}\nSum: ${sum}`);
}

printEndSum(50, 60);