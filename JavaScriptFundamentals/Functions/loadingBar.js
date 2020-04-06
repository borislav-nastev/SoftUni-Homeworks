function loadingBar(number) {

    let count = number / 10;
    let loadingBar = [];

    for (let i = 0; i < 10; i++) {
        loadingBar.push(".");
    }

    loadingBar = loading(count, loadingBar);
    
    if (loadingBar.includes(".")) {
        let result = `${number}% [${loadingBar.join("")}]`;
        console.log(`${result}\nStill loading...`);
    } else {
        let result = `[${loadingBar.join("")}]`;
        console.log(`100% Complete!\n${result}`);
    }

    function loading(num, arr) {
        let symbol = "%";
        
        for (let i = 0; i < num; i++) {
            arr[i] = symbol;
        }

        return arr;
    }
}

loadingBar(70);