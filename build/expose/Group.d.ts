/// <reference path="../../src/_ref.d.ts" />
import CommandSorter = require('./CommandSorter');
declare class Group {
    name: string;
    label: string;
    index: number;
    sorter: CommandSorter;
    options: string[];
    constructor();
}
export = Group;
