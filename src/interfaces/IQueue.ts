import { Element } from "../types/data-structures";
import ICommomDataStructure from "./ICommomDataStructure";

interface IQueue extends ICommomDataStructure {
    enqueue(item: Element): void;
    dequeue(): Element | undefined;
    peek(): Element | undefined;
}

export default IQueue;