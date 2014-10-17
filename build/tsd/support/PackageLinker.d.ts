/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import PackageDefinition = require('../support/PackageDefinition');
declare class PackageLinker {
    private baseDir;
    private managers;
    constructor();
    scanDefinitions(baseDir: string): Promise<PackageDefinition[]>;
    private scanFolder(memo, type, baseDir);
    static extractDefLinks(object: any): string[];
}
export = PackageLinker;
