import { HyperContainer } from 'utils/HyperContainer';

import { conversionFinished } from 'actions/general/conversionFinished';
import { conversionStarted } from 'actions/general/conversionStarted';
import { AppState, appStore } from 'appStore';
import { LabColorSpaceConverter } from 'models/converters/LabColorSpaceConverter';
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

    const labColorConverter = new LabColorSpaceConverter(
      { x: 0.64, y: 0.33 },
      { x: 0.3, y: 0.6 },
      { x: 0.15, y: 0.06 },
      { x: 0.3127, y: 0.329 },
      2.2
    );
    const conversionResult = labColorConverter.convertFromImageData(imageData);
    conversionResult.normalizeComponents();

    const resultImages = conversionResult.components
      .map(component => component.getImageData())
      .map(imageDataConverter.convertImageDataToImage);

    resultImages.forEach(image => document.body.appendChild(image));

    appStore.dispatch(conversionFinished(conversionResult));
  }
}
