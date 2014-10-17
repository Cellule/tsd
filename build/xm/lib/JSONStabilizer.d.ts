/// <reference path="../../../src/xm/_ref.d.ts" />
import CodeStyle = require('../lib/CodeStyle');
import collection = require('../collection');
declare class JSONStabilizer {
    depth: number;
    style: CodeStyle;
    keys: string[];
    parent: JSONStabilizer;
    children: collection.Hash<JSONStabilizer>;
    constructor(depth?: number, style?: CodeStyle);
    root: JSONStabilizer;
    parseString(jsonString: string): Object;
    sniff(jsonString: string): void;
    snapshot(object: Object): void;
    getStablized(json: Object): Object;
    toJSONString(json: Object, assumeStable?: boolean): string;
}
export = JSONStabilizer;
