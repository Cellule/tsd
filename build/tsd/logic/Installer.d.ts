/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import collection = require('../../xm/collection');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
import Def = require('../data/Def');
import DefVersion = require('../data/DefVersion');
import InstalledDef = require('../context/InstalledDef');
declare class Installer extends CoreModule {
    constructor(core: Core);
    getInstallPath(def: Def): string;
    installFile(file: DefVersion, addToConfig?: boolean, overwrite?: boolean): Promise<string>;
    installFileBulk(list: DefVersion[], addToConfig?: boolean, overwrite?: boolean): Promise<collection.Hash<DefVersion>>;
    reinstallBulk(list: InstalledDef[], overwrite?: boolean): Promise<collection.Hash<DefVersion>>;
    useFile(file: DefVersion, overwrite: boolean): Promise<string>;
    useFileBulk(list: DefVersion[], overwrite?: boolean): Promise<collection.Hash<DefVersion>>;
}
export = Installer;
