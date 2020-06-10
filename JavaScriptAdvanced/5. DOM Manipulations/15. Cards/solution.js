function solve() {

   const gameSection = document.querySelector('.cards');
   const resultSection = document.querySelectorAll('#result > span');
   const firstPlayerSelectedCardValue = resultSection[0];
   const secondPlayerSelectedCardValue = resultSection[2];
   const history = document.getElementById('history');

   let firstPlayerCard = '';
   let secondPlayerCard = '';
   let historyArr = '';

   gameSection.addEventListener('click', play);

   function play(event) {

      const parentElementId = event.target.parentElement.getAttribute('id');

      if (parentElementId === 'player1Div' && !firstPlayerSelectedCardValue.textContent) {

         firstPlayerCard = event.target;
         firstPlayerSelectedCardValue.textContent = firstPlayerCard.name;
         event.target.src = './images/whiteCard.jpg';

      } else if (parentElementId === 'player2Div' && !secondPlayerSelectedCardValue.textContent) {
         
         secondPlayerCard = event.target;
         secondPlayerSelectedCardValue.textContent = secondPlayerCard.name;
         event.target.src = './images/whiteCard.jpg';
      }

      if (firstPlayerCard && secondPlayerCard) {
         checkWinner();
      }

   }

   function checkWinner() {

      if (Number(firstPlayerCard.name) > Number(secondPlayerCard.name)) {
         firstPlayerCard.style.border = '2px solid green';
         secondPlayerCard.style.border = '2px solid red';

      } else if (Number(secondPlayerCard.name) > Number(firstPlayerCard.name)) {
         firstPlayerCard.style.border = '2px solid red';
         secondPlayerCard.style.border = '2px solid green';
      }

      historyArr += `[${firstPlayerCard.name} vs ${secondPlayerCard.name}] `;
      history.textContent = historyArr;

      firstPlayerCard = '';
      secondPlayerCard = '';
      firstPlayerSelectedCardValue.textContent = '';
      secondPlayerSelectedCardValue.textContent = '';
   }
}