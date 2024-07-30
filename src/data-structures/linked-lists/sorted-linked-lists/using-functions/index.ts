import { Element, Node } from "../../../../types/data-structures";
import { defaultCompare } from "../../../../utils";

function SortedLinkedListFn(compares: Function = defaultCompare) {
    let count: number = 0;
    let head: any = null;

    function LinkedListNode (element: Element): Node {
        return {
            element,
            next: null
        }
    }

    function isAValidIndex(index: number): boolean {
        return index >= 0 && index <= count;
    }

    function size(): number {
        return count;
    }

    function isEmpty(): boolean {
        return size() === 0;
    }

    function clear (): void {
        count = 0;
        head = null;
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

    function getIndexNextSortedElement(element: Element): number {
        let current = head;
        let index = 0;
        for (let i = 0; i < size() && current; i++) {
            const comp = compares(element, current.element);
            if(comp === -1){
                return i
            };
            current = current.next;
            ++index;
        }
        return index;
    }

    function push(element: Element): void {
        if(isEmpty()) {
            const node: Node = LinkedListNode(element);
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
        } else {
            const index = getIndexNextSortedElement(element);
            insert(element, index);
        }
        count++;
    }

    function insert(element: Element, index: number): boolean {
        
        if(isAValidIndex(index)){
            const node: any = LinkedListNode(element);
            if(index === 0){
                const current = head; 
                node.next = current; 
                head = node; 
            } else {
                const previous = getElementAt(index - 1); 
                const current = previous?.next; 
                node.next = current; 
                if(previous) previous.next = node;
            }
            return true
        }
        
        return false;
    }

    function insertElementAt(element: Element, index: number = 0): boolean {
        if(isEmpty()) return insert(element, index);
        
        const pos = getIndexNextSortedElement(element);  
        const returnedValue = insert(element, pos);
        count++;
        return returnedValue;
    }

    function toString(): string {
        if(isEmpty()) return '';
        let objString: string = `${head.element}`;
        let current: any = head.next;
        for (let i = 0; i < size() && current !== null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    return {
        clear,
        push,
        insertElementAt,
        size,
        getIndexNextSortedElement,
        isEmpty,
        toString
    }
}

export default SortedLinkedListFn;