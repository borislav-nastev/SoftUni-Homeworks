function toggle() {
   
    const elements = {
        btn: document.querySelector('.button'),
        textContainer: document.getElementById('extra'),
    }

    if(elements.btn.textContent === 'More') {
        elements.textContainer.style.display = 'block';
        elements.btn.textContent = 'Less';

    } else {
        elements.textContainer.style.display = 'none';
        elements.btn.textContent = 'More';
    }
}