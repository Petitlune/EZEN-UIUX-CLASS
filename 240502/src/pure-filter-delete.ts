// filter => 자체적인 몇 안되는 순수함수

export const pureDelete = <T>(
  array: readonly T[],
  callback: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => callback(val, index) === false);
