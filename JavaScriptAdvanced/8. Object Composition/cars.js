function cars(input) {

    const myMap = new Map();
    const commands = {
        create,
        set,
        print
    }

    function create([name, _, parent]) {
        parent = parent ? myMap.get(parent) : null;
        const newObj = Object.create(parent);
        myMap.set(name, newObj);
    }

    function set([obj, key, value]) {
        myMap.get(obj)[key] = value;
    }

    function print([name]) {

        const output = [];
        const currentObj = myMap.get(name);
        
        for (const key in currentObj) {
            output.push(`${key}:${currentObj[key]}`);
        }

        console.log(output.join(', '));
    }

    input.forEach(line => {
        line = line.split(' ');
        const command = line.shift();
        commands[command](line);
    });

    return commands;
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);