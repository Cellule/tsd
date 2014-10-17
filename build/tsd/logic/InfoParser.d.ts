/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
import DefVersion = require('../data/DefVersion');
declare class InfoParser extends CoreModule {
    constructor(core: Core);
    parseDefInfo(file: DefVersion): Promise<DefVersion>;
    parseDefInfoBulk(list: DefVersion[]): Promise<DefVersion[]>;
}
export = InfoParser;
