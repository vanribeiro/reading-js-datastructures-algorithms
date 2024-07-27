import { Node } from "../../../types/data-structures.js";
import { defaultEquals } from "../../../utils/index.js";

function LinkedList() {

    let count: number = 0;
    let head: Node = null;

    function Node (element: string | number): Node {
        return {
            element: element,
            next: null
        }
    }
    
    function push(element: string | number): void {
        const node: Node = Node(element);
        let current: Node;
        if(head === null) {
            head = node;
        } else {
            current = head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        count++
    }

    function insertElementAt(element: string | number, index: number): boolean {
        if(index >= 0 && index < count){
            const node: Node = Node(element);
            if(index === 0){
                const current = head; 
                node.next = current; 
                head = node; 
            } else {
                const previous = getElementAt(index - 1); 
                const current = previous.next; 
                node.next = current; 
                previous.next = node;
            }
            return true
        }
        return false;
    }

    function removeAt(index: number): string | number | object | undefined {
        if(index >= 0 && index < count){
            let current: Node = head;
            if(index === 0) {
                head = current.next;
            } else {
                let previous = current;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            count--;
            return current.element;
        }
        return undefined;
    }

    function getElementAt(index: number): Node | undefined {
        if(index >= 0 && index < count){
            let node: any = head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    function remove(element: string | number): string | number | object | undefined {
        const index = indexOf(element);
        return removeAt(index);
    }

    function indexOf(element: string | number): number {
        let current: any = head;
        for (let i = 0; i < count && current.element != null; i++) {
            if(defaultEquals(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }

    function toString(): string {
        if(isEmpty()) return '';
        let objString: string = `${head.element}`;
        let current: any = head.next;
        for (let i = 0; i < size() && current !== null ; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    function isAValidIndex(index: number): boolean {
        return index >= 0 && index < count;
    }

    function size(): number {
        return count;
    }

    function isEmpty(): boolean {
        return size() === 0;
    }

    function getHead(): Node {
        return head;
    }

    function clear (): void {
        count = 0;
        head = null;
    }

    return {
        push, insertElementAt, isEmpty,
        size, clear, getHead,
        removeAt, getElementAt,
        isAValidIndex, toString,
        remove, indexOf,
    }
}

export default LinkedList;
