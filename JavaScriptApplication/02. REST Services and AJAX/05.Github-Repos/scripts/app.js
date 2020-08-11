function loadRepos() {

	const usernameInput = document.getElementById('username');
	const reposContainer = document.getElementById('repos');

	const username = usernameInput.value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(response => response.json())
		.then(data => loadInfo(data))
		.catch(error => console.error(error))

	function loadInfo(data) {

		reposContainer.innerHTML = '';

		if(data) {

			data.forEach(element => {
				const currentLi = document.createElement('li');
				const currentA = document.createElement('a');
	
				currentA.setAttribute('href', element.html_url);
				currentA.textContent = element.full_name;
	
				currentLi.appendChild(currentA);
				reposContainer.appendChild(currentLi);
			});

		} else {

			reposContainer.textContent = '404 Not Found';
		}

		usernameInput.value = '';
	}
}