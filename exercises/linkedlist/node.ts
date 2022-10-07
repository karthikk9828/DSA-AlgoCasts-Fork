export class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node("Node 1 data");
// console.log(n1.data); // 'Node 1 data'
// console.log(n1.next); // null
// const n2 = new Node("Hi", n1);
// console.log(n2.next); // returns n1
