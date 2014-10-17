/// <reference path="../../../src/git/_ref.d.ts" />
declare class GitCommitUser {
    name: string;
    email: string;
    date: Date;
    toString(): string;
    static fromJSON(json: any): GitCommitUser;
}
export = GitCommitUser;
