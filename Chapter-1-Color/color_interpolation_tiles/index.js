"use strict";

var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  //maps the tile count based on the location of mouseX/Y
  tileCountX = int(map(mouseX, 0, width, 2, 100));
  tileCountY = int(map(mouseY, 0, height, 2, 10));

  //Sets the tile width and height based on the width of the canvas
  //and the number of
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol; //colored column inbetween left and right that blends the 2
  colors = []; //array of colors

  //loops starts drawing in the Y axis
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    //sets the colors of each
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);
      //checks the color mode and switches inbetween
      if (interpolateShortest) {
        // switch to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        // switch back
        colorMode(HSB);
      } else {
        //sets the color of the blending column
        interCol = lerpColor(col1, col2, amount);
      }
      //sets the fill of the blending column
      fill(interCol);

      //draw the the individual tiles
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      colors.push(interCol);
    }
  }
}

//creates a random swashe of colors Left and right based on the number of tile in Y
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == "c" || key == "C")
    writeFile([gd.ase.encode(colors)], gd.timestamp(), "ase");
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
  if (key == "1") interpolateShortest = true;
  if (key == "2") interpolateShortest = false;
}
