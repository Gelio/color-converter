import { Matrix, solve } from 'ml-matrix';

import { ColorPoint } from 'models/ColorPoint';
import { ConversionParameters } from 'models/ConversionParameters';

interface XYZ {
  X: number;
  Y: number;
  Z: number;
}

// tslint:disable variable-name
export class XYZConverter {
  private readonly redPoint: ColorPoint;
  private readonly greenPoint: ColorPoint;
  private readonly bluePoint: ColorPoint;
  private readonly whitePoint: ColorPoint;
  private readonly gamma: number;

  private rgbMatrix: Matrix;
  private SVector: Matrix;
  private rgbToXYZMatrix: Matrix;

  constructor(
    conversionParameters: ConversionParameters
  ) {
    this.redPoint = conversionParameters.redPoint;
    this.greenPoint = conversionParameters.greenPoint;
    this.bluePoint = conversionParameters.bluePoint;
    this.whitePoint = conversionParameters.whitePoint;
    this.gamma = conversionParameters.gamma;

    this.initialize();
  }

  public rgbToXYZ(r: number, g: number, b: number): XYZ {
    const rgbVector = Matrix.columnVector([
      this.applyGammaCorrection(r / 255),
      this.applyGammaCorrection(g / 255),
      this.applyGammaCorrection(b / 255)
    ]);
    const result = this.rgbToXYZMatrix.mmul(rgbVector);

    return {
      X: result.get(0, 0) * 100,
      Y: result.get(1, 0) * 100,
      Z: result.get(2, 0) * 100
    };
  }

  private initialize() {
    this.initializeRGBMatrix();

    // Calculate Xw, Yw, Zw
    const zw = 1 - this.whitePoint.x - this.whitePoint.y;
    const Yw = 1;
    const Xw = this.whitePoint.x / Yw / this.whitePoint.y;
    const Zw = zw / this.whitePoint.y;
    const XwYwZw = Matrix.columnVector([Xw, Yw, Zw]);

    this.SVector = solve(this.rgbMatrix, XwYwZw);

    this.rgbToXYZMatrix = this.rgbMatrix.mulRowVector(this.SVector);
  }

  private initializeRGBMatrix() {
    const redPointZ = 1 - this.redPoint.x - this.redPoint.y;
    const greenPointZ = 1 - this.greenPoint.x - this.greenPoint.y;
    const bluePointZ = 1 - this.bluePoint.x - this.bluePoint.y;

    this.rgbMatrix = new Matrix([
      [this.redPoint.x, this.greenPoint.x, this.greenPoint.x],
      [this.redPoint.y, this.greenPoint.y, this.bluePoint.y],
      [redPointZ, greenPointZ, bluePointZ]
    ]);
  }

  private applyGammaCorrection(v: number): number {
    return Math.pow(v, this.gamma);
  }
}
// tslint:enable variable-name
