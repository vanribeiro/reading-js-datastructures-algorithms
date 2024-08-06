import useWeakMap from ".";

const map = new WeakMap();
const usingWeakMap = useWeakMap(map);

const name = { name: 'dogName' };

describe('Data Structure: WeakMap', () => {

    describe('When it is populated', () => {
        
        it('should perform set(key, value) method when key/value is null', () => {
            const result = usingWeakMap.set(null as any, null as any);
            expect(result).toBeFalsy();
        });
    
        it('should perform set(key, value) method', () => {
            const result = usingWeakMap.set(name, 'Snoopy');
            expect(result).toBeTruthy();
        });

        it('should perform remove(key) method when the key searched is not available', () => {
            const result = usingWeakMap.remove({ name: 'notAvailable' });
            expect(result).toBeFalsy();
        });
        
        it('should perform has(key) method', () => {
            const result = usingWeakMap.has(name);
            expect(result).toBeTruthy();
        });
        
        it('should perform get(key) method', () => {
            const result = usingWeakMap.get(name);
            expect(result).toBe('Snoopy');
        });
    
        it('should perform get(key) method when the key searched is not available', () => {
            const result = usingWeakMap.get(null as any);
            expect(result).toBeUndefined();
        });

        it('should perform remove(key) method', () => {
            const phone1 = { phone: 'phone1' };
            const phone2 = { phone: 'phone2' };
            const phone3 = { phone: 'phone3' };

            usingWeakMap.set(phone1, 9999999999);
            usingWeakMap.set(phone2, 8888888888);
            usingWeakMap.set(phone3, 7777777777);

            expect(usingWeakMap.remove(phone2)).toBeTruthy();
        });
    
    });


});