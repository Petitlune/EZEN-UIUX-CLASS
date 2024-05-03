import INameable from "./Inameable";

let obj: object = {
  name: "jack",
};

// 타입단언 => 기본형태

let name1 = (obj as INameable).name;

// 타입단언 => 제네릭형태 (아직 안배움)

let name2 = (<INameable>obj).name;
console.log(name1, name2);