/// <reference path="../../../src/tsd/_ref.d.ts" />
import Expose = require('../../expose/Expose');
import CLIPrinter = require('./CLIPrinter');
import StyleMap = require('./StyleMap');
declare function addCommon(expose: Expose, print: CLIPrinter, style: StyleMap): void;
export = addCommon;
