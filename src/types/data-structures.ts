type Element = string | number | object;

type Node = {
    element: Element
    next:  Node | null;
}

type DoublyNode = Node & {
    prev: Node | null;
}

type IndexNumber = { 
    [index: number]: number | string | object;
};

export {
    Element,
    Node,
    IndexNumber,
    DoublyNode,
}