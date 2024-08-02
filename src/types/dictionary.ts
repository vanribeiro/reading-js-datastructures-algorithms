import ValuePair from "../data-structures/dictionary-hashes/dictionary/ValuePair";
import { Element } from "./data-structures";

type IndexString = { 
    [index: string]: ValuePair;
};

type Key = string;
type Value = Element;

export {
    IndexString,
    Key, Value
}