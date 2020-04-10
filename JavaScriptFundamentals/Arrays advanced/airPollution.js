function airPollution(data, commands) {

    let map = data.slice().map(e => e.split(" ")).map(e => e.map(Number));

    for (let line of commands) {
        let [command, value] = line.split(" ");
        value = Number(value);

        if (command === "breeze") {
            if (value >= 0 && value < 5) {
                map[value].map((e, i) => {
                    if (e - 15 >= 0) {
                        map[value][i] = e - 15;
                    }
                });
            }

        } else if (command === "gale") {
            if (value >= 0 && value < 5) {
                map.map(e => {
                    if (e[value] - 20 >= 0) {
                        e[value] = e[value] - 20;
                    }
                });
            }

        } else if (command === "smog") {
            map = map.map(e => e.map(el => el + value));
        }
    }

    let polluted = 0;
    let coordinates = [];

    map.forEach((line, index) => {
        line.forEach((el, i) => {
            if (el >= 50) {
                polluted++;
                coordinates.push(`[${index}-${i}]`);
            }
        });
    });

    if (polluted === 0) {
        console.log("No polluted areas");
    } else {
        console.log(`Polluted areas: ${coordinates.join(", ")}`);
    }
}

airPollution(["5 7 2 14 4",
            "21 14 2 5 3",
            "3 16 7 42 12",
            "2 20 8 39 14",
            "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]
);