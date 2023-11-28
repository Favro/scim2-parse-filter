import { Compare, Filter, ValuePath, Suffix } from "../src";
export declare const EOT: {
    literal: string;
    type: string;
};
export declare function eq(attrPath: string, compValue: any): Compare;
export declare function and(...filters: Filter[]): Filter;
export declare function or(...filters: Filter[]): Filter;
export declare function op(op: string, attrPath: string, compValue: any): Compare;
export declare function v(attrPath: string, valFilter: Filter): ValuePath;
export declare function pr(attrPath: string): Suffix;
