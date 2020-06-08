function focus() {

    const inputs = Array.from(document.querySelectorAll('input[type=text]'));

    inputs.forEach(input => {
        input.addEventListener('focus', focusIn);
        input.addEventListener('blur', focusOut);
    });

    function focusIn(event) {
        event.target.parentElement.classList.add('focused');
    }

    function focusOut(event) {
        event.target.parentElement.classList.remove('focused');
    }
}