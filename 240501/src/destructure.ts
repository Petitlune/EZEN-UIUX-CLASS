//구조분해할당 연습하기

interface IPerson {
  name: string;
  age: number;
}

const printPerson = ({ name, age }: IPerson): void => {
  console.log(`name: ${name}, age: ${age}`);
};

printPerson({ name: "Petit", age: 29 });
