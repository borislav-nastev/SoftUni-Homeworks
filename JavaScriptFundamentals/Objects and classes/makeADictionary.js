function dictionary(input) {

    let parsed = input.map(e => JSON.parse(e));
    let object = {};

    for(let line of parsed) {

        for(let key in line) {
            object[key] = line[key];
        }
    }

    let sorted = Object.keys(object).sort((a,b) => a.localeCompare(b));

    for (let word of sorted) {
        console.log(`Term: ${word} => Definition: ${object[word]}`);
    }
}

dictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);