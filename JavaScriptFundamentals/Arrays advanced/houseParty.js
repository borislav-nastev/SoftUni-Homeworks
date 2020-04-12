function party(input = []) {

    let guests = [];

    for (let line of input) {

        line = line.split(" ");
        let name = line[0];

        if (!line.includes("not")) {

            if (!guests.includes(name)) {
                guests.push(name);

            } else {
                console.log(`${name} is already in the list!`);
            }

        } else {

            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join("\n"));
}

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);