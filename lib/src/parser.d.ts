import { Filter } from "./index";
declare type TokenType = "Number" | "Quoted" | "Bracket" | "Word" | "EOT";
export declare type Token = {
    type: TokenType;
    literal: string;
};
export declare function tokenizer(f: string): Token[];
export declare class Tokens implements TokenList {
    private list;
    i: number;
    private current;
    getList(): string[];
    peek(): Token;
    constructor(list: Token[]);
    forward(): TokenList;
    shift(): Token;
}
interface TokenList {
    peek(): Token;
    forward(): TokenList;
    shift(): Token;
}
export declare function parseFilter(list: TokenList): Filter;
export declare function parseExpression(list: TokenList): Filter;
export {};
