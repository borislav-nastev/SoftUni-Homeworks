function cardGame(data) {

    let input = data.slice();
    let players = new Map();

    let powerObject = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };

    let typeObject = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };

    for (let line of input) {

        let [name, cards] = line.split(": ");

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        cards.split(", ").forEach(card => {
            players.get(name).add(card);
        });
    }

    let playersScore = new Map();

    for (let [name, cards] of players) {
        playersScore.set(name, sumCardsScore(cards));
    }

    for (let [player, score] of playersScore) {
        console.log(`${player}: ${score}`);
    }

    function sumCardsScore(input) {

        let score = 0;

        input.forEach(card => {
            card = card.split("");
            let type = card.pop();
            let power = card.join("");
            score += powerObject[power] * typeObject[type];
        });

        return score;
    }

}

cardGame([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
]);