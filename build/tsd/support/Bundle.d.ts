/// <reference path="../../../src/tsd/_ref.d.ts" />
declare class Bundle {
    private lines;
    private last;
    private map;
    private eol;
    target: string;
    baseDir: string;
    constructor(target: string, baseDir?: string);
    parse(content: string): void;
    has(ref: string): boolean;
    append(ref: string): string;
    remove(ref: string): string;
    toArray(relative?: boolean, canonical?: boolean): string[];
    stringify(): string;
}
export = Bundle;
