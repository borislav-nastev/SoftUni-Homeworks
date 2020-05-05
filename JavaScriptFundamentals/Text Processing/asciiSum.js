function asciiSum(data) {

    let startChar = data[0];
    let finalChar = data[1];
    let text = data[2];

    let charsArray = madeArray(startChar, finalChar, text);
    let score = sumScore(charsArray);

    console.log(score);

    function madeArray(start, end, text) {

        if (start.charCodeAt(0) > end.charCodeAt(0)) {
            let currentStart = start;
            start = end;
            end = currentStart;
        }

        return text.split("")
            .filter(el => el.charCodeAt(0) > start.charCodeAt(0) && el.charCodeAt(0) < end.charCodeAt(0));
    }

    function sumScore(input) {

        let score = 0;

        for (let char of input) {
            score += char.charCodeAt(0);
        }

        return score;
    }
}

asciiSum([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);