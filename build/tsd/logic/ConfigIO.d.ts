/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
declare class ConfigIO extends CoreModule {
    constructor(core: Core);
    initConfig(overwrite: boolean): Promise<string>;
    readConfig(optional?: boolean): Promise<void>;
    saveConfig(target?: string): Promise<string>;
}
export = ConfigIO;
