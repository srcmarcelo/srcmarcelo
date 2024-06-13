export function reorderArray<T>(array: T[], newFirstIndex: number): T[] {
  if (newFirstIndex < 0 || newFirstIndex >= array.length) {
    throw new Error('Index out of bounds');
  }

  const firstPart = array.slice(newFirstIndex);
  const secondPart = array.slice(0, newFirstIndex);
  return firstPart.concat(secondPart);
}
