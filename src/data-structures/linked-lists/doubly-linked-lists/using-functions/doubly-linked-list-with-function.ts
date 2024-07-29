import { Element, Node } from "../../../../types/data-structures";
import { defaultEquals } from "../../../../utils/index";

function DoublyLinkedListFn() {

    let count: number = 0;
    let head: any = null;
    let tail: any = null;

    function DoublyLinkedListNode (element: Element): Node {
        return {
            element,
            next: null
        }
    }
    
    function push(element: Element): void {
        const node: Node = DoublyLinkedListNode(element);
        
        if(head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.prev = tail;
            tail = node;
        }
        count++
    }

    function getElementAt(index: number): Node | undefined {
        if(isAValidIndex(index)){
            let node = head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    function insertElementAt(element: Element, index: number): boolean {
        if(isAValidIndex(index)){
            const node: any = DoublyLinkedListNode(element);
            let current = head;

            if(index === 0){

                if(head === null){
                    head = node;
                    tail = node;
                } else {
                    node.next = head;
                    head.prev = node;
                    head = node;
                }

            } else if(index === count - 1) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                const previous = getElementAt(index - 1); 
                if(previous){
                    current = previous.next;
                    node.next = current;
                    previous.next = node;
                    current.prev = node;
                    node.prev = previous;
                }
            }
            count++;
            return true
        }
        return false;
    }

    function removeAt(index: number): Element | undefined {
        if(isAValidIndex(index)){
            let current: any = head;
            if(index === 0) {
                head = current.next;
                if(count === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if(index === count - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                current = getElementAt(index);
                if(current) {
                    const previous = current.prev;
                    previous.next = current.next;
                    current.next.prev = previous;    
                }
                return current.element;
            }
            count--;
            return current.element;
        }
        return undefined;
    }

    function remove(element: Element): Element | undefined {
        const index = indexOf(element);
        return removeAt(index);
    }

    function indexOf(element: Element): number {
        let current: any = head;
        let index = 0;
        while(current !== null){
            if(defaultEquals(element, current.element)) return index;
            index++;
            current = current.next;
        }
        return -1
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

    function inversetoString(): string {
        if(isEmpty()) return '';
        let objString: string = `${tail.element}`;
        let previous: any = tail.prev;
        for (let i = 0; i < size() && previous !== null; i++) {
            objString = `${objString}, ${previous.element}`;
            previous = previous.prev;
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

    function getHead(): Node | undefined {
        return head;
    }

    function getTail(): Node | undefined {
        return tail;
    }

    function clear (): void {
        count = 0;
        head = null;
    }

    return {
        push, insertElementAt, isEmpty,
        size, clear, getHead, 
        removeAt, getElementAt,
        isAValidIndex, toString, inversetoString,
        remove, indexOf, getTail
    }
}

export default DoublyLinkedListFn;
