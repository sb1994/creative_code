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
  //sets the number of rows and colums
  //to a static number to start
  // stepX = width / 2;
  stepY = height / 10;

  //draws rows in the y axis based on the number of steps and while the
  //height of the grid is less then the height of the canvas
  for (let gridY = 0; gridY < height; gridY += stepY) {
    //sets the color of the rows in the red color
    //besed on where the index for the loop is at the current time
    fill(gridY + 20, 200, 150);
    //where and size that the rect will be drawn at
    rect(0, gridY, width, stepY);
  }
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
