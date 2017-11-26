import { HyperContainer } from 'utils/HyperContainer';

import { AppState } from 'appStore';
import { LabParameterBox } from 'components/LabParameterBox';
import { ColorProfileType } from 'models/ColorProfileType';
import { ColorSpaceType } from 'models/ColorSpaceType';
import { ConversionParameters } from 'models/ConversionParameters';
import { IlluminantType } from 'models/IlluminantType';

interface ContainerState {
  selectedColorSpace: ColorSpaceType;
  conversionParameters: ConversionParameters;
  illuminantType: IlluminantType;
  colorProfileType: ColorProfileType;
}

export class ConversionParameterBox extends HyperContainer<ContainerState> {
  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      selectedColorSpace: appState.input.selectedColorSpace,
      conversionParameters: appState.input.conversionParameters,
      illuminantType: appState.input.illuminantType,
      colorProfileType: appState.input.colorProfileType
    };
  }

  protected render() {
    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        ${this.getColorSpaceParameterBox()}
      </div>
    `;
  }

  private getColorSpaceParameterBox() {
    const { illuminantType, colorProfileType, conversionParameters } = this.state;

    return {
      [ColorSpaceType.HSV]: () => null,
      [ColorSpaceType.YCbCr]: () => null,
      [ColorSpaceType.Lab]: () =>
        LabParameterBox(illuminantType, colorProfileType, conversionParameters)
    }[this.state.selectedColorSpace]();
  }
}
