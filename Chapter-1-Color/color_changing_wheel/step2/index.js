"use strict";

//inializes the variables as globals
//for use in the draw method

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
