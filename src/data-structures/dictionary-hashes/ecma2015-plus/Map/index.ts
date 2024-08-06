import { Element } from "../../../../types/data-structures";
import { Key, Value } from "../../../../types/dictionary";

function useMap (map: Map<Key, Value>){

    const set = (key: Key, value: Value): boolean => {
        if(key && value) {
            map.set(key, value);
            return true;
        }
        return false;
    }

    const remove = (key: Key): boolean => {
        return map.delete(key);
    }

    const has = (key: Key): boolean => {
        return map.has(key);
    }

    const size = (): number => {
        return map.size;
    }

    const isEmpty = (): boolean => {
        return map.size === 0;
    }

    const clear = (): void => {
        map.clear();
    }

    const keys = (): Array<Key> => {
        const allKeys: Array<Key> = [];

        for (const element of map.keys()) {
            allKeys.push(element);
        }

        return allKeys;
    }

    const values = (): Array<Element> => {
        const allValues: Array<Element> = [];

        for (const element of map.values()) {
            allValues.push(element);            
        }

        return allValues;
    }

    const get = (key: Key): Element | undefined => {
        return map.get(key);
    }

    return {
        clear,
        get, 
        has,
        keys,
        remove,
        set,
        size,
        values,
        isEmpty
    }
}

export default useMap;
