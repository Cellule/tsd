/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import Bundle = require('../support/Bundle');
import BundleChange = require('../support/BundleChange');
declare class BundleManager {
    typingsDir: string;
    constructor(typingsDir: string);
    addToBundle(target: string, refs: string[], save: boolean): Promise<BundleChange>;
    readBundle(target: string, optional: boolean): Promise<Bundle>;
    cleanupBundle(target: string, save: boolean): Promise<BundleChange>;
    updateBundle(target: string, save: boolean): Promise<BundleChange>;
    saveBundle(bundle: Bundle): Promise<void>;
    saveEmptyBundle(target: string): Promise<void>;
}
export = BundleManager;
