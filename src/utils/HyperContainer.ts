import { Component as HyperComponent, Dictionary } from 'hyperhtml/esm';
import { Unsubscribe } from 'redux';

import { AppState, appStore } from 'appStore';

export abstract class HyperContainer<
  ContainerState extends Dictionary = Dictionary
> extends HyperComponent<ContainerState> {
  private storeUnsubscribeCallback: Unsubscribe | undefined;
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
    }
  }

  protected abstract mapAppStateToContainerState(appState: AppState): ContainerState;

  private onStateUpdate() {
    const newContainerState = this.mapAppStateToContainerState(appStore.getState());
    this.patchState(newContainerState);
  }

  private patchState(newState: Partial<ContainerState>) {
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

    if (renderNeeded) {
      this.render();
    }
  }
}
