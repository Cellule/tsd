/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Query = require('../select/Query');
import Selection = require('../select/Selection');
import Options = require('../Options');
import Core = require('./Core');
import CoreModule = require('./CoreModule');
declare class SelectorQuery extends CoreModule {
    constructor(core: Core);
    select(query: Query, options: Options): Promise<Selection>;
}
export = SelectorQuery;
