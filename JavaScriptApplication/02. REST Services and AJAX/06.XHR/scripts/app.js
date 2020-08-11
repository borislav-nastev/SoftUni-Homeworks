function loadRepos() {
   const outputContainer = document.getElementById('res');
   const url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
      .then(response => response.json())
      .then(data => outputContainer.textContent = JSON.stringify(data))
      .catch(error => console.error(error))
}