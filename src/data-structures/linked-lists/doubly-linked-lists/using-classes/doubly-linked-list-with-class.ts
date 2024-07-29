import DoublyNode from "../../../../models/DoublyNode";
import Node from "../../../../models/Node";
import { Element } from "../../../../types/data-structures";
import { defaultEquals } from "../../../../utils";
import LinkedList from "../../simple-linked-list/using-classes/linked-list-with-class";

class DoublyLinkedList extends LinkedList {
    tail: any = null;

    constructor(equals = defaultEquals) {
        super(equals);
        this.tail = null;
    }

    push(element: Element): void {
        const node = new DoublyNode(element);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }

    getElementAt(index: number): Node | undefined {
        if(this.isAValidIndex(index)){
            let node: any = this.head;

            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }

            return node;
        }
        
        return undefined;
    }

    insertElementAt(element: Element, index: number): boolean {
        if(this.isAValidIndex(index)){
            
            const node = new DoublyNode(element);
            let current = this.head;

            if(index === 0){

                if(this.head === null){
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }

            } else if(index === this.count - 1){

                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;

            } else {

                const previous = this.getElementAt(index - 1);
                if(previous){
                    current = previous.next;
                    node.next = current;
                    previous.next = node;
                    current.prev = node;
                    node.prev = previous;
                }

            }
            this.count++;
            return true;
        }

        return false;
    }

    removeAt(index: number) {
        if(this.isAValidIndex(index)){
            let current = this.head;
            if(index === 0) {
                this.head = current.next;
                if(this.count === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if(index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                current = this.getElementAt(index);
                if(current) {
                    const previous = current.prev;
                    previous.next = current.next;
                    current.next.prev = previous;    
                }
                return current.element;
            }

            this.count--;
            return current.element;
        }

        return undefined;
    }

    getHead(): Node | undefined {
        return this.head;
    }

    getTail(): Node | undefined {
        return this.tail;
    }

    clear(): void {
        super.clear();
        this.tail = null;
    }

    inversetoString(): string {
        if(this.isEmpty()) return '';
        let objString: string = `${this.tail.element}`;
        let previous: any = this.tail.prev;
        for (let i = 0; i < this.size() && previous !== null ; i++) {
            objString = `${objString}, ${previous.element}`;
            previous = previous.prev;
        }

        return objString;
    }

    indexOf(element: Element): number {
        let current = this.head;
        let index = 0;
        while(current !== null){
            if(this.equals(element, current.element)) return index;
            index++;
            current = current.next;
        }
        return -1
    }

}

export default DoublyLinkedList;