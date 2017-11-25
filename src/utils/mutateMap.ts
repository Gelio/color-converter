export function mutateMap<T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => T
): T[] {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    array[i] = callback(array[i], i, array);
  }

  return array;
}
