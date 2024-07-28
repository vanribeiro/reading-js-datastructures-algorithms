import { defaultEquals } from "../../../../utils";
import Node from "../../../../models/Node";

class LinkedList {

    count: number;
    head: any;
    equals: Function;

    constructor(equals = defaultEquals) {
        this.count = 0;
        this.head = null;
        this.equals = equals;
    }

    isAValidIndex(index: number): boolean {
        return index >= 0 && index < this.count;
    }

    push(element: string | number | object): void {
        const node: Node = new Node(element);
        let current: Node;
        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insertElementAt(element: string | number | object, index: number): boolean {
        if(this.isAValidIndex(index)){
            const node: Node = new Node(element);
            if(index === 0){
                const current: Node = this.head; 
                node.next = current; 
                this.head = node; 
            } else {
                const previous: any = this.getElementAt(index - 1); 
                const current: Node = previous.next; 
                node.next = current; 
                previous.next = node;
            }
            return true
        }
        return false;
    }
    
    removeAt(index: number): string | number | object | undefined {
        if(this.isAValidIndex(index)){
            let current = this.head;
            if(index === 0) {
                this.head = current.next;
            } else {
                const previous: any = this.getElementAt(index - 1);
                current = previous.next;    
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    remove(element: string | number | object): string | number | object | undefined {
        const index: number = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element: string | number | object): number {
        let current: any = this.head;
        for (let i = 0; i < this.count && current.element != null; i++) {
            if(this.equals(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }
    
    getElementAt(index: number): Node | undefined  {
        if(this.isAValidIndex(index)){
            let node: any = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;                    
            }
            return node;
        }
        return undefined;
    }

    getHead(): Node | undefined {
        return this.head;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        let objString: string = `${this.head.element}`;
        let current: any = this.head.next;
        for (let i = 0; i < this.size() && current !== null ; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    clear(): void  {
        this.count = 0;
        this.head = null;
    }
    
}

export default LinkedList;