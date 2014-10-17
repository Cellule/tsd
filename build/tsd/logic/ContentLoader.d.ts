/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Def = require('../data/Def');
import DefBlob = require('../data/DefBlob');
import DefVersion = require('../data/DefVersion');
import DefCommit = require('../data/DefCommit');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
declare class ContentLoader extends CoreModule {
    private cache;
    constructor(core: Core);
    loadCommitMetaData(commit: DefCommit): Promise<DefCommit>;
    loadContent(file: DefVersion, tryHead?: boolean): Promise<DefBlob>;
    loadContentBulk(list: DefVersion[]): Promise<DefBlob[]>;
    loadHistory(def: Def): Promise<Def>;
    loadHistoryBulk(list: Def[]): Promise<Def[]>;
}
export = ContentLoader;
