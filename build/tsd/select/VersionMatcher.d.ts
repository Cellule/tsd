/// <reference path="../../../src/tsd/_ref.d.ts" />
import Def = require('../data/Def');
declare class VersionMatcher {
    static latest: string;
    static all: string;
    range: string;
    constructor(range?: string);
    filter(list: Def[]): Def[];
    private getLatest(list);
}
export = VersionMatcher;
