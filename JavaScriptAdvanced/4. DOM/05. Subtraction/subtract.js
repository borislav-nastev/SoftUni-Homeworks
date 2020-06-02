function subtract() {
    
    let firstNumberInput = document.getElementById('firstNumber');
    let secondNumberInput = document.getElementById('secondNumber');
    let outputContainer = document.getElementById('result');

    let firstNumber = Number(firstNumberInput.value);
    let secondNumber = Number(secondNumberInput.value);
    let result = firstNumber - secondNumber;

    outputContainer.textContent = result;
}