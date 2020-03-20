function foreignLanguages(country) {

    let countryObject = {
        "USA": "English",
        "England": "English",
        "Spain": "Spanish",
        "Argentina": "Spanish",
        "Mexico": "Spanish"
    };

    if (countryObject[country]) {
        console.log(countryObject[country]);

    } else {
        console.log("unknown");
    }
}

foreignLanguages("Mexico");