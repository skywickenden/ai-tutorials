class Point {
  constructor() {
    this.x = parseInt(random(width), 0);
    this.y = parseInt(random(height), 0);
    if (this.x > this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }

  show() {
    stroke(0);
    if(this.label === 1) {
      fill(150, 150, 255);
    } else {
      fill(0);
    }
    noStroke();
    ellipse(this.x, this.y, 12, 12);
  }
}
