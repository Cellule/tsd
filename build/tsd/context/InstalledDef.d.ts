/// <reference path="../../../src/tsd/_ref.d.ts" />
import DefVersion = require('../data/DefVersion');
declare class InstalledDef {
    path: string;
    commitSha: string;
    constructor(path: string);
    update(file: DefVersion): void;
    toString(): string;
}
export = InstalledDef;
