import { Element } from "../types/data-structures";
import ICommomDataStructure from "./ICommomDataStructure";

interface IDeque extends ICommomDataStructure {
    addBack(item: Element): void;
    addFront(item: Element): void;
    isEmpty(): boolean;
    peekFront(): Element | undefined;
    peekBack(): Element | undefined;
}

export default IDeque;