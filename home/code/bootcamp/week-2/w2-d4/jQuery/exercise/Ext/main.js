
const spans = $("span")

for(let span of spans){
    const $span = $(span)
    $span.addClass("picker");
    const color = $span.data().color;
    $span.css("background-color",color)

    $($span).on("click",function(){
        $(".box").css("background-color",color)
    })
}

