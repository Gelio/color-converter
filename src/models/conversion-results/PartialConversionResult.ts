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
}
