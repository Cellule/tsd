/// <reference path="../../../src/git/_ref.d.ts" />
import HTTPCache = require('../../http/HTTPCache');
import JSONPointer = require('../../xm/lib/JSONPointer');
import GithubURLs = require('../GithubURLs');
declare class GithubLoader {
    urls: GithubURLs;
    cache: HTTPCache;
    options: JSONPointer;
    storeDir: string;
    label: string;
    formatVersion: string;
    headers: {};
    constructor(urls: GithubURLs, options: JSONPointer, storeDir: string, prefix: string, label: string);
    _initGithubLoader(): void;
    getCacheKey(): string;
    copyHeadersTo(target: any, source?: any): void;
    verbose: boolean;
}
export = GithubLoader;
