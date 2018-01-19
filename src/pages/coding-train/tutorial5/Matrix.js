class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }
  }

  add(addend) {
    if (this.cols != addend.cols) {
      console.error(
        'When adding matrixes, the columns must be of equal length. Currently',
        this.cols,
        addend.cols
      );
      return;
    }

    if (this.rows != addend.rows) {
      console.error(
        'When adding matrixes, the rows must be of equal length. Currently',
        this.rows,
        addend.rows
      );
      return;
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += addend.matrix[i][j];
      }
    }
  }

}
