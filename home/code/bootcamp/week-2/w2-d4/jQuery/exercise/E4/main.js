$(".item").click(function(){
    const item = $(this).text()
    const isInstock = $(this).data().instock;
    
    if(!isInstock){
        return;
    }

    const div = `<div class="cart-item">${item}</div>`;
    $("#cart").append(div);
})