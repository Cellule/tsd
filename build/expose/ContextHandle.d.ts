/// <reference path="../../src/_ref.d.ts" />
import Context = require('./Context');
interface ContextHandle {
    (ctx: Context): any;
}
export = ContextHandle;
