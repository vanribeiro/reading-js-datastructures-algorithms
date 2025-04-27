export type Node = {
    key: number | null;
    left: NodeBst | null;
    right: NodeBst | null;
}

export type NodeBst = Node | null | undefined;

export interface IBinarySearchTreeWithFunction<K> {
    insert(key: K, Node?: NodeBst): void;
    search(key: K, Node?: NodeBst): boolean;
    inOrderTraverse(callback: Function): void;
    preOrderTraverse(callback: Function): void;
    postOrderTraverse(callback: Function): void;
    min(): K | null | undefined;
    max(): K | null | undefined;
    remove(key: K, Node?: NodeBst): void;
}