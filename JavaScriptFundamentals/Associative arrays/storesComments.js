function comments(data) {

    let input = data.slice();
    let users = [];
    let articles = {};

    for (let line of input) {

        if (line.includes("user")) {
            addUsers(users, line.split(" ")[1]);

        } else if (line.includes("article")) {

            line = line.split(" ");
            line.shift();
            let currentArticle = line.join(" ");
            addArticles(articles, currentArticle);

        } else {

            line = line.split(": ");
            let [currentUser, currentArticle] = line[0].split(" posts on ");
            let [commentTitle, commentContent] = line[1].split(", ");
            makeComment(users, articles, currentUser, currentArticle, commentTitle, commentContent);
        }
    }

    let sortedArticlesByCount = Object.keys(articles)
        .sort((a, b) => articles[b].length - articles[a].length);

    for (let article of sortedArticlesByCount) {

        console.log(`Comments on ${article}`);

        articles[article]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(comment => {
                console.log(`--- From user ${comment[0]}: ${comment[1].title} - ${comment[1].content}`);
            });
    }

    function addUsers(users, user) {

        if (!users.includes(user)) {
            users.push(user);
        }

        return users;
    }

    function addArticles(articles, article) {

        if (!articles.hasOwnProperty(article)) {
            articles[article] = [];
        }

        return articles;
    }

    function makeComment(users, articles, user, article, commentTitle, commentContent) {

        if (users.includes(user) && articles.hasOwnProperty(article)) {

            let currentComment = [];
            currentComment.push(user);
            let currentCommentContent = {
                "title": commentTitle,
                "content": commentContent
            };
            currentComment.push(currentCommentContent);
            articles[article].push(currentComment);
        }

        return articles;
    }

}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);