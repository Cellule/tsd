/// <reference path="../../src/_ref.d.ts" />
import Hook = require('./ContextHandle');
declare class Command {
    name: string;
    execute: Hook;
    index: number;
    label: string;
    hidden: boolean;
    options: string[];
    variadic: string[];
    groups: string[];
    examples: string[][];
    note: string[];
    internal: boolean;
}
export = Command;
