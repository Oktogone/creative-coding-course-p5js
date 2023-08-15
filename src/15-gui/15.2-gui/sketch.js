var sizeShape, colorBg, colorShape, shape, displayShape;
let GUI;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  noStroke();

  //GUI settings
  sizeShape = 100;
  colorBg = [250, 250, 250];
  colorShape = [255, 0, 0];
  shape = ["rectangle", "ellipse"];
  displayShape = true;
  GUI = createGui("GUI");
  sliderRange(0, 1000, 10);
  GUI.addGlobals('sizeShape', 'colorBg', 'shape', 'display', "colorShape");
}

function draw() {
  background(colorBg);

  //rotate and draw the moving rectangle
  push();
  translate(width * 0.5, height * 0.5);
  rotate(radians(frameCount));
  fill(20);
  rect(0, 0, 20, 300);
  pop();

  //draw the fixed rectangle
  if(displayShape){
    fill(colorShape);
    if(shape === "rectangle"){
      rect(width * 0.5, height * 0.5, sizeShape, sizeShape);
    }
    else if(shape === "ellipse"){
      ellipse(width * 0.5, height * 0.5, sizeShape, sizeShape);
    }
  }
}
