/// <reference path="../../../src/xm/_ref.d.ts" />
import header = require('definition-header');
declare class AuthorInfo implements header.model.Person {
    name: string;
    url: string;
    email: string;
    constructor(name?: string, url?: string, email?: string);
    toString(): string;
    toJSON(): any;
}
export = AuthorInfo;
