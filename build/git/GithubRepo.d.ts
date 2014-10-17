/// <reference path="../../src/git/_ref.d.ts" />
import JSONPointer = require('../xm/lib/JSONPointer');
import GithubRepoConfig = require('./GithubRepoConfig');
import GithubURLs = require('./GithubURLs');
import GithubAPI = require('./loader/GithubAPI');
import GithubRaw = require('./loader/GithubRaw');
declare class GithubRepo {
    config: GithubRepoConfig;
    storeDir: string;
    urls: GithubURLs;
    api: GithubAPI;
    raw: GithubRaw;
    constructor(config: GithubRepoConfig, storeDir: string, opts: JSONPointer);
    getCacheKey(): string;
    toString(): string;
    verbose: boolean;
}
export = GithubRepo;
