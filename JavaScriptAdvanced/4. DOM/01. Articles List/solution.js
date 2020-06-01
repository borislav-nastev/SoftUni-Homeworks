function createArticle() {

	const elements = {
		titleInput: document.getElementById('createTitle'),
		contentInput: document.getElementById('createContent'),
		articleContainer: document.getElementById('articles'),
	}

	const articleTitle = elements.titleInput.value;
	const articleContent = elements.contentInput.value;

	if (articleTitle && articleContent) {

		let article = document.createElement('article');
		let titleContainer = document.createElement('h3');
		let contentContainer = document.createElement('p');

		titleContainer.textContent = articleTitle;
		contentContainer.textContent = articleContent;

		article.appendChild(titleContainer);
		article.appendChild(contentContainer);
		elements.articleContainer.appendChild(article);
	}

	elements.titleInput.value = '';
	elements.contentInput.value = '';
}