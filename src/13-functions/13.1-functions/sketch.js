function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(250);
}

function hello(){
  console.log("hello");
}

function hello(name){
  console.log("hello " + name);
}

function randomInt(min, max) {
  return Math.floor(random(min, max));
}
