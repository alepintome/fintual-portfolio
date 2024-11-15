export interface IStockParams {
  date: Date;
};

export default interface IStock {
  price(params: IStockParams): Promise<number | undefined>;
};
