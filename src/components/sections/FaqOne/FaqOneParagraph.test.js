import { render } from "@testing-library/react";
import React from "react";
import FaqOneParagraph from "./FaqOneParagraph";

describe("FaqOneParagraph Component", function () {
  it("Check if data is not passed", function () {
    render(<FaqOneParagraph />);
  });
});
