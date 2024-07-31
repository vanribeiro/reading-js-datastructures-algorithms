import { Element, Node } from "./../types/data-structures";
import ICommomDataStructure from "./ICommomDataStructure";

interface ILinkedList extends ICommomDataStructure {
    push(element: Element): void;
    isAValidIndex(index: number): boolean;
    insertElementAt(element: Element, index: number): boolean
    removeAt(index: number): void;
    remove(element: Element): Element | undefined;
    indexOf(element: Element): number;
    getElementAt(index: number): Element | undefined;
    getHead(): Node | undefined;
}

export default ILinkedList;