let capture;
let tracker;
let positions;

function setup() {
  //GRAPHICS
  createCanvas(600, 600);
  videoBuffer = createGraphics(width,height);
  maskBuffer = createGraphics(width,height);

  //CAPTURE & TRACKER
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
  capture.size(width, height);
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function draw(){
  positions = tracker.getCurrentPosition();

  //draw the capture
  stroke(255);
  noFill();
  image(capture, 0, 0);

  // draw the mask
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < positions.length; i++) {
    vertex(positions[i][0], positions[i][1]);
  }
  endShape();
}
