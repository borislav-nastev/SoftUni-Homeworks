function gladiatorInventory(input) {

    let inventory = input.shift().split(" ");

    for (let line of input) {

        let [command, equipment] = line.split(" ");

        if (command === "Buy") {
            buy(inventory, equipment);

        } else if (command === "Trash") {

            if (isExist(inventory, equipment)) {
                deleteElement(inventory, equipment);
            }

        } else if (command === "Repair") {

            if (isExist(inventory, equipment)) {
                deleteElement(inventory, equipment);
                inventory.push(equipment);
            }

        } else if (command === "Upgrade") {

            let [eq, upgrade] = equipment.split("-");

            if (isExist(inventory, eq)) {
                let indexOfEquipment = inventory.indexOf(eq);
                inventory.splice(indexOfEquipment + 1, 0, `${eq}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(" "));

    function buy(arr, equipment) {

        if (!isExist(arr, equipment)) {
            return arr.push(equipment);
        }
    }

    function isExist(arr, equipment) {
        return arr.includes(equipment);
    }

    function deleteElement(arr, el) {
        let indexOfElement = arr.indexOf(el);
        arr.splice(indexOfElement, 1);
    }
}

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);