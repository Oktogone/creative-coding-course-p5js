let capture;
let tracker;
let positions;

//Buffers
let videoBuffer;
let maskBuffer;

function setup() {
  //GRAPHICS
  createCanvas(600, 600);
  videoBuffer = createGraphics(width,height);
  maskBuffer = createGraphics(width,height);

  //CAPTURE & TRACKER
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', '');
  capture.size(width, height);
  capture.hide();
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  //set interval mask
  setInterval(makeMask, 2000);
  //set interval clear mask
  setInterval(clearMask, 10000);
}

function draw(){
  positions = tracker.getCurrentPosition();

  //draw the capture
  videoBuffer.stroke(255);
  videoBuffer.noFill();
  videoBuffer.tint(0, 0, 255, 200)
  videoBuffer.image(capture, 0, 0);

  //videoBuffer
  image(videoBuffer,0,0);

  // draw the mask
  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < positions.length; i++) {
    curveVertex(positions[i][0], positions[i][1]);
  }
  endShape();

  //maskBuffer
  image(maskBuffer, 0, 0);
}


function makeMask(){
  maskBuffer.noFill();
  maskBuffer.stroke(255);
  maskBuffer.beginShape();
  for (let i = 0; i < positions.length; i++) {
    curveVertex(positions[i][0], positions[i][1]);
  }
  maskBuffer.endShape();
}

function clearMask(){
  maskBuffer.clear();
}
