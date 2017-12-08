import { wire } from 'hyperhtml/esm';
import { HyperComponent } from 'utils/HyperComponent';

import { changeColorProfileType } from 'actions/input/changeColorProfileType';
import { appStore } from 'appStore';

import { ColorPoint } from 'models/ColorPoint';
import { ColorProfileType } from 'models/ColorProfileType';
import { ConversionParameters } from 'models/ConversionParameters';

import './LabParametersInputs.scss';

interface ComponentState {
  conversionParameters: ConversionParameters;
}

export class LabParametersInput extends HyperComponent<ComponentState> {
  constructor(conversionParameters: ConversionParameters) {
    super();

    this.state = {
      conversionParameters
    };

    this.onGammaChange = this.onGammaChange.bind(this);
    this.onColorPointChange = this.onColorPointChange.bind(this);
  }

  public setConversionParameters(conversionParameters: ConversionParameters) {
    this.setState({
      conversionParameters
    });
  }

  protected render() {
    const { conversionParameters } = this.state;

    return this.html`
      <div>
        <table>
          <thead>
            <tr>
              <th>Chromacity</th>
              <th>x</th>
              <th>y</th>
            </tr>
          </thead>

          <tbody>
            ${[
              ColorPointRow(
                'Red primary',
                conversionParameters.redPoint,
                this.onColorPointChange('red')
              ),
              ColorPointRow(
                'Green primary',
                conversionParameters.greenPoint,
                this.onColorPointChange('green')
              ),
              ColorPointRow(
                'Blue primary',
                conversionParameters.bluePoint,
                this.onColorPointChange('blue')
              ),
              ColorPointRow(
                'White point',
                conversionParameters.whitePoint,
                this.onColorPointChange('white')
              )
            ]}
          </tbody>
        </table>

        <div>
          Gamma:
          <input type="number" value=${conversionParameters.gamma}
            onblur=${this.onGammaChange} step="0.1" class="gamma-input"
          >
        </div>
      </div>
    `;
  }

  private onColorPointChange(colorPointName: string) {
    return (xOrY: string, value: number) => {
      const propertyName = `${colorPointName}Point`;

      // tslint:disable-next-line:no-any
      const newColorPoint = <ColorPoint>Object.assign({}, <ColorPoint>(<any>this.state
        .conversionParameters)[propertyName]);

      if (xOrY === 'x') {
        newColorPoint.x = value;
      } else if (xOrY === 'y') {
        newColorPoint.y = value;
      }

      const newConversionParameters = this.state.conversionParameters.patch({
        [propertyName]: newColorPoint
      });

      appStore.dispatch(changeColorProfileType(ColorProfileType.Custom, newConversionParameters));
    };
  }

  private onGammaChange(event: Event) {
    const newGamma = getValueFromInputEvent(event);

    const newConversionParameters = this.state.conversionParameters.patch({
      gamma: newGamma
    });

    appStore.dispatch(changeColorProfileType(ColorProfileType.Custom, newConversionParameters));
  }
}

function ColorPointRow(
  label: string,
  colorPoint: ColorPoint,
  onColorPointChange: (xOrY: string, value: number) => void
) {
  function handleChange(xOrY: string) {
    return (event: Event) => {
      const value = getValueFromInputEvent(event);
      onColorPointChange(xOrY, value);
    };
  }

  return wire(colorPoint)`
    <tr>
      <td>${label}</td>
      <td>
        <input type="number" class="point-position-input"
          value=${colorPoint.x} step="0.0001" onblur=${handleChange('x')}
        >
      </td>
      <td>
        <input type="number" class="point-position-input"
          value=${colorPoint.y} step="0.0001" onblur=${handleChange('y')}
        >
      </td>
    </tr>
  `;
}

function getValueFromInputEvent(event: Event): number {
  const inputElement = <HTMLInputElement>event.target;

  return parseFloat(inputElement.value);
}
