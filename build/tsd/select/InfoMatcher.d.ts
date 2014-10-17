/// <reference path="../../../src/tsd/_ref.d.ts" />
import DefVersion = require('../data/DefVersion');
declare class InfoMatcher {
    filter(list: DefVersion[]): DefVersion[];
}
export = InfoMatcher;
