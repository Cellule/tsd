/// <reference path="../../../src/git/_ref.d.ts" />
import Promise = require('bluebird');
import JSONPointer = require('../../xm/lib/JSONPointer');
import CacheRequest = require('../../http/CacheRequest');
import GithubURLs = require('../GithubURLs');
import GithubLoader = require('./GithubLoader');
import GithubRateInfo = require('../model/GithubRateInfo');
declare class GithubAPI extends GithubLoader {
    private apiVersion;
    constructor(urls: GithubURLs, options: JSONPointer, storeDir: string);
    getBranches(): Promise<any>;
    getBranch(branch: string): Promise<any>;
    getTree(sha: string, recursive: boolean): Promise<any>;
    getCommit(sha: string): Promise<any>;
    getBlob(sha: string): Promise<any>;
    getPathCommits(path: string): Promise<any>;
    getCachableURL(url: string): Promise<any>;
    getCachable(request: CacheRequest): Promise<any>;
    getRateInfo(): Promise<GithubRateInfo>;
    getCacheKey(): string;
}
export = GithubAPI;
