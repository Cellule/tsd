/// <reference path="../../../src/tsd/_ref.d.ts" />
import AuthorInfo = require('../support/AuthorInfo');
declare class DefInfo {
    name: string;
    version: string;
    projects: string[];
    authors: AuthorInfo[];
    externals: string[];
    partial: boolean;
    constructor();
    resetFields(): void;
    resetAll(): void;
    toString(): string;
    isValid(): boolean;
}
export = DefInfo;
