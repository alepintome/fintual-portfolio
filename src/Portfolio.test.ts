import Portfolio from "@src/Portfolio";
import MockStock from "@src/mocks/MockStock";

describe('Portfolio testing', () => {
  test('profit exists in range and is calculated in right way', async () => {
    const portfolio = new Portfolio([
      new MockStock({
        '01-02-2023': 300,
        '01-03-2023': 290,
      }),
      new MockStock({
        '01-02-2023': 300,
        '01-03-2023': 400,
      }),
    ]);
    const profit = await portfolio.profit({
      begin: new Date(2023, 1, 1),
      end: new Date(2023, 2, 1),
    });
    expect(profit).not.toBeUndefined();
    expect(profit?.profit).toBe((400 + 290) - (300 + 300));
    expect(profit?.profitRate).toBe(((400 + 290) - (300 + 300)) / (300 + 300));
    expect(profit?.annualizedReturn).toBe(Math.pow((400 + 290) / (300 + 300), 28 / 365) - 1);
  });
  test('order does not matter', async () => {
    const stockA = new MockStock({
      '01-02-2023': 300,
      '01-03-2023': 290,
    });
    const stockB = new MockStock({
      '01-02-2023': 300,
      '01-03-2023': 400,
    });

    const portfolio1 = new Portfolio([stockA, stockB]);

    const portfolio2 = new Portfolio([stockB, stockA]);

    const profit1 = await portfolio1.profit({
      begin: new Date(2023, 1, 1),
      end: new Date(2023, 2, 1),
    });
    const profit2 = await portfolio2.profit({
      begin: new Date(2023, 1, 1),
      end: new Date(2023, 2, 1),
    });
    expect(profit1).not.toBeUndefined();
    expect(profit2).not.toBeUndefined();
    expect(profit1?.profit).toBe(profit2?.profit);
    expect(profit1?.profitRate).toBe(profit2?.profitRate);
    expect(profit1?.annualizedReturn).toBe(profit2?.annualizedReturn);
  });
});