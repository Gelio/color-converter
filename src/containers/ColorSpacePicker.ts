import { HyperContainer } from 'utils/HyperContainer';

import { AppState, appStore } from 'appStore';
import { ColorSpaceType } from 'models/ColorSpaceType';

import { changeSelectedColorSpace } from 'actions/input/changeSelectedColorSpace';
import { LabeledSelect } from 'components/LabeledSelect';
import { LabeledValue } from 'utils/LabeledValue';

interface ContainerState {
  selectedColorSpace: ColorSpaceType;
}

export class ColorSpacePicker extends HyperContainer<ContainerState> {
  private readonly labeledColorSpaces: LabeledValue<ColorSpaceType>[] = [
    { value: ColorSpaceType.YCbCr, label: 'YCbCr' },
    { value: ColorSpaceType.HSV, label: 'HSV' },
    { value: ColorSpaceType.Lab, label: 'Lab' }
  ];

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
        <label for="color-space-select">Target color space: </label>
        ${LabeledSelect(
          'color-space-select',
          this.labeledColorSpaces,
          selectedColorSpace,
          this.onColorSpaceChange
        )}
      </div>
    `;
  }

  private onColorSpaceChange(newColorSpace: ColorSpaceType) {
    appStore.dispatch(changeSelectedColorSpace(newColorSpace));
  }
}
