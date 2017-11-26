export function mergeState<T>(state: T, ...updates: Partial<T>[]): T {
  return Object.assign({}, state, ...updates);
}
