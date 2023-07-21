let mappa, mapOptions, myMap;
let canvas;

function setup() {
  canvas = createCanvas(600, 600);

  // Setup map
  mappa = new Mappa('Leaflet');
  mapOptions = {
    lat: 0,
    lng: 0,
    zoom: 2,
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  }
  myMap = mappa.tileMap(mapOptions);
  myMap.overlay(canvas);
}

function draw() {}
