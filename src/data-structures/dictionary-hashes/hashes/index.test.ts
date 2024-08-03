import HashTable from ".";
import { Key } from "../../../types/dictionary";
import ValuePair from "../dictionary/ValuePair";

const hashTable = new HashTable();

describe('Data Structure: HashTable', () => {

    describe('When hashCode(key) is used', () => {
        
        it('should return the same input value', () => {
            const result = hashTable.hashCode(150);
            expect(result).toBe(150);
        });

        it('should return 9 to word Yes', () => {
            const result = hashTable.hashCode('Yes');
            expect(result).toBe(9);
        });
    });

    describe('When it is empty', () => {
    
        it('should perform isEmpty() method', () => {
            const result = hashTable.isEmpty();
            expect(result).toBeTruthy();
        });

        it('should perform size() method', () => {
            const result = hashTable.keyValues();
            expect(result).toHaveLength(0);
        });

        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = hashTable.keyValues();
            expect(result).toEqual(valuePairs);
        });

        it('should perform toString() method', () => {
            const result = hashTable.toString();
            expect(result).toBe('');
        });
    
    });

    describe('When it is populated', () => {
        
        it('should perform put(key, value) method when key/value is null', () => {
            const result = hashTable.put(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform put(key, value) method', () => {
            const result = hashTable.put('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });
        
        it('should perform get(key) method', () => {
            const result = hashTable.get('dogName');
            expect(result).toBe('Snoopy');
        });

        it('should perform toString() method', () => {
            const str = '[#dogName]: Snoopy';
            const result = hashTable.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method', () => {
            hashTable.put('phone1', 9999999999);
            hashTable.put('phone2', 8888888888);
            hashTable.put('phone3', 7777777777);
            expect(hashTable.remove('phone2')).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const str = '[#phone1]: 9999999999, [#phone3]: 7777777777';
            const result = hashTable.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            expect(hashTable.remove('notAvailable')).toBeFalsy();
        });
        
        it('should perform get(key) method when the key searched is not available', () => {
            const result = hashTable.get(null as any);
            expect(result).toBeUndefined();
        });
        
        it('should perform isEmpty() method', () => {
            const result = hashTable.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform size() method', () => {
            const result = hashTable.keyValues();
            expect(result).toHaveLength(2);
        });
        
        it('should perform clear() method', () => {
            hashTable.clear();
            expect(hashTable.isEmpty()).toBeTruthy();
        });

    });

    
});