import { pureDelete } from "./pure-filter-delete";

const mixedArray: object[] = [
  [],
  { name: "Petit" },
  { name: "JJong", age: 34 },
  ["JS"],
];

//객체만 찾아오기
const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);

console.log(objectOnly);
