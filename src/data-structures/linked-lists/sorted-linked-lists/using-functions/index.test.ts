import SortedLinkedListFn from ".";

const sortedll = SortedLinkedListFn();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

describe("Data Structure: Sorted Linked List with Function", () => {

	describe('when the list is empty', () => {

		it("should return true if the list is empty", () => {
			expect(sortedll.isEmpty()).toBeTruthy();
		});
		
		it("should return an empty string if the list is empty", () => {
			expect(sortedll.toString()).toBe("");
		});
	
		it("should return the number of items in the list with a value equal to zero", () => {
			expect(sortedll.size()).toBe(0);
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {

        it("should add one new item in the final of the list", () => {
			sortedll.insertElementAt(10);
		});

        it("should add four new items in the final of the list", () => {
			sortedll.push(5);
			sortedll.push(1);
			sortedll.push(3);
			sortedll.push(4);
		});
		
        
        it.skip("should return an string with list items", () => {
            expect(sortedll.toString()).toBe('1, 3, 4, 5, 10');
        });

		it('should add item when the list it is not empty', () => {
			expect(sortedll.insertElementAt(2)).toBeTruthy();
		});

		it.skip("should return an string with list items sorted when items are equal", () => {
			sortedll.insertElementAt(4);
            expect(sortedll.toString()).toBe('1, 2, 3, 4, 4, 5, 10');
        });

		it("should push a new item when the list is empty", () => {
            sortedll.clear();
			sortedll.push("amora");
            expect(sortedll.toString()).toBe("amora");
        });
	});

});
