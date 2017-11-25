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
  private inverseGamma: number;

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
    const rgbVector = Matrix.columnVector([r, g, b]);
    const result = this.rgbToXYZMatrix.mmul(rgbVector);

    return {
      X: this.applyGammaCorrection(result.get(0, 0)),
      Y: this.applyGammaCorrection(result.get(1, 0)),
      Z: this.applyGammaCorrection(result.get(2, 0))
    };
  }

  private initialize() {
    this.inverseGamma = 1 / this.gamma;

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
    return Math.pow(v, this.inverseGamma);
  }
}
// tslint:enable variable-name
