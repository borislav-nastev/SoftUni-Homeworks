function lockedProfile() {

    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener('click', showInfo)
    });

    function showInfo(event) {

        const parent = event.target.parentElement;
        const radioButtons = parent.querySelectorAll('input[type="radio"]');

        if (radioButtons[0].checked) {
            return;
        }

        const userInfo = event.target.previousElementSibling;

        if (event.target.textContent === 'Show more') {
            userInfo.style.display = 'block';
            event.target.textContent = 'Hide it';

        } else {
            userInfo.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}