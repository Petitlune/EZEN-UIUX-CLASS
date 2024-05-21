import { atom, useRecoilState } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  //category는 타입리터럴 형식으로 줌
  category: "TO_DO" | "DOING" | "DONE";
}
export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});
