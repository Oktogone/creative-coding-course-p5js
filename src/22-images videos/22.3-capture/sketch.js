let capture;

function setup() {
  capture = createCapture(VIDEO, function(){
    createCanvas(capture.width, capture.height);
  });
  capture.hide();
}

function draw() {
  background(20);
  image(capture, 0, 0);
}
