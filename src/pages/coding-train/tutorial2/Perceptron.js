class Perceptron {

  constructor() {
    this.weights = [];
    this.weightsLength = 2;
    this.learningRate = 0.1;
    for(let i = 0; i < this.weightsLength; i++) {
      this.weights[i] = random(-1, 1);

    }
    console.log('initial weights', this.weights);
  }

  guess(inputs) {
    let sum = 0;
    // console.log('start guessing');
    for(let i = 0; i < this.weightsLength; i++) {
      sum += inputs[i] * this.weights[i];
      // console.log(inputs[i], this.weights[i], sum);
    }
    const output = this.sign(sum);
    // console.log('final sum', sum, output);
    return output;
  }

  sign(n) {
    if (n >= 0) {
      return 1;
    } else {
      return -1;
    }
  }

  train(inputs, target) {
    const guess = this.guess(inputs);
    const error = target - guess;
    for(let i = 0; i < this.weightsLength; i++) {
      // if (i === 0) {
      //   console.log(
      //     'error correction',
      //     error,
      //     inputs[i],
      //     error * inputs[i] * this.learningRate
      //   );
      // }
      this.weights[i] += error * inputs[i] * this.learningRate;
    }
    console.log(this.weights);
  }

}
