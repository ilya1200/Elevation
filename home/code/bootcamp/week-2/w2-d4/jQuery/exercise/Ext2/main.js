$(".item").click(function () {
    const item = $(this).text()
    const isInstock = $(this).data().instock;
    
    if (!isInstock) {
        return;
    }

    const itemSearchId = item.toLowerCase();
    //check if the item already in cart
    if($("#"+itemSearchId).length){
        const searchedItem = $("#"+itemSearchId)

        const times =  parseInt($(searchedItem).data().times) + 1
        $(searchedItem).data().times = times;

        const div = `<div class="cart-item" id=${itemSearchId} data-times=${times}>${item} * ${times}</div>`
        searchedItem.html(div)
    }else{
        //Append new Item
        const div = `<div class="cart-item" id=${itemSearchId} data-times="1">${item}</div>`;
        $("#cart").append(div);
    }
})