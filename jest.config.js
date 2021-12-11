// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
    preset: "jest-expo",
    transform: {
      "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
      "\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ],
    "modulePaths": [
      "<rootDir>"
    ],
    verbose: true,
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
    collectCoverage: true,
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/*.d.ts',
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.setup.js"
    ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.expo/'],
    globals: {
      "ts-jest": {
        isolatedModules: true
      }
    },
  };
  
  module.exports = config;
  