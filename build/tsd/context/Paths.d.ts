/// <reference path="../../../src/tsd/_ref.d.ts" />
declare class Paths {
    configFile: string;
    cacheDir: string;
    startCwd: string;
    constructor();
    static getCacheDirName(): string;
    static getUserHome(): string;
    static getUserRoot(): string;
    static getUserCacheDir(): string;
}
export = Paths;
