/// <reference path="../../src/git/_ref.d.ts" />
import URLManager = require('../xm/lib/URLManager');
import GithubRepo = require('./GithubRepo');
declare class GithubURLs extends URLManager {
    private _base;
    private _apiBase;
    private _api;
    private _raw;
    private _repo;
    constructor(repo: GithubRepo);
    getURL(id: string, vars?: any): string;
    api(): string;
    base(): string;
    raw(): string;
    rawFile(ref: string, path: string): string;
    htmlFile(ref: string, path: string): string;
    apiBranches(): string;
    apiBranch(name: string): string;
    apiTree(tree: string, recursive?: any): string;
    apiPathCommits(path: string): string;
    apiCommit(commit: string, recursive?: any): string;
    apiBlob(sha: string): string;
    rateLimit(): string;
}
export = GithubURLs;
