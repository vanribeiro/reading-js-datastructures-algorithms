import IStackLinkedList from "../../../interfaces/IStackLinkedList";
import { Element } from "../../../types/data-structures";
import DoublyLinkedList from "../doubly-linked-lists/using-classes";

class StackLinkedList implements IStackLinkedList {
    items: DoublyLinkedList;

    constructor() {
        this.items = new DoublyLinkedList();
    }
    
    peek(): Element | undefined {
        if(this.isEmpty()) return undefined;
        return this.items.getElementAt(this.size() - 1)?.element;
    }

    push(element: Element): void {
        this.items.push(element);
    }

    pop(): Element | undefined {
        if(this.items.isEmpty()) return undefined;
        return this.items.removeAt(this.items.size() - 1);
    }

    isEmpty(): boolean {
        return this.items.isEmpty();
    }

    clear(): void {
        this.items.clear();
    }
    size(): number {
        return this.items.size();
    }
    toString(): string {
        return this.items.toString();
    }
}

export default StackLinkedList;