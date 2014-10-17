/// <reference path="../../../src/tsd/_ref.d.ts" />
import StyledOut = require('../../xm/lib/StyledOut');
import ExposeContext = require('../../expose/Context');
declare class StyleMap {
    private _outputs;
    private _styleMap;
    constructor(output: StyledOut);
    addOutput(output: StyledOut): void;
    getStyles(): string[];
    useStyle(color: string, ctx: ExposeContext): void;
}
export = StyleMap;
