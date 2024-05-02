import { ResultType } from "./tuple";

//Promise 객체 => 정상적인 외부데이터 수신 try문 / 정상적 외부데이터 수신 불가할때 catch문
// catch문일때 false와 함께 왜 오류가 발생했는지 오류메세지

const doSomething = (): ResultType[] => {
  try {
    throw new Error("some error occurs....");
  } catch (e: unknown | any) {
    return [false, e.message];
  }
};
