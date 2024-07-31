import ISet from "../../../interfaces/ISet";
import { SetElement as Element } from "../../../types/data-structures";

class Set implements ISet {
    items: { [key: Element]: Element  } ;

    constructor(){
        this.items = {};
    }

    add(element: Element): boolean {
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element: Element): boolean {
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element: Element): boolean {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear(): void {
        this.items = {};
    }

    // ECMA 2015+
    size(): number {
        return Object.keys(this.items).length;
    }

    sizeLegacy(): number {
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
        return count;
    }

    // ECMA 2017+
    values(): Array<Element> {
        return Object.values(this.items);
    }

    valuesLegacy(): Array<Element> {
        let values: Array<Element> = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values;
    }

    union(otherSet: ISet): Set {
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    intersection(otherSet: ISet): Set {
        const intersectionSet = new Set();
        const values = this.values();
        let biggerSet: Array<Element> = values;
        let smallerSet: Array<Element> = otherSet.values();

        if(otherSet.values().length - values.length > 0) {
            biggerSet = otherSet.values();
            smallerSet = values;
        }
            
        smallerSet.forEach(value => {
            if(biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        });

        return intersectionSet;
    }

    difference(otherSet: ISet): Set {
        const differenceSet = new Set();

        this.values().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        });

        return differenceSet;
    }

    isSubsetOf(otherSet: ISet): boolean {
        if(this.size() > otherSet.size()){
            return false;
        }

        let isSubset: boolean = true;

        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

export default Set;