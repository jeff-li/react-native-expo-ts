import React from "react";
import { render } from '@testing-library/react-native';

import Home from "./Home";

describe("<Home />", () => {
  it("should match screenshot", () => {
    const { toJSON } = render(
      <Home />
    );
    expect(toJSON()).toMatchSnapshot()
  });
});