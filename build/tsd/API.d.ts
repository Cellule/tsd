/// <reference path="../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Context = require('./context/Context');
import DefVersion = require('./data/DefVersion');
import Query = require('./select/Query');
import Selection = require('./select/Selection');
import InstallResult = require('./logic/InstallResult');
import GitRateInfo = require('../git/model/GithubRateInfo');
import Options = require('./Options');
import Core = require('./logic/Core');
import PackageDefinition = require('./support/PackageDefinition');
import BundleChange = require('./support/BundleChange');
declare class API {
    context: Context;
    core: Core;
    constructor(context: Context);
    initConfig(overwrite: boolean): Promise<string[]>;
    readConfig(optional: boolean): Promise<void>;
    saveConfig(): Promise<string>;
    select(query: Query, options?: Options): Promise<Selection>;
    install(selection: Selection, options?: Options): Promise<InstallResult>;
    private saveBundles(files, options);
    reinstall(options?: Options): Promise<InstallResult>;
    update(options?: Options, version?: string): Promise<InstallResult>;
    link(baseDir: string): Promise<PackageDefinition[]>;
    addToBundle(target: string, refs: string[], save: boolean): Promise<BundleChange>;
    cleanupBundle(target: string, save: boolean): Promise<BundleChange>;
    updateBundle(target: string, save: boolean): Promise<BundleChange>;
    getRateInfo(): Promise<GitRateInfo>;
    compare(query: Query): Promise<void>;
    browse(list: DefVersion[]): Promise<string[]>;
    visit(list: DefVersion[]): Promise<string[]>;
    purge(raw: boolean, api: boolean): Promise<void>;
}
export = API;
