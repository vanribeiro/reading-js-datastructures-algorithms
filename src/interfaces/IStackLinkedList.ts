import { Element } from "../types/data-structures";
import IBase from "./ICommomDataStructure";

interface IStackLinkedList extends IBase {
    push(item: Element): void;
    peek(): Element | undefined;
    pop(): Element | undefined;
}

export default IStackLinkedList;