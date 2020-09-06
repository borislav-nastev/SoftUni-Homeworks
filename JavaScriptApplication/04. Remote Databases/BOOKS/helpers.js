function createHtmlEl(type, content, attributes) {
    const result = document.createElement(type);

    if (attributes !== undefined) {
        Object.assign(result, attributes);
    }

    if (Array.isArray(content)) {
        content.forEach(append);
    } else {
        append(content);
    }

    function append(node) {
        if (typeof node === 'string' || typeof node === 'number') {
            node = document.createTextNode(node);
        }
        result.appendChild(node);
    }

    return result;
}

function validData(inputs, placeholders) {
    
    const emptyInput = Object.entries(inputs).find(([key, el]) => el.value === '');

    if (emptyInput) {
        emptyInput[1].placeholder = `${emptyInput[0]} can not be empty!`;
        return true
    }

    Object.keys(inputs)
        .forEach(key => inputs[key].placeholder = placeholders[key]);
    return false;
}

function toggleButtons(btn, text) {

    if (btn.textContent === 'Loading...') {
        btn.textContent = text;
        btn.disabled = false;
        return;
    }

    btn.textContent = 'Loading...';
    btn.disabled = true;
}

function clearInputs(input) {
    Object.entries(input).forEach(([key, el]) => el.value = '');
}

function getInputsValue(obj) {
    return {
        title: obj.title.value,
        author: obj.author.value,
        isbn: obj.isbn.value
    }
}

function toggleErrorContainer(element, err) {
    element.textContent = err;
    element.style.display = 'block';
}

function disabledButtons() {
    [...document.querySelectorAll('button')]
        .filter(button => button.textContent !== 'Save' && button.textContent !== 'Cancel')
        .forEach(btn => btn.disabled = true);
}

function enableButtons() {
    [...document.querySelectorAll('button')]
        .filter(button => button.textContent !== 'Save' && button.textContent !== 'Cancel')
        .forEach(btn => btn.disabled = false);
}

export {
    createHtmlEl,
    validData,
    toggleButtons,
    clearInputs,
    getInputsValue,
    toggleErrorContainer,
    disabledButtons,
    enableButtons
}