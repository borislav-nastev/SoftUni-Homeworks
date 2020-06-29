function constructionCrew(input) {

    if (input.dizziness) {
        input.levelOfHydrated += 0.1 * input.weight * input.experience;
        input.dizziness = !input.dizziness;
        return input;
    }

    return input;
}

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));