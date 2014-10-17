/// <reference path="../../../src/tsd/_ref.d.ts" />
import Def = require('./Def');
import DefCommit = require('./DefCommit');
import DefInfo = require('./DefInfo');
declare class DefVersion {
    def: Def;
    commit: DefCommit;
    private _blobSha;
    dependencies: Def[];
    solved: boolean;
    info: DefInfo;
    constructor(def: Def, commit: DefCommit);
    setBlob(sha: string): void;
    key: string;
    blobSha: string;
    blobShaShort: string;
    toString(): string;
}
export = DefVersion;
