import { Key, Value } from "../types/dictionary";
import ICommomDataStructure from "./ICommomDataStructure";

interface IHash extends ICommomDataStructure{
    put(key: Key, value: Value): boolean;
    remove(key: Key): boolean;
    get(key: Key): Value | undefined;
    loseloseHashCode(key: Key | number): number;
    hashCode(key: Key | number): number;
}

export default IHash;