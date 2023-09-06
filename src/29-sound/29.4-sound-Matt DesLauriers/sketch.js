//Sketch inspired by the creation of Matt DesLauriers
//https://www.mattdesl.com/

let audio, fft, nbreFreqs;
let margin, fftWidth, fftHeight, gapFreqs;

function preload() {
  audio = loadSound('../../assets/sounds/Lonely in the Bar by Diego Nava.m4a');
}

function setup() {
  createCanvas(600, 600);

  fft = new p5.FFT();
  fft.setInput(audio);

  margin = 100;
  fftWidth = width - 2 * margin;
  fftHeight = height - 2 * margin;
  nbreFreqs = 15;
  gapFreqs = fftWidth / nbreFreqs;

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
    let x = i * gapFreqs;
    let y = 0;
    let w = gapFreqs * random(0, 0.8);
    let h = map(spectrum[i], 0, 255, 0, fftHeight * 0.5);
    if(random() > 0.5) h *= -1;
    rect(x, y, w, h);
  }
}

function keyTyped() {
  if (audio.isPlaying()) audio.pause();
  else audio.play();
}
