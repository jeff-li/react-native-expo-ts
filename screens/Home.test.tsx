import React from "react";
import { render } from '@testing-library/react-native';

import Home from "./Home";

describe("<Home />", () => {
  it("should match screenshot", () => {
    const { toJSON, getAllByText } = render(
      <Home />
    );
    expect(toJSON()).toMatchSnapshot()
    const bananaElements = getAllByText('Home Screen');
    expect(bananaElements).toHaveLength(1);
  });
});