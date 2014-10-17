/// <reference path="../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import API = require('./API');
import Options = require('./Options');
import Context = require('./context/Context');
import Query = require('./select/Query');
import Selection = require('./select/Selection');
import Expose = require('../expose/Expose');
import ExposeContext = require('../expose/Context');
export declare class Job {
    ctx: ExposeContext;
    api: API;
    context: Context;
    query: Query;
    options: Options;
}
export interface JobSelectionAction {
    (ctx: ExposeContext, job: Job, selection: Selection): Promise<any>;
}
export declare function getExpose(): Expose;
export declare function runARGV(argvRaw: any): void;
