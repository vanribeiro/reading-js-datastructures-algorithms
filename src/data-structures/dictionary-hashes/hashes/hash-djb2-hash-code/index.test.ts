import HashTableLinearProbing from ".";
import ValuePair from "../../dictionary/ValuePair";

const hashTableLinearProbing = new HashTableLinearProbing();

describe('Data Structure: HashTableLinearProbing', () => {

    describe('When hashCode(key) is used', () => {
        
        it('should return the same input value', () => {
            const result = hashTableLinearProbing.hashCode(150);
            expect(result).toBe(818);
        });

        it('should return 9 to word Yes', () => {
            const result = hashTableLinearProbing.hashCode('Yes');
            expect(result).toBe(444);
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
            const str = '{647 => [#dogName]: Snoopy}';
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
            const str = '{647 => [#dogName]: Snoopy}\n{789 => [#phone1]: 9999999999}\n{791 => [#phone3]: 7777777777}';
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

            const position = hashTableLinearProbing.getPosition('Ygritte');
            expect(position).toBe(807);
        });
        
        it('should add Jonathan as [key-value] and the hash value is 288', () => {
            expect(hashTableLinearProbing.put('Jonathan', 'Jonathan')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Jonathan');
            expect(position).toBe(288);
        });

        it('should add Jamie as [key-value] and the hash value is 962', () => {
            expect(hashTableLinearProbing.put('Jamie', 'Jamie')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Jamie');
            expect(position).toBe(962);
        });

        it('should add Jack as [key-value] and the hash value is 619', () => {
            expect(hashTableLinearProbing.put('Jack', 'Jack')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Jack');
            expect(position).toBe(619);
        });

        it('should add Jasmine as [key-value] and the hash value is 275', () => {
            expect(hashTableLinearProbing.put('Jasmine', 'Jasmine')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Jasmine');
            expect(position).toBe(275);
        });

        it('should add Jake as [key-value] and the hash value is 877', () => {
            expect(hashTableLinearProbing.put('Jake', 'Jake')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Jake');
            expect(position).toBe(877);
        });

        it('should add Nathan as [key-value] and the hash value is 223', () => {
            expect(hashTableLinearProbing.put('Nathan', 'Nathan')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Nathan');
            expect(position).toBe(223);
        });

        it('should add Athelstan as [key-value] and the hash value is 925', () => {
            expect(hashTableLinearProbing.put('Athelstan', 'Athelstan')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Athelstan');
            expect(position).toBe(925);
        });

        it('should add Sue as [key-value] and the hash value is 502', () => {
            expect(hashTableLinearProbing.put('Sue', 'Sue')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Sue');
            expect(position).toBe(502);
        });

        it('should add Aethelwulf as [key-value] and the hash value is 13', () => {
            expect(hashTableLinearProbing.put('Aethelwulf', 'Aethelwulf')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Aethelwulf');
            expect(position).toBe(149);
        });

        it('should add Sargeras as [key-value] and the hash value is 14', () => {
            expect(hashTableLinearProbing.put('Sargeras', 'Sargeras')).toBeTruthy();

            const position = hashTableLinearProbing.getPosition('Sargeras');
            expect(position).toBe(711);
        });

        it('should remove Jonathan and return undefined', () => {
            const result = hashTableLinearProbing.remove('Jonathan');
            const value = hashTableLinearProbing.get('Jonathan');
            const hash = hashTableLinearProbing.getPosition('Jonathan');

            expect(result).toBeTruthy();
            expect(value).toBeUndefined();
            expect(hash).toBeUndefined();
        });

        it('should get Jamie position equals 962', () => {
            const value = hashTableLinearProbing.get('Jamie');
            const hash = hashTableLinearProbing.getPosition('Jamie');

            expect(value).toBe('Jamie');
            expect(hash).toBe(962);
        });

        it('should get Jack position equals 619', () => {
            const value = hashTableLinearProbing.get('Jack');
            const hash = hashTableLinearProbing.getPosition('Jack');

            expect(value).toBe('Jack');
            expect(hash).toBe(619);
        });

        it('should get Jasmine position equals 275', () => {
            const value = hashTableLinearProbing.get('Jasmine');
            const hash = hashTableLinearProbing.getPosition('Jasmine');

            expect(value).toBe('Jasmine');
            expect(hash).toBe(275);
        });

        it('should get Jake position equals 9', () => {
            const value = hashTableLinearProbing.get('Jake');
            const hash = hashTableLinearProbing.getPosition('Jake');

            expect(value).toBe('Jake');
            expect(hash).toBe(877);
        });

        it('should get Nathan position equals 877', () => {
            const value = hashTableLinearProbing.get('Nathan');
            const hash = hashTableLinearProbing.getPosition('Nathan');

            expect(value).toBe('Nathan');
            expect(hash).toBe(223);
        });

        it('should get Athelstan position equals 223', () => {
            const value = hashTableLinearProbing.get('Athelstan');
            const hash = hashTableLinearProbing.getPosition('Athelstan');

            expect(value).toBe('Athelstan');
            expect(hash).toBe(925);
        });

        it('should get Sue position equals 6', () => {
            const value = hashTableLinearProbing.get('Sue');
            const hash = hashTableLinearProbing.getPosition('Sue');

            expect(value).toBe('Sue');
            expect(hash).toBe(502);
        });

        it('should get Aethelwulf position equals 13', () => {
            const value = hashTableLinearProbing.get('Aethelwulf');
            const hash = hashTableLinearProbing.getPosition('Aethelwulf');

            expect(value).toBe('Aethelwulf');
            expect(hash).toBe(149);
        });

        it('should get Sargeras position equals 13', () => {
            const value = hashTableLinearProbing.get('Sargeras');
            const hash = hashTableLinearProbing.getPosition('Sargeras');

            expect(value).toBe('Sargeras');
            expect(hash).toBe(711);
        });        

    });
    
});