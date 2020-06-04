function deleteByEmail() {

    const elements = {
        emails: Array.from(document.querySelectorAll('tr td:last-child')),
        input: document.querySelector('input[type=text]'),
        resultDiv: document.getElementById('result'),
    }

    const email = elements.input.value;
    const emailTd = elements.emails.filter(td => td.textContent === email)[0];

    if (emailTd) {
        emailTd.parentElement.remove();
        elements.input.value = '';
        elements.resultDiv.textContent = 'Deleted';

    } else {
        elements.resultDiv.textContent = 'Not found.';
    }
}