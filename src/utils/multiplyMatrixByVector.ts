export function multiplyMatrixByVector(matrix: number[][], vector: number[]) {
  if (matrix[0].length !== vector.length) {
    throw new Error('Dimensions do not match');
  }

  return matrix.map(row =>
    row.reduce((sum, matrixElement, index) => sum + matrixElement * vector[index])
  );
}
