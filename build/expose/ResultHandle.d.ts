/// <reference path="../../src/_ref.d.ts" />
import Result = require('./Result');
interface ResultHandle {
    (res: Result): any;
}
export = ResultHandle;
