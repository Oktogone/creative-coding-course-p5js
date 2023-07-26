function setup() {
  createCanvas(600, 600);
  voronoiCellStrokeWeight(1);
	voronoiSiteStrokeWeight(3);
  voronoiCellStroke(color(250));
  voronoiSiteStroke(color(0, 0, 255));
  voronoiSiteFlag(true);
  for (var i = 0; i < 10; i++) {
		voronoiSite(random(width), random(height), color(20));
	}
  voronoi(width, height, true);
}

function draw() {
  background(20);
  voronoiDraw(0, 0, true, false);
}

function mousePressed() {
  voronoiSite(mouseX, mouseY, color(20));
  voronoi(width, height, true);
}
