import { HyperContainer } from 'utils/HyperContainer';

import { AppState } from 'appStore';
import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';

interface ContainerState {
  selectedColorSpace: ColorSpaceType;
  conversionParameters: ConversionParameters;
}

export class ConversionParameterBox extends HyperContainer<ContainerState> {
  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      selectedColorSpace: appState.input.selectedColorSpace,
      conversionParameters: appState.input.conversionParameters
    };
  }

  protected render() {
    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        Conversion parameter box

        ${this.state.selectedColorSpace}
      </div>
    `;
  }
}
