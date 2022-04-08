import React from "react";
import ReviewTab from "./ReviewTab";
import { renderWithContext } from "../../test/renderWithContext";

describe("ReviewTab Component", function () {
  it("Check render", function () {
    renderWithContext(<ReviewTab />);
  });
});
