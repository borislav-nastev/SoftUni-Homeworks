function moving(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let freeSpace = width * length * height;
    let boxSpace = 0;
    let isFull = false;

    let command = input.shift();

    while (command !== "Done") {

        command = Number(command);
        boxSpace += command;

        if (boxSpace > freeSpace) {
            let needSpace = boxSpace - freeSpace;
            console.log(`No more free space! You need ${needSpace} Cubic meters more.`);
            isFull = true;
            break;
        }

        command = input.shift();
    }

    let leftSpace = freeSpace - boxSpace;

    if (!isFull) {
        console.log(`${leftSpace} Cubic meters left.`);
    }
}

moving([10, 1, 2, 4, 6, "Done"]);