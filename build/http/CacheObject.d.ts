/// <reference path="../../src/_ref.d.ts" />
import CacheRequest = require('./CacheRequest');
import CacheInfo = require('./CacheInfo');
import ResponseInfo = require('./ResponseInfo');
declare class CacheObject {
    request: CacheRequest;
    storeDir: string;
    infoFile: string;
    info: CacheInfo;
    response: ResponseInfo;
    bodyFile: string;
    bodyChecksum: string;
    body: Buffer;
    constructor(request: CacheRequest);
}
export = CacheObject;
