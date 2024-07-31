import SortedLinkedList from ".";

const sortedLinkedList = new SortedLinkedList();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

describe("Data Structure: Sorted Linked List with Class", () => {

	describe('when the list is empty', () => {

		it("should return true if the list is empty", () => {
			expect(sortedLinkedList.isEmpty()).toBeTruthy();
		});
		
		it("should return an empty string if the list is empty", () => {
			expect(sortedLinkedList.toString()).toBe("");
		});
	
		it("should return the number of items in the list with a value equal to zero", () => {
			expect(sortedLinkedList.size()).toBe(0);
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {

        it("should add one new item in the final of the list", () => {
			sortedLinkedList.insertElementAt("banana");
		});

        it("should add four new items in the final of the list", () => {
			sortedLinkedList.push("maçã");
			sortedLinkedList.push("pêra");
			sortedLinkedList.push("abacaxi");
			sortedLinkedList.push("uva");
		});
		
        it("should return an string with list items", () => {
			expect(sortedLinkedList.size()).toBe(5);
            expect(sortedLinkedList.toString()).toBe("abacaxi, banana, maçã, pêra, uva");
        });

		it('should add item when the list it is not empty', () => {
			expect(sortedLinkedList.insertElementAt("caqui")).toBeTruthy();
			expect(sortedLinkedList.size()).toBe(6);
		});

		it("should return an string with list items sorted when items are equal", () => {
			sortedLinkedList.insertElementAt("banana");
			expect(sortedLinkedList.size()).toBe(7);
            expect(sortedLinkedList.toString()).toBe("abacaxi, banana, banana, caqui, maçã, pêra, uva");
        });
	});

});
