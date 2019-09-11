let div1 = "<div id=div1 class=box></div>"
let div2 = "<div id=div2 class=box></div>"
$("body").append(div1)
$("body").append(div2)
let flag = true
$("div").on("mouseenter", function () {
    if (flag) {
        $("#div1").css("background-color", "red")
        $("#div2").css("background-color", "purple")
        flag = false
    }
    else {
        $("#div1").css("background-color", "purple")
        $("#div2").css("background-color", "red")
        flag = true
    }
}