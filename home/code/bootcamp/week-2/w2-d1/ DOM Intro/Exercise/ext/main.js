document.addEventListener('keydown', logKey);

function logKey(e) {

  switch(e.code){
      case "ArrowUp": moveUp();
      break;

      case "ArrowDown":moveDown();
      break;

      case "ArrowLeft":moveLeft();
      break;

      case "ArrowRight":moveRight();
      break;
  }
}

const moveUp = function(){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top -= 15
    block.style.top = top + "px"
}


const moveDown = function(){
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top += 15
    block.style.top = top + "px"
}

const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}

const moveLeft = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"
}