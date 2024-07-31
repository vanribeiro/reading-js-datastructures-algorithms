import Node from "../../../models/Node";
import { Element } from "../../../types/data-structures";
import { defaultEquals } from "../../../utils";
import LinkedList from "../linked-lists/using-classes";

class CircularLinkedList extends LinkedList{
    constructor(equals = defaultEquals) {
        super(equals);
    }

    push(element: Element): void {
        const node: Node = new Node(element);
        let current: Node;
        if(this.head === null) {
            this.head = node;
        } else {
            const previous = this.getElementAt(this.size() - 1);
            if(previous){
                current = previous;
                current.next = node;
            }
        }
        node.next = this.head;
        this.count++;
    }

    insertElementAt(element: Element, index: number): boolean {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size() - 1);
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                if(previous){
                    node.next = previous.next;
                    previous.next = node;
                }
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index: number): Element | undefined {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = null;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size() - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                if (previous) {
                    current = previous.next;
                    previous.next = current.next;
                }
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    toString(): string {
        if(this.isEmpty()) return '';

        let objString: string = `${this.head.element}`;
        let current: any = this.head.next;

        if(this.size() === 1) return objString;

        for (let i = 0; i < (this.size() - 1) && current !== null ; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }

        return objString;
    }
}

export default CircularLinkedList;