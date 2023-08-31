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
        let brightness = n * 255;
        fill(brightness);
        rect(0, 0, steps, steps)
        pop();
      }
    }
  }
}
