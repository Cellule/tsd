/// <reference path="../../src/_ref.d.ts" />
interface CacheInfo {
    url: string;
    key: string;
    contentType: string;
    httpETag: string;
    httpModified: string;
    cacheCreated: string;
    cacheUpdated: string;
    contentChecksum: string;
}
export = CacheInfo;
