import { render } from "@testing-library/react";
import React from "react";
import CtaTwo from "./index";

describe("CtaTwo Component", function () {
  it("Check if data is not passed", function () {
    render(<CtaTwo />);
  });
  it("Check if empty data", function () {
    render(<CtaTwo data={{}} />);
  });
});
