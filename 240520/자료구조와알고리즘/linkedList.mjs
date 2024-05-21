// 모듈화된 자바스크립트 파일은 mjs
// 먼저 노드를 만든다

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //가장 첫번째 연결리스트 노드
    this.head = null;
    //연결리스트 안에 연결되어있는 노드 총 개수
    this.count = 0;
  }

  //현재까지 생성된 연결리스트 모두 출력   >printAll()
  printAll() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  //3) 연결리스트 내 인덱스를 삽입 기능 >insertAt(index, data)
  insertAt(index, data) {
    //예외조항 처리
    if (index > this.count || index < 0) {
      throw new Error("연결리스트의 범위를 넘어갔습니다.");
    }
    let newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }
}

export { Node, LinkedList };
