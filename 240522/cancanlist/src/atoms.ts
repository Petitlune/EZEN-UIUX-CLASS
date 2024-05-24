import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});

//초를 분으로 바꾸는 코드
// export const minState = atom({
//   key: "min",
//   default: 0,
// });

// export const hourSelector = selector({
//   key: "hours",
//   //get은 반드시 값을 반환
//   get: ({ get }) => {
//     const min = get(minState);
//     return min / 60;
//   },
//   //set은 그냥 atom의 값을 변환시키기만 하는 함수, 값을 반환 X, newValue는 사용자가 입력한 값
//   set: ({ set }, newValue) => {
//     const min = Number(newValue) * 60;
//     set(minState, min);
//   },
// });
