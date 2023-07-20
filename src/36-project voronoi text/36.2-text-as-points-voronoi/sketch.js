let font, fontPoints, fontSize;

function preload(){
  font = loadFont("../../assets/font/IBMPlexMono-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  textFont(font);
  fontSize = 400;
  textSize(fontSize);
  fontPoints = font.textToPoints("W", width * 0.3, height * 0.7, fontSize);
  voronoiCellStrokeWeight(1);
  voronoiCellStroke(color(250));
  voronoiSiteFlag(true);
  createVoronoi();
}

function draw() {
  background(20);
  voronoiDraw(0, 0, false, false);
}

function keyTyped() {
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    fontPoints = font.textToPoints(key, width * 0.3, height * 0.7, fontSize);
    createVoronoi();
  }
}

function createVoronoi(){
  voronoiClearSites();
  for (let i = 0; i < fontPoints.length; i+=2) {
    let p = fontPoints[i];
    voronoiSite(p.x, p.y);
  }
  voronoi(width, height, true);
}
