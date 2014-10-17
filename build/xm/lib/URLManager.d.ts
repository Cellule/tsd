/// <reference path="../../../src/xm/_ref.d.ts" />
import uriTemplates = require('uri-templates');
declare class URLManager {
    private _templates;
    private _vars;
    constructor(common?: any);
    addTemplate(id: string, url: string): void;
    setVar(id: string, value: any): void;
    getVar(id: string): string;
    setVars(map: any): void;
    getTemplate(id: string): uriTemplates.URITemplate;
    getURL(id: string, vars?: any): string;
}
export = URLManager;
