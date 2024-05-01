//배열을 활용해서 반복문으로 무언가 만들기

export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
