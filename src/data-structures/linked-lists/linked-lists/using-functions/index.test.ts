import LinkedListFn from ".";

const linkedListFn = LinkedListFn();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

interface NodeTest {
	element: string;
	next: NodeTest | null;
}

describe("Data Structure: Linked List with Functions", () => {

	describe('when the list is empty', () => {

		it("should return true if the list is empty", () => {
			expect(linkedListFn.isEmpty()).toBeTruthy();
		});
		
		it("should return an empty string if the list is empty", () => {
			expect(linkedListFn.toString()).toBe("");
		});
	
		it("should return the number of items in the list with a value equal to zero", () => {
			expect(linkedListFn.size()).toBe(0);
		});

	});

	describe('when the list is populated', () => {
		
		it("should add one new item in the final of the list", () => {
			linkedListFn.push("banana");
		});
	
		it("should return the number of items in the list with a value equal to one", () => {
			expect(linkedListFn.size()).toBe(1);
		});
	
		it("should return false if the list is empty", () => {
			expect(linkedListFn.isEmpty()).toBeFalsy();
		});
	
		it("should add four new items in the final of the list", () => {
			linkedListFn.push("maçã");
			linkedListFn.push("pêra");
			linkedListFn.push("abacaxi");
			linkedListFn.push("uva");
		});

		it("should return a specific element in the list", () => {

			
			const list: NodeTest = {
				element: "banana",
				next: {
					element: "maçã",
					next: {
						element: "pêra",
						next: {
							element: "abacaxi",
							next: { element: "uva", next: null },
						},
					},
				},
			};
			expect(linkedListFn.getElementAt(0)).toEqual(list);
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {
		
		it("should insert an element in a specific position in the list", () => {
			expect(linkedListFn.insertElementAt("caqui", 3)).toBeTruthy();
		});
	
		it("should return false when a index isn't in the list", () => {
			expect(linkedListFn.insertElementAt("ameixa", 200)).toBeFalsy();
		});
	
		it("should return false when a index is a negative number", () => {
			expect(linkedListFn.insertElementAt("ameixa", -1)).toBeFalsy();
		});

	});

	describe('when an element is searched', () => {

		it("should return undefined when an element isn't in the list", () => {
			expect(linkedListFn.getElementAt(10)).toBeUndefined();
		});
	
		it("should return the index of element which is in list", () => {
			expect(linkedListFn.indexOf("abacaxi")).toBe(4);
		});
	
		it("should return -1  if the wanted element isn't in list", () => {
			expect(linkedListFn.indexOf("jaca")).toBe(-1);
		});

	});

	describe('when an element needs to be removed', () => {
		
		it("should remove a element of specific position which is in the list and return it", () => {
			expect(linkedListFn.removeAt(1)).toBe("maçã");
		});
	
		it("should remove a element of specific position which isn't in the list", () => {
			expect(linkedListFn.removeAt(10)).toBeUndefined();
		});

		it("should remove a element list and return it", () => {
			expect(linkedListFn.remove("abacaxi")).toBe("abacaxi");
		});

	});

	describe('when isValid(index) method is used', () => {

		it("should return true if it is a valid index", () => {
			expect(linkedListFn.isAValidIndex(2)).toBeTruthy();
		});
	
		it("should return false if it is not a valid index", () => {
			expect(linkedListFn.isAValidIndex(20)).toBeFalsy();
		});

	});

	describe('when the list is changed', () => {
		
		it("should return the list head", () => {
			const list: NodeTest = {
				element: "banana",
				next: {
					element: "pêra",
					next: {
						element: "caqui",
						next: { element: "uva", next: null },
					},
				},
			};
			expect(linkedListFn.getHead()).toEqual(list);
		});
	
		it("should return an string with elements in the list", () => {
			expect(linkedListFn.toString()).toBe("banana, pêra, caqui, uva");
		});

	});

	describe('when the list to be clear and populate again', () => {
		
		it("should clear the list", () => {
			linkedListFn.clear();
			expect(linkedListFn.isEmpty()).toBeTruthy();
		});
	
		it("should return ameixa as first element in the list", () => {
			const list: NodeTest = {"element": "ameixa", "next": {"element": "morango", "next": null}};
	
			linkedListFn.push('morango');
			linkedListFn.insertElementAt('ameixa', 0);
			expect(linkedListFn.getElementAt(0)).toEqual(list);
		});
	
		it("should remove the first element in the list and return it", () => {
			expect(linkedListFn.removeAt(0)).toBe("ameixa");
		});
	});

});
