/// <reference path="../../src/_ref.d.ts" />
import CacheMode = require('./CacheMode');
declare class CacheOpts {
    storeDir: string;
    compressStore: boolean;
    splitDirLevel: number;
    splitDirChunk: number;
    cacheRead: boolean;
    cacheWrite: boolean;
    remoteRead: boolean;
    allowClean: boolean;
    cleanInterval: number;
    jobTimeout: number;
    constructor(mode?: CacheMode);
    applyCacheMode(mode: CacheMode): void;
}
export = CacheOpts;
