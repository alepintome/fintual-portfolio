import IShareValuesAdapter, { IShareValuesAdapterParams } from "../interfaces/IShareValuesAdapter";
import { dateToString } from "@src/utils/dates";

export default class JSONReaderShareValuesAdapter implements IShareValuesAdapter {
  private data: Promise<{
    default: {
      date: string;
      value: number;
    }[]
  }>;

  constructor(path: string) {
    this.data = import(path).then(data => data);
  };

  public async getValue({ date }: IShareValuesAdapterParams): Promise<number | undefined> {
    const shareValues = await this.data;

    const { value } = shareValues.default
      .find(({ date: jsonDate }) => jsonDate === dateToString({ date }))
      || { value: undefined };

    return value;
  };
};