import { Key, Value } from "../../../types/dictionary";

class ValuePair {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value){
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}]: ${this.value}`;
    }
}

export default ValuePair;