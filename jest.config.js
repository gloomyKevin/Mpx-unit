/**
 * @file config of jest
 * @url https://jestjs.io/docs/en/configuration
 */
module.exports = {
  // rootDir: path.join(__dirname),
  moduleFileExtensions: ['js', 'ts', 'mpx'],
  moduleNameMapper: {
    // webpack的alias需要在此处理
    '^src(.*)': '<rootDir>/src/$1',
    '@mpxjs/core': '<rootDir>/node_modules/@mpxjs/core/src/index.js'
  },
  testPathIgnorePatterns: ['dist', 'node_modules'],
  testURL: 'http://test.api.com',
  setupFiles: ['<rootDir>/test/setup'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(@mpxjs))'],
  // testMatch: ['<rootDir>/src/**/__test__/**/*.test.{js,ts}'],
  snapshotSerializers: ['miniprogram-simulate/jest-snapshot-plugin']
}
