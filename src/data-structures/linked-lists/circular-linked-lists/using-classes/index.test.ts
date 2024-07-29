import CircularLinkedList from ".";

const circularLinkedList = new CircularLinkedList();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

describe("Data Structure: Linked List with Class", () => {

	describe('when the list is empty', () => {

		it("should return true if the list is empty", () => {
			expect(circularLinkedList.isEmpty()).toBeTruthy();
		});
		
		it("should return an empty string if the list is empty", () => {
			// expect(circularLinkedList.inversetoString()).toBe("");
			expect(circularLinkedList.toString()).toBe("");
		});
	
		it("should return the number of items in the list with a value equal to zero", () => {
			expect(circularLinkedList.size()).toBe(0);
		});

	});

	describe('when the list is populated', () => {
		
		it("should add one new item in the final of the list", () => {
			circularLinkedList.push("banana");
		});
	
		it("should return the number of items in the list with a value equal to one", () => {
			expect(circularLinkedList.size()).toBe(1);
		});
	
		it("should return false if the list is empty", () => {
			expect(circularLinkedList.isEmpty()).toBeFalsy();
		});
	
		it("should add four new items in the final of the list", () => {
			circularLinkedList.push("maçã");
			circularLinkedList.push("pêra");
			circularLinkedList.push("abacaxi");
			circularLinkedList.push("uva");
			expect(circularLinkedList.size()).toBe(5);
		});

		it("should return a specific element in the list", () => {
			expect(circularLinkedList.getElementAt(2)?.element).toEqual("pêra");
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {

		it("should insert an element in a specific position in the list", () => {
			expect(circularLinkedList.insertElementAt("caqui", 3)).toBeTruthy();
		});
	
		it("should return false when a index isn't in the list", () => {
			expect(circularLinkedList.insertElementAt("ameixa", 200)).toBeFalsy();
		});
	
		it("should return false when a index is a negative number", () => {
			expect(circularLinkedList.insertElementAt("ameixa", -1)).toBeFalsy();
		});

		it("should return true when the index has already been in the list", () => {
			expect(circularLinkedList.insertElementAt("laranja", 4)).toBeTruthy();
		});

		it("should return true when the index is equal list size", () => {
            expect(circularLinkedList.insertElementAt("acerola", 6)).toBeTruthy();
        });

	});

	describe('when an element is searched', () => {

		it("should return undefined when an element isn't in the list", () => {
			expect(circularLinkedList.getElementAt(10)).toBeUndefined();
		});
	
		it("should return the index of element which is in list", () => {
			expect(circularLinkedList.indexOf("abacaxi")).toBe(5);
		});
	
		it("should return -1  if the wanted element isn't in list", () => {
			expect(circularLinkedList.indexOf("jaca")).toBe(-1);
		});

	});

	describe('when an element needs to be removed', () => {
		
		it("should remove a element of specific position which is in the list and return it", () => {
			const elementRemoved = circularLinkedList.removeAt(1);
			expect(elementRemoved).toBe("maçã");
		});
	
		it("should remove a element of specific position which isn't in the list", () => {
			const elementRemoved = circularLinkedList.removeAt(10);
			expect(elementRemoved).toBeUndefined();
		});

		it("should remove a element list and return it", () => {
			const elementRemoved = circularLinkedList.remove('abacaxi');
			expect(elementRemoved).toBe("abacaxi");
		});

	});

	describe('when isValid(index) method is used', () => {

		it("should return true if it is a valid index", () => {
			expect(circularLinkedList.isAValidIndex(2)).toBeTruthy();
		});
	
		it("should return false if it is not a valid index", () => {
			expect(circularLinkedList.isAValidIndex(20)).toBeFalsy();
		});

	});

	describe('when the list to be clear and populate again', () => {
		
		it("should clear the list", () => {
			circularLinkedList.clear();
			expect(circularLinkedList.isEmpty()).toBeTruthy();
		});
	
		it("should return ameixa as first element in the list", () => {
			circularLinkedList.push('morango');
			circularLinkedList.insertElementAt('ameixa', 0);
			expect(circularLinkedList.getElementAt(0)?.element).toEqual('ameixa');
			circularLinkedList.clear();
		});

		it("should remove the only element in the list and return it", () => {
			expect(circularLinkedList.size()).toBe(0);

			circularLinkedList.push("maçã");
			circularLinkedList.push("pêra");
			circularLinkedList.push("abacaxi");
			circularLinkedList.push("uva");

			expect(circularLinkedList.size()).toBe(4);
            expect(circularLinkedList.removeAt(3)).toBe('uva');
		});

		it("should return true when element is insert in first position using insertElementAt and the list is empty", () => {
			circularLinkedList.clear();
			expect(circularLinkedList.size()).toBe(0);
            expect(circularLinkedList.insertElementAt('acerola', 0)).toBeTruthy();
			expect(circularLinkedList.size()).toBe(1);
			expect(circularLinkedList.toString()).toBe('acerola');
			expect(circularLinkedList.removeAt(0)).toBe('acerola');
        });

		it("should return a string list", () => {
			circularLinkedList.clear();
			circularLinkedList.push("banana");
			circularLinkedList.push("maçã");
			circularLinkedList.push("pêra");
			circularLinkedList.push("abacaxi");
			circularLinkedList.push("uva");
			expect(circularLinkedList.toString()).toBe('banana, maçã, pêra, abacaxi, uva');
        });

		it("should return remove the third element", () => {
			expect(circularLinkedList.size()).toBe(5);
			expect(circularLinkedList.removeAt(0)).toBe('banana');
			circularLinkedList.clear();
        });

		it("should return a string list with 02 elements", () => {
			circularLinkedList.push("banana");
			circularLinkedList.push("maçã");
			expect(circularLinkedList.size()).toBe(2);
			expect(circularLinkedList.toString()).toBe('banana, maçã');
			circularLinkedList.clear();
		});

	});

});