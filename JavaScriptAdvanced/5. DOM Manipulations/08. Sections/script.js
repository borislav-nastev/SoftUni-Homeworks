function create(words) {

   const contentDiv = document.getElementById('content');

   words.map(element => {

      const div = document.createElement('div');
      const p = document.createElement('p');

      p.textContent = element;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', () => {
         p.style.display = 'block';
      });

      contentDiv.appendChild(div);
   });
}