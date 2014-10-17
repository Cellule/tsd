/// <reference path="../../../src/tsd/_ref.d.ts" />
import StyledOut = require('../../xm/lib/StyledOut');
import DefVersion = require('../data/DefVersion');
declare class TablePrinter {
    output: StyledOut;
    indent: number;
    constructor(output: StyledOut, indent?: number);
    outTweakURI(uri: string, out: any): void;
    fileTable(files: DefVersion[]): void;
}
export = TablePrinter;
