declare module 'hyperhtml';

declare module 'hyperhtml/esm' {
  interface Dictionary {
    [key: string]: any;
  }
  type PatchStateCallback<T> = (state: T) => Partial<T>;

  export abstract class Component<ComponentState extends Dictionary = Dictionary> {
    protected html: Function;
    protected svg: Function;
    protected state: ComponentState;

    protected defaultState(): ComponentState;
    protected handleEvent(event: Event): void;

    protected setState(patch: Partial<ComponentState>): void;
    protected setState(callback: PatchStateCallback<ComponentState>): void;

    protected abstract render(): any;
  }

  export function bind(element: Element): any;
  export function wire(): any;
  export function wire(object: object): any;
  export function wire(object: object, typeWithId: string): any;

  export function define(intent: string, callback: (data: any) => any): void;

  export function hyper(): any;
}

declare module 'hyperhtml/cjs';

declare module 'ml-matrix';
