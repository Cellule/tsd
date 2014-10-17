/// <reference path="../../src/_ref.d.ts" />
import Promise = require('bluebird');
import collection = require('../xm/collection');
import StyledOut = require('../xm/lib/StyledOut');
import Command = require('./Command');
import Group = require('./Group');
import Option = require('./Option');
import Context = require('./Context');
import Result = require('./Result');
import ResultHandle = require('./ResultHandle');
import ContextHandle = require('./ContextHandle');
import Formatter = require('./Formatter');
declare class Expose {
    commands: collection.Hash<Command>;
    options: collection.Hash<Option>;
    groups: collection.Hash<Group>;
    mainGroup: Group;
    private _isInit;
    private _index;
    reporter: Formatter;
    before: ContextHandle;
    after: ContextHandle;
    end: ResultHandle;
    constructor(output?: StyledOut);
    defineOption(build: (opt: Option) => void): void;
    defineCommand(build: (cmd: Command) => void): void;
    defineGroup(build: (group: Group) => void): void;
    applyOptions(argv: any): Context;
    init(): void;
    validateOptions(opts: string[]): void;
    exit(code: number): void;
    executeArgv(argvRaw: any, alt?: string, exitAfter?: boolean): void;
    executeRaw(argvRaw: any, alt?: string): Promise<Result>;
    executeCommand(name: string, ctx?: Context): Promise<Result>;
}
export = Expose;
