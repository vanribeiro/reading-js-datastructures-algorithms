import ISet from "../../interfaces/ISet";
import { SetElement as Element } from "../../types/data-structures";

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

    values(): Array<Element> {
        throw new Error("Method not implemented.");
    }
}

export default Set;