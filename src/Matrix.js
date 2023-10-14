class Matrix extends Array {
  constructor(rows, cols, data) {
    super();

    this.rows = rows;
    this.cols = cols;
    this.length = rows;

    for (let i = 0; i < rows; i++) {
      this[i] = new Array(cols);
      if (typeof data === 'function') {
        for (let j = 0; j < cols; j++) {
          this[i][j] = data(i, j);
        }
      } else if (Array.isArray(data)) {
        this[i] = Array.isArray(data[i]) ? data[i] : this[i].fill(0);
      } else if (typeof data === 'number') {
        this[i].fill(data);
      } else if (typeof data === 'undefined' || data === null) {
        this[i].fill(0);
      }
    }
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