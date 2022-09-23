const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testMatch: ['<rootDir>/test/**/*?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/test/components',
    '<rootDir>/test/integration',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: ['.fake.ts'],
};
