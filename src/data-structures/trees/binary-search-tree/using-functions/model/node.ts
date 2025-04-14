import { NodeBst } from "./types"

export const Node = (key: number | null): NodeBst => ({
    key,
    left: null,
    right: null
});
