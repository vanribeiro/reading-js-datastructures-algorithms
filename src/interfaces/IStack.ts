import { Element } from "../types/data-structures";
import IBase from "./ICommomDataStructure";

interface IStack extends IBase {
    push(item: Element): void;
    peek(): Element | undefined;
    pop(): Element | undefined;
}

export default IStack;