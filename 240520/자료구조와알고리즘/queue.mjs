import { DoublyLinkedList } from "./DoublyLinkedList.mjs";
// enque( ) : 데이터를 삽입하는 함수
// deque( ) : 데이터를 제거하는 함수
// front( ) : 데이터를 참조하는 함수
// isEmpty( ) : 데이터가 비어있는지 여부를 체크하는 함수

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  enqueue(data) {
    this.list.insertAt(0, data);
  }
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }
  front() {
    return this.list.tail;
  }
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
