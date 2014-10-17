/// <reference path="../../src/_ref.d.ts" />
import Joi = require('joi');
export interface Manage {
    lastSweep: Date;
}
export declare var manageSchema: Joi.ObjectSchema;
export interface Info {
    url: string;
    key: string;
    contentType: string;
    httpETag: string;
    httpModified: Date;
    cacheCreated: Date;
    cacheUpdated: Date;
    contentChecksum: string;
}
export declare var infoSchema: Joi.ObjectSchema;
export declare var sha1Schema: Joi.StringSchema;
export declare var objectSchema: Joi.ObjectSchema;
