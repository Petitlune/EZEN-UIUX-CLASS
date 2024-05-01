import { IPerson, ICompany } from "./IPerson_ICompany";

const jack: IPerson = {
  name: "jack",
  age: 21,
};

const apple: ICompany = {
  name: "apple",
  age: 40,
};

let { name, age } = jack;
