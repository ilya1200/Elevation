const obj = {
    item: "apple",
    toBeginning :false,
    items: ["banana","orange","lemon"]
};

if(obj.toBeginning){
    obj.items.unshift(obj.item);
}else{
    obj.items.push(obj.item);
}

console.log(obj)