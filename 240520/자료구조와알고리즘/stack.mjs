import { LinkedList } from "./linkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  // 1. stack에서 data 삽입기능 구현
  push(data) {
    this.list.insertAt(0, data);
  }
  // 2. stack에서 data를 제거기능 구현
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  // 3. stack에서 data를 참조기능 구현
  peek() {
    return this.list.getNodeAt(0);
  }

  // 4.stack에서 data 비어있는지 체크하는 기능 구현
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
