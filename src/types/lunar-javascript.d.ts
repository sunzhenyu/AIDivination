declare module "lunar-javascript" {
  export class Lunar {
    static fromDate(date: Date): Lunar;
    getMonth(): number;
    getDay(): number;
    getMonthInChinese(): string;
    getDayInChinese(): string;
  }
}
