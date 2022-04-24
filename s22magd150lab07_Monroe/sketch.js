let i = 0;
let colorArr = ["#B57EDC", "#E35B89", "#FFFAF0"];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#87CEEB');

  noStroke();
  fill('#f9d71c');
  ellipse(500, 0, 200, 200);

  // create 3 objects in the Flower class
  let f1 = new Flower(colorArr[0], 0.5);
  let f2 = new Flower(colorArr[1], 0.75);
  let f3 = new Flower(colorArr[2], 1);

  // use the drawFlower function in the Flower class to display and animate the 3 Flower objects
  f1.drawFlower(75, 250);
  f2.drawFlower(200, 100);
  f3.drawFlower(350, 300);

  fill('#348C31');
  stroke('#348C31');
  rect(0, 400, 500, 100);

  i++;
}

// the Flower class allows multiple flowers with different colors and sizes to be displayed easily without repeating a lot of code
class Flower {
  constructor(col, sizeMult) {
    this.col = col;
    this.sizeMult = sizeMult;
  }

  drawFlower(posX, posY) {
    let l = 51 * this.sizeMult;

    strokeWeight(15 * this.sizeMult);
    stroke('#00532C');
    line(posX, posY, posX, 410);

    let y1 = map(i, 0, 100, 0, PI);
    let y2 = map(i, 0, 100, QUARTER_PI, PI + QUARTER_PI);
    let y3 = map(i, 0, 100, HALF_PI, PI + HALF_PI);
    let y4 = map(i, 0, 100, HALF_PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);

    strokeCap(PROJECT);
    strokeWeight(20 * this.sizeMult);
    stroke(this.col);

    // move flower petals in a circular motion as the value of i increases
    line(posX - l * cos(y1), posY - l * sin(y1), posX + l * cos(y1), l * sin(y1) + posY);
    line(posX - l * cos(y2), posY - l * sin(y2), posX + l * cos(y2), l * sin(y2) + posY);
    line(posX - l * cos(y3), posY - l * sin(y3), posX + l * cos(y3), l * sin(y3) + posY);
    line(posX - l * cos(y4), posY - l * sin(y4), posX + l * cos(y4), l * sin(y4) + posY);

    strokeWeight(10 * this.sizeMult);

    fill('#F8DC75');
    ellipse(posX, posY, 68 * this.sizeMult, 68 * this.sizeMult);
  }
}
