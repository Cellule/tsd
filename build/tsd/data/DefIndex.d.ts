/// <reference path="../../../src/tsd/_ref.d.ts" />
import Def = require('./Def');
import DefCommit = require('./DefCommit');
import DefVersion = require('./DefVersion');
declare class DefIndex {
    private _branchName;
    private _hasIndex;
    private _indexCommit;
    private _definitions;
    private _commits;
    private _versions;
    constructor();
    hasIndex(): boolean;
    init(branch: any, tree: any): void;
    setHistory(def: Def, commitJsonArray: any[]): void;
    procureCommit(commitSha: string): DefCommit;
    procureDef(path: string): Def;
    procureVersion(def: Def, commit: DefCommit): DefVersion;
    procureVersionFromSha(path: string, commitSha: string): DefVersion;
    getDef(path: string): Def;
    hasDef(path: string): boolean;
    getCommit(sha: string): DefCommit;
    hasCommit(sha: string): boolean;
    getPaths(): string[];
    toDump(): string;
    branchName: string;
    list: Def[];
    indexCommit: DefCommit;
    toString(): string;
}
export = DefIndex;
