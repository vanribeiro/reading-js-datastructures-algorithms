import { defaultEquals } from "../../utils/index.js";
import Node from "../../models/linked-list-models.js";

class LinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

}

// const linkedList = new LinkedList();
// linkedList.push('banana');
// console.log(linkedList.head);

export default LinkedList;