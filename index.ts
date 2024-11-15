import Portfolio from '@src/Portfolio';
import ShareValuesAdapter from '@src/adapters/JSONReaderShareValuesAdapter';
import Stock from '@src/Stock';

/** Create a simple Portfolio class that contains a collection of Stock objects and includes a Profit method. 
 * This method should accept two dates and return the portfolio’s profit between those dates. 
 * Assume that each Stock has a Price method that takes a date as input and returns the stock’s price on that date. 
 * Bonus Track: Be able to get the annualized return of the portfolio between the given dates. */

const main = async () => {
  const {
    AAPL,
    MSFT,
    NVDA,
    SPOT,
    TSLA,
    GOOG,
    SMSN,
  } = {
    AAPL: new Stock(new ShareValuesAdapter('@shareValues/AAPL.json')),
    MSFT: new Stock(new ShareValuesAdapter('@shareValues/MSFT.json')),
    NVDA: new Stock(new ShareValuesAdapter('@shareValues/NVDA.json')),
    SPOT: new Stock(new ShareValuesAdapter('@shareValues/SPOT.json')),
    TSLA: new Stock(new ShareValuesAdapter('@shareValues/TSLA.json')),
    GOOG: new Stock(new ShareValuesAdapter('@shareValues/GOOG.json')),
    SMSN: new Stock(new ShareValuesAdapter('@shareValues/SMSN.json')),
  };

  const portfolio1 = new Portfolio([AAPL, MSFT]);
  const portfolio1_copy = new Portfolio([MSFT, AAPL]);
  const portfolio2 = new Portfolio([NVDA, MSFT]);
  const portfolio3 = new Portfolio([SPOT, TSLA, MSFT]);
  const portfolio4 = new Portfolio([AAPL, NVDA, SPOT, TSLA, MSFT]);
  console.log(await portfolio1.profit({ begin: new Date(2024, 9, 1), end: new Date(2024, 10, 2) }));
  console.log(await portfolio1_copy.profit({ begin: new Date(2024, 9, 1), end: new Date(2024, 10, 2) }));
  console.log(await portfolio2.profit({ begin: new Date(2024, 10, 1), end: new Date(2024, 10, 2) }));
  console.log(await portfolio3.profit({ begin: new Date(2024, 10, 1), end: new Date(2024, 10, 2) }));
  console.log(await portfolio4.profit({ begin: new Date(2024, 10, 1), end: new Date(2024, 10, 2) }));

  const portfolio5 = new Portfolio([GOOG, SMSN]);

  console.log(await portfolio5.profit({ begin: new Date(2024, 0 ,1), end: new Date(2024, 0, 2) }));
};

main();