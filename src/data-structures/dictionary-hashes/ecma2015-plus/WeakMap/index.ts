import { Element } from "../../../../types/data-structures";
import { Value } from "../../../../types/dictionary";

function useWeakMap (weakMap: WeakMap<WeakKey, Value>){

    const set = (key: WeakKey, value: Value): boolean => {
        if(key && value) {
            weakMap.set(key, value);
            return true;
        }
        return false;
    }

    const remove = (key: WeakKey): boolean => {
        return weakMap.delete(key);
    }

    const has = (key: WeakKey): boolean => {
        return weakMap.has(key);
    }

    const get = (key: WeakKey): Element | undefined => {
        return weakMap.get(key);
    }

    return {
        get, 
        has,
        remove,
        set
    }
}

export default useWeakMap;
