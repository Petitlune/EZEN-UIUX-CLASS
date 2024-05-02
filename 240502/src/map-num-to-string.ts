import { range } from "./range";

const array: number[] = range(1, 11);
const names: string[] = array.map((value, i) => `[${i}] : [${value}]`);

console.log(names);
