// 회전하는 큐
//큐(queue)는 컴퓨터의 기본적인 자료 구조의 한가지로, 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 형식을 말한다.
// 큐 선입선출 __스택 후입선출(프링글스통)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);
// \s는 공백 이고 정규식으로 / 는 각각 정규식 시작과 끝을 알리고, 공백제거하는거인듯
const [n, m, ...arr] = input;

let count = 0;

//양방향 연결리스트(Doubly Linked List)를 기반으로 문제를 푸는데 필요한 메서드만을 가진 적절한 자료구조를 생성자 함수로 구현
//연결리스트를 생성하고 1부터 n까지의 value를 가지는 Node n개를 추가한다.
//그 다음에 지민이가 뽑아내려고 하는 수들(arr)을 차례차례 뽑으면서 연산 횟수를 누적하여 출력하였다.

function Node(value) {
  this.value = value;
  this.prevNode = null;
  this.nextNode = null;
}

function DoublyLinkedList() {
  this.front = null;
  this.rear = null;
  this.length = 0;

  this.enqueue = (value) => {
    //enqueue 메소드는 연결리스트의 마지막에 노드를 추가한다.
    let curNode = new Node(value);
    if (this.front) {
      curNode.prevNode = this.rear;
      curNode.nextNode = this.front;
      this.rear.nextNode = curNode;
      this.front.prevNode = curNode;
      this.rear = curNode;
    } else {
      this.front = curNode;
      this.rear = curNode;
      curNode.prevNode = curNode;
      curNode.nextNode = curNode;
    }
    this.length++;
  };

  this.poll = () => {
    //poll 메소드는 연결리스트의 가장 앞 노드를 삭제한다. (문제의 1번 연산)
    if (this.length === 1) {
      this.front = null;
      this.rear = null;
    } else {
      let secondNode = this.front.nextNode;
      secondNode.prevNode = this.rear;
      this.rear.nextNode = secondNode;
      this.front = secondNode;
      this.length--;
    }
  };

  this.rotateToLeft = (n = 1) => {
    //rotateToLeft 메소드는 가장 앞 노드를 맨 뒤로 보낸다. (문제의 2번 연산)
    while (n > 0) {
      if (this.length > 1) {
        this.rear = this.front;
        this.front = this.front.nextNode;
      }
      n--;
    }
  };

  this.rotateToRight = (n = 1) => {
    //rotateToRight 메소드는 가장 마지막 노드를 맨 앞으로 보낸다. (문제의 3번 연산)
    while (n > 0) {
      if (this.length > 1) {
        this.front = this.rear;
        this.rear = this.rear.prevNode;
      }
      n--;
    }
  };

  this.extract = (value) => {
    //extract 메소드는 인수로 받은 value값을 가지는 노드를 찾기 위해 왼쪽과 오른쪽 모두 탐색을 한 후,
    //가장 짧은 탐색이 가능한 방향으로 rotateToLeft/rotateToRight 한 후에 해당 value를 가진 노드를 poll하여 삭제한다.
    //그리고 연산이 몇 번 이루어졌는지 그 횟수를 반환한다.
    if (this.length <= 1) {
      return 0;
    } else {
      let curNode = this.front;
      let leftCount = 0;
      let rightCount = 0;
      while (curNode.value !== value) {
        curNode = curNode.nextNode;
        leftCount++;
      }
      curNode = this.front;
      while (curNode.value !== value) {
        curNode = curNode.prevNode;
        rightCount++;
      }

      if (leftCount < rightCount) {
        this.rotateToLeft(leftCount);
        this.poll();
        return leftCount;
      } else {
        this.rotateToRight(rightCount);
        this.poll();
        return rightCount;
      }
    }
  };
}
dll = new DoublyLinkedList();
for (let i = 1; i <= n; i++) dll.enqueue(i);
console.log(dll);

// console.log(arr.reduce((acc, v) => acc + dll.extract(v), 0));
// console.log(new Node());
// console.log(new DoublyLinkedList());
