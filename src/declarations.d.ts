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

declare module 'ml-matrix' {
  export class Matrix {
    static rowVector(array: number[]): Matrix;
    static columnVector(array: number[]): Matrix;

    constructor(rows: number, columns: number);
    constructor(matrix: number[][]);
    constructor(matrix: Matrix);

    inverse(): Matrix;
    set(rowIndex: number, columnIndex: number, value: number): Matrix;
    get(rowIndex: number, columnIndex: number): number;
    mmul(other: Matrix): Matrix;
    mulRowVector(vector: (number[][] | Matrix)): Matrix;
    transpose(): Matrix;
  }

  export function solve(leftHandSide: Matrix, rightHandSide: Matrix, useSVD?: boolean): Matrix
}
