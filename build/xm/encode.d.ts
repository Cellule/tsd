/// <reference path="../../src/xm/_ref.d.ts" />
export declare var singleQuoteExp: RegExp;
export declare var doubleQuoteExp: RegExp;
export interface IReplacer {
    (input: string): string;
}
export declare function getEscaper(vars: any): IReplacer;
export declare function getMultiReplacer(vars: any): IReplacer;
export declare var unprintCC: IReplacer;
export declare var unprintNL: IReplacer;
export declare var unprintNotNL: IReplacer;
export declare var unprintNLS: IReplacer;
export declare function quoteSingle(input: string): string;
export declare function quoteDouble(input: string): string;
export declare function quoteSingleWrap(input: string): string;
export declare function quoteDoubleWrap(input: string): string;
export declare function escapeControl(input: string, reAddNewlines?: boolean): string;
export declare function wrapQuotes(input: string, double?: boolean): string;
export declare function wrapIfComplex(input: string, double?: boolean): string;
export declare function trim(value: string, cutoff?: number): string;
export declare function trimWrap(value: string, cutoff?: number, double?: boolean): string;
