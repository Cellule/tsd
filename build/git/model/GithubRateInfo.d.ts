/// <reference path="../../../src/git/_ref.d.ts" />
declare class GithubRateInfo {
    limit: number;
    remaining: number;
    reset: number;
    resetAt: string;
    lastUpdate: number;
    constructor(map?: any);
    readFromRes(map: any): void;
    toString(): string;
    getResetString(): string;
    getTimeToReset(): number;
    getMinutesToReset(): number;
    isBlocked(): boolean;
    isLimited(): boolean;
    hasRemaining(): boolean;
}
export = GithubRateInfo;
