type Element = string | number | object;
type SetElement = string | number | symbol;

type Node = {
    element: Element
    next:  Node | null;
}

type DoublyNode = Node & {
    prev: Node | null;
}

type IndexNumber = { 
    [index: number]: Element;
};

export {
    Element,
    SetElement,
    Node,
    IndexNumber,
    DoublyNode,

}