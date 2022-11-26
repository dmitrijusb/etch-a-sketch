"use strict";

//Queries
const btnGrid = document.querySelector(".btn-grid-size");
const btnReset = document.querySelector(".btn-grid-reset");
const gridContainer = document.querySelector(".grid-container");
const gridContainerSize = document.querySelector(".grid-container-size");
const btnRgb = document.querySelector(".btn-rgb");

//Variables
let cells, color, counter;
let rgb = false;

//Functions

//Function to resize the grid
function setGridSize() {
  //Checking if container already has any of the div elements (avoid stacking of previously used size)
  if (gridContainer.firstChild) gridContainer.innerHTML = "";

  //Prompt to enter the Grid Size
  do {
    cells = prompt("Enter number of squares per side:");
  } while (cells < 0 || cells > 100 || isNaN(cells));

  //Setting up the size
  gridContainerSize.setAttribute(
    "style",
    `grid-template-columns: repeat(${cells}, 1fr); grid-template-rows: repeat(${cells}, 1fr)`
  );

  //Creating the divs
  cells *= cells;
  for (let i = 0; i < cells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    gridContainer.append(div);
  }

  //Calling coloring function
  colorGrid();
}

//Function to reset the grid
function resetGrid() {
  document.querySelectorAll(".cell").forEach((c) => c.removeAttribute("style"));
}

//Function to color the grid
function colorGrid() {
  const cell = document.querySelectorAll(".cell");
  counter = 0;

  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", function (e) {
      if (rgb) color = getRandomRgb();
      else color = "black";
      e.target.style.background = color;
    });
  }
}

//Function to generate rgb value
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//DOM
btnGrid.addEventListener("click", setGridSize);
btnReset.addEventListener("click", resetGrid);
btnRgb.addEventListener("click", function () {
  rgb = !rgb;
  btnRgb.classList.toggle("btn-rgb-active");
});
