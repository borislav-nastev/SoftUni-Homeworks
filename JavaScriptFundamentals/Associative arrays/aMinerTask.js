function minerTask(data) {

    let input = data.slice();
    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {

        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (resources.has(resource)) {
            quantity += resources.get(resource);
        }

        resources.set(resource, quantity);
    }

    for (let [resource, quantity] of resources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

minerTask([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
]);