/// <reference path="../../../src/tsd/_ref.d.ts" />
import GithubRepoConfig = require('../../git/GithubRepoConfig');
import InstalledDef = require('../context/InstalledDef');
import DefVersion = require('../data/DefVersion');
declare class Config implements GithubRepoConfig {
    path: string;
    version: string;
    repo: string;
    ref: string;
    stats: boolean;
    bundle: string;
    otherFields: any;
    private _installed;
    private _stable;
    constructor();
    reset(): void;
    resolveTypingsPath(baseDir: string): string;
    repoOwner: string;
    repoProject: string;
    repoRef: string;
    addFile(file: DefVersion): void;
    hasFile(filePath: string): boolean;
    getFile(filePath: string): InstalledDef;
    removeFile(filePath: string): void;
    getInstalled(): InstalledDef[];
    getInstalledPaths(): string[];
    toJSON(): any;
    toJSONString(): string;
    parseJSONString(input: string, label?: string): any;
    parseJSON(json: any, label?: string): any;
    validateJSON(json: any, label?: string): any;
}
export = Config;
