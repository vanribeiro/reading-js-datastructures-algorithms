import { Element } from "../../../../types/data-structures";
import { defaultCompare, defaultEquals } from "../../../../utils";
import LinkedList from "../../linked-lists/using-classes";

class SortedLinkedList extends LinkedList {
    compares: Function;
    equals: Function;
    constructor(equals = defaultEquals, compares = defaultCompare) {
        super(equals);
        this.compares = compares;
        this.equals = equals;
    }

    push(element: Element): void {
        if(this.isEmpty()) {
            super.push(element);
        } else {
            const index = this.getIndexNextSortedElement(element);
            super.insertElementAt(element, index);
        }
        this.count++;
    }

    insertElementAt(element: Element, index: number = 0): boolean {
        if(this.isEmpty()) {
            return super.insertElementAt(element, index);
        }
        const pos = this.getIndexNextSortedElement(element);
        const returnedValue = super.insertElementAt(element, pos);
        
        this.count++;
        return returnedValue;

    }

    getIndexNextSortedElement(element: Element): number {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compares(element, current.element);
            if(comp === -1) return i;
            current = current.next;
        }
        return i;
    }

}

export default SortedLinkedList;