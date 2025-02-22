import { Filter, Compare } from "./index";
declare type CompValue = Compare["compValue"];
export declare class Tester {
    constructor();
    static readonly UNDEF: unique symbol;
    test(r: any, f: Filter): boolean;
    attrPath(path: string): string[];
    attrTest(path: string[], r: any, op: (r: any) => boolean): boolean;
    pr(r: any, _?: CompValue): boolean;
    eq(r: any, v: CompValue): boolean;
    ne(r: any, v: CompValue): boolean;
    gt(r: any, v: CompValue): boolean;
    lt(r: any, v: CompValue): boolean;
    le(r: any, v: CompValue): boolean;
    ge(r: any, v: CompValue): boolean;
    sw(r: any, v: CompValue): boolean;
    ew(r: any, v: CompValue): boolean;
    co(r: any, v: CompValue): boolean;
}
export {};
