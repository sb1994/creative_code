"use strict";

//inializes the variables as globals
//for use in the draw method
var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw() {
  //bases the number of rows and col on where the mouse
  //point is
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  for (let gridY = 0; gridY < height; gridY += stepY) {
    //makes the cols in the x pos
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
