function gameOfEpicness(kingdomInput, battleInput) {

    let kingdoms = {};

    kingdomInput.forEach(line => {

        if (!kingdoms.hasOwnProperty(line.kingdom)) {
            kingdoms[line.kingdom] = {wins: 0, losses: 0}
        }

        if (!kingdoms[line.kingdom].hasOwnProperty(line.general)) {
            kingdoms[line.kingdom][line.general] = {army: 0, wins: 0, losses: 0};
        }

        kingdoms[line.kingdom][line.general].army += line.army;
    });

    for (let line of battleInput) {

        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = line;

        if (attackingKingdom !== defendingKingdom) {
            battle(kingdoms, attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral);
        }
    }

    let sortedKingdoms = Object.keys(kingdoms)
        .sort((a, b) => kingdoms[b].wins - kingdoms[a].wins ||
            kingdoms[a].losses - kingdoms[b].losses ||
            a.localeCompare(b));

    let winnerKingdom = kingdoms[sortedKingdoms[0]];

    console.log(`Winner: ${sortedKingdoms[0]}`);

    Object.keys(winnerKingdom)
        .filter(el => el !== 'wins' && el !== 'losses')
        .sort((a, b) => winnerKingdom[b].army - winnerKingdom[a].army)
        .forEach(general => {
            console.log(`/\\general: ${general}`);

            for (let key in winnerKingdom[general]) {
                console.log(`---${key}: ${winnerKingdom[general][key]}`);
            }
        });

    function battle(obj, attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral) {

        let winner = '';

        if (obj[attackingKingdom][attackingGeneral].army > obj[defendingKingdom][defendingGeneral].army) {
            winner = attackingKingdom;

        } else if (obj[defendingKingdom][defendingGeneral].army > obj[attackingKingdom][attackingGeneral].army) {
            winner = defendingKingdom;
        }

        if (winner === attackingKingdom) {
            madeScore(obj, attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral);

        } else if (winner === defendingKingdom) {
            madeScore(obj, defendingKingdom, defendingGeneral, attackingKingdom, attackingGeneral);
        }
    }

    function madeScore(obj, winnerKingdom, winnerGeneral, lossesKingdom, lossesGeneral) {
        obj[winnerKingdom][winnerGeneral].army = Math.floor(obj[winnerKingdom][winnerGeneral].army + (obj[winnerKingdom][winnerGeneral].army * 0.10));
        obj[winnerKingdom][winnerGeneral].wins++;
        obj[winnerKingdom].wins++;

        obj[lossesKingdom][lossesGeneral].army = Math.floor(obj[lossesKingdom][lossesGeneral].army - (obj[lossesKingdom][lossesGeneral].army * 0.10));
        obj[lossesKingdom][lossesGeneral].losses++;
        obj[lossesKingdom].losses++;
    }

}

gameOfEpicness([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);

// gameOfEpicness([{kingdom: "Stonegate", general: "Ulric", army: 5000},
//         {kingdom: "YorkenShire", general: "Quinn", army: 5000},
//         {kingdom: "Maiden Way", general: "Berinon", army: 1000}],
//         [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]);