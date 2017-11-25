import { HyperContainer } from 'utils/HyperContainer';

import { conversionFinished } from 'actions/general/conversionFinished';
import { conversionStarted } from 'actions/general/conversionStarted';
import { AppState, appStore } from 'appStore';

interface ContainerState {
  conversionAvailable: boolean;
}

export class StartConversionButton extends HyperContainer<ContainerState> {
  constructor() {
    super();

    this.startConversion = this.startConversion.bind(this);
  }

  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      conversionAvailable: appState.input.conversionAvailable
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
    appStore.dispatch(conversionStarted());

    setTimeout(() => appStore.dispatch(conversionFinished({
      components: [],
      normalizeComponents: () => 'a'
    })), 2000);
  }
}
