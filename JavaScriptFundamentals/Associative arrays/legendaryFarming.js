function legendaryFarming(data) {

    let input = data.split(" ");
    let wantedMaterials = {
        "shards": 0,
        "fragments": 0,
        "motes": 0
    };

    let materials = new Map();
    let winner = "";

    for (let i = 0; i < input.length; i += 2) {

        let quantity = Number(input[i]);
        let material = input[i + 1].toLocaleLowerCase();

        if (materials.has(material)) {
            quantity += materials.get(material);
        }

        materials.set(material, quantity);

        if (material === "shards" && materials.get(material) >= 250) {

            winner = "Shadowmourne";
            quantity = materials.get(material) - 250;
            materials.set(material, quantity);
            break;

        } else if (material === "fragments" && materials.get(material) >= 250) {

            winner = "Valanyr";
            quantity = materials.get(material) - 250;
            materials.set(material, quantity);
            break;

        } else if (material === "motes" && materials.get(material) >= 250) {

            winner = "Dragonwrath";
            quantity = materials.get(material) - 250;
            materials.set(material, quantity);
            break;
        }
    }

    for (let [material, quantity] of materials) {

        if (wantedMaterials.hasOwnProperty(material)) {
            wantedMaterials[material] = quantity;
            materials.delete(material);
        }
    }

    console.log(`${winner} obtained!`);

    let sortedWantedMaterials = Object.keys(wantedMaterials)
        .sort((a, b) => wantedMaterials[b] - wantedMaterials[a] || a.localeCompare(b));

    for (let material of sortedWantedMaterials) {
        console.log(`${material}: ${wantedMaterials[material]}`);
    }

    let sortedMaterials = Array.from(materials.keys())
        .sort((a,b) => a.localeCompare(b))

    for (let material of sortedMaterials) {
        console.log(`${material}: ${materials.get(material)}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');