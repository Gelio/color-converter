import { multiplyMatrixByVector } from 'utils/multiplyMatrixByVector';

interface CIEXYZ {
  X: number;
  Y: number;
  Z: number;
}

export class XYZConverter {
  private readonly conversionMatrix: number[][] = [
    [0.49, 0.31, 0.2],
    [0.17697, 0.8124, 0.01063],
    [0, 0.01, 0.99]
  ];
  private readonly divisor = 0.17697;

  public rgbToXYZ(r: number, g: number, b: number): CIEXYZ {
    const result = multiplyMatrixByVector(this.conversionMatrix, [r, g, b]).map(
      value => value / this.divisor
    );

    return {
      X: result[0],
      Y: result[1],
      Z: result[2]
    };
  }
}
