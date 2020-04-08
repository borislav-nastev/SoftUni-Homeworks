function dna(number) {

    let dna = "ATCGTTAGGG";
    let firstElement = "";
    let secondElement = "";
    let lineCounter = 1;
    let elementCounter = 0;

    for (let i = 0; i < number; i++) {

        if (elementCounter === 10) {
            elementCounter = 0;
        }

        if(lineCounter === 5) {
            lineCounter = 1;
        }

        firstElement = dna[elementCounter];
        secondElement = dna[elementCounter + 1];

        let obj = {
            "1": `**${firstElement}${secondElement}**`,
            "2": `*${firstElement}--${secondElement}*`,
            "3": `${firstElement}----${secondElement}`,
            "4": `*${firstElement}--${secondElement}*`,
            "5": `**${firstElement}${secondElement}**`
        };

        console.log(obj[lineCounter]);
        elementCounter += 2;
        lineCounter++;
    }
}

dna(4);