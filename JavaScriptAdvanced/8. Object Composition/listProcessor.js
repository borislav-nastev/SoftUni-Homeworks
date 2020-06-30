function listProcessor(input) {

    const output = [];
    
    const commands = {
        add: (arr, item) => arr.push(item),
        remove: (arr, item) => {
            while (arr.includes(item)) {
                const index = arr.indexOf(item);
                arr.splice(index, 1);
            }
        },
        print: arr => console.log(arr.join(','))
    };

    input.forEach(element => {
        const [command, item] = element.split(' ');
        commands[command](output, item);
    });

    return commands;
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);