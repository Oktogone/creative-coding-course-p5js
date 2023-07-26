let fontRegular, fontItalic;
let sampleText;

function setup() {
  createCanvas(600, 600);
  textFont("Georgia");
  textSize(20);

  // 1st parameter: LEFT, CENTER, or RIGHT
  // 2nd parameter: TOP, BOTTOM, CENTER, or BASELINE
  //textAlign(LEFT, BASELINE);
  //textStyle(ITALIC); //NORMAL, ITALIC, BOLD or BOLDITALIC
  sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}

function draw() {
  background(250);
  let x = 50;
  let y = height * 0.5;
  ellipse(50, height * 0.5, 10, 10);
  text(sampleText, x, y);
}
