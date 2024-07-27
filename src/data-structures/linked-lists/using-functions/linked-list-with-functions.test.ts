import { describe, expect, test } from "@jest/globals";
import LinkedList from "./linked-list-with-functions";

const linkedList = LinkedList();

/**
 * list: banana, maçã, pêra, abacaxi, caqui, uva
 */

interface NodeTest {
	element: string;
	next: NodeTest | null;
}

describe("Data Structure: Linked List with Functions", () => {

	describe('when the list is empty', () => {

		test("should return true if the list is empty", () => {
			expect(linkedList.isEmpty()).toBeTruthy();
		});
		
		test("should return an empty string if the list is empty", () => {
			expect(linkedList.toString()).toBe("");
		});
	
		test("should return the number of items in the list with a value equal to zero", () => {
			expect(linkedList.size()).toBe(0);
		});

	});

	describe('when the list is populated', () => {
		
		test("should add one new item in the final of the list", () => {
			linkedList.push("banana");
		});
	
		test("should return the number of items in the list with a value equal to one", () => {
			expect(linkedList.size()).toBe(1);
		});
	
		test("should return false if the list is empty", () => {
			expect(linkedList.isEmpty()).toBeFalsy();
		});
	
		test("should add four new items in the final of the list", () => {
			linkedList.push("maçã");
			linkedList.push("pêra");
			linkedList.push("abacaxi");
			linkedList.push("uva");
		});

		test("should return a specific element in the list", () => {

			
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
			expect(linkedList.getElementAt(0)).toEqual(list);
		});

	});

	describe('when insertElementAt(element, index) method is used', () => {
		
		test("should insert an element in a specific position in the list", () => {
			expect(linkedList.insertElementAt("caqui", 3)).toBeTruthy();
		});
	
		test("should return false when a index isn't in the list", () => {
			expect(linkedList.insertElementAt("ameixa", 200)).toBeFalsy();
		});
	
		test("should return false when a index is a negative number", () => {
			expect(linkedList.insertElementAt("ameixa", -1)).toBeFalsy();
		});

	});

	describe('when an element is searched', () => {

		test("should return undefined when an element isn't in the list", () => {
			expect(linkedList.getElementAt(10)).toBeUndefined();
		});
	
		test("should return the index of element which is in list", () => {
			expect(linkedList.indexOf("abacaxi")).toBe(4);
		});
	
		test("should return -1  if the wanted element isn't in list", () => {
			expect(linkedList.indexOf("jaca")).toBe(-1);
		});

	});

	describe('when an element needs to be removed', () => {
		
		test("should remove a element of specific position which is in the list and return it", () => {
			expect(linkedList.removeAt(1)).toBe("maçã");
		});
	
		test("should remove a element of specific position which isn't in the list", () => {
			expect(linkedList.removeAt(10)).toBeUndefined();
		});

		test("should remove a element list and return it", () => {
			expect(linkedList.remove("abacaxi")).toBe("abacaxi");
		});

	});

	describe('when isValid(index) method is used', () => {

		test("should return true if it is a valid index", () => {
			expect(linkedList.isAValidIndex(2)).toBeTruthy();
		});
	
		test("should return false if it is not a valid index", () => {
			expect(linkedList.isAValidIndex(20)).toBeFalsy();
		});

	});

	describe('when the list is changed', () => {
		
		test("should return the list head", () => {
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
			expect(linkedList.getHead()).toEqual(list);
		});
	
		test("should return an string with elements in the list", () => {
			expect(linkedList.toString()).toBe("banana, pêra, caqui, uva");
		});

	});

	describe('when the list to be clear and populate again', () => {
		
		test("should clear the list", () => {
			linkedList.clear();
			expect(linkedList.isEmpty()).toBeTruthy();
		});
	
		test("should return ameixa as first element in the list", () => {
			const list: NodeTest = {"element": "ameixa", "next": {"element": "morango", "next": null}};
	
			linkedList.push('morango');
			linkedList.insertElementAt('ameixa', 0);
			expect(linkedList.getElementAt(0)).toEqual(list);
		});
	
		test("should remove the first element in the list and return it", () => {
			expect(linkedList.removeAt(0)).toBe("ameixa");
		});

	});

});
