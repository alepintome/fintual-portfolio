import ShareValuesAdapter from "@src/interfaces/IShareValuesAdapter";
import IStock, { IStockParams } from "@src/interfaces/IStock";

export default class Stock implements IStock {
  private shareValuesAdapter: ShareValuesAdapter;
  /**
  * initialize a stock with the given share values
  * @param shareValues list of date and value share values
  */
  constructor(shareValueAdapter: ShareValuesAdapter) {
    this.shareValuesAdapter = shareValueAdapter;
  }

  /**
  * get the value for a given date
  * @param date the date we want to know the price value
  * @returns promise with the price value for the given date or undefined if it does not exists.
  */
  public async price({ date }: IStockParams): Promise<number | undefined> {
    return await this.shareValuesAdapter.getValue({ date });
  }
}