export class PartialConversionResult {
  public readonly label: string;
  public readonly values: number[];
  public readonly width: number;
  public readonly height: number;

  constructor(label: string, values: number[], width: number, height: number) {
    this.label = label;
    this.values = values;
    this.width = width;
    this.height = height;
  }

  public getImageData(): ImageData {
    const imageData = new ImageData(this.width, this.height);

    let imageDataIndex = 0;

    this.values.forEach(value => {
      // tslint:disable:no-increment-decrement
      imageData.data[imageDataIndex++] = value;
      imageData.data[imageDataIndex++] = value;
      imageData.data[imageDataIndex++] = value;
      imageData.data[imageDataIndex++] = 255;
      // tslint:disable:no-increment-decrement
    });

    return imageData;
  }
}
