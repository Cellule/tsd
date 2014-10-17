/// <reference path="../../../src/tsd/_ref.d.ts" />
declare class DateComp {
    operator: string;
    comparator: (date1: Date, date2: Date) => boolean;
    date: Date;
    satisfies(date: Date): boolean;
}
export = DateComp;
