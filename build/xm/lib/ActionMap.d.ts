/// <reference path="../../../src/xm/_ref.d.ts" />
import Promise = require('bluebird');
import collection = require('../collection');
declare class ActionMap<T> extends collection.Hash<T> {
    constructor(data?: collection.Dict<T>);
    run<U>(id: string, call: (value: T) => U, optional?: boolean): Promise<U>;
    runSerial<U>(queue: string[], call: (value: T) => U, optional?: boolean): Promise<U[]>;
}
export = ActionMap;
