function solve() {

  const elements = {
    items: document.getElementById('items'),
    input: document.getElementById('newText'),
  }

  const text = elements.input.value;

  if (text) {

    const li = document.createElement('li');
    const del = document.createElement('a');

    li.textContent = text;
    del.textContent = '[Delete]';
    del.setAttribute('href', '#');

    del.addEventListener('click', function (event) {
      let el = event.target.parentElement;
      el.remove();
    });

    li.appendChild(del);
    elements.items.appendChild(li);

    elements.input.value = '';
  }

}
