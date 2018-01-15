let perceptron;
let points = [];
function setup() {
  createCanvas(400, 400);

  const inputs = [-1, 0.5];

  for (let i=0; i< 50; i++) {
    points[i] = new Point();
  }

  perceptron = new Perceptron;
}

function draw() {
  background(240);
  stroke(0);
  line(0, 0 , width, height);

  stroke(255, 100, 100);
  line(Math.abs(perceptron.weights[1] * 10000), perceptron.weights[0] * 10000, 0, 0);
  points.forEach((point) => {
    point.show();
  });

  points.forEach((point) => {
    const inputs = [point.x, point.y];
    const target = point.label;

    const guess = perceptron.guess(inputs);
    if (guess === target) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(point.x, point.y, 6, 6);

  });
}

function mousePressed() {
  console.log('train start');
  points.forEach((point) => {
    const inputs = [point.x, point.y];
    const target = point.label;
    perceptron.train(inputs, target);
  });
  console.log('train end');
}
