// 선언형 방식으로 짝수값만 찾아서 더함

import { filter } from "./filter";
import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);
const isOdd = (n: number): boolean => n % 2 === 0;
const result = fold(
  filter(numbers, isOdd),
  (result, value) => result + value,
  0
);

console.log(result);
