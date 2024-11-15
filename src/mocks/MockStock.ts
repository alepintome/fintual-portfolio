import IStock, { IStockParams } from "@src/interfaces/IStock";
import { dateToString } from "@src/utils/dates";

export default class MockStock implements IStock {
  shareValues: Record<string, number>;
  
  constructor(shareValues: Record<string, number>) {
    this.shareValues = shareValues;
  };

  async price({ date }: IStockParams): Promise<number | undefined> {
    return Promise.resolve(this.shareValues[dateToString({ date })]);
  };
};