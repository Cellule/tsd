/// <reference path="../../../src/tsd/_ref.d.ts" />
import JSONPointer = require('../../xm/lib/JSONPointer');
import PackageJSON = require('../../xm/lib/PackageJSON');
import Config = require('./Config');
import Paths = require('./Paths');
declare class Context {
    verbose: boolean;
    paths: Paths;
    config: Config;
    packageInfo: PackageJSON;
    settings: JSONPointer;
    constructor(configFile?: string, verbose?: boolean);
    stackSettings(src: string): void;
    getTypingsDir(): string;
    getInfo(details?: boolean): Object;
}
export = Context;
