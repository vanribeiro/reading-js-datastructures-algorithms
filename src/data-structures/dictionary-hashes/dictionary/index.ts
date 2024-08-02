import IDictionary from "../../../interfaces/IDictionary";
import { IndexString, Key, Value } from "../../../types/dictionary";
import { defaultToString } from "../../../utils";
import ValuePair from "./ValuePair";

class Dictionary implements IDictionary{
    toStrFn: Function;
    table: IndexString;

    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    set(key: Key, value: Value): boolean {
        if(key !== null && value !== null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key: Key): boolean {
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key: Key): boolean {
        return this.table[this.toStrFn(key)] ? true : false;
    }

    get(key: Key): ValuePair | undefined {
        const valuePair: any = this.table[this.toStrFn(key)];
        return valuePair ? valuePair.value : undefined;
    }

    keys(): Array<Key> {
        return this.keyValues().map((valuePair: ValuePair) => valuePair.key);
    }

    values(): Array<Value> {
        return this.keyValues().map((valuePair: ValuePair) => valuePair.value);
    }

    // ECMA 2017+
    keyValues(): Array<ValuePair> {
        return Object.values(this.table);
    }
    
    keyValuesLegacy(): Array<ValuePair> {
        const valuePairs: Array<ValuePair> = [];
        for (const key in this.table) {
            if (this.hasKey(key)) {
                const element = this.table[key];
                valuePairs.push(element);
            }
        }
        return valuePairs;
    }

    forEach(callBackFn: Function): void {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const element = valuePairs[i];
            const result = callBackFn(element.key, element.value);
            if(result === false) break;
        }
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    clear(): void {
        this.table = {};
    }

    size(): number {
        return Object.keys(this.table).length;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }

        return objString;
    }
}

export default Dictionary;