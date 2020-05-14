function softUniBarIncome(input) {

    let totalSum = 0;

    for (let line of input) {

        if (line === "end of shift") {
            break;
        }

        const regex = /%(?<name>[A-Z]{1}[a-z]+)%[^|$.%]*?<(?<item>\w+)>[^|$.%]*?\|(?<quantity>\d+)\|[^|$.%]*?(?<price>\d+\.?\d+)\$/gm;

        let currentLine = regex.exec(line);

        if (currentLine) {
            let name = currentLine.groups.name;
            let product = currentLine.groups.item;
            let price = Number(currentLine.groups.quantity) * Number(currentLine.groups.price);

            console.log(`${name}: ${product} - ${price.toFixed(2)}`);

            totalSum += price;
        }
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);