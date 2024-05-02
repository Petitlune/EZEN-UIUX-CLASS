import { range } from "./range";

const array = range(1, 11);

const squares = array.map((value: number) => value * value);
console.log(squares);
