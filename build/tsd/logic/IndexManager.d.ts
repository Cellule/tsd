/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
import Def = require('../data/Def');
import DefVersion = require('../data/DefVersion');
import DefCommit = require('../data/DefCommit');
import DefIndex = require('../data/DefIndex');
declare class IndexManager extends CoreModule {
    private _promise;
    constructor(core: Core);
    getIndex(): Promise<DefIndex>;
    procureDef(path: string): Promise<Def>;
    procureFile(path: string, commitSha: string): Promise<DefVersion>;
    procureCommit(commitSha: string): Promise<DefCommit>;
    findFile(path: string, commitShaFragment: string): Promise<DefVersion>;
}
export = IndexManager;
