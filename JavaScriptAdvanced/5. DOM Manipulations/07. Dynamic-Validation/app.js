function validate() {

    const input = document.getElementById('email');
    const emailPattern = /^([a-z]+)@([a-z]+).([a-z]+)$/gm;

    input.addEventListener('change', function (event) {

        const email = input.value;
        
        if(email && emailPattern.test(email)) {

            input.classList.remove('error');

        } else {

            input.classList.add('error');
        }
    });
}