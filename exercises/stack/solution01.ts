// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

export class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public push(value: T): void {
    this.items.push(value);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    if (this.items.length <= 0) return undefined;
    return this.items[this.items.length - 1];
  }

  public isEmpty(): boolean {
    return this.peek() === undefined;
  }

  public print() {
    console.log(this.items);
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.print();
// stack.pop();
// stack.print();
// stack.pop();
// stack.print();

// module.exports = Stack;
