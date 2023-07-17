let colours;

function setup() {
  createCanvas(600, 600);
  colours = [
    color(214, 81, 49),
    color(157, 83, 122),
    color(237, 150, 58),
    color(68, 87, 217),
    color(237, 205, 69),
    color(255, 255, 255),
    color(0, 0, 0),
    color(152, 152, 152),
    color(106, 159, 58)
  ];
  frameRate(10);
}

function draw() {
  let colorPicker = Math.floor(random(0, colours.length));
  background(colours[colorPicker]);
}
