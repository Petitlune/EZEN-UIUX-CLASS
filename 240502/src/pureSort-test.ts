// 불순했던 sort함수를 pure하게 만들어주어서 사용할 수 있다. (깊은복사 사용)

import { pureSort } from "./pureSort";

const beforSort = [6, 2, 9, 0];
const afterSort = pureSort(beforSort);

console.log(beforSort, afterSort);
