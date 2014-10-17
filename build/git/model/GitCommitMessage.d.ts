/// <reference path="../../../src/git/_ref.d.ts" />
declare class GitCommitMessage {
    text: string;
    subject: string;
    body: string;
    constructor(text?: string);
    parse(text: string): void;
    toString(): string;
}
export = GitCommitMessage;
