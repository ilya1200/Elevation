//check spot 3
// $('h1').css("color","blue")

// $('.red-div').css("color","red")

// $('li:first-child').css("color","green")
// $('li:last-child').css("color","pink")

// $("#brown-div").css("color","brown")


//check spot 4

// $("#b1").addClass("box")
// $("#b2").addClass("box")

//check spot 5
// $("#my-input").val("Terabyte")


//check spot 6
// const barcode = $("#data-div").data().barcode;
// const expirationDate = $("#data-div").data().expirationdate;
// console.log(`Barcode: ${barcode} ,expirationDate:${expirationDate} `)

//check spot 7
// $("#hover-div").hover(function(){
//     $(this).css("background-color","blue")
// })

//check spot 7
// $("button").click(function () {
//     const value = $("#my-input").val();
//     alert(value);
// })

//check spot 8
// $('.box').hover(function(){
//     $(this).css("background-color","blue")
// })

//check spot 9

// $(".feedme").on("click", function () {
//     let divCopy = `<div class="feedme">Feed me more</div>`
//     //use template literals and $(this)
//     $("body").append(divCopy)
// })


//check spot 10

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let nameObj of names){
//     const humanDiv = `<div class='human'>${nameObj.first} - ${nameObj.last}</div>`;
//     console.log($(humanDiv))
//     $("body").append($(humanDiv))
// }

//check spot 11

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
// ]

// for(let nameObj of names){
//     const humanLI = `<li class='human'>${nameObj.first} - ${nameObj.last}</li>`;
//     $("body").on("click","li",function(){
//         $(this).css("display","none");
//     })
//     $("#list").append($(humanLI))
// }

//check spot 12

// $("button").on("click",function(){
//     const textarea = $("textarea");
//     const blogPost = textarea.val()
//     $(textarea).val("")

//     const blogPostDiv = $(`<div></div>`).addClass("blog").text(blogPost)
//     $("#blogs").append($(blogPostDiv))
// })

// $("#blogs").on("click",".blog",function(){
//     $(this).text("blargh")
// })

// let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

// for(let post of posts){
//     $("#posts").append(`
//         <div>${post.name}</div><input type="text" placeholder="say something nice" />
//     `)
// }

// posts.splice(0, 1)


$('#btn').click(alert('hi'))

 