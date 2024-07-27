type Node = {
    element: string | number | object ;
    next:  Node | null;
}

type IndexNumber = { 
    [index: number]: number | string | object 
};

export {
    Node,
    IndexNumber
}