import { wire } from 'hyperhtml/esm';

import { AppState } from 'appStore';
import { ColorSpaceConversionResult } from 'models/conversion-results/ColorSpaceConversionResult';
import { PartialConversionResult } from 'models/conversion-results/PartialConversionResult';
import { HyperContainer } from 'utils/HyperContainer';

import './ResultsDisplay.scss';

function NoResults() {
  return wire()`Please click <em>RUN</em>`;
}

function Results(conversionResult: ColorSpaceConversionResult, resultImages: HTMLImageElement[]) {
  return wire(conversionResult)`
    <div class="results">
      ${conversionResult.components.map((partialResult, index) =>
        Result(partialResult, resultImages[index])
      )}
    </div>
  `;
}

function Result(partialResult: PartialConversionResult, image: HTMLImageElement) {
  return wire(partialResult)`
    <div class="result">
      <div>${partialResult.label}</div>
      ${image}
    </div>
  `;
}

interface ContainerState {
  conversionResult: ColorSpaceConversionResult | null;
  resultImages: HTMLImageElement[];
}

export class ResultsDisplay extends HyperContainer<ContainerState> {
  protected mapAppStateToContainerState(appState: AppState): ContainerState {
    return {
      conversionResult: appState.output.conversionResult,
      resultImages: appState.output.resultImages
    };
  }

  protected render() {
    const { conversionResult, resultImages } = this.state;

    return this.html`
      <div onconnected=${this} ondisconnected=${this}>
        <h2>Results</h2>
        ${conversionResult ? Results(conversionResult, resultImages) : NoResults()}
      </div>
    `;
  }
}
