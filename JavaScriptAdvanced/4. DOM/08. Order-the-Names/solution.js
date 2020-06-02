function solve() {
   
    const data = { A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [], L: [], M: [], N: ['Nixon'], O: [], P: ['Peterson'], Q: [], R: [], S: [], T: [], U: [], V: [], W: [], X: [], Y: [], Z: [] };

    const elements = {
        input: document.querySelector('#exercise input'),
        btn: document.querySelector('button'),
        li: document.querySelectorAll('li'),
    }

    elements.btn.addEventListener('click', loadData);

    function loadData() {

        let inputValue = elements.input.value;

        if (inputValue) {

            let firstLetter = inputValue[0].toUpperCase();
            let index = firstLetter.charCodeAt(0) - 65;
            let name = firstLetter + inputValue.slice(1).toLowerCase();

            data[firstLetter].push(name);

            elements.li[index].textContent = data[firstLetter].join(', ');
            elements.input.value = '';
        }
    }
}