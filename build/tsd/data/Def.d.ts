/// <reference path="../../../src/tsd/_ref.d.ts" />
import DefVersion = require('./DefVersion');
declare class Def {
    path: string;
    project: string;
    name: string;
    semver: string;
    label: string;
    isLegacy: boolean;
    isMain: boolean;
    head: DefVersion;
    history: DefVersion[];
    releases: Def[];
    constructor(path: string);
    toString(): string;
    pathTerm: string;
    nameTerm: string;
    static isDefPath(path: string): boolean;
    static getFrom(path: string): Def;
}
export = Def;
