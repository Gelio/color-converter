import { HyperComponent } from 'utils/HyperComponent';

import { appStore } from 'appStore';
import { FileToImageConverter } from 'services/FileToImageConverter';

import { changeOriginalImage } from 'actions/input/changeOriginalImage';

export class ImagePicker extends HyperComponent {
  constructor() {
    super();

    this.onImageChange = this.onImageChange.bind(this);
  }

  protected render() {
    return this.html`
      <div class="image-picker">
        <h2>Image picker</h2>
        <input type="file" name="image" accept="image/*"
          onchange=${this.onImageChange}>
      </div>
    `;
  }

  private async onImageChange(event: Event) {
    const files = (<HTMLInputElement>event.target).files;
    if (!files) {
      return;
    }

    const fileToImageConverter = new FileToImageConverter();
    const image = await fileToImageConverter.convertFile(files[0]);

    appStore.dispatch(changeOriginalImage(image));
  }
}
