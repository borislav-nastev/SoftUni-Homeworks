function languages(country) {

    let countryObj = {
        "USA": "English",
        "England": "English",
        "Spain": "Spanish",
        "Argentina": "Spanish",
        "Mexico": "Spanish"
    };

    if (countryObj[country]) {
        console.log(countryObj[country]);
    } else {
        console.log("unknown");
    }
}

languages("Germany");