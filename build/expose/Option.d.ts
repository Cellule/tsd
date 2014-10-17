/// <reference path="../../src/_ref.d.ts" />
import OptionApply = require('./ContextValueHandle');
declare class Option {
    name: string;
    description: string;
    short: string;
    type: string;
    placeholder: string;
    default: any;
    command: string;
    global: boolean;
    hidden: boolean;
    optional: boolean;
    enum: any[];
    note: string[];
    apply: OptionApply;
}
export = Option;
