const posts = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [{ id: 1, text: "Idiot has no idea" }, { id: 2, text: "Fool!" }, { id: 3, text: "I agree!" }]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]


const postID = 2;
let searchedPost;
for (let post of posts) {
    if (post.id === postID) {
        searchedPost = post;
        break;
    }
}

console.log(searchedPost)

const commentID = 3;
const comments = searchedPost.comments;
for (let commentIndex in comments) {
    const comment = comments[commentIndex];
    if (comment.id === commentID) {
        comments.splice(commentIndex,1);
        break;
    }
}

console.log(comments)


