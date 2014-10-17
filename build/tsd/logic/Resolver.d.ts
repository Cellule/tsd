/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import DefVersion = require('../data/DefVersion');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
declare class Resolver extends CoreModule {
    private _active;
    constructor(core: Core);
    resolveBulk(list: DefVersion[]): Promise<DefVersion[]>;
    resolveDeps(file: DefVersion): Promise<DefVersion>;
    private applyResolution(index, file, content);
    private extractPaths(file, content);
}
export = Resolver;
