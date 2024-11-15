export interface IShareValuesAdapterParams {
  date: Date;
};

export default interface IShareValuesAdapter {
  getValue(params: IShareValuesAdapterParams): Promise<number | undefined>;
};
