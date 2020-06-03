function solve() {

  let counter = 0;
  let correctAnswers = 0;
  const correctAnswerArr = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  
  const questions = document.querySelectorAll('.quiz-step');
  const buttons = document.querySelectorAll('.quiz-answer');
  const result = document.querySelector('.results-inner h1');
  const resultContainer = document.getElementById('results');

  buttons.forEach(button => {
    button.addEventListener('click', quiz);
  });

  function quiz(event) {

    let givenAnswer = event.target.textContent;

    if (correctAnswerArr.includes(givenAnswer)) {
      correctAnswers++;
    }

    if (questions.length > counter) {

      questions[counter].parentElement.style.display = 'none';
      let nextSection = questions[++counter];

      if (nextSection) {
        nextSection.parentElement.style.display = 'block';
      }
    }

    if (counter >= questions.length) {

      if (correctAnswers === 3) {
        result.textContent = 'You are recognized as top JavaScript fan!';

      } else {
        result.textContent = `You have ${correctAnswers} right answers`;
      }

      resultContainer.style.display = 'block';
    }
  }
}
