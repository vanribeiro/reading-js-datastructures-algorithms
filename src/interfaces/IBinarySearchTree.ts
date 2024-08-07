import { Key, Value } from "../types/data-structures";

interface IBinarySearchTree {
    insert(key: Key): boolean;
    search(key: Key): Value;
    inOrderTraverse(): void;
    preOrderTraverse(): void;
    postOrderTraverse(): void;
    min(): number;
    max(): number;
    remove(key: Key): boolean;
}

export default IBinarySearchTree;