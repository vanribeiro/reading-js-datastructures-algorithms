import { Element } from "../types/data-structures";
import ICommomDataStructure from "./ICommomDataStructure";

interface IStack extends ICommomDataStructure {
    push(item: Element): void;
    peek(): Element | undefined;
    pop(): Element | undefined;
}

export default IStack;