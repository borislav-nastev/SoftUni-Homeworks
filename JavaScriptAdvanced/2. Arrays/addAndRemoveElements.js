function addAndRemoveElements(input) {

    let output = [];
    let counter = 0;

    for (let command of input) {
        counter++;

        if (command === 'add') {
            output.push(counter);

        } else if (command === 'remove') {
            output.pop();
        }
    }

    output.length > 0
        ? console.log(output.join("\n"))
        : console.log("Empty");
}

addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);