/// <reference path="../../../src/tsd/_ref.d.ts" />
import DefVersion = require('./DefVersion');
declare class DefBlob {
    file: DefVersion;
    content: Buffer;
    constructor(file: DefVersion, buffer: Buffer);
}
export = DefBlob;
