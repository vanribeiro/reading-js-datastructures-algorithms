import { Element } from "../types/data-structures";

class Node {

    element: Element;
    next: Element | null;
    
    constructor(
        element: Element,  
        next: Element | null = null  
    ) {
        this.element = element;
        this.next = next;
    }
    
}

export default Node;