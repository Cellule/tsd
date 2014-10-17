/// <reference path="../../../src/tsd/_ref.d.ts" />
import StyledOut = require('../../xm/lib/StyledOut');
import GithubRateInfo = require('../../git/model/GithubRateInfo');
import DefVersion = require('../data/DefVersion');
import InstallResult = require('../logic/InstallResult');
declare class CLIPrinter {
    output: StyledOut;
    indent: number;
    skipProgress: RegExp[];
    private _remainingPrev;
    constructor(output: StyledOut, indent?: number);
    fmtSortKey(key: string): string;
    fmtGitURI(str: string): string;
    file(file: DefVersion, sep?: string): StyledOut;
    fileEnd(file: DefVersion, sep?: string): StyledOut;
    fileCommit(file: DefVersion, skipNull?: boolean): StyledOut;
    fileHead(file: DefVersion): StyledOut;
    fileInfo(file: DefVersion, skipNull?: boolean): StyledOut;
    dependencies(file: DefVersion): StyledOut;
    history(file: DefVersion): StyledOut;
    installResult(result: InstallResult): StyledOut;
    rateInfo(info: GithubRateInfo, note?: boolean, force?: boolean): StyledOut;
    reportError(err: any, head?: boolean): StyledOut;
    reportProgress(obj: any): StyledOut;
}
export = CLIPrinter;
