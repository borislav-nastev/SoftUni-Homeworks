function towns(input) {

    input.reduce((acc, cur) => {
        cur = cur.split(" | ");

        let town = {
            town: cur[0],
            latitude: Number(cur[1]).toFixed(2),
            longitude: Number(cur[2]).toFixed(2)
        };

        acc.push(town);
        return acc;
    }, [])
        .forEach(obj => console.log(obj));

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);