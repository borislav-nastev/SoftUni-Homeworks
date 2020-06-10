function solve() {

   const table = document.querySelector('.container');
   const input = document.getElementById('searchField');
   const btn = document.getElementById('searchBtn');

   btn.addEventListener('click', (e) => {

      const value = input.value;
      const tableRows = Array.from(table.querySelectorAll('tbody > tr'));
      
      tableRows.forEach(row => {

         if(row.textContent.includes(value)) {
            row.classList.add('select');

         } else {
            row.classList.remove('select');
         }
      });

      input.value = '';
   });
}