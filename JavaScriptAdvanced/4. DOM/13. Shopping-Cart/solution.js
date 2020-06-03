function solve() {

   let totalPrice = 0;
   const products = [];

   const elements = {
      addButtons: Array.from(document.querySelectorAll('.add-product')),
      checkOutBtn: document.querySelector('.checkout'),
      textArea: document.querySelector('textarea')
   }

   elements.addButtons.forEach(button => {
      button.addEventListener('click', addProduct);
   });

   function addProduct(event) {

      let productContainer = event.target.parentElement.parentElement;
      let product = productContainer.childNodes[3].childNodes[1].textContent;
      let price = productContainer.childNodes[7].textContent;

      let message = `Added ${product} for ${price} to the cart.\n`;
      totalPrice += Number(price);
      elements.textArea.textContent += message;

      if (!products.includes(product)) {
         products.push(product);
      }
   }

   elements.checkOutBtn.addEventListener('click', buyProducts);

   function buyProducts() {

      let message = `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
      elements.textArea.textContent += message;

      elements.addButtons.forEach(button => button.disabled = true);
      elements.checkOutBtn.disabled = true;
   }
}