function solve() {

  const elements = {
    dataInput: document.getElementById('input'),
    outputContainer: document.getElementById('output'),
  }

  let data = elements.dataInput.textContent
    .split('.')
    .filter(el => el !== '');

  createElements(data);

  function createElements(dataArr) {

    let currentIndex = 0;
    let countP = Math.ceil(dataArr.length / 3);

    while (countP !== 0) {

      let currentPContent = '';
      let finalIndex = currentIndex + 3;

      for (let i = currentIndex; i < finalIndex; i++) {
      
        if(!dataArr[i]) {
          break;
        }
  
        currentPContent += dataArr[i] + '.';
        currentIndex++;
      }

      createP(currentPContent);
      countP--;
    }
  }

  function createP(text) {
    let p = document.createElement('p');
    p.textContent = text;
    elements.outputContainer.appendChild(p);
  }
}