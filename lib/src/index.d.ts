import * as tester from "./tester";
export { stringify } from "./stringify";
/** Filter is filter ast object. There is extends [Operation] */
export declare type Filter = AttrExp | LogExp | ValuePath | NotFilter;
export declare type AttrExp = Suffix | Compare;
/** Operation has op */
export interface Operation {
    op: string;
}
export interface ValuePath extends Operation {
    op: "[]";
    attrPath: AttrPath;
    valFilter: Filter;
}
export interface NotFilter extends Operation {
    op: "not";
    filter: Filter;
}
export interface Compare extends Operation {
    op: "eq" | "ne" | "co" | "sw" | "ew" | "gt" | "lt" | "ge" | "le";
    attrPath: AttrPath;
    compValue: boolean | null | number | string;
}
export interface Suffix extends Operation {
    op: "pr";
    attrPath: AttrPath;
}
export interface LogExp extends Operation {
    op: "and" | "or";
    filters: Filter[];
}
export declare type AttrPath = string;
export declare const Tester: typeof tester.Tester;
export declare type Tester = tester.Tester;
export declare function filter(filter: Filter): (r: any) => boolean;
export declare function parse(query: string): Filter;
export declare function flatten(f: Filter): Filter;
