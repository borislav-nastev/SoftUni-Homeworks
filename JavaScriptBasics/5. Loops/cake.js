function cake(input) {

    let width = Number(input.shift());
    let length = Number(input.shift());

    let sizeCake = width * length;
    let pieces = 0;
    let isFinish = false;

    let command = input.shift();

    while (command !== "STOP") {
        command = Number(command);
        pieces += command;

        if (pieces > sizeCake) {
            let needPieces = pieces - sizeCake;
            console.log(`No more cake left! You need ${needPieces} pieces more.`);
            isFinish = true;
            break;
        }

        command = input.shift();
    }

    if (!isFinish) {
        let leftPieces = sizeCake - pieces;
        console.log(`${leftPieces} pieces are left.`);
    }
}

cake([10,
    2,
    2,
    4,
    6,
    "STOP"
]);