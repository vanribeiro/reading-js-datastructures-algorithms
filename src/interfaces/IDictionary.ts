import ValuePair from "../data-structures/dictionary-hashes/dictionary/ValuePair";
import { Key, Value } from "../types/dictionary";
import ICommomDataStructure from "./ICommomDataStructure";

interface IDictionary extends ICommomDataStructure {
    set(key: Key, value: Value): boolean;
    remove(key: Key): boolean;
    hasKey(key: Key): boolean;
    get(key: Key): ValuePair | undefined;
    keys(): Array<Key>;
    values(): Array<Value>;
    keyValues(): Array<ValuePair>;
    forEach(callBackFn: Function): void;
}

export default IDictionary;