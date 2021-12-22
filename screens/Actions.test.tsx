import React from "react";
import { render } from '@testing-library/react-native';

import Actions from "./Actions";

describe("<Actions />", () => {
  it("should match screenshot", () => {
    const { toJSON, getAllByText } = render(
      <Actions />
    );
    expect(toJSON()).toMatchSnapshot()
    const bananaElements = getAllByText('Actions Screen');
    expect(bananaElements).toHaveLength(1);
  });
});