import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  rootDir: './',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    "^@shareValues/(.*)$": "<rootDir>/src/shareValues/$1",
  },
};

export default config;