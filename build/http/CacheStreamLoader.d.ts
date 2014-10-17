/// <reference path="../../src/_ref.d.ts" />
import Promise = require('bluebird');
import HTTPOpts = require('./HTTPOpts');
import CacheRequest = require('./CacheRequest');
import CacheObject = require('./CacheObject');
declare class CacheStreamLoader {
    opts: HTTPOpts;
    request: CacheRequest;
    object: CacheObject;
    private _promise;
    constructor(opts: HTTPOpts, request: CacheRequest);
    private dropContent();
    url: string;
    destruct(): void;
    private canUpdate();
    getObject(): Promise<CacheObject>;
    private cacheRead();
    private httpLoad(httpCache?);
    private cacheWrite(cacheWasFresh);
    private checkExists(file, label);
    private cacheRemove();
    private cacheTouch();
    private readInfo();
    private copyInfo(res, checksum);
    private updateInfo(res, checksum);
    toString(): string;
}
export = CacheStreamLoader;
