/// <reference path="../../src/_ref.d.ts" />
import StyledOut = require('../xm/lib/StyledOut');
import Expose = require('./Expose');
import Command = require('./Command');
declare class Context {
    expose: Expose;
    command: Command;
    argv: any;
    out: StyledOut;
    constructor(expose: Expose, argv: any, command?: Command);
    hasOpt(name: string, strict?: boolean): any;
    getOptRaw(name: string, alt?: any): any;
    getOpt(name: string, alt?: any): any;
    getOptAs(name: string, type: string, alt?: any): any;
    getOptNames(strict?: boolean): string[];
    getOptEnum(name: string, alt?: any): any;
    getDefault(name: string, alt?: any): any;
    isDefault(name: string): boolean;
    getArgAt(index: number, alt?: any): any;
    getArgAtAs(index: number, type: string, alt?: any): any;
    getArgsAs(type: string): any[];
    shiftArg(alt?: string): any;
    shiftArgAs(type: string, alt?: string): any;
    getArgs(alt?: string): any;
    numArgs: number;
}
export = Context;
