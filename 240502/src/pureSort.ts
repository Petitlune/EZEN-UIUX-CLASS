//불순함수인 sort함수를 순수함수로 바꾸어 사용하기!

//readonly 읽기전용으로 만들어서 매개변수 값을 변경시키지 못하게 막아버림.
export const pureSort = <T>(array: readonly T[]): T[] => {
  const deepCopied = [...array];
  return deepCopied.sort();
};
