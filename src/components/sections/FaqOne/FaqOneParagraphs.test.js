import { render } from "@testing-library/react";
import React from "react";
import FaqOneParagraphs from "./FaqOneParagraphs";

describe("FaqOneParagraphs Component", function () {
  it("Check if data is not passed", function () {
    render(<FaqOneParagraphs />);
  });
});
