/// <reference path="../../src/_ref.d.ts" />
import StyledOut = require('../xm/lib/StyledOut');
import Expose = require('./Expose');
declare class Formatter {
    output: StyledOut;
    expose: Expose;
    constructor(expose: Expose, output?: StyledOut);
    printCommands(): void;
}
export = Formatter;
