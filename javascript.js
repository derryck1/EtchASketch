//Links the HTML Div Class to the Javascript file
const grid = document.querySelector (".grid")
let a = 1;

//creates grid function
let createGrid = function () {

//defines questions that determine how many rows and columns there are
    let rowAmount = prompt("How many rows?", 1);
    let columnAmount = prompt("How many columns?", 1)

    //for l// create first amount of grids based on amount of columns
//skip to second row after column amount has been reache d.


 //event Handlersp that creates rows, based off previous question
    for (i = 1; i <= rowAmount; i++) {
        const row = document.createElement ("div")
        row.setAttribute  ("id", "row" + i)
        row.style.cssText = "display:flex; margin: 1px; gap: 1px;"
        grid.append(row);
        
        //for loop that creates columns based off previous question. uses holder value a to store square amount
        //rather than i otherwise when creating new rows would create a each square in a new row starting at 1
            for (let i = 1; i <= columnAmount; i++) { 
                const square = document.createElement ("div")
                square.setAttribute ("id", "square")
                square.style.cssText  = "height: 20px; width: 20px; border:solid;"
                row.append(square)
                a += 1;   
            }
        }
    }

//Creates the actual grid
 createGrid();


 //Event Handlers
 //-----------------------------------------------

 //creates NodeList that selects all elements with id of "square"
const squares = document.querySelectorAll ("#square")

//loops through the nodelist and adds an eventListener to each node that runs addColor when
//the element is moused over
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", addColor)
}

//Sets the style of the element in question.
 function addColor() {
    this.style.cssText = `height: 20px; width: 20px; border:solid; border-color:black; background-color:red ;`
}
