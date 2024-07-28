import Node from "./Node";

class DoublyNode extends Node{
    prev: any;

    constructor(
        element: any, 
        next: any = null, 
        prev: any = null 
    ) {
        super(element, next);
        this.prev = prev;
    }
}

export default DoublyNode;