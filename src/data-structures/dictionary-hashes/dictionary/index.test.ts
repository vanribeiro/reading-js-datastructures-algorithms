import Dictionary from ".";
import { Key, Value } from "../../../types/dictionary";
import ValuePair from "./ValuePair";

const dictionary = new Dictionary();

describe('Data Structure: Dictionary', () => {

    describe('When it is empty', () => {
        
        it('should perform isEmpty() method', () => {
            const result = dictionary.isEmpty();
            expect(result).toBeTruthy();
        });
    
        it('should perform size() method', () => {
            const result = dictionary.keyValues();
            expect(result).toHaveLength(0);
        });
    
        it('should perform keys() method', () => {
            const keys: Array<Key> = [];
            const result = dictionary.keys();
            expect(result).toEqual(keys);
        });
        
        it('should perform values() method', () => {
            const values: Array<Value> = [];
            const result = dictionary.values();
            expect(result).toEqual(values);
        });
    
        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = dictionary.keyValues();
            expect(result).toEqual(valuePairs);
        });
    
        it('should perform keyValuesLegacy() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = dictionary.keyValuesLegacy();
            expect(result).toEqual(valuePairs);
        });

        it('should perform toString() method', () => {
            const result = dictionary.toString();
            expect(result).toBe('');
        });

    });

    describe('When it is populated', () => {
        
        it('should perform set(key, value) method when key/value is null', () => {
            const result = dictionary.set(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform set(key, value) method', () => {
            const result = dictionary.set('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const result = dictionary.toString();
            expect(result).toBe('[#dogName]: Snoopy');
        });
        
        it('should perform remove(key) method', () => {
            dictionary.set('phone1', 9999999999);
            dictionary.set('phone2', 8888888888);
            dictionary.set('phone3', 7777777777);
            expect(dictionary.remove('phone2')).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const str = '[#dogName]: Snoopy, [#phone1]: 9999999999, [#phone3]: 7777777777';
            const result = dictionary.toString();
            expect(result).toBe(str);
        });
    
        it('should perform remove(key) method when the key searched is not available', () => {
            expect(dictionary.remove('notAvailable')).toBeFalsy();
        });
        
        it('should perform hasKey(key) method', () => {
            const result = dictionary.hasKey('dogName');
            expect(result).toBeTruthy();
        });
    
        it('should perform hasKey(key) method when the key searched is not available', () => {
            const result = dictionary.hasKey('notAvailable');
            expect(result).toBeFalsy();
        });
        
        it('should perform get(key) method', () => {
            const result = dictionary.get('dogName');
            expect(result).toBe('Snoopy');
        });
    
        it('should perform get(key) method when the key searched is not available', () => {
            const result = dictionary.get(null as any);
            expect(result).toBeUndefined();
        });
        
        it('should perform keys() method', () => {
            const keys: Array<Key> = ['dogName', 'phone1', 'phone3'];
            const result = dictionary.keys();
            expect(result).toEqual(keys);
        });
        
        it('should perform values() method', () => {
            const values: Array<Value> = ['Snoopy', 9999999999, 7777777777];
            const result = dictionary.values();
            expect(result).toEqual(values);
        });
        
        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [
                {key: 'dogName', value: 'Snoopy'},
                {key: 'phone1', value: 9999999999},
                {key: 'phone3', value: 7777777777},           
            ];
    
            const result = dictionary.keyValues();
            expect(result).toEqual(valuePairs);
        });
    
        it('should perform keyValuesLegacy() method', () => {
            const valuePairs: Array<ValuePair> = [
                {'key': 'dogName', 'value': 'Snoopy'},
                {'key': 'phone1', 'value': 9999999999},
                {'key': 'phone3', 'value': 7777777777},           
            ];
    
            const result = dictionary.keyValuesLegacy();
            expect(result).toEqual(valuePairs);
        });
    
        
        it('should perform isEmpty() method', () => {
            const result = dictionary.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform size() method', () => {
            const result = dictionary.keyValues();
            expect(result).toHaveLength(3);
        });
        
        it('should perform forEach(callBackFn) method', () => {
            const keyValues = [
                `key: dogName - value: Snoopy`,
                `key: phone1 - value: 9999999999`,
                `key: phone3 - value: 7777777777`,
            ];

            const result: Array<string> = [];

            dictionary.forEach((key: Key, value: Value) => {
                result.push(`key: ${key} - value: ${value}`);
                return result;
            });

            expect(result).toEqual(keyValues);
        });

        it('should perform forEach(callBackFn) when return is false', () => {
            expect(
                () => dictionary.forEach((key: Key, value: Value) => false)
            ).not.toThrow();
        });
        
        it('should perform clear() method', () => {
            dictionary.clear();
            expect(dictionary.isEmpty()).toBeTruthy();
        });
    });


});