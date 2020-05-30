function usernames(input) {

    const uniqueUsernames = new Set();

    input.forEach(user => {
        uniqueUsernames.add(user);
    });

    return [...uniqueUsernames.values()]
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join('\n');
}

console.log(usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']));