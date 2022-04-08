import { render } from "@testing-library/react";
import React from "react";
import FaqOne from "./index";

describe("CtaTwo Component", function () {
  it("Check if data is not passed", function () {
    render(<FaqOne />);
  });
  it("Check if empty data", function () {
    render(<FaqOne data={{}} />);
  });
});
