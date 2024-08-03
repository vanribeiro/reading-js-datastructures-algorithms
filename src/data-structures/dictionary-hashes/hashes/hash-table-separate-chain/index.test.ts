import HashTableSeparateChaining from ".";
import ValuePair from "../../dictionary/ValuePair";

const hashTableSeparateChaining = new HashTableSeparateChaining();

describe('Data Structure: HashTable', () => {

    describe('When hashCode(key) is used', () => {
        
        it('should return the same input value', () => {
            const result = hashTableSeparateChaining.hashCode(150);
            expect(result).toBe(150);
        });

        it('should return 9 to word Yes', () => {
            const result = hashTableSeparateChaining.hashCode('Yes');
            expect(result).toBe(9);
        });
    });

    describe('When it is empty', () => {
    
        it('should perform isEmpty() method', () => {
            const result = hashTableSeparateChaining.isEmpty();
            expect(result).toBeTruthy();
        });

        it('should perform size() method', () => {
            const result = hashTableSeparateChaining.keyValues();
            expect(result).toHaveLength(0);
        });

        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = hashTableSeparateChaining.keyValues();
            expect(result).toEqual(valuePairs);
        });

        it('should perform toString() method', () => {
            const result = hashTableSeparateChaining.toString();
            expect(result).toBe('');
        });
    
    });

    describe('When it is populated', () => {
        
        it('should perform put(key, value) method when key/value is null', () => {
            const result = hashTableSeparateChaining.put(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform put(key, value) method', () => {
            const result = hashTableSeparateChaining.put('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });
        
        it('should perform get(key) method', () => {
            const result = hashTableSeparateChaining.get('dogName');
            expect(result).toBe('Snoopy');
        });

        it('should perform toString() method', () => {
            const str = '{33 => [#dogName]: Snoopy}';
            const result = hashTableSeparateChaining.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method', () => {
            hashTableSeparateChaining.put('phone1', 9999999999);
            hashTableSeparateChaining.put('phone2', 8888888888);
            hashTableSeparateChaining.put('phone3', 7777777777);
            expect(hashTableSeparateChaining.remove('phone2')).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const str = '{32 => [#phone1]: 9999999999}, {34 => [#phone3]: 7777777777}';
            const result = hashTableSeparateChaining.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            expect(hashTableSeparateChaining.remove('notAvailable')).toBeFalsy();
        });
        
        it('should perform get(key) method when the key searched is not available', () => {
            const result = hashTableSeparateChaining.get(null as any);
            expect(result).toBeUndefined();
        });
        
        it('should perform isEmpty() method', () => {
            const result = hashTableSeparateChaining.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform size() method', () => {
            const result = hashTableSeparateChaining.keyValues();
            expect(result).toHaveLength(2);
        });
        
        it('should perform clear() method', () => {
            hashTableSeparateChaining.clear();
            expect(hashTableSeparateChaining.isEmpty()).toBeTruthy();
        });

    });

    
});