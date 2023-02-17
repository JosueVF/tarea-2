const Node = require('./node');

/**
 * +----------------+
 * |   LinkedList   |
 * +----------------+
 * | head           |
 * | tail           |
 * | size           |
 * +----------------+
 * | toString       |
 * |                |
 * +----------------+
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    /* if (!this.size) {
      return true;
    } else {
      return false;
    } */
    // return !this.size === false
    return !this.size ? true : false;
  }

  /**
   * appendToStart
   * @param {number} value The new node value 
   */
  appendToStart(value) {
    // 1. Create a new node
    const newNode = new Node(value);
    // 2. new node points to head
    newNode.next = this.head
    // 3. head = new node
    this.head = newNode
    // 4. ++this.size
    ++this.size;
    // 5 if list is empty then, this tail points to new Node
    if (this.isEmpty()) {
      this.tail = newNode;
    }

  }

  appendToEnd(value) {
    if (this.tail == null) {
      const newNode = new Node(value);
      newNode.next = this.tail;
      this.tail = newNode;
      ++this.size;
      if (this.head == null) {
        this.head = this.tail;
      }
    } else {
      if (this.tail.next == null) {
        console.log("Funciona")
        const newNode = new Node(value);
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        ++this.size;
      }
    }
  }

  exists(value) {
    const cont = 0;
    console.log()
    while (cont < this.size) {
      if (value == this.head.value || value == this.tail.value) {
        return true;
      } else {
        return false;
      }
      ++cont;
    }
  }

  // TODO: update this method
  toString() {
    return this.head.getValue() + ' - ' + this.tail + ' - ' + this.size;
  }
}

const myLinkedList = new LinkedList();
// const linkedString = myLinkedList.toString();

// console.log(linkedString)
console.log(myLinkedList.isEmpty()) // true

myLinkedList.appendToStart(3);

console.log(myLinkedList.isEmpty()) // false


myLinkedList.appendToEnd(7);
myLinkedList.appendToEnd(1);


console.log(myLinkedList);

console.log(myLinkedList.exists(3)); // true
console.log(myLinkedList.exists(16)); // false
console.log(myLinkedList.exists(23)); // false
console.log(myLinkedList.exists(7)); // true
console.log(myLinkedList.exists(12)); // false
