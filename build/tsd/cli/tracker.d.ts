/// <reference path="../../../src/tsd/_ref.d.ts" />
import ua = require('universal-analytics');
import Query = require('../select/Query');
import InstallResult = require('../logic/InstallResult');
import Context = require('../context/Context');
declare class Tracker {
    private _enabled;
    private _debug;
    private _accountID;
    private _client;
    private _context;
    private _minor;
    private _page;
    private _eventQueue;
    private _workers;
    private _workersMax;
    private _workersGrow;
    constructor();
    init(context: Context, enabled?: boolean, debug?: boolean): void;
    getPage(parts?: string[]): string;
    pageview(...parts: string[]): void;
    query(query: Query): void;
    install(action: string, result: InstallResult): void;
    browser(url: string): void;
    visit(url: string): void;
    link(packg: string): void;
    error(err: any): void;
    sendEvent(event?: any): void;
    private doEvent(event);
    getTimer(variable: string, label?: string): (err?: any) => void;
    client: ua.Client;
    enabled: boolean;
}
export = Tracker;
