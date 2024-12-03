class Stack {
  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.empty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.empty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  search(element) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i] === element) {
        return this.items.length - 1 - i;
      }
    }
    return -1;
  }
}

const stack = new Stack();
console.log(stack.empty());

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.empty());
console.log(stack.peek());
console.log(stack.search(2));
console.log(stack.pop());
console.log(stack.peek());
