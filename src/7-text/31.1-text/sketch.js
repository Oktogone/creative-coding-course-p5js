let fontRegular, fontItalic;
let sampleText;

function preload(){
  fontRegular = loadFont("../../assets/font/IBMPlexMono-Regular.ttf");
  fontItalic = loadFont("../../assets/font/IBMPlexMono-Italic.ttf");
}

function setup() {
  createCanvas(600, 600);
  //textFont("Georgia");
  textFont("EB Garamond");
  textSize(20);

  // 1st parameter: LEFT, CENTER, or RIGHT
  // 2nd parameter: TOP, BOTTOM, CENTER, or BASELINE
  //textAlign(LEFT, BASELINE);
  //textStyle(ITALIC); //NORMAL, ITALIC, BOLD or BOLDITALIC
  sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}

function draw() {
  background(250);
  stroke(200);
  line(0, height * 0.5, width, height * 0.5);
  line(50, 0, 50, height);
  //fill(255, 0, 0);
  text(sampleText, 50, height * 0.5);
}
