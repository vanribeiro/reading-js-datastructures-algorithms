import IHash from "../../../interfaces/IHash";
import { IndexString, Key, Value } from "../../../types/dictionary";
import { defaultToString } from "../../../utils";
import Dictionary from "../dictionary";
import ValuePair from "../dictionary/ValuePair";

class HashTable implements IHash{
    toStriFn: Function;
    table: IndexString
    constructor(toStrFn = defaultToString){
        this.toStriFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key: Key | number): number {
        if(typeof key === 'number') return key;
        const tableKey = this.toStriFn(key);
        let hash: number = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }

        return hash % 37;
    }

    hashCode(key: Key | number): number {
        return this.loseloseHashCode(key);
    }

    put(key: Key, value: Value): boolean {
        if(key !== null && value !== null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key: Key): boolean {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if(valuePair){
            delete this.table[hash];
            return true;
        }
        return false;
    }

    get(key: Key): Value | undefined {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair ? valuePair.value : undefined;
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

    keyValues(): Array<ValuePair> {
        return Object.values(this.table);
    }

    toString(): string {
        const valuePairs = this.keyValues();
        
        if(this.isEmpty()) return '';
        
        if(this.size() === 1) return `${valuePairs[0].toString()}`;
        let objString = `${valuePairs[0].toString()}`;
        
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }

        return objString;
    }
    
}

export default HashTable;