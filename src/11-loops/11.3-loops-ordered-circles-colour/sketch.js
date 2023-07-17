let colours;
let size;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  colours = [
    color(214, 81, 49),
    color(157, 83, 122),
    color(237, 150, 58),
    color(68, 87, 217),
    color(237, 205, 69),
    color(255, 255, 255),
    color(0, 255, 255),
    color(0, 255, 0)
  ];
  size = width / colours.length;
}

function draw() {
  background(20);
  for(let i = 0; i < colours.length; i++){
    fill(colours[i]);
    ellipse(size * 0.5 + size * i, height * 0.5, size, size);
  }
}
