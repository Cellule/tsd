/// <reference path="../../src/xm/_ref.d.ts" />
export interface Dict<T> {
    [key: string]: T;
}
export declare function dict<T>(): Dict<T>;
export declare class Set<T> {
    private list;
    constructor(d?: T[]);
    has(value: T): boolean;
    add(value: T): void;
    delete(value: T): void;
    values(): T[];
    forEach(iterator: (value: T, index: number) => void): void;
    size: number;
}
export declare class Hash<T> {
    private dict;
    constructor(d?: Dict<T>);
    has(key: string): boolean;
    get(key: string): T;
    set(key: string, value: T): void;
    delete(key: string): void;
    clear(): void;
    merge(d: Dict<T>): void;
    keys(): string[];
    values(): T[];
    forEach(iterator: (value: T, key: string) => void): void;
    size: number;
}
export declare function enumNames(enumer: Object): string[];
