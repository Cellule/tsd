/// <reference path="../../../src/xm/_ref.d.ts" />
declare class PackageJSON {
    path: string;
    private _pkg;
    private static _localPath;
    private static _local;
    constructor(pkg: any, path?: string);
    raw: any;
    name: string;
    description: string;
    version: string;
    getNameVersion(): string;
    getKey(): string;
    getHomepage(short?: boolean): string;
    static find(): string;
    static getLocal(): PackageJSON;
}
export = PackageJSON;
