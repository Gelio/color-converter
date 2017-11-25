import { HyperContainer } from 'utils/HyperContainer';

import { conversionFinished } from 'actions/general/conversionFinished';
import { conversionStarted } from 'actions/general/conversionStarted';
import { AppState, appStore } from 'appStore';
import { YCbCrColorSpaceConverter } from 'models/converters/YCbCrColorSpaceConverter';
import { ImageDataConverter } from 'services/ImageDataConverter';

interface ContainerState {
  conversionAvailable: boolean;
  image: HTMLImageElement | null;
}

export class StartConversionButton extends HyperContainer<ContainerState> {
  constructor() {
    super();

    this.startConversion = this.startConversion.bind(this);
  }

  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      conversionAvailable: appState.input.conversionAvailable,
      image: appState.input.originalImage
    };
  }

  protected render() {
    const { conversionAvailable } = this.state;

    return this.html`
      <button
        onclick=${this.startConversion}
        onconnected=${this} ondisconnected=${this}
        disabled=${!conversionAvailable}>RUN</button>
    `;
  }

  private startConversion() {
    if (!this.state.image) {
      return;
    }

    appStore.dispatch(conversionStarted());

    const imageDataConverter = new ImageDataConverter();
    const imageData = imageDataConverter.convertImageToImageData(this.state.image);

    const hsvColorConverter = new YCbCrColorSpaceConverter();
    const conversionResult = hsvColorConverter.convertFromImageData(imageData);
    conversionResult.normalizeComponents();

    const resultImages = conversionResult.components
      .map(component => component.getImageData())
      .map(imageDataConverter.convertImageDataToImage);

    resultImages.forEach(image => document.body.appendChild(image));

    appStore.dispatch(conversionFinished(conversionResult));
  }
}
