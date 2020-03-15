function building(input) {

    let countFloors = Number(input[0]);
    let countRoomsOnFloor = Number(input[1]);

    for (let i = countFloors; i > 0; i--) {

        let line = "";

        for (let j = 0; j < countRoomsOnFloor; j++) {

            if (i === countFloors) {
                line += `L${i}${j} `;

            } else if (i % 2 === 0) {
                line += `O${i}${j} `;

            } else {
                line += `A${i}${j} `;
            }
        }

        console.log(line);
    }
}

building([6, 4]);