class Page{
    constructor(text){
        this.text = text
    }
}

class Notebook{
    constructor(pageNum){
        this.pageNum = pageNum
        this.pages = []
    }

    write(page){
        this.pages.push(page)
    }
}

class Diary extends Notebook{
    constructor(pageNum, owner){
        super(pageNum, owner)
        this.owner = JSON.stringify(owner)
    }
}

const myDiary = new Diary(50, "Shila")
const mathNotebook = new Notebook(200)
const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

// console.log(myDiary.pages[0].text)
// console.log(mathNotebook.pages[0].text)

console.log(p1 instanceof Page)
console.log(myDiary instanceof Notebook)
console.log(myDiary instanceof mathNotebook)

