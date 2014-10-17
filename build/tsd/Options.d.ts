/// <reference path="../../src/tsd/_ref.d.ts" />
declare class Options {
    minMatches: number;
    maxMatches: number;
    limitApi: number;
    resolveDependencies: boolean;
    overwriteFiles: boolean;
    saveToConfig: boolean;
    addToBundles: string[];
    static fromJSON(json: Object): Options;
    static main: any;
}
export = Options;
