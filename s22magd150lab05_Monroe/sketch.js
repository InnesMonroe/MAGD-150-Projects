let i = 0;
let a = 0;
let half = 0.5;
let l = 51;

let isPlaying = false;
let mouse_over_circle = false;
let mouse_over_rect = false;

let circleX = 225;
let circleY = 475;
let circleSize = 70;

let rectX = 300;
let rectY = 440;
let rectSize = 70;

function setup() {
  createCanvas(1000, 900);
  frameRate(30);
}

function draw() {
  background(255);

  if (i == 100) {
    i = 0;
    a = 0;
  }

  fill(100);
  strokeWeight(5);
  line(288, 125, 230, 50);
  line(288, 125, 346, 50);

  strokeWeight(3);
  rect(100, 125, 375, 400);

  fill(0);
  ellipse(230, 50, 10, 10);
  ellipse(346, 50, 10, 10);

  fill('#C1E8E0');
  rect(125, 150, 325, 275);

  let y1 = map(i, 0, 100, 0, PI);
  let y2 = map(i, 0, 100, QUARTER_PI, PI + QUARTER_PI);
  let y3 = map(i, 0, 100, HALF_PI, PI + HALF_PI);
  let y4 = map(i, 0, 100, HALF_PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

  let y1b = map(a, 0, 100, half * QUARTER_PI, PI + half * QUARTER_PI);
  let y2b = map(a, 0, 100, QUARTER_PI + half * QUARTER_PI, PI + QUARTER_PI + half * QUARTER_PI);
  let y3b = map(a, 0, 100, HALF_PI + half * QUARTER_PI, PI + HALF_PI + half * QUARTER_PI);
  let y4b = map(a, 0, 100, HALF_PI + QUARTER_PI + half * QUARTER_PI, PI + HALF_PI + QUARTER_PI + half * QUARTER_PI);


  strokeCap(PROJECT);
  strokeWeight(20);
  stroke('#596566');
  line(250 - l * cos(y1), 250 - l * sin(y1), 250 + l * cos(y1), l * sin(y1) + 250);
  line(250 - l * cos(y2), 250 - l * sin(y2), 250 + l * cos(y2), l * sin(y2) + 250);
  line(250 - l * cos(y3), 250 - l * sin(y3), 250 + l * cos(y3), l * sin(y3) + 250);
  line(250 - l * cos(y4), 250 - l * sin(y4), 250 + l * cos(y4), l * sin(y4) + 250);

  line(325 - l * cos(y1b), 325 - l * sin(y1b), 325 + l * cos(y1b), l * sin(y1b) + 325);
  line(325 - l * cos(y2b), 325 - l * sin(y2b), 325 + l * cos(y2b), l * sin(y2b) + 325);
  line(325 - l * cos(y3b), 325 - l * sin(y3b), 325 + l * cos(y3b), l * sin(y3b) + 325);
  line(325 - l * cos(y4b), 325 - l * sin(y4b), 325 + l * cos(y4b), l * sin(y4b) + 325);

  if (isPlaying) {
    i++;
    a--;
  }

  strokeWeight(3);
  fill('#596566');
  ellipse(250, 250, 88, 88);
  ellipse(325, 325, 88, 88);

  stroke(0);
  if (overCircle(circleX, circleY, circleSize)) {
    fill(75);
  }
  else {
    fill(50);
  }
  ellipse(circleX, circleY, circleSize, circleSize);

  if (overRect(rectX, rectY, rectSize, rectSize)) {
    fill(75);
  }
  else {
    fill(50);
  }
  rect(rectX, rectY, rectSize, rectSize);

  fill(255);
  stroke(0);
  text('PLAY', 210, 480);

  fill(255);
  stroke(0);
  text('PAUSE', 315, 480);


}

function mousePressed() {
  if (overCircle(circleX, circleY, circleSize)) {
    isPlaying = true;
  }
  if (overRect(rectX, rectY, rectSize, rectSize)) {
    isPlaying = false;
  }
}

function overRect(x,  y,  width,  height) {
  if (mouseX >= x && mouseX <= x+width &&
      mouseY >= y && mouseY <= y+height) {
    return true;
  }
  else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}
