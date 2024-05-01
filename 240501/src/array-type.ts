const numArray: number[] = [1, 2, 3];

const stringArray: string[] = ["Hello", "Js"];

//배열 안에 객체값이 들어가 있다면?

interface IPerson {
  name: string;
  age?: number;
}

const personArray: IPerson[] = [{ name: "Petit" }, { name: "JJong", age: 34 }];
