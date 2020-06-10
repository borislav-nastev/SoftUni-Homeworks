function solve() {

  const textarea = document.querySelectorAll('#exercise > textarea');
  const buttons = document.querySelectorAll('#exercise > button');
  const generateBtn = buttons[0];
  const buyBtn = buttons[1];
  const tbody = document.querySelector('table > tbody');

  let totalPrice = 0;
  let averageDec = 0;

  generateBtn.addEventListener('click', addData);
  buyBtn.addEventListener('click', buy);

  function addData() {

    const value = textarea[0].value;

    if (value) {
      const data = JSON.parse(value)

      data.forEach(element => {

        const tr = document.createElement('tr');
        const imgTd = createMyElements('td', createAttrElement('img', 'src', element.img));
        const nameTd = createMyElements('td', createMyElements('p', element.name));
        const priceTd = createMyElements('td', createMyElements('p', element.price));
        const decorFactorTd = createMyElements('td', createMyElements('p', element.decFactor));
        const radioBtnTd = createMyElements('td', createAttrElement('input', 'type', 'checkbox'));
   
        append(tr, [imgTd, nameTd, priceTd, decorFactorTd, radioBtnTd]);
        append(tbody, tr);
      });
    }
  }

  function buy() {

    const boughtFurniture = [];
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.forEach(row => {
      const rowContent = Array.from(row.querySelectorAll('td'));

      if (rowContent[4].children[0].checked) {

        boughtFurniture.push(rowContent[1].children[0].textContent);
        totalPrice += Number(rowContent[2].children[0].textContent);
        averageDec += Number(rowContent[3].children[0].textContent);
      }
    });

    averageDec = averageDec / boughtFurniture.length;
    
    textarea[1].value =
      `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDec}`;
  }

  function createAttrElement(type, attr, content) {
    const element = document.createElement(type);
    element.setAttribute(attr, content);
    return element;
  }

  function createMyElements(type, content) {

    const element = document.createElement(type);

    if (typeof content === 'object') {
      element.appendChild(content);

    } else {
      element.textContent = content;
    }

    return element;
  }

  function append(parent, child) {

    if (Array.isArray(child)) {
      return child.forEach(el => parent.appendChild(el));
    }

    return parent.appendChild(child);
  }
}