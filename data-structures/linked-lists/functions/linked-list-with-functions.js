// import Node from "../../../models/linked-list-models.js";
import { defaultEquals } from "../../../utils/index.js";

function LinkedList() {

    let count = 0;
    let head = null;

    function Node (element) {
        return {
            element: element,
            next: null
        }
    }
    
    function push(element) {
        const node = Node(element);
        let current;
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

    function insertElementAt(element, index){
        if(index >= 0 && index < count){
            const node = Node(element);
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

    function removeAt(index) {
        if(index >= 0 && index < count){
            let current = head;
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

    function getElementAt(index) {
        if(index >= 0 && index < count){
            let node = head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    function remove(element){
        const index = indexOf(element);
        return removeAt(index);
    }

    function indexOf(element){
        let current = head;
        for (let i = 0; i < count && current.element != null; i++) {
            if(defaultEquals(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }

    function toString() {
        if(isEmpty()) return '';
        let objString = `${head.element}`;
        let current = head.next;
        for (let i = 0; i < size() && current !== null ; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    function isAValidIndex(index) {
        return index >= 0 && index < count;
    }

    function size() {
        return count;
    }

    function isEmpty() {
        return size() === 0;
    }

    function getHead() {
        return head;
    }

    function clear () {
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
