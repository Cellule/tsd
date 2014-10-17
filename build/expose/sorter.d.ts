/// <reference path="../../src/_ref.d.ts" />
import Command = require('./Command');
import Option = require('./Option');
import Group = require('./Group');
export declare function sortCommandIndex(one: Command, two: Command): number;
export declare function sortHasElem(one: any[], two: any[], elem: any): number;
export declare function sortCommand(one: Command, two: Command): number;
export declare function sortGroup(one: Group, two: Group): number;
export declare function sortOption(one: Option, two: Option): number;
