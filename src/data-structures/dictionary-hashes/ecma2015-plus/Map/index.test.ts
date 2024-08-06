import useMap from "."; ".";
import { Key, Value } from "../../../../types/dictionary";

const map = new Map();
const usingMap = useMap(map);

describe('Data Structure: Map', () => {

    describe('When it is empty', () => {
        
        it('should perform isEmpty() method', () => {
            const result = usingMap.isEmpty();
            expect(result).toBeTruthy();
        });

        it('should perform size() method', () => {
            const result = usingMap.size();
            expect(result).toBe(0);
        });

        it('should perform keys() method', () => {
            const keys: Array<Key> = [];
            const result = usingMap.keys();
            expect(result).toEqual(keys);
        });
        
        it('should perform values() method', () => {
            const values: Array<Value> = [];
            const result = usingMap.values();
            expect(result).toEqual(values);
        });

    });

    describe('When it is populated', () => {
        
        it('should perform set(key, value) method when key/value is null', () => {
            const result = usingMap.set(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform set(key, value) method', () => {
            const result = usingMap.set('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            const result = usingMap.remove('notAvailable');
            expect(result).toBeFalsy();
        });
        
        it('should perform has(key) method', () => {
            const result = usingMap.has('dogName');
            expect(result).toBeTruthy();
        });
    
        it('should perform has(key) method when the key searched is not available', () => {
            const result = usingMap.has('notAvailable');
            expect(result).toBeFalsy();
        });
        
        it('should perform get(key) method', () => {
            const result = usingMap.get('dogName');
            expect(result).toBe('Snoopy');
        });
    
        it('should perform get(key) method when the key searched is not available', () => {
            const result = usingMap.get(null as any);
            expect(result).toBeUndefined();
        });

        it('should perform remove(key) method', () => {
            usingMap.set('phone1', 9999999999);
            usingMap.set('phone2', 8888888888);
            usingMap.set('phone3', 7777777777);
            expect(usingMap.remove('phone2')).toBeTruthy();
        });
        
        it('should perform keys() method', () => {
            const keys: Array<Key> = ['dogName', 'phone1', 'phone3'];
            const result = usingMap.keys();
            expect(result).toEqual(keys);
        });
        
        it('should perform values() method', () => {
            const values: Array<Value> = ['Snoopy', 9999999999, 7777777777];
            const result = usingMap.values();
            expect(result).toEqual(values);
        });
        
        it('should perform isEmpty() method', () => {
            const result = usingMap.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform clear() method', () => {
            usingMap.clear();
            expect(usingMap.isEmpty()).toBeTruthy();
        });
    });


});