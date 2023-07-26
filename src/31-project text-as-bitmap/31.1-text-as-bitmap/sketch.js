let steps, noiseScale;
let textBuffer;

function setup() {
  createCanvas(600, 600);
  steps = 8;
  noiseScale = 0.01;
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
      //let n = noise(x * noiseScale, y * noiseScale, radians(frameCount));
      let n = noise(x * radians(frameCount * 0.9) * noiseScale, y * radians(frameCount * 0.9) * noiseScale);
      let diameter = map(n, 0, 1, 0, 1.5 * steps);
      let grey = map(n, 0, 0.8, 50, 255);
      if( b > 50){
        push();
        translate(x, y);
        fill(grey);
        ellipse(0, 0, diameter, diameter)
        pop();
      }
    }
  }
}
