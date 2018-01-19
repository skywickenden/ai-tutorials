var brain;
function setup() {
  brain = new NeuralNetwork(3, 3, 1);
  let testMatrix = new Matrix(3, 2);
  let testMatrix2 = new Matrix(3, 2);

  testMatrix = MatrixMath.randomize(testMatrix);
  testMatrix2 = MatrixMath.randomize(testMatrix2);
  console.table(testMatrix.data);
  console.table(testMatrix2.data);

  testMatrix.randomize();
  console.table(testMatrix.data);


}


function draw() {

}
