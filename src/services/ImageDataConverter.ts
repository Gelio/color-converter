export class ImageDataConverter {
  public convertImageToImageData(image: HTMLImageElement): ImageData {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Cannot get canvas drawing context');
    }

    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, canvas.width, canvas.height);
  }

  public convertImageDataToImage(imageData: ImageData): HTMLImageElement {
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;

    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Cannot get canvas drawing context');
    }

    context.putImageData(imageData, 0, 0);

    const image = new Image(imageData.width, imageData.height);
    image.src = canvas.toDataURL('image/png');

    return image;
  }
}
