function addItem() {

    const elements = {
        items: document.getElementById('items'),
        input: document.getElementById('newItemText'),
    }

    const text = elements.input.value;

    if (text) {

        const li = document.createElement('li');

        li.textContent = text;
        elements.items.appendChild(li);

        elements.input.value = '';
    }

}