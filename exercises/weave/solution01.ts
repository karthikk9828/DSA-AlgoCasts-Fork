// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

import { Queue } from "../queue/solution01";

function weave(queueOne: Queue<any>, queueTwo: Queue<any>): Queue<any> {
  let result = new Queue<any>();

  while (queueOne.peek() !== undefined || queueTwo.peek() !== undefined) {
    if (queueOne.peek() !== undefined) {
      result.add(queueOne.remove());
    }
    if (queueTwo.peek() !== undefined) {
      result.add(queueTwo.remove());
    }
  }

  console.log(result);

  return result;
}

const queueOne = new Queue<String>();
queueOne.add("you");
queueOne.add("to");
queueOne.add("Hi");

const queueTwo = new Queue<number>();
queueTwo.add(3);
queueTwo.add(2);
queueTwo.add(1);

weave(queueOne, queueTwo);

const queueThree = new Queue<number>();
queueThree.add(3);
queueThree.add(2);
queueThree.add(1);

const queueFour = new Queue<String>();
queueFour.add("Hi");

weave(queueThree, queueFour);

module.exports = weave;
