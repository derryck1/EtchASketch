//Links the HTML Div Class to the Javascript file
const grid = document.querySelector (".Grid")




let rowAmount = prompt("How many rows?", 1);
let columnAmount = prompt("How many columns?", 1)


let createGrid = function () {
    let squareAmount = rowAmount * columnAmount;

    for (let i = 1; i <= squareAmount; i++) {
        const square = document.createElement ("div")
        square.setAttribute ("id", "square" + i)
        grid.append(square)
    }
 }
  
 createGrid();


//Append first square of grid
//If i < squaure amount
 //add the ID attribute and properly name the ID attribute
//append newly created square to Grid



