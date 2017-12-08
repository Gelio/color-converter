import { Dictionary } from 'hyperhtml/esm';
import { Unsubscribe } from 'redux';

import { AppState, appStore } from 'appStore';
import { HyperComponent } from 'utils/HyperComponent';

export abstract class HyperContainer<ContainerState extends Dictionary> extends HyperComponent<
  ContainerState
> {
  private storeUnsubscribeCallback: Unsubscribe | undefined;

  constructor() {
    super();

    this.onStateUpdate(true);
  }

  protected onconnected() {
    this.subscribeToStore();
  }

  protected ondisconnected() {
    this.unsubscribeFromStore();
  }

  protected subscribeToStore() {
    this.storeUnsubscribeCallback = appStore.subscribe(this.onStateUpdate.bind(this));
  }

  protected unsubscribeFromStore() {
    if (this.storeUnsubscribeCallback) {
      this.storeUnsubscribeCallback();
      this.storeUnsubscribeCallback = undefined;
    }
  }

  protected abstract mapAppStateToContainerState(appState: AppState): ContainerState;

  private onStateUpdate(ignoreRender: boolean = false) {
    const newContainerState = this.mapAppStateToContainerState(appStore.getState());
    const renderNeeded = this.patchState(newContainerState);

    if (renderNeeded && !ignoreRender) {
      this.render();
    }
  }

  private patchState(newState: Partial<ContainerState>): boolean {
    let renderNeeded = false;

    for (const key of Object.keys(newState)) {
      const previousValue = this.state[key];
      const newValue = newState[key];

      if (previousValue === newValue) {
        continue;
      }

      this.state[key] = newValue;
      renderNeeded = true;
    }

    return renderNeeded;
  }
}
