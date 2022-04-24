let sun;
let earth;
let moon;
let camX;

function preload() {
  sun = loadImage('sun.jpg');
  earth = loadImage('earth_day.jpg');
  moon = loadImage('moon_2.jpg');
}

function setup() {
  createCanvas(1100, 700, WEBGL);

  camX = 800;
}

function draw() {
  background(0);

  ambientLight(100);
  pointLight(250, 250, 250, 0, 0, -450);

  camera(camX, 0, 0, 0, 0, 0, 0, 1, 0);

  //sun
  push();
  ambientLight(255);
  noStroke();
  translate(0, 0, -450);
  texture(sun);
  sphere(150);
  pop();

  //earth
  push();
  noStroke();
  //translate(0, 0, 0);
  rotateY(frameCount/1000);
  texture(earth);
  sphere(75);

  //moon
  push();
  noStroke();
  rotateY(-3 * frameCount/700);
  translate(0, 0, -150);
  texture(moon);
  sphere(25);
  pop();
  pop();

  if (keyIsDown(UP_ARROW)) {
    camX -= 1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    camX += 1;
  }
}
