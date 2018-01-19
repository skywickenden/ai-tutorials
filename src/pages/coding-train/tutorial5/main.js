var brain;
function setup() {
  brain = new NeuralNetwork(3, 3, 1);
  const testMatrix = new Matrix(3, 2);
  console.table(testMatrix.matrix);
  testMatrix.randomize();
  console.table(testMatrix.matrix);
}


function draw() {

}
