class Matrix extends Array {
  constructor(rows, cols, data) {
    super();

    this.rows = rows;
    this.cols = cols;

    if (typeof data === 'function') {
      for (let i = 0; i < rows; i++) {
        this[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
          this[i][j] = data(i, j);
        }
      }
    }
    if (Array.isArray(data)) {
      for (let i = 0; i < rows; i++) {
        this[i] = Array.isArray(data[i]) ? data[i] : new Array(cols).fill(0);
      }
    }

    if (typeof data === 'number') {
      for (let i = 0; i < rows; i++) {
        this[i] = new Array(cols).fill(data);
      }
    }
    if (typeof data === 'undefined' || data === null) {
      for (let i = 0; i < rows; i++) {
        this[i] = new Array(cols).fill(0);
      }
    }

    this.length = this.rows;
  }

  add(other) {
    if (this.rows != other.rows || this.cols != other.cols) {
      throw new Error('Matrices dimensions do not match');
    }
    return new Matrix(this.rows, this.cols, (i, j) => this[i][j] + other[i][j]);
  }

  subtract(other) {
    if (this.rows != other.rows || this.cols != other.cols) {
      throw new Error('Matrices dimensions do not match');
    }
    return new Matrix(this.rows, this.cols, (i, j) => this[i][j] - other[i][j]);
  }

  multiply(other) {
    if (typeof other === 'number') {
      return new Matrix(this.rows, this.cols, (i, j) => this[i][j] * other);
    } else {
      if (this.cols !== other.rows) {
        throw new Error('Matrices dimensions do not match');
      }
      return new Matrix(this.rows, other.cols, (i, j) => this[i].reduce((sum, value, k) => sum + value * other[k][j], 0));
    }
  }

  divide(scalar) {
    return new Matrix(this.rows, this.cols, (i, j) => this[i][j] / scalar);
  }

  transpose() {
    return new Matrix(this.cols, this.rows, (i, j) => this[j][i]);
  }

}

module.exports = Matrix;