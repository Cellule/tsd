/// <reference path="../../src/_ref.d.ts" />
import Promise = require('bluebird');
import HTTPOpts = require('./HTTPOpts');
import CacheObject = require('./CacheObject');
import CacheRequest = require('./CacheRequest');
declare class HTTPCache {
    opts: HTTPOpts;
    private _init;
    private _cleaning;
    private jobs;
    private jobTimers;
    private queue;
    private active;
    private manageFile;
    private cacheSweepLast;
    constructor(opts: HTTPOpts);
    setStoreDir(dir: string): void;
    getObject(request: CacheRequest): Promise<CacheObject>;
    private checkQueue();
    private step(item);
    private scheduleRelease(key);
    private init();
    checkCleanCache(): Promise<void>;
    cleanupCacheAge(maxAge: number): Promise<void>;
}
export = HTTPCache;
