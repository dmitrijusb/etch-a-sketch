//Queries
const btnGrid = document.querySelector(".btn-grid-size");
const btnReset = document.querySelector(".btn-grid-reset");
const gridContainer = document.querySelector(".grid-container");
const gridContainerSize = document.querySelector(".grid-container-size");

//Variables
let cells = 0;

//Functions

//Function to resize the grid
function resizeGrid() {
  //Prompt to enter the Grid Size
  cells = prompt("Enter Grid Size");

  //Checking if container already has any of the div elements (avoid stacking of previously used size)
  if (gridContainer.firstChild) gridContainer.innerHTML = "";

  //Setting up the size
  gridContainerSize.setAttribute(
    "style",
    `grid-template-columns: repeat(${cells}, 1fr); grid-template-rows: repeat(${cells}, 1fr)`
  );

  cells *= cells;

  for (let i = 0; i < cells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    gridContainer.append(div);
  }
}

//Function to reset the grid
function resetGrid() {
  cells = 0;
  gridContainerSize.removeAttribute(
    "style",
    `grid-template-columns: repeat(${cells}, 1fr); grid-template-rows: repeat(${cells}, 1fr)`
  );
  gridContainer.innerHTML = "";
}

//DOM
btnGrid.addEventListener("click", resizeGrid);
btnReset.addEventListener("click", resetGrid);
