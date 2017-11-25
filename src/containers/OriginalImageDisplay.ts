import { wire } from 'hyperhtml/esm';

import { AppState } from 'appStore';
import { HyperContainer } from 'utils/HyperContainer';

function SelectImageMessage() {
  return wire()`Please select an image first.`;
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
        <h2>Original image</h2>
        ${image ? image : SelectImageMessage()}
      </div>
    `;
  }
}
