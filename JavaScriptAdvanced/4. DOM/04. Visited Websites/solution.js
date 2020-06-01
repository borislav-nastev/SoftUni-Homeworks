function solve() {

document.querySelector('.middled').addEventListener('click', increaseVisited);

  function increaseVisited(event) {

    if(event.target.className === 'thin' || event.target.className === 'thick') {

      let eventParent = event.target.parentElement.parentElement;
      let textContainer = eventParent.lastChild.previousSibling;

      let textContainerContent = textContainer.textContent.split(' ');
      let visitedCount = Number(textContainerContent[1]);
      visitedCount++;

      textContainerContent[1] = visitedCount;
      textContainer.innerHTML = textContainerContent.join(' ');
    }
  }
}