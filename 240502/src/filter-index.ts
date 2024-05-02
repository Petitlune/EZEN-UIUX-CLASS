// 1 ~ 10까지 배열을 완성 2개의 신규배열 생성 1. 1 ~ 5 숫자 2. 6 ~ 10 숫자

import { range } from "./range";

const array: number[] = range(1, 11);
const half: number = array.length / 2;

const belowHalf: number[] = array.filter((value, index) => index < half);
const overHalf: number[] = array.filter((value, index) => index >= half);

console.log(belowHalf, overHalf);
