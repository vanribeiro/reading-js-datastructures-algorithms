import { defaultEquals } from "../../../utils/index.js";
import Node from "../../../models/linked-list-models.js";

class LinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    isAValidIndex(index){
        return index >= 0 && index < this.count;
    }

    push(element){
        const node = new Node(element);
        let current;
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

    insertElementAt(element, index){
        if(this.isAValidIndex(index)){
            const node = new Node(element);
            if(index === 0){
                const current = this.head; 
                node.next = current; 
                this.head = node; 
            } else {
                const previous = this.getElementAt(index - 1); 
                const current = previous.next; 
                node.next = current; 
                previous.next = node;
            }
            return true
        }
        return false;
    }
    
    removeAt(index){
        if(this.isAValidIndex(index)){
            let current = this.head;
            if(index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;    
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element){
        let current = this.head;
        for (let i = 0; i < this.count && current.element != null; i++) {
            if(this.equalsFn(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }
    
    getElementAt(index){
        if(this.isAValidIndex(index)){
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;                    
            }
            return node;
        }
        return undefined;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.size() && current !== null ; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear(){
        this.count = 0;
        this.head = null;
    }
    
}

export default LinkedList;