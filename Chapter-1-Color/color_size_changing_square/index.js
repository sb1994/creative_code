"use strict";

function setup() {
  createCanvas(720, 720);
  noCursor(); //shows no cursor on the screen when over the canvas

  colorMode(HSB, 360, 100, 100); //sets the color mode to hsb
  //sets the first point of the
  //rectangle to the centre of the rec
  rectMode(CENTER);
  noStroke();
}

function draw() {
  //sets the red color of the backgroud to
  //half the value of the mouseY value
  background(mouseY / 2, 100, 100);
  //same as the backgroud
  fill(360 - mouseY / 2, 100, 100);
  //sets the x,y location of the rect to 360
  //it also sets the size to the value of mouseX
  rect(360, 360, mouseX + 1, mouseX + 1);
}

function keyPressed() {
  if (key == "s" || key == "S") saveCanvas(gd.timestamp(), "png");
}
