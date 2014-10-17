/// <reference path="../../../src/tsd/_ref.d.ts" />
import NameMatcher = require('./NameMatcher');
import VersionMatcher = require('./VersionMatcher');
import DateMatcher = require('./DateMatcher');
import InfoMatcher = require('./InfoMatcher');
import CommitMatcher = require('./CommitMatcher');
declare class Query {
    patterns: NameMatcher[];
    versionMatcher: VersionMatcher;
    dateMatcher: DateMatcher;
    infoMatcher: InfoMatcher;
    commitMatcher: CommitMatcher;
    parseInfo: boolean;
    loadHistory: boolean;
    constructor(pattern?: string);
    addNamePattern(pattern: string): void;
    setVersionRange(range: string): void;
    requiresHistory: boolean;
    toString(): string;
}
export = Query;
