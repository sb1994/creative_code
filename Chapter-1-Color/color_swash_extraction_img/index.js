var img;
var colors;
var sortMode = null; //

function preload() {
  //loads the img into an img object
  img = loadImage("data/pic1.jpg");
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
  //sets the tile count to the width /mouseX||5 so that the mousex is never greater then the width
  var tileCount = floor(width / max(mouseX, 5));
  //sets the size of the rectangles that will be drawn
  var rectSize = width / tileCount;
  //loads the image onscreen
  img.loadPixels();

  //initializes the colors as an empty array
  colors = [];
  //loop that will capture the pixels of the image to create the colors for the swash
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      //gets pixels X/Y of the image
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      //gets the size of the pixel
      var i = (py * img.width + px) * 4;
      //creates the color based on the pixels one after each other
      var c = color(
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3]
      );
      //adds the color to the array that will be draw
      colors.push(c);
    }
  }

  //sorts the mode of color that the colors will be drawn
  gd.sortColors(colors, sortMode);

  var i = 0;
  //draws the
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      //draws the location first tile based the sized of the tile
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  //save the canvas as an ase file that can be imported in a photo editing tool as a swash
  if (key == "c" || key == "C")
    writeFile([gd.ase.encode(colors)], gd.timestamp(), "ase");
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");

  if (key == "1") img = loadImage("data/pic1.jpg");
  if (key == "2") img = loadImage("data/pic2.jpg");
  if (key == "3") img = loadImage("data/pic3.jpg");
  if (key == "4") img = loadImage("data/pic4.jpg");

  //sets the differnt color modes
  if (key == "5") sortMode = null;
  if (key == "6") sortMode = gd.HUE;
  if (key == "7") sortMode = gd.SATURATION;
  if (key == "8") sortMode = gd.BRIGHTNESS;
  if (key == "9") sortMode = gd.GRAYSCALE;
}
