/// <reference path="../../../src/tsd/_ref.d.ts" />
import collection = require('../../xm/collection');
import Options = require('../Options');
import DefVersion = require('../data/DefVersion');
declare class InstallResult {
    options: Options;
    written: collection.Hash<DefVersion>;
    removed: collection.Hash<DefVersion>;
    skipped: collection.Hash<DefVersion>;
    constructor(options: Options);
}
export = InstallResult;
