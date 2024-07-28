import DoublyLinkedList from "./doubly-linked-list-with-class";

const doublyLinkedList = new DoublyLinkedList();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

describe("Data Structure: Linked List with Class", () => {

	describe('when the list is empty', () => {

		it("should return true if the list is empty", () => {
			expect(doublyLinkedList.isEmpty()).toBeTruthy();
		});
		
		it("should return an empty string if the list is empty", () => {
			expect(doublyLinkedList.inversetoString()).toBe("");
			expect(doublyLinkedList.toString()).toBe("");
		});
	
		it("should return the number of items in the list with a value equal to zero", () => {
			expect(doublyLinkedList.size()).toBe(0);
		});

	});

	describe('when the list is populated', () => {
		
		it("should add one new item in the final of the list", () => {
			doublyLinkedList.push("banana");
		});
	
		it("should return the number of items in the list with a value equal to one", () => {
			expect(doublyLinkedList.size()).toBe(1);
		});
	
		it("should return false if the list is empty", () => {
			expect(doublyLinkedList.isEmpty()).toBeFalsy();
		});
	
		it("should add four new items in the final of the list", () => {
			doublyLinkedList.push("maçã");
			doublyLinkedList.push("pêra");
			doublyLinkedList.push("abacaxi");
			doublyLinkedList.push("uva");
			expect(doublyLinkedList.size()).toBe(5);
		});

		it("should return a specific element in the list", () => {
			expect(doublyLinkedList.getElementAt(2)?.element).toEqual("pêra");
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {

		it("should insert an element in a specific position in the list", () => {
			expect(doublyLinkedList.insertElementAt("caqui", 3)).toBeTruthy();
		});
	
		it("should return false when a index isn't in the list", () => {
			expect(doublyLinkedList.insertElementAt("ameixa", 200)).toBeFalsy();
		});
	
		it("should return false when a index is a negative number", () => {
			expect(doublyLinkedList.insertElementAt("ameixa", -1)).toBeFalsy();
		});

		it("should return true when the index has already been in the list", () => {
			expect(doublyLinkedList.insertElementAt("laranja", 4)).toBeTruthy();
		});

		it("should return true when the index is equal list size", () => {
            expect(doublyLinkedList.insertElementAt("acerola", 6)).toBeTruthy();
        });

	});

	describe('when an element is searched', () => {

		it("should return undefined when an element isn't in the list", () => {
			expect(doublyLinkedList.getElementAt(10)).toBeUndefined();
		});
	
		it("should return the index of element which is in list", () => {
			expect(doublyLinkedList.indexOf("abacaxi")).toBe(5);
		});
	
		it("should return -1  if the wanted element isn't in list", () => {
			expect(doublyLinkedList.indexOf("jaca")).toBe(-1);
		});

	});

	describe('when an element needs to be removed', () => {
		
		it("should remove a element of specific position which is in the list and return it", () => {
			const elementRemoved = doublyLinkedList.removeAt(1);
			expect(elementRemoved).toBe("maçã");
		});
	
		it("should remove a element of specific position which isn't in the list", () => {
			const elementRemoved = doublyLinkedList.removeAt(10);
			expect(elementRemoved).toBeUndefined();
		});

		it("should remove a element list and return it", () => {
			const elementRemoved = doublyLinkedList.remove('abacaxi');
			expect(elementRemoved).toBe("abacaxi");
		});

	});

	describe('when isValid(index) method is used', () => {

		it("should return true if it is a valid index", () => {
			expect(doublyLinkedList.isAValidIndex(2)).toBeTruthy();
		});
	
		it("should return false if it is not a valid index", () => {
			expect(doublyLinkedList.isAValidIndex(20)).toBeFalsy();
		});

	});

	describe('when the list is changed', () => {
		
		it("should return the list head", () => {
			expect(doublyLinkedList.getHead()).not.toBeUndefined();
		});

		it("should return the list tail", () => {
			expect(doublyLinkedList.getTail()).not.toBeUndefined();
		});
	
		it("should return an string with elements in the list", () => {
			expect(doublyLinkedList.toString()).toBe("banana, pêra, caqui, laranja, uva, acerola");
		});

		it("should return an string with elements in the reversed order", () => {
			expect(doublyLinkedList.inversetoString()).toBe("acerola, uva, laranja, caqui, pêra, banana");
		});

	});

	describe('when the list to be clear and populate again', () => {
		
		it("should clear the list", () => {
			doublyLinkedList.clear();
			expect(doublyLinkedList.isEmpty()).toBeTruthy();
		});
	
		it("should return ameixa as first element in the list", () => {
			doublyLinkedList.push('morango');
			doublyLinkedList.insertElementAt('ameixa', 0);
			expect(doublyLinkedList.getElementAt(0)?.element).toEqual('ameixa');
		});
	
		it("should remove the first element in the list and return it", () => {
			expect(doublyLinkedList.removeAt(0)).toBe("ameixa");
		});

		it("should remove the only element in the list and return it", () => {
			expect(doublyLinkedList.removeAt(0)).toBe("morango");
		});

		it("should remove the only element in the list and return it", () => {
			expect(doublyLinkedList.size()).toBe(0);

			doublyLinkedList.push("maçã");
			doublyLinkedList.push("pêra");
			doublyLinkedList.push("abacaxi");
			doublyLinkedList.push("uva");

			expect(doublyLinkedList.size()).toBe(4);
            expect(doublyLinkedList.removeAt(3)).toBe('uva');
		});
	});

});