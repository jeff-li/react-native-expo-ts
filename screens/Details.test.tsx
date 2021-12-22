import React from "react";
import { render } from '@testing-library/react-native';

import Details from "./Details";

describe("<Details />", () => {
  it("should match screenshot", () => {
    const { toJSON, getAllByText } = render(
      <Details />
    );
    expect(toJSON()).toMatchSnapshot()
    const bananaElements = getAllByText('Details Screen');
    expect(bananaElements).toHaveLength(1);
  });
});