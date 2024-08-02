import { Element } from "../types/data-structures";
import Node from "./Node";

class DoublyNode extends Node{
    prev: Element | null;

    constructor(
        element: Element, 
        next: Element | null = null, 
        prev: Element | null = null 
    ) {
        super(element, next);
        this.prev = prev;
    }
}

export default DoublyNode;