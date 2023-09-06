//Sketch inspired by the creation of Matt DesLauriers
//https://www.mattdesl.com/

let audio, fft, nbreFreqs;
let margin, drawWidth, drawHeight, cellW;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);

  fft = new p5.FFT();
  fft.setInput(audio);

  margin = 100;
  drawWidth = width - 2 * margin;
  drawHeight = height - 2 * margin;
  nbreFreqs = 15;
  cellW = drawWidth / nbreFreqs;

  noFill();
  stroke(20);
  strokeWeight(3);
}

function draw(){
  background(250);
  translate(margin, height * 0.5);
  randomSeed(1);

  let spectrum = fft.analyze();
  for (let i = 0; i < nbreFreqs; i ++){
    let x = i * cellW;
    let y = 0;
    let w = cellW * random(0, 0.8);
    let h = map(spectrum[i], 0, 255, 0, drawHeight * 0.5);
    if(random() > 0.5) h *= -1;
    rect(x, y, w, h);
  }
}

function keyTyped() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}
