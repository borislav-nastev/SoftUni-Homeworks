function sumByTown(input) {

    let obj = {};

    for (let i = 0; i < input.length; i+=2) {

        let city = input[i];
        let value = Number(input[i + 1]);

        if (!obj.hasOwnProperty(city)) {
            obj[city] = 0;
        }

        obj[city] += value;
    }

    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia','20','Varna','3','sofia','5','varna','4']);