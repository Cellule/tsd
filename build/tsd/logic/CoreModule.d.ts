/// <reference path="../../../src/tsd/_ref.d.ts" />
import Core = require('./Core');
declare class CoreModule {
    core: Core;
    label: string;
    constructor(core: Core, label: string);
}
export = CoreModule;
