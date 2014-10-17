/// <reference path="../../../src/tsd/_ref.d.ts" />
import Bundle = require('./Bundle');
declare class BundleChange {
    bundle: Bundle;
    private _added;
    private _removed;
    constructor(bundle: Bundle);
    add(target: string): void;
    remove(target: string): void;
    someRemoved(): boolean;
    someAdded(): boolean;
    someChanged(): boolean;
    getRemoved(relative: boolean, canonical?: boolean): string[];
    getAdded(relative: boolean, canonical?: boolean): string[];
}
export = BundleChange;
