export class FileToImageConverter {
  public async convertFile(file: File): Promise<HTMLImageElement> {
    const image = new Image();
    image.src = await this.getDataURLFromFile(file);

    return image;
  }

  private getDataURLFromFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }
}
