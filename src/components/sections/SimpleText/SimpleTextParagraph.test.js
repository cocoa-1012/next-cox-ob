import { render } from "@testing-library/react";
import React from "react";
import SimpleTextParagraph from "./SimpleTextParagraph";

describe("SimpleTextParagraph Component", function () {
  it("Check if data is not passed", function () {
    render(<SimpleTextParagraph />);
  });
});
