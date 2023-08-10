function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
}

function keyPressed(){
  console.log("keyPressed");
  console.log("key", key);
  console.log("keyCode", keyCode);
  console.log("--------\n");
}

function keyReleased(){
  console.log("keyReleased");
  console.log("key", key);
  console.log("keyCode", keyCode);
  console.log("--------\n");
}
