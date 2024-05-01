import { arrayLength, isEmpty } from "./array-length";

interface IPerson {
  name?: string;
  age?: number;
}

// const emtyArray: IPerson[] = [];
const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Petit", "JJong", "Taemin"];
const personArray: IPerson[] = [{ name: "Petit" }, { name: "malto", age: 31 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray)
);
console.log(isEmpty(numArray), isEmpty(strArray), isEmpty(personArray));
