//Links the HTML Div Class to the Javascript file
const grid = document.querySelector (".grid")


let createGrid = function () {
    let rowAmount = prompt("How many rows?", 1);
    let columnAmount = prompt("How many columns?", 1)


    for (i = 1; i <= rowAmount; i++) {
        const row = document.createElement ("div")
        row.setAttribute  ("id", "row" + i)
        row.style.cssText = "display:flex; margin: 1px; gap: 1px;"
        grid.append(row);

        for (let i = 1; i <= columnAmount; i++) {
            const square = document.createElement ("div")
            square.setAttribute ("id", "square" + i)
            square.style.cssText  = "height: 20px; width: 20px; border:solid;"
            row.append(square)
    }
    

 }





 }
  
 createGrid();


// create first amount of grids based on amount of columns
//skip to second row after column amount has been reache d.



