function ches(n) {

    let firstPlace = "";
    let nextPlace = "";

    console.log(`<div class="chessboard">`);

    for (let i = 1; i <= n; i++) {

        console.log(`  <div>`);

        if (i % 2 !== 0) {
            firstPlace = "black";
            nextPlace = "white";

        } else {
            firstPlace = "white";
            nextPlace = "black";
        }

        console.log(`    <span class="${firstPlace}"></span>`);

        for (let j = 2; j <= n; j++) {

            console.log(`    <span class="${nextPlace}"></span>`);

            if (nextPlace === "black") {
                nextPlace = "white";

            } else {
                nextPlace = "black";
            }
        }

        console.log(`  </div>`);
    }

    console.log(`</div>`);
}

ches(3);