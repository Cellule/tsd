/// <reference path="../../../src/tsd/_ref.d.ts" />
import Promise = require('bluebird');
import StyledOut = require('../../xm/lib/StyledOut');
import Context = require('../context/Context');
export declare function runNotifier(context: Context, waitForIt?: boolean): Promise<any>;
export declare function showNotifier(output: StyledOut): Promise<void>;
