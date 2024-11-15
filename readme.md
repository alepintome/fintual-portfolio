# Fintual Portfolio

This project involves building a simple portfolio management application in Node.js with TypeScript. It includes a `Portfolio` class that manages a collection of `Stock` objects and provides methods to calculate profits and returns over specific date ranges.

## Problem Statement

Create a simple `Portfolio` class that contains a collection of `Stock` objects and includes a `Profit` method.

- **Profit Method**: This method should accept two dates and return the portfolio’s profit between those dates.
- **Stock Price**: Assume each `Stock` has a `Price` method that takes a date as input and returns the stock’s price on that date.
- **Bonus Track**: Implement a method to calculate the annualized return of the portfolio between the given dates.

## Assumptions
1. Both the `Price` method of `Stock` and the `Profit` method of `Portfolio` are asynchronous. This is because, in a real-world scenario, it is likely that `Price` would need to query an API or retrieve information from a database, making asynchronous methods more efficient for resource management and response times.

2. The formula for calculating profit is given by the sum of the value of each stock at the end date (`end`) minus the sum of the value of each stock at the start date (`begin`). $$Profit = \sum_{i=1}^{n} Stock_{i}.price(end) - \sum_{i=1}^{n} Stock_{i}.price(begin)$$

3. The formula for calculating the annualized return is given by the final total value minus the initial total value, raised to the power of the number of investment days divided by 365 (days in a year), and then subtracting 1:$$Annualized\ Return = \left( \frac{\sum_{i=1}^{n} Stock_{i}.price(end)}{\sum_{i=1}^{n} Stock_{i}.price(begin)} \right)^{\frac{days\ from\ begin\ to\ end}{365}} - 1$$


## Project Structure

```plaintext
fintual-portfolio/
├── shareValues/               # JSON files containing share values for different stocks
│   ├── AAPL.json
│   ├── GOOG.json
│   ├── MSFT.json
│   ├── NVDA.json
│   ├── SMSN.json
│   ├── SPOT.json
│   └── TSLA.json
├── src/                       # Source code
│   ├── adapters/              # Adapters to handle different data sources
│   │   └── JSONReaderShareValuesAdapter.ts
│   ├── interfaces/            # TypeScript interfaces
│   │   ├── IShareValuesAdapter.ts
│   │   └── IStock.ts
│   ├── mocks/                 # Mock data and adapters for testing
│   │   ├── MockShareValueAdapter.ts
│   │   └── MockStock.ts
│   ├── utils/                 # Utility functions
│   │   └── dates.ts
│   ├── Portfolio.test.ts      # Unit tests for Portfolio
│   ├── Portfolio.ts           # Portfolio class
│   └── Stock.ts               # Stock class
├── eslint.config.mjs          # ESLint configuration
├── index.ts                   # Main entry point
├── jest.config.ts             # Jest configuration
├── package.json               # Project metadata and dependencies
├── tsconfig.json              # TypeScript configuration
└── shareValue.d.ts            # Type declarations for share values
```

## Prerequisites

Ensure you have the following installed:

- **Node.js** v14 or later
- **npm** package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alepintome/fintual-portfolio.git
   cd fintual-portfolio
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Scripts

- **` test`**: Run unit tests using Jest.
- **`npm start`**: Start the application using `ts-node`.
- **`npm run lint`**: Check for code style issues using ESLint.

## Running the Project

To start the application in development mode:

```bash
npm start
```

## Running Tests

This project uses Jest for unit testing. To run all tests:

```bash
npm test
```

## Code Consistency

The project is set up with ESLint to maintain code consistency. Run the following command to check for linting errors:

```bash
npm run lint
```

## TypeScript

The project is built in TypeScript, providing type safety and improved developer experience. The configuration for TypeScript is in the `tsconfig.json` file.


