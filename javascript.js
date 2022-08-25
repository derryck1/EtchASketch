//Links the HTML Div Class to the Javascript file
const grid = document.querySelector (".grid")


//defines questions that determine how many rows and columns there are
let rowAmount = prompt("How many rows?", 1);
let columnAmount = prompt("How many columns?", 1)

//creates grid function
let createGrid = function () {

    //for loop that creates rows, based off previous question then appends them to the page
    for (i = 1; i <= rowAmount; i++) {
        let a = 1;
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
 
//Event Handlers for CreateGridFunction
//-----------------------------------------------
 //creates NodeList that selects all elements with id of "square"
const squares = document.querySelectorAll ("#square")

//loops through the nodelist and adds an eventListener to each node that runs addColor when
//the element is moused over
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", addColor)
    }
} 

//Creates the actual grid
 createGrid();

 //Grid Resettng
 //Creates Button Element 
 newGrid = document.createElement("button");
 //Sets Button to an ID and gives it the tag of resetButton
 newGrid.setAttribute("id", "resetButton");
 newGrid.innerText = "New Grid?"
 //appends button to body
document.body.insertBefore(newGrid, grid);
 //Creates a button Click Event that runs resetGrid on button click
 newGridButtonClick = document.querySelector("#resetButton").addEventListener("click", resetGrid)

//Resets The Grid
//Selects the Grid and wipes the innerHTML (old grid)
//Asks question of how many squares should be in new Grid and sets that to columnRow and rowAmount/
//Runs create CreateGrid
function resetGrid() {
    document.querySelector(".grid").innerHTML = "";
    newSquareAmount = prompt("How many squares?", "1") 
    columnAmount = newSquareAmount
    rowAmount = newSquareAmount
    createGrid();
}

//Sets the style of the element in question.
 function addColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.cssText = `height: 20px; width: 20px; border:solid; border-color:black; background-color:#${randomColor};`
    console.log(this.style.cssText)
}


