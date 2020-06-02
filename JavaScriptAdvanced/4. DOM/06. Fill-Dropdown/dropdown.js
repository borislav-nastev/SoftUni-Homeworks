function addItem() {
    
    const elements = {
        selectMenu: document.getElementById('menu'),
        textInput: document.getElementById('newItemText'),
        valueInput: document.getElementById('newItemValue'),
    }

    const text = elements.textInput.value;
    const value = elements.valueInput.value;

    let option = document.createElement('option');
    option.setAttribute('value', value);
    option.textContent = text;

    elements.selectMenu.appendChild(option);

    elements.textInput.value = '';
    elements.valueInput.value = '';
}