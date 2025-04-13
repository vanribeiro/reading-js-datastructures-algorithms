import { NodeBst } from "./types"

export const Node = (key: number | null): NodeBst => {
    return {
        key,
        left: null,
        right: null
    }
} 