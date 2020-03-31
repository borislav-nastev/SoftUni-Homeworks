function ladyBugs(arr) {

    let sizeOfField = arr.shift();
    let ladybugsPositions = arr.shift()
        .split(' ')
        .map(Number);
    let fields = [];

    for (let i = 0; i < sizeOfField; i++) {
        fields.push(0);
    }

    for (let i = 0; i < sizeOfField; i++) {
        let ladybugIndex = ladybugsPositions[i];

        if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
            fields[ladybugIndex] = 1;
        }
    }

    for (let line of arr) {

        let [startIndex, direction, jumpLength] = line.split(" ");
        startIndex = Number(startIndex);
        jumpLength = Number(jumpLength);

        if (fields[startIndex] === 1 && fields[startIndex] !== undefined && startIndex < fields.length) {

            if (direction === "right") {

                for (let i = startIndex; i < fields.length; i++) {
                    let newIndex = startIndex + jumpLength;

                    if (fields[newIndex] !== 1) {
                        fields[startIndex] = 0;

                        if (newIndex > fields.length - 1) {
                            break;
                        }

                        fields[newIndex] = 1;
                        break;

                    } else {
                        jumpLength *= 2;
                    }
                }

            } else {

                for (let i = startIndex; i > 0; i--) {
                    let newIndex = startIndex - jumpLength;

                    if (fields[newIndex] !== 1) {
                        fields[startIndex] = 0;
                        fields[newIndex] = 1;
                        break;

                    } else {
                        jumpLength *= 2;
                    }
                }
            }
        }
    }

    console.log(fields.join(" "));
}

ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']);