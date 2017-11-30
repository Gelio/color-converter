import { wire } from 'hyperhtml/esm';

import { ColorPoint } from 'models/ColorPoint';
import { ConversionParameters } from 'models/ConversionParameters';

export function LabParametersInput(conversionParameters: ConversionParameters) {
  return wire()`
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
          ColorPointRow('Red primary', conversionParameters.redPoint),
          ColorPointRow('Green primary', conversionParameters.greenPoint),
          ColorPointRow('Blue primary', conversionParameters.bluePoint),
          ColorPointRow('White point', conversionParameters.whitePoint)
        ]}
      </tbody>
    </table>

    <div>
      Gamma: ${conversionParameters.gamma}
    </div>
  `;
}

function ColorPointRow(label: string, colorPoint: ColorPoint) {
  return wire()`
    <tr>
      <td>${label}</td>
      <td>${colorPoint.x}</td>
      <td>${colorPoint.y}</td>
    </tr>
  `;
}
