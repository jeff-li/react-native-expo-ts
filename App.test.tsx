import React from "react";
import { mocked } from 'ts-jest/utils';
import { render } from '@testing-library/react-native';
import useCachedResources from './hooks/useCachedResources';

import App from "./App";

const mockedCachedResources = mocked(useCachedResources);
jest.mock('./hooks/useCachedResources', () => {
  return jest.fn(() => true)
})

jest.mock('./hooks/useColorScheme', () => {
  return jest.fn(() => 'dark')
})

describe("<App />", () => {
  it("should match screenshot if loading is complete", () => {
    mockedCachedResources.mockReturnValue(true)
    const { toJSON } = render(
      <App />
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it("should return undefined if app is still loading", () => {
    mockedCachedResources.mockReturnValue(false)
    const { toJSON } = render(
      <App />
    );
    expect(toJSON()).toBe(null);
  });
});