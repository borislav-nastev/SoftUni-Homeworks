function solve(){
   
   const tbodyTr = Array.from(document.querySelectorAll('.minimalistBlack > tbody > tr'));
   tbodyTr.forEach(tr => tr.addEventListener('click', onClick));

   function onClick(event) {

      if(this.style.backgroundColor !== '') {
         this.style.backgroundColor = '';

      } else {

         tbodyTr.forEach(tr => tr.style.backgroundColor = '');
         this.style.backgroundColor = '#413f5e';
      }
   }
}
