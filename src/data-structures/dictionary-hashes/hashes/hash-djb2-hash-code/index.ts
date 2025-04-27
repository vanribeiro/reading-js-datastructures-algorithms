import { IndexString, Key, Value } from "../../../../types/dictionary";
import { defaultToString } from "../../../../utils/default-functions";
import ValuePair from "../../dictionary/ValuePair";

class HashTableLinearProbingDjb2 {
    
    toStriFn: Function;
    table: IndexString;

    constructor(toStrFn = defaultToString){
        this.toStriFn = toStrFn;
        this.table = {};
    }

    djb2HashCode(key: Key | number): number {
        const tableKey = this.toStriFn(key);
        let hash: number = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }

        return hash % 1013;
    }

    hashCode(key: Key | number): number {
        return this.djb2HashCode(key);
    }

    put(key: Key, value: Value): boolean {
        if(key && value){
            const position = this.hashCode(key);
            if(this.table[position] == null){
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position + 1;
                while(this.table[index] != null){
                    index++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    remove(key: Key): boolean {
        const position: number = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                delete this.table[position];
                this.veryRemoveSideEffects(key, position);
                return true;
            }

        }
        return false;
    }

    private veryRemoveSideEffects(key: Key, removedPosition: number) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while(this.table[index] != null){
            const posHas = this.hashCode(this.table[index].key);
            if(posHas <= hash || posHas <= removedPosition){
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }
    
    get(key: Key): Value | undefined {
        const position: number = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                return this.table[position].value;
            }
        }
        return undefined;
    }

    getPosition(key: Key): number | undefined {
        const position: number = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                return position;
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

    keyValues(): Array<ValuePair> {
        return Object.values(this.table);
    }

    toString(): string {
        const keys = Object.keys(this.table);
        if(this.isEmpty()) return '';
        
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
        
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}\n${`{${keys[i]} => ${this.table[keys[i]].toString()}}`}`;
        }

        return objString;
    }
    
}

export default HashTableLinearProbingDjb2;