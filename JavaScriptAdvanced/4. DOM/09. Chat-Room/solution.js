function solve() {
   
   const elements = {
      btn: document.getElementById('send'),
      input: document.getElementById('chat_input'),
      messageContainer: document.getElementById('chat_messages'),
   }

   elements.btn.addEventListener('click', loadMessage);

   function loadMessage() {

      let message = elements.input.value;

      if(message) {

         let div = document.createElement('div');
         let classes = ['message', 'my-message'];

         div.classList.add(...classes);
         div.textContent = message;

         elements.messageContainer.appendChild(div);
         elements.input.value = '';
      }
   }
}


