import { Component as HyperComponent } from 'hyperhtml/esm';
import { HyperContainer } from 'utils/HyperContainer';

import { ImagePicker } from 'components/ImagePicker';
import { OriginalImageDisplay } from 'containers/OriginalImageDisplay';

export class Application extends HyperComponent {
  private readonly imagePicker: ImagePicker;
  private readonly originalImageDisplay: HyperContainer;

  constructor() {
    super();

    this.imagePicker = new ImagePicker();
    this.originalImageDisplay = new OriginalImageDisplay();
  }

  protected render() {
    return this.html`
      <div class="container">
        <h1>Color converter</h1>
        ${this.imagePicker}
        ${this.originalImageDisplay}
      </div>
    `;
  }
}
