/// <reference path="../../src/_ref.d.ts" />
declare class Request {
    key: string;
    locked: boolean;
    url: string;
    headers: any;
    localMaxAge: number;
    httpInterval: number;
    forceRefresh: boolean;
    static lockProps: string[];
    static keyHeaders: string[];
    constructor(url: string, headers?: Object);
    lock(): Request;
}
export = Request;
