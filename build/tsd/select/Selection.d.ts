/// <reference path="../../../src/tsd/_ref.d.ts" />
import Def = require('../data/Def');
import DefVersion = require('../data/DefVersion');
import Query = require('./Query');
declare class Selection {
    query: Query;
    definitions: Def[];
    selection: DefVersion[];
    error: any;
    constructor(query?: Query);
}
export = Selection;
