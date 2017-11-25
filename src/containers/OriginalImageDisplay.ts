import { wire } from 'hyperhtml/esm';

import { AppState } from 'appStore';
import { HyperContainer } from 'utils/HyperContainer';

import './OriginalImageDisplay.scss';

function NoImageMessage() {
  return wire()`Please select an image first.`;
}

function DisplayImage(image: HTMLImageElement) {
  return wire()`
    <div class="original-image-wrapper">
      ${image}
    </div>
  `;
}

interface ContainerState {
  image: HTMLImageElement | null;
}

export class OriginalImageDisplay extends HyperContainer<ContainerState> {
  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      image: appState.input.originalImage
    };
  }

  protected render() {
    const image = this.state.image;

    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        ${image ? DisplayImage(image) : NoImageMessage()}
      </div>
    `;
  }
}
