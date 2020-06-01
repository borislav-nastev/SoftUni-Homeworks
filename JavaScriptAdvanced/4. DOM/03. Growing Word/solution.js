const growingWord = (function () {

  let counter = 1;

  return function () {

    const colors = {
      0: 'red',
      1: 'blue',
      2: 'green',
    };

    let words = document.querySelector('#exercise p');
    let size = window.getComputedStyle(words).fontSize.replace('px', '');

    words.style.fontSize = (size == 0 ? '2' : size * 2) + 'px';
    words.style.color = colors[counter % 3];

    counter++;
  }
})();

