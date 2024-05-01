//1 ~ 100까지의 숫자를 더하는 코드를 작성(*선언형 방식으로)
// 숫자를 생성하는 함수를 선언 및 생성 => range()
// 생성된 숫자를 더하는 함수 선언 및 생성 => fold()

import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);

const result = fold(numbers, (result, value) => result + value, 0);

console.log(result);
