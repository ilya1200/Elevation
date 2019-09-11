const container = document.getElementById("container");
const boxes = 6;


function createBoxes(boxes){
    for (let i = 0; i < boxes; i++) {
        const box = createBox();
        setColor(box);
        container.appendChild(box);

        box.onmouseenter = function(){
            setColor(this)
        }
    }
}

function createBox(){
    const box = document.createElement("div");
    box.className = "box";
    return box;
}

function setColor(box){
    let color = generateRandomColor();
    box.style.backgroundColor = color;
}

function generateRandomColor(){
    const low = 0;
    const high = 255;

    const color={};

    color.red = randNumber(low,high);
    color.green = randNumber(low,high);
    color.blue = randNumber(low,high);

    return `rgb(${color.red}, ${color.green},${color.blue})`
}

function randNumber(lower,upper){
    return Math.floor( Math.random()*(upper-(lower)+1) )+(lower);
}

createBoxes(boxes);

