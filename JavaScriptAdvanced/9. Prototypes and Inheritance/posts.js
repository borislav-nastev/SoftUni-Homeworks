function solve() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {

            const output = [];
            output.push(`Post: ${this.title}`);
            output.push(`Content: ${this.content}`);
            return output.join('\n');
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {

            const superString = super.toString();
            const output = [];
            output.push(superString);

            if (this.likes && this.dislikes) {
                output.push(`Rating: ${this.likes - this.dislikes}`);
            }

            if (this.comments && this.comments.length > 0) {
                output.push('Comments:');
                this.comments.forEach(comment => {
                    output.push(` * ${comment}`);
                });
            }

            return output.join('\n');
        }
    }

    class BlogPost extends Post {

        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            
            const superString = super.toString();
            const output = [];
            output.push(superString);

            if (this.views) {
                output.push(`Views: ${this.views}`);
            }

            return output.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
