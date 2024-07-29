import Queue from ".";

const queue = new Queue();

describe('Data Structure: Queue (with class and objects', () => {

    beforeEach(() => {
        queue.clear();
    });

    describe('when the queue is empty ', () => {

        it('should return true', () => {
            expect(queue.isEmpty()).toBeTruthy();
        });

        it('should return an empty array', () => {
            expect(queue.getItems()).toStrictEqual([]);
        });

        it('should return 0', () => {
            expect(queue.size()).toBe(0);
        });

        it('should return undefined', () => {
            expect(queue.peek()).toBeUndefined();
        });

        it('should return undefined', () => {
            expect(queue.dequeue()).toBeUndefined();
        });

    });

    describe('when the queue is being populated', () => {
        
        it('should add one element', () => {            
            queue.enqueue('mimi');
            expect(queue.size()).toBe(1);
        });
        
        it('should three two elements and returns the queue size', () => {
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.size()).toBe(3);
        });

        it('should returns the object [\'mimi\', \'max\', \'dudu\'\]', () => {
            const expectation = ['mimi', 'max', 'dudu'];
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.getItems()).toStrictEqual(expectation);
        });
        
    });

    describe('when the queue searched', () => {

        it('should return the first element in the queue', () => {
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.peek()).toBe('mimi');
        });

    });
});