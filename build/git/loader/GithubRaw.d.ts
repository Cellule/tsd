/// <reference path="../../../src/git/_ref.d.ts" />
import Promise = require('bluebird');
import JSONPointer = require('../../xm/lib/JSONPointer');
import GithubURLs = require('../GithubURLs');
import GithubLoader = require('./GithubLoader');
declare class GithubRaw extends GithubLoader {
    constructor(urls: GithubURLs, options: JSONPointer, storeDir: string);
    getText(ref: string, filePath: string): Promise<string>;
    getJSON(ref: string, filePath: string): Promise<any>;
    getBinary(ref: string, filePath: string): Promise<Buffer>;
    getFile<T>(ref: string, filePath: string): Promise<Buffer>;
    getCacheKey(): string;
}
export = GithubRaw;
