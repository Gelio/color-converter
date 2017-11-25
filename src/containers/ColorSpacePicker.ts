import { wire } from 'hyperhtml/esm';
import { HyperContainer } from 'utils/HyperContainer';

import { AppState, appStore } from 'appStore';
import { ColorSpaceType } from 'models/ColorSpaceType';

import { changeSelectedColorSpace } from 'actions/input/changeSelectedColorSpace';

function ColorSpaceOption(
  colorSpace: ColorSpaceType,
  selectedColorSpace: ColorSpaceType,
  label: string
) {
  return wire()`
    <option value=${colorSpace} selected=${colorSpace === selectedColorSpace}>${label}</option>
  `;
}

interface ContainerState {
  selectedColorSpace: ColorSpaceType;
}

export class ColorSpacePicker extends HyperContainer<ContainerState> {
  constructor() {
    super();

    this.onColorSpaceChange = this.onColorSpaceChange.bind(this);
  }

  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      selectedColorSpace: appState.input.selectedColorSpace
    };
  }

  protected render() {
    const { selectedColorSpace } = this.state;

    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        <label for="color-space-picker">Target color space: </label>
        <select id="color-space-picker" onchange=${this.onColorSpaceChange}>
          ${ColorSpaceOption(ColorSpaceType.YCbCr, selectedColorSpace, 'YCbCr')}
          ${ColorSpaceOption(ColorSpaceType.HSV, selectedColorSpace, 'HSV')}
          ${ColorSpaceOption(ColorSpaceType.Lab, selectedColorSpace, 'Lab')}
        </select>
      </div>
    `;
  }

  private onColorSpaceChange(event: Event) {
    const selectElement = <HTMLSelectElement>event.target;
    const newColorSpace: ColorSpaceType = parseInt(selectElement.value, 10);

    appStore.dispatch(changeSelectedColorSpace(newColorSpace));
  }
}
