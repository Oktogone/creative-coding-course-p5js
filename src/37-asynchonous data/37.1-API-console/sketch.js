function setup() {
  createCanvas(600, 600);
  let urlAPI = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10";
  httpGet(urlAPI, "json", false, callback);
}

function draw() {
  background(250);
}

function callback(data){
  console.log(data);
}
