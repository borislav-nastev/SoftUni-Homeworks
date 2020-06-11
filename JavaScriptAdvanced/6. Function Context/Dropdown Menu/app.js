function solve() {

    const colorsUl = document.getElementById('dropdown-ul');
    const box = document.getElementById('box');
    
    document.getElementById('dropdown').addEventListener('click', onClick);

    function onClick(event) {

        colorsUl.style.display = colorsUl.style.display === 'block' ? 'none' : 'block';

        if (colorsUl.style.display === 'block') {

            [...colorsUl.children].forEach(li => {
                li.addEventListener('click', changeColor);
            });

        } else {
            box.style.removeProperty("background-color");
            box.style.removeProperty("color");
        }
    }

    function changeColor(event) {
        box.style.backgroundColor = event.target.textContent;
        box.style.color = 'black';
    }
}