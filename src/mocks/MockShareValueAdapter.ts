import IShareValuesAdapter from "@src/interfaces/IShareValuesAdapter";
import { dateToString } from "@src/utils/dates";

export default class MockShareValueAdapter implements IShareValuesAdapter {
  shareValues: Record<string, number>;

  constructor(shareValues: Record<string, number>) {
    this.shareValues = shareValues;
  }

  getValue({date}: { date: Date }): Promise<number | undefined> {
    return Promise.resolve(this.shareValues[dateToString({ date })]);
  }
}
