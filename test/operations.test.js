const expect = require('chai').expect;
const Matrix = require('../src/matrix');

describe('operations', function() {
  it('should add matrix', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(2, 2, [[5, 6], [7, 8]]);
    const result = matrix1.add(matrix2);
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[6, 8], [10, 12]]);
  });
  it('should not add matrix with different dimensions', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(2, 3, [[5, 6, 7], [8, 9, 10]]);
    expect(() => matrix1.add(matrix2)).to.throw();
  });

  it('should subtract matrix', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(2, 2, [[5, 6], [7, 8]]);
    const result = matrix1.subtract(matrix2);
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[-4, -4], [-4, -4]]);
  });

  it('should not subtract matrix with different dimensions', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(2, 3, [[5, 6, 7], [8, 9, 10]]);
    expect(() => matrix1.subtract(matrix2)).to.throw();
  });

  it('should multiply matrix', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(2, 2, [[5, 6], [7, 8]]);
    const result = matrix1.multiply(matrix2);
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[19, 22], [43, 50]]);
  });

  it('should not multiply matrix with wrong dimensions', () => {
    const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const matrix2 = new Matrix(3, 2, [[5, 6], [7, 8], [9, 10]]);
    expect(() => matrix1.multiply(matrix2)).to.throw();
  });

  it('should multiply matrix by scalar', () => {
    const matrix = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const result = matrix.multiply(2);
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[2, 4], [6, 8]]);
  });

  it('should divide matrix by scalar', () => {
    const matrix = new Matrix(2, 2, [[1, 2], [3, 4]]);
    const result = matrix.divide(2);
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(2);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[0.5, 1], [1.5, 2]]);
  });

  it('should transpose matrix', () => {
    const matrix = new Matrix(2, 3, [[1, 2, 3], [4, 5, 6]]);
    const result = matrix.transpose();
    expect(result).to.be.an.instanceof(Matrix);
    expect(result.rows).to.equal(3);
    expect(result.cols).to.equal(2);
    expect(result).to.deep.equal([[1, 4], [2, 5], [3, 6]]);
  });

});