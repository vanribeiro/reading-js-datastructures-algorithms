import { Node } from "../model/node";

describe("Node", () => {
    it("should create a node with the given key", () => {
        const key = 10;
        const node = Node(key);

        expect(node?.key).toBe(key);
        expect(node?.left).toBeNull();
        expect(node?.right).toBeNull();
    });

    it("should create a node with a null key", () => {
        const key = null;
        const node = Node(key);

        expect(node?.key).toBeNull();
        expect(node?.left).toBeNull();
        expect(node?.right).toBeNull();
    });
});