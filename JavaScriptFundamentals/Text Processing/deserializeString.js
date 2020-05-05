function deserializeString(data) {

    let indexObject = {};

    for (let line of data) {

        if (line === "end") {
            break;
        }

        let [letter, indexes] = line.split(":");
        indexes = indexes.split("/").map(Number);

        for (let index of indexes) {
            indexObject[index] = letter;
        }
    }

    let text = "";

    for (let key in indexObject) {
        text += indexObject[key];
    }

    console.log(text);
}

deserializeString([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
]);