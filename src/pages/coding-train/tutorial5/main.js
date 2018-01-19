var brain;
function setup() {
  brain = new NeuralNetwork(3, 3, 1);
  const testMatrix = new Matrix(3, 2);
  const testMatrix2 = new Matrix(3, 2);
  testMatrix.randomize();
  testMatrix2.randomize();
  console.table(testMatrix.matrix);
  console.table(testMatrix2.matrix);
  testMatrix.add(testMatrix2);
  console.table(testMatrix.matrix);

}


function draw() {

}
