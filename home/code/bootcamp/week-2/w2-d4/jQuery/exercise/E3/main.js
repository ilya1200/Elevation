const box = `<div class="box"></div>`

const bg1 = "#8e44ad"
const bg2 = "brown"

$("body").append(box);
$("body").append(box);

$("body").on("mouseenter", '.box', function () {
    if (rgb2hex($(this).css('background-color')) !== bg1) {
        $(this).css('background-color', bg1)
        return;
    }

    $(this).css('background-color', bg2)
})


function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}