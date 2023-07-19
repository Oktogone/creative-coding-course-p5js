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
  if(positions[0]) {
    noFill();
    stroke(255);
    beginShape();
    for (let i = 19; i <= 22; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    beginShape();
    for (let i = 15; i <= 18; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    beginShape();
    for (let i = 0; i <= 14; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    beginShape();
    for (let i = 34; i <= 40; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    beginShape();
    for (let i = 44; i <= 50; i++) {
      vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    beginShape();
    vertex(positions[33][0], positions[33][1]);
    vertex(positions[41][0], positions[41][1]);
    vertex(positions[62][0], positions[62][1]);
    endShape();
  }

}
