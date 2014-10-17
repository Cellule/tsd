/// <reference path="../../../src/tsd/_ref.d.ts" />
import DefVersion = require('../data/DefVersion');
declare class CommitMatcher {
    commitSha: string;
    minimumShaLen: number;
    constructor(commitSha?: string);
    filter(list: DefVersion[]): DefVersion[];
    getFilterFunc(commitSha: string): (file: DefVersion) => boolean;
}
export = CommitMatcher;
