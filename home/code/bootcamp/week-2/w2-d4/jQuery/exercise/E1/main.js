$("button").on("click",function(){
    let inputValue = $("input").val();
    $("input").val("");

    if(!inputValue || !inputValue.trim()){
        return;
    }

    inputValue = inputValue.trim();
    const humanName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    const li = `<li>${humanName}</li>`

    $("ul").append(li);
})

$("ul").on("click","li",function(){
    $(this).remove();
})