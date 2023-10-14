const expect = require('chai').expect;
const Matrix = require('../src/matrix');

describe('creation', function() {
  it('should create a matrix with null data', function() {
    const m = new Matrix(2, 3);
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(3);
    expect(m.length).to.equal(2);
    expect(m[0][0]).to.equal(0);
    expect(m[0].length).to.equal(3);
  });

  it('should create a matrix with array', function() {
    const m = new Matrix(2, 2, [[1, 2], [3, 4]]);
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(2);
    expect(m[0][0]).to.equal(1);
    expect(m[0][1]).to.equal(2);
    expect(m[1][0]).to.equal(3);
    expect(m[1][1]).to.equal(4);
  });

  it('should create a matrix with function', function() {
    const m = new Matrix(2, 3, (i, j) => i + j);
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(3);
    expect(m[0][0]).to.equal(0);
    expect(m[0][1]).to.equal(1);
    expect(m[0][2]).to.equal(2);
    expect(m[1][0]).to.equal(1);
    expect(m[1][1]).to.equal(2);
    expect(m[1][2]).to.equal(3);
  });

  it('should create a matrix with number', function() {
    const m = new Matrix(2, 3, 1);
    expect(m.rows).to.equal(2);
    expect(m.cols).to.equal(3);
    expect(m[0][0]).to.equal(1);
    expect(m[0][1]).to.equal(1);
    expect(m[0][2]).to.equal(1);
    expect(m[1][0]).to.equal(1);
    expect(m[1][1]).to.equal(1);
    expect(m[1][2]).to.equal(1);
  });

});
