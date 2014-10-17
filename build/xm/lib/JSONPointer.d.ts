/// <reference path="../../../src/xm/_ref.d.ts" />
declare class JSONPointer {
    objects: Object[];
    prefix: string;
    constructor(object?: Object, prefix?: string);
    hasValue(path: string): boolean;
    getValue(path: string, alt?: any): any;
    addSource(object: Object): any;
    setValue(path: string, value?: any): void;
    getChild(path: string, alt?: any): JSONPointer;
    getNumber(path: string, alt?: number): number;
    getBoolean(path: string, alt?: boolean): boolean;
    getString(path: string, alt?: string): string;
    getDate(path: string, alt?: Date): Date;
    getDurationSecs(path: string, alt?: number): number;
}
export = JSONPointer;
