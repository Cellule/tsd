/// <reference path="../../../src/tsd/_ref.d.ts" />
import GithubUser = require('../../git/model/GithubUser');
import GitCommitUser = require('../../git/model/GitCommitUser');
import GitCommitMessage = require('../../git/model/GitCommitMessage');
declare class DefCommit {
    commitSha: string;
    hasMeta: boolean;
    message: GitCommitMessage;
    hubAuthor: GithubUser;
    hubCommitter: GithubUser;
    gitAuthor: GitCommitUser;
    gitCommitter: GitCommitUser;
    constructor(commitSha: string);
    parseJSON(commit: any): void;
    hasMetaData(): boolean;
    toString(): string;
    changeDate: Date;
    commitShort: string;
}
export = DefCommit;
