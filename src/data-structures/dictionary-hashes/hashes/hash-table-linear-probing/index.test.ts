import HashTableLinearProbing from ".";
import ValuePair from "../../dictionary/ValuePair";

const hashTableLinearProbing = new HashTableLinearProbing();

describe('Data Structure: HashTableLinearProbing', () => {

    describe('When hashCode(key) is used', () => {
        
        it('should return the same input value', () => {
            const result = hashTableLinearProbing.hashCode(150);
            expect(result).toBe(150);
        });

        it('should return 9 to word Yes', () => {
            const result = hashTableLinearProbing.hashCode('Yes');
            expect(result).toBe(9);
        });
    });

    describe('When it is empty', () => {
    
        it('should perform isEmpty() method', () => {
            const result = hashTableLinearProbing.isEmpty();
            expect(result).toBeTruthy();
        });

        it('should perform size() method', () => {
            const result = hashTableLinearProbing.keyValues();
            expect(result).toHaveLength(0);
        });

        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = hashTableLinearProbing.keyValues();
            expect(result).toEqual(valuePairs);
        });

        it('should perform toString() method', () => {
            const result = hashTableLinearProbing.toString();
            expect(result).toBe('');
        });
    
    });

    describe('When it is populated', () => {
        
        it('should perform put(key, value) method when key/value is null', () => {
            const result = hashTableLinearProbing.put(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform put(key, value) method', () => {
            const result = hashTableLinearProbing.put('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });
        
        it('should perform get(key) method', () => {
            const result = hashTableLinearProbing.get('dogName');
            expect(result).toBe('Snoopy');
        });

        it('should perform toString() method', () => {
            const str = '{33 => [#dogName]: Snoopy}';
            const result = hashTableLinearProbing.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method', () => {
            hashTableLinearProbing.put('phone1', 9999999999);
            hashTableLinearProbing.put('phone2', 8888888888);
            hashTableLinearProbing.put('phone3', 7777777777);
            expect(hashTableLinearProbing.remove('phone2')).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const str = '{32 => [#phone1]: 9999999999}\n{33 => [#dogName]: Snoopy}\n{34 => [#phone3]: 7777777777}';
            const result = hashTableLinearProbing.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            expect(hashTableLinearProbing.remove('notAvailable')).toBeFalsy();
        });
        
        it('should perform get(key) method when the key searched is not available', () => {
            const result = hashTableLinearProbing.get(null as any);
            expect(result).toBeUndefined();
        });
        
        it('should perform isEmpty() method', () => {
            const result = hashTableLinearProbing.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform size() method', () => {
            const result = hashTableLinearProbing.keyValues();
            expect(result).toHaveLength(3);
        });
        
        it('should perform clear() method', () => {
            hashTableLinearProbing.clear();
            expect(hashTableLinearProbing.isEmpty()).toBeTruthy();
        });

    });

    describe('When it clean and populate again ', () => {
        
        it('should return size() as 0', () =>{
            expect(hashTableLinearProbing.size()).toBe(0);
        });

        it('should return true when Ygritte is added as [key-value]', () => {
            expect(hashTableLinearProbing.put('Ygritte', 'Ygritte')).toBeTruthy();
        });

        it('should add Jonathan as [key-value] and the hash value is 5', () => {
            expect(hashTableLinearProbing.put('Jonathan', 'Jonathan')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[1]).toBe('5');
        });

        it('should add Jamie as [key-value] and the hash value is 6', () => {
            expect(hashTableLinearProbing.put('Jamie', 'Jamie')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[2]).not.toBe('5');
            expect(hash[2]).toBe('6');
        });

        it('should add Jack as [key-value] and the hash value is 7', () => {
            expect(hashTableLinearProbing.put('Jack', 'Jack')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[3]).toBe('7');
        });

        it('should add Jasmine as [key-value] and the hash value is 8', () => {
            expect(hashTableLinearProbing.put('Jasmine', 'Jasmine')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[4]).toBe('8');
        });

        it('should add Jake as [key-value] and the hash value is 9', () => {
            expect(hashTableLinearProbing.put('Jake', 'Jake')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[5]).toBe('9');
        });

        it('should add Nathan as [key-value] and the hash value is 10', () => {
            expect(hashTableLinearProbing.put('Nathan', 'Nathan')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[6]).toBe('10');
        });

        it('should add Athelstan as [key-value] and the hash value is 11', () => {
            expect(hashTableLinearProbing.put('Athelstan', 'Athelstan')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[7]).not.toBe('7');
            expect(hash[7]).not.toBe('8');
            expect(hash[7]).toBe('11');
        });

        it('should add Sue as [key-value] and the hash value is 12', () => {
            expect(hashTableLinearProbing.put('Sue', 'Sue')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[8]).not.toBe('6');
            expect(hash[8]).not.toBe('7');
            expect(hash[8]).not.toBe('8');
            expect(hash[8]).not.toBe('9');
            expect(hash[8]).not.toBe('10');
            expect(hash[8]).not.toBe('11');
            expect(hash[8]).toBe('12');
        });

        it('should add Aethelwulf as [key-value] and the hash value is 13', () => {
            expect(hashTableLinearProbing.put('Aethelwulf', 'Aethelwulf')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[9]).not.toBe('6');
            expect(hash[9]).not.toBe('7');
            expect(hash[9]).not.toBe('8');
            expect(hash[9]).not.toBe('9');
            expect(hash[9]).not.toBe('10');
            expect(hash[9]).not.toBe('11');
            expect(hash[9]).not.toBe('12');
            expect(hash[9]).toBe('13');
        });

        it('should add Sargeras as [key-value] and the hash value is 14', () => {
            expect(hashTableLinearProbing.put('Sargeras', 'Sargeras')).toBeTruthy();

            const hash = hashTableLinearProbing.keyIndexes();
            expect(hash[10]).not.toBe('10');
            expect(hash[10]).not.toBe('11');
            expect(hash[10]).not.toBe('12');
            expect(hash[10]).not.toBe('13');
            expect(hash[10]).toBe('14');
        });

        it('should remove Jonathan and return undefined', () => {
            const result = hashTableLinearProbing.remove('Jonathan');
            const value = hashTableLinearProbing.get('Jonathan');
            const hash = hashTableLinearProbing.getPosition('Jonathan');

            expect(result).toBeTruthy();
            expect(value).toBeUndefined();
            expect(hash).toBeUndefined();
        });

        it('should get Jamie position equals 5', () => {
            const value = hashTableLinearProbing.get('Jamie');
            const hash = hashTableLinearProbing.getPosition('Jamie');

            expect(value).toBe('Jamie');
            expect(hash).toBe(5);
        });

        it('should get Jack position equals 7', () => {
            const value = hashTableLinearProbing.get('Jack');
            const hash = hashTableLinearProbing.getPosition('Jack');

            expect(value).toBe('Jack');
            expect(hash).toBe(7);
        });

        it('should get Jasmine position equals 8', () => {
            const value = hashTableLinearProbing.get('Jasmine');
            const hash = hashTableLinearProbing.getPosition('Jasmine');

            expect(value).toBe('Jasmine');
            expect(hash).toBe(8);
        });

        it('should get Jake position equals 9', () => {
            const value = hashTableLinearProbing.get('Jake');
            const hash = hashTableLinearProbing.getPosition('Jake');

            expect(value).toBe('Jake');
            expect(hash).toBe(9);
        });

        it('should get Nathan position equals 10', () => {
            const value = hashTableLinearProbing.get('Nathan');
            const hash = hashTableLinearProbing.getPosition('Nathan');

            expect(value).toBe('Nathan');
            expect(hash).toBe(10);
        });

        it.skip('should get Athelstan position equals 12', () => {
            const value = hashTableLinearProbing.get('Athelstan');
            const hash = hashTableLinearProbing.getPosition('Athelstan');

            expect(value).toBe('Athelstan');
            expect(hash).toBe(12);
        });

        it.skip('should get Sue position equals 6', () => {
            const value = hashTableLinearProbing.get('Sue');
            const hash = hashTableLinearProbing.getPosition('Sue');

            expect(value).toBe('Sue');
            expect(hash).toBe(6);
        });

        it.skip('should get Aethelwulf position equals 13', () => {
            const value = hashTableLinearProbing.get('Aethelwulf');
            const hash = hashTableLinearProbing.getPosition('Aethelwulf');

            expect(value).toBe('Aethelwulf');
            expect(hash).toBe(12);
        });

        it.skip('should get Sargeras position equals 13', () => {
            const value = hashTableLinearProbing.get('Sargeras');
            const hash = hashTableLinearProbing.getPosition('Sargeras');

            expect(value).toBe('Sargeras');
            expect(hash).toBe(13);
        });

        

    });

    
});