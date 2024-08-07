import HashTableLinearProbingDjb2 from ".";
import ValuePair from "../../dictionary/ValuePair";

const hashTableLinearProbingDjb2 = new HashTableLinearProbingDjb2();

describe('Data Structure: HashTableLinearProbingDjb2', () => {

    describe('When hashCode(key) is used', () => {
        
        it('should return the same input value', () => {
            const result = hashTableLinearProbingDjb2.hashCode(150);
            expect(result).toBe(818);
        });

        it('should return 9 to word Yes', () => {
            const result = hashTableLinearProbingDjb2.hashCode('Yes');
            expect(result).toBe(444);
        });
    });

    describe('When it is empty', () => {
    
        it('should perform isEmpty() method', () => {
            const result = hashTableLinearProbingDjb2.isEmpty();
            expect(result).toBeTruthy();
        });

        it('should perform size() method', () => {
            const result = hashTableLinearProbingDjb2.keyValues();
            expect(result).toHaveLength(0);
        });

        it('should perform keyValues() method', () => {
            const valuePairs: Array<ValuePair> = [];
    
            const result = hashTableLinearProbingDjb2.keyValues();
            expect(result).toEqual(valuePairs);
        });

        it('should perform toString() method', () => {
            const result = hashTableLinearProbingDjb2.toString();
            expect(result).toBe('');
        });
    
    });

    describe('When it is populated', () => {
        
        it('should perform put(key, value) method when key/value is null', () => {
            const result = hashTableLinearProbingDjb2.put(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform put(key, value) method', () => {
            const result = hashTableLinearProbingDjb2.put('dogName', 'Snoopy');
            expect(result).toBeTruthy();
        });
        
        it('should perform get(key) method', () => {
            const result = hashTableLinearProbingDjb2.get('dogName');
            expect(result).toBe('Snoopy');
        });

        it('should perform toString() method', () => {
            const str = '{647 => [#dogName]: Snoopy}';
            const result = hashTableLinearProbingDjb2.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method', () => {
            hashTableLinearProbingDjb2.put('phone1', 9999999999);
            hashTableLinearProbingDjb2.put('phone2', 8888888888);
            hashTableLinearProbingDjb2.put('phone3', 7777777777);
            expect(hashTableLinearProbingDjb2.remove('phone2')).toBeTruthy();
        });

        it('should perform toString() method', () => {
            const str = '{647 => [#dogName]: Snoopy}\n{789 => [#phone1]: 9999999999}\n{791 => [#phone3]: 7777777777}';
            const result = hashTableLinearProbingDjb2.toString();
            expect(result).toBe(str);
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            expect(hashTableLinearProbingDjb2.remove('notAvailable')).toBeFalsy();
        });
        
        it('should perform get(key) method when the key searched is not available', () => {
            const result = hashTableLinearProbingDjb2.get(null as any);
            expect(result).toBeUndefined();
        });
        
        it('should perform isEmpty() method', () => {
            const result = hashTableLinearProbingDjb2.isEmpty();
            expect(result).toBeFalsy();
        });
        
        it('should perform size() method', () => {
            const result = hashTableLinearProbingDjb2.keyValues();
            expect(result).toHaveLength(3);
        });
        
        it('should perform clear() method', () => {
            hashTableLinearProbingDjb2.clear();
            expect(hashTableLinearProbingDjb2.isEmpty()).toBeTruthy();
        });

    });

    describe('When it clean and populate again ', () => {
        
        it('should return size() as 0', () =>{
            expect(hashTableLinearProbingDjb2.size()).toBe(0);
        });

        it('should return true when Ygritte is added as [key-value]', () => {
            expect(hashTableLinearProbingDjb2.put('Ygritte', 'Ygritte')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Ygritte');
            expect(position).toBe(807);
        });
        
        it('should add Jonathan as [key-value] and the hash value is 288', () => {
            expect(hashTableLinearProbingDjb2.put('Jonathan', 'Jonathan')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jonathan');
            expect(position).toBe(288);
        });

        it('should add Jamie as [key-value] and the hash value is 962', () => {
            expect(hashTableLinearProbingDjb2.put('Jamie', 'Jamie')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jamie');
            expect(position).toBe(962);
        });

        it('should add Jack as [key-value] and the hash value is 619', () => {
            expect(hashTableLinearProbingDjb2.put('Jack', 'Jack')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jack');
            expect(position).toBe(619);
        });

        it('should add Jasmine as [key-value] and the hash value is 275', () => {
            expect(hashTableLinearProbingDjb2.put('Jasmine', 'Jasmine')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jasmine');
            expect(position).toBe(275);
        });
        
        it('should add Jasmine again as [key-value] and the hash value is 275', () => {
            expect(hashTableLinearProbingDjb2.put('Jasmine', 'Jasmine')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jasmine');
            expect(position).toBe(275);
        });

        it('should add Jake as [key-value] and the hash value is 877', () => {
            expect(hashTableLinearProbingDjb2.put('Jake', 'Jake')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Jake');
            expect(position).toBe(877);
        });

        it('should add Nathan as [key-value] and the hash value is 223', () => {
            expect(hashTableLinearProbingDjb2.put('Nathan', 'Nathan')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Nathan');
            expect(position).toBe(223);
        });

        it('should add Athelstan as [key-value] and the hash value is 925', () => {
            expect(hashTableLinearProbingDjb2.put('Athelstan', 'Athelstan')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Athelstan');
            expect(position).toBe(925);
        });

        it('should add Sue as [key-value] and the hash value is 502', () => {
            expect(hashTableLinearProbingDjb2.put('Sue', 'Sue')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Sue');
            expect(position).toBe(502);
        });

        it('should add Aethelwulf as [key-value] and the hash value is 13', () => {
            expect(hashTableLinearProbingDjb2.put('Aethelwulf', 'Aethelwulf')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Aethelwulf');
            expect(position).toBe(149);
        });

        it('should add Sargeras as [key-value] and the hash value is 14', () => {
            expect(hashTableLinearProbingDjb2.put('Sargeras', 'Sargeras')).toBeTruthy();

            const position = hashTableLinearProbingDjb2.getPosition('Sargeras');
            expect(position).toBe(711);
        });

        it('should remove Jonathan and return undefined', () => {
            const result = hashTableLinearProbingDjb2.remove('Jonathan');
            const value = hashTableLinearProbingDjb2.get('Jonathan');
            const hash = hashTableLinearProbingDjb2.getPosition('Jonathan');

            expect(result).toBeTruthy();
            expect(value).toBeUndefined();
            expect(hash).toBeUndefined();
        });

        it('should get Jamie position equals 962', () => {
            const value = hashTableLinearProbingDjb2.get('Jamie');
            const hash = hashTableLinearProbingDjb2.getPosition('Jamie');

            expect(value).toBe('Jamie');
            expect(hash).toBe(962);
        });

        it('should get Jack position equals 619', () => {
            const value = hashTableLinearProbingDjb2.get('Jack');
            const hash = hashTableLinearProbingDjb2.getPosition('Jack');

            expect(value).toBe('Jack');
            expect(hash).toBe(619);
        });

        it('should get Jasmine position equals 275', () => {
            const value = hashTableLinearProbingDjb2.get('Jasmine');
            const hash = hashTableLinearProbingDjb2.getPosition('Jasmine');

            expect(value).toBe('Jasmine');
            expect(hash).toBe(275);
        });

        it('should get Jake position equals 9', () => {
            const value = hashTableLinearProbingDjb2.get('Jake');
            const hash = hashTableLinearProbingDjb2.getPosition('Jake');

            expect(value).toBe('Jake');
            expect(hash).toBe(877);
        });

        it('should get Nathan position equals 877', () => {
            const value = hashTableLinearProbingDjb2.get('Nathan');
            const hash = hashTableLinearProbingDjb2.getPosition('Nathan');

            expect(value).toBe('Nathan');
            expect(hash).toBe(223);
        });

        it('should get Athelstan position equals 223', () => {
            const value = hashTableLinearProbingDjb2.get('Athelstan');
            const hash = hashTableLinearProbingDjb2.getPosition('Athelstan');

            expect(value).toBe('Athelstan');
            expect(hash).toBe(925);
        });

        it('should get Sue position equals 6', () => {
            const value = hashTableLinearProbingDjb2.get('Sue');
            const hash = hashTableLinearProbingDjb2.getPosition('Sue');

            expect(value).toBe('Sue');
            expect(hash).toBe(502);
        });

        it('should get Aethelwulf position equals 13', () => {
            const value = hashTableLinearProbingDjb2.get('Aethelwulf');
            const hash = hashTableLinearProbingDjb2.getPosition('Aethelwulf');

            expect(value).toBe('Aethelwulf');
            expect(hash).toBe(149);
        });

        it('should get Sargeras position equals 13', () => {
            const value = hashTableLinearProbingDjb2.get('Sargeras');
            const hash = hashTableLinearProbingDjb2.getPosition('Sargeras');

            expect(value).toBe('Sargeras');
            expect(hash).toBe(711);
        });        

    });
    
});