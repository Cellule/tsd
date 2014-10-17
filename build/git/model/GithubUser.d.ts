/// <reference path="../../../src/git/_ref.d.ts" />
declare class GithubUser {
    id: number;
    login: string;
    avatar_url: string;
    toString(): string;
    static fromJSON(json: any): GithubUser;
}
export = GithubUser;
