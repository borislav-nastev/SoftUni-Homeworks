function solve() {

    const elements = {
        input: document.getElementById('input'),
        selectedMenuTo: document.getElementById('selectMenuTo'),
        btn: document.querySelector('#container button'),
        output: document.getElementById('result'),
    }

    appendElement(elements.selectedMenuTo, createElement('option', 'Binary', 'binary'));
    appendElement(elements.selectedMenuTo, createElement('option', 'Hexadecimal', 'hexadecimal'));

    elements.btn.addEventListener('click', convert);

    function convert() {

        let result = 0;
        let value = elements.input.value;
        let valueToConvert = elements.selectedMenuTo.value;

        if(valueToConvert === 'binary') {
            result = Number(value).toString(2);

        } else if (valueToConvert === 'hexadecimal') {
            result = Number(value).toString(16).toUpperCase();
        }
        
        elements.output.value = result;
    }

    function createElement(type, text, value) {

        let element = document.createElement(type);
        element.value = value;
        element.textContent = text;

        return element;
    }

    function appendElement(parent, el) {
        parent.appendChild(el);
    }
}