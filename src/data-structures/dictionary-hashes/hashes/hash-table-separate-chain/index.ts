import IHash from "../../../../interfaces/IHash";
import { Element } from "../../../../types/data-structures";
import { Key, Value } from "../../../../types/dictionary";
import { defaultToString } from "../../../../utils";
import LinkedList from "../../../linked-lists/linked-lists/using-classes";
import ValuePair from "../../dictionary/ValuePair";

class HashTableSeparateChaining implements IHash{
    toStriFn: Function;
    table: {[key: string]: LinkedList};

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
            if(this.table[position] === null){
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
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

    get(key: Key): Element | undefined {
        const position: number = this.hashCode(key);
        const linkedList: LinkedList = this.table[position];
        if(linkedList !== null && !linkedList.isEmpty()){
            let current: any = linkedList.getHead();
            while(current !== null){
                if((current?.element.key) === key) {
                    return current.element.value;
                }
                current = current?.next;
            }
        }
        return undefined;
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

    keyValues(): Array<LinkedList | ValuePair> {
        return Object.values(this.table);
    }

    toString(): string {
        const keys = Object.keys(this.table);
        if(this.isEmpty()) return '';
        
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, ${`{${keys[i]} => ${this.table[keys[i]].toString()}}`}`;
        }

        return objString;
    }
    
}

export default HashTableSeparateChaining;