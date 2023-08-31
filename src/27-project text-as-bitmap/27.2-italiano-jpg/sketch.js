//Sketch inspired by the creation of italiano.jpg
//https://www.instagram.com/italiano.jpg/

let steps, noiseScale;
let textBuffer;

function setup() {
  createCanvas(600, 600);
  steps = 20;
  noiseScale = 0.01;
  rectMode(CENTER);
  setupBuffer();
}

function setupBuffer() {
  textBuffer = createGraphics(width, height);
  textBuffer.textFont('Georgia');
  textBuffer.textAlign(CENTER, CENTER);
  textBuffer.textSize(500);
  textBuffer.fill(250);
  textBuffer.text("W", width * 0.5, height * 0.5 + 30);
}

function draw() {
  background(20);
  for (let x = 0; x < textBuffer.width; x += steps) {
    for (let y = 0; y < textBuffer.height; y += steps) {
      let c = textBuffer.get(x, y);
      let b = brightness(c);
      if( b > 50){
        push();
        translate(x, y);
        let n = noise(x * radians(frameCount * 0.5) * noiseScale, y * radians(frameCount * 0.5) * noiseScale);
        if(n > 0.5) {
          stroke(20);
          fill(255, 0, 0);
        }
        else if(n < 0.5 && n > 0.3) {
          stroke(20);
          fill(255, 255, 255);
        }
        else{
          stroke(255, 0, 0);
          fill(100, 0, 0);
        }
        rect(0, 0, steps, steps)
        pop();
      }
    }
  }
}
