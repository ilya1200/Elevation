const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
]
 
for(let postIndex in posts){
    const post = posts[postIndex];
    const postID = post.id;

    if(postID === 2){
        posts.splice(postIndex,1)
        break
    }
}

console.log(posts)