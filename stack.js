'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = new _Node(value, this.top);
  }

  pop() {
    if (!this.top) return;
    const topNode = this.top;
    this.top = this.top.next;
    return topNode.value;
  }
}

module.exports = Stack;

const myFamily = new Stack();
starTrek.push('kevin');
starTrek.push('alison');
starTrek.push('bones');
