function furniture(input) {

    let totalPrice = 0;

    console.log("Bought furniture:");

    for (let line of input) {

        if (line === "Purchase") {
            break;
        }

        const regex = />>(?<typeFurniture>[A-Za-z]+)<<(?<price>[0-9]+\.?[0-9]+)!(?<quantity>[0-9]+)/gm;

        let currentItem = regex.exec(line);

        if (currentItem) {
            console.log(currentItem.groups.typeFurniture);
            totalPrice += Number(currentItem.groups.quantity) * Number(currentItem.groups.price);
        }
    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);