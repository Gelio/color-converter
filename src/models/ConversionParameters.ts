import { ColorPoint } from 'models/ColorPoint';

export class ConversionParameters {
  public readonly redPoint: ColorPoint;
  public readonly greenPoint: ColorPoint;
  public readonly bluePoint: ColorPoint;
  public readonly whitePoint: ColorPoint;
  public readonly gamma: number;

  constructor(
    redPoint: ColorPoint,
    greenPoint: ColorPoint,
    bluePoint: ColorPoint,
    whitePoint: ColorPoint,
    gamma: number
  ) {
    this.redPoint = redPoint;
    this.greenPoint = greenPoint;
    this.bluePoint = bluePoint;
    this.whitePoint = whitePoint;
    this.gamma = gamma;
  }

  public static sRGB(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.64, y: 0.33 },
      { x: 0.3, y: 0.6 },
      { x: 0.15, y: 0.06 },
      { x: 0.3127, y: 0.329 },
      2.2
    );
  }

  public static adobeRGB(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.64, y: 0.33 },
      { x: 0.21, y: 0.71 },
      { x: 0.15, y: 0.06 },
      { x: 0.3127, y: 0.329 },
      2.2
    );
  }

  public static appleRGB(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.625, y: 0.34 },
      { x: 0.28, y: 0.595 },
      { x: 0.155, y: 0.07 },
      { x: 0.3127, y: 0.329 },
      1.8
    );
  }

  public static cieRGB(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.735, y: 0.265 },
      { x: 0.274, y: 0.717 },
      { x: 0.167, y: 0.009 },
      { x: 0.3333, y: 0.3333 },
      2.2
    );
  }

  public static wideGamut(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.7347, y: 0.2653 },
      { x: 0.1152, y: 0.8264 },
      { x: 0.1566, y: 0.0177 },
      { x: 0.3457, y: 0.3585 },
      1.2
    );
  }

  public static pal(): ConversionParameters {
    return new ConversionParameters(
      { x: 0.64, y: 0.33 },
      { x: 0.29, y: 0.6 },
      { x: 0.15, y: 0.06 },
      { x: 0.3127, y: 0.329 },
      1.95
    );
  }

  public patch(patch: Partial<ConversionParameters>): ConversionParameters {
    const {
      redPoint,
      greenPoint,
      bluePoint,
      whitePoint,
      gamma
    } = <ConversionParameters>Object.assign({}, this, patch);

    return new ConversionParameters(redPoint, greenPoint, bluePoint, whitePoint, gamma);
  }
}
