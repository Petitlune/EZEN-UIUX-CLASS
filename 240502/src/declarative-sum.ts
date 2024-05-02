// 선언형 방식으로 찾아서 더함

import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);

//더해주는 함수 만들기 ==> fold

const result = fold(numbers, (result, value) => result + value, 0);

console.log(result);
