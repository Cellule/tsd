/// <reference path="../../../src/tsd/_ref.d.ts" />
import Def = require('../data/Def');
declare class NameMatcher {
    pattern: string;
    constructor(pattern: string);
    filter(list: Def[]): Def[];
    toString(): string;
    private getFilterFunc();
}
export = NameMatcher;
