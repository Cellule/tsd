/// <reference path="../../../src/tsd/_ref.d.ts" />
import DateComp = require('../util/DateComp');
import DefVersion = require('../data/DefVersion');
declare class DateMatcher {
    comparators: DateComp[];
    constructor(pattern?: string);
    filter(list: DefVersion[]): DefVersion[];
    best(list: DefVersion[]): DefVersion;
    latest(list: DefVersion[]): DefVersion;
    extractSelector(pattern: string): void;
    private getFilterFunc();
}
export = DateMatcher;
