function partyGuests(data) {

    let input = data.slice();
    let guests = {
        "vipGuests": [],
        "regularGuests": []
    };
    let ticket = input.shift();

    while (ticket !== "PARTY") {

        if (isNaN(Number(ticket[0]))) {
            guests.regularGuests.push(ticket);
        } else {
            guests.vipGuests.push(ticket);
        }

        ticket = input.shift();
    }

    function createOutput(object, array) {
        let output = [];

        for (let line of array) {

            if (object.vipGuests.includes(line)) {
                let index = object.vipGuests.indexOf(line);
                object.vipGuests.splice(index, 1);
            }
            if (object.regularGuests.includes(line)) {
                let index = object.regularGuests.indexOf(line);
                object.regularGuests.splice(index, 1);
            }
        }

        output = object.vipGuests.concat(object.regularGuests);
        return output;
    }

    let output = createOutput(guests, input);
    console.log(output.length);
    output.forEach(ticket => console.log(ticket));

}

partyGuests(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    '9NoBU1ajQ122',
    'Ce8vwPmE',
    'SVQXQCbc'
]);