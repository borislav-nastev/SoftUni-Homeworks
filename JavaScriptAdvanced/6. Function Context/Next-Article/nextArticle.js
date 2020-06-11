function getArticleGenerator(articles) {
    
    const container = document.getElementById('content');
    let index = 0;
    
    return function() {

        if(index <= articles.length - 1) {

            const article = document.createElement('article');
            article.textContent = articles[index];
            container.appendChild(article);
            index++;
        }
    }
}
