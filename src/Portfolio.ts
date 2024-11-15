import IStock from "@src/interfaces/IStock";

export default class Portfolio {
  private stocks: IStock[];

  constructor(stocks: IStock[]) {
    this.stocks = stocks;
  };

  /**
   * @param { Object } dates - dates of the queried range
   * @param { Date } dates.begin - the initial queried day
   * @param { Date } dates.end - the final queried day
   * @returns { { profit: number; profitRate: number; annualizedReturn: number; } | undefined } Promise with
   * portfolio profit, profit rate and annualized return beetween the period or undefined 
   * if there is not a share value for at least one of the queried periods in the stock list.
   */
  public async profit({ begin, end }: { begin: Date, end: Date }): Promise<{
    profit: number;
    profitRate: number;
    annualizedReturn: number;
  } | undefined> {

    if (begin > end) return undefined;

    const stocksMargins = await Promise.all(this.stocks.map(async (stock) => {
      const [beginShareValue, endShareValue] = await Promise
        .all([stock.price({ date: begin }), stock.price({ date: end })]);

      if (beginShareValue !== undefined && endShareValue !== undefined) {
        return {
          beginShareValue,
          endShareValue,
        }
      }
      return undefined;
    }));

    if (stocksMargins.includes(undefined))
      return undefined;

    const {
      beginTotalValue,
      endTotalValue,
    } = (stocksMargins as ({
      beginShareValue: number;
      endShareValue: number;
    })[]).reduce(({ beginTotalValue, endTotalValue }, { beginShareValue, endShareValue }) => ({
      beginTotalValue: beginTotalValue + beginShareValue,
      endTotalValue: endTotalValue + endShareValue
    }), { beginTotalValue: 0, endTotalValue: 0 });

    return {
      profit: (endTotalValue - beginTotalValue),
      profitRate: (endTotalValue - beginTotalValue) / beginTotalValue,
      annualizedReturn: Math.pow(endTotalValue / beginTotalValue, (Number(end) - Number(begin)) / (365 * 1000 * 60 * 60 * 24)) - 1,
    };
  };
};