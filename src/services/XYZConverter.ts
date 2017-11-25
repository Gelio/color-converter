import { Matrix } from 'ml-matrix';

interface CIEXYZ {
  X: number;
  Y: number;
  Z: number;
}

export class XYZConverter {
  private readonly conversionMatrix = new Matrix([
    [0.49, 0.31, 0.2],
    [0.17697, 0.8124, 0.01063],
    [0, 0.01, 0.99]
  ]);
  private readonly divisor = 0.17697;

  public rgbToXYZ(r: number, g: number, b: number): CIEXYZ {
    const rgbVector = new Matrix([[r], [g], [b]]);
    const result = Matrix.div(this.conversionMatrix.mmul(rgbVector), this.divisor);

    return {
      X: result[0][0],
      Y: result[1][0],
      Z: result[2][0]
    };
  }
}
