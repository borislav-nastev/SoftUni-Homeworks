function tseamAccount(input) {

    let games = input.shift().split(" ");

    for (let line of input) {

        let [command, game] = line.split(" ");

        if (command === "Play!") {
            break;
        }

        if (command === "Install") {

            if (!games.includes(game)) {
                games.push(game);
            }

        } else if (command === "Uninstall") {

            if (games.includes(game)) {
                let indexOfGame = games.indexOf(game);
                games.splice(indexOfGame, 1);
            }

        } else if (command === "Update") {

            if (games.includes(game)) {
                let indexOfGame = games.indexOf(game);
                games.splice(indexOfGame, 1);
                games.push(game);
            }

        } else if (command === "Expansion") {

            let [gameName, expansion] = game.split("-");

            if (games.includes(gameName)) {
                let indexOfGame = games.indexOf(gameName) + 1;
                games.splice(indexOfGame, 0, `${gameName}:${expansion}`);
            }
        }
    }

    console.log(games.join(" "));
}

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);