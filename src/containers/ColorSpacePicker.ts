import { HyperContainer } from 'utils/HyperContainer';

import { AppState, appStore } from 'appStore';
import { ColorSpaceType } from 'models/ColorSpaceType';

import { changeSelectedColorSpace } from 'actions/input/changeSelectedColorSpace';

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
    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        <label for="color-space-picker">Target color space: </label>
        <select id="color-space-picker" onchange=${this.onColorSpaceChange}>
          <option value="${ColorSpaceType.YCbCr}">YCbCr</option>
          <option value="${ColorSpaceType.HSV}">HSV</option>
          <option value="${ColorSpaceType.Lab}">Lab</option>
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
