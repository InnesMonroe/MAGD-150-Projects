let i = 1.0;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  rectMode(CENTER);

  background(200);

  if (mouseInLeftThird()) {
    translate(p5.Vector.fromAngle(millis() / 150, 60)); // this section of code uses translate to make a circle orbit the cursor
    ellipse(mouseX, mouseY, 20, 20);
  }

  if (mouseInMiddleThird()) {
    translate(mouseX, mouseY);
    rotate(frameCount / 10); // this section of code uses rotate to make a square spin at the position of the cursor
    rect(0, 0, 20, 20);
  }

  if (mouseInRightThird()) {
    translate(p5.Vector.fromAngle(millis() / 150, 60));
    translate(p5.Vector.fromAngle(millis() / 150 / -2, 60 / -2));
    translate(mouseX, mouseY);
    scale(i); // this section of code uses scale to change the size of a circle
    ellipse(0, 0, 20, 20);

    i += 0.005;

    if (i >= 2) {
      i = 1;
    }
  }
}



function mouseInLeftThird() { // this function checks if the cursor is in the left third of the canvas and returns true if it is.
  if (mouseX < width / 3) {
    return true;
  }
  else {
    return false;
  }
}

function mouseInMiddleThird() { // this function checks if the cursor is in the middle third of the canvas and returns true if it is.
  if (mouseX >= width / 3 && mouseX <= width * (2 / 3)) {
    return true;
  }
  else {
    return false;
  }
}

function mouseInRightThird() { // this function checks if the cursor is in the right third of the canvas and returns true if it is.
  if (mouseX > width * (2 / 3)) {
    return true;
  }
  else {
    return false;
  }
}
