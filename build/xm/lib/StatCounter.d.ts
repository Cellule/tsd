/// <reference path="../../../src/xm/_ref.d.ts" />
declare class StatCounter {
    stats: {
        [x: string]: number;
    };
    constructor();
    count(id: string, label?: string): number;
    get(id: string): number;
    has(id: string): boolean;
    zero(): void;
    total(): number;
    counterNames(): string[];
    hasAllZero(): boolean;
    clear(): void;
    getReport(label?: string): string;
    getObject(): any;
}
export = StatCounter;
