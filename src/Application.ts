import { Component as HyperComponent } from 'hyperhtml/esm';

import { ImagePicker } from 'components/ImagePicker';

import { ColorSpacePicker } from 'containers/ColorSpacePicker';
import { OriginalImageDisplay } from 'containers/OriginalImageDisplay';
import { StartConversionButton } from 'containers/StartConversionButton';

import { appStore } from 'appStore';
import { ImageLoader } from 'services/ImageLoader';

import { changeOriginalImage } from 'actions/input/changeOriginalImage';

export class Application extends HyperComponent {
  private readonly imagePicker: ImagePicker;
  private readonly originalImageDisplay: OriginalImageDisplay;
  private readonly colorSpacePicker: ColorSpacePicker;
  private readonly startConversionButton: StartConversionButton;

  constructor() {
    super();

    this.imagePicker = new ImagePicker();
    this.originalImageDisplay = new OriginalImageDisplay();
    this.colorSpacePicker = new ColorSpacePicker();
    this.startConversionButton = new StartConversionButton();

    this.loadDefaultImage();
  }

  protected render() {
    return this.html`
      <div class="container">
        <h1>Color converter</h1>
        ${this.imagePicker}
        ${this.originalImageDisplay}
        ${this.colorSpacePicker}
        ${this.startConversionButton}
      </div>
    `;
  }

  private async loadDefaultImage() {
    const defaultImageUrl = 'images/7-colorful-photography.jpg';

    const imageLoader = new ImageLoader();
    const image = await imageLoader.loadImage(defaultImageUrl);

    appStore.dispatch(changeOriginalImage(image));
  }
}
